import { createContext, useContext, useState } from "react";
import Children from "@/interfaces/children";
import { deleteRealEstateSubs, getREByProfile } from "@/services/realEstate";
import {
  useApolloClient,
  useMutation,
  useQuery,
  useSubscription,
} from "@apollo/client";
import { RealEstate, FormDeleteType } from "@/interfaces/realEstate";
import { deleteRealEstateProfil } from "@/services/realEstate";

interface ValuesDataType {
  GET_REAL_ESTATE_BY_ID_USER: RealEstate[];
}

interface ContextType {
  data: ValuesDataType;
  loading: boolean;
  getRealEstate: (id: number) => void;
  deleteRealEstate: ({
    idrealestatephoto,
    idphoto,
    idrealestate,
  }: FormDeleteType) => void;
}

const initialValues: ContextType = {
  data: { GET_REAL_ESTATE_BY_ID_USER: [] },
  loading: true,
  getRealEstate: () => {},
  deleteRealEstate: () => {},
};

const ProfileContext = createContext(initialValues);

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error(
      "this contexts must be used whitin a ProfileContextProvider"
    );
  }
  return context;
};

export const ProfileContextProvider = ({ children }: Children) => {
  const client = useApolloClient();
  const [idUserState, setIdUserState] = useState(0);
  const { data, loading, refetch } = useQuery(getREByProfile, {
    variables: { idUser: 0 },
  });

  const [DELETE_REAL_ESTATE] = useMutation(deleteRealEstateProfil);

  const deleteRealEstate = async (form: FormDeleteType) => {
    const { idphoto, idrealestate, idrealestatephoto } = form;
    await DELETE_REAL_ESTATE({
      variables: {
        idRealEstatePhoto: idrealestatephoto,
        idPhoto: idphoto,
        idRealEstate: idrealestate,
      },
    });
  };

useSubscription(deleteRealEstateSubs, {
    onData: ({ data }) => {
      const { DELETE_A_RE } = data.data;
      const dataInStore = client.readQuery({
        query: getREByProfile,
        variables: {
          idUser: idUserState,
        },
      });
      client.writeQuery({
        query: getREByProfile,
        variables: {
          idUser: idUserState,
        },
        data: {
          ...dataInStore,
          GET_REAL_ESTATE_BY_ID_USER:
            dataInStore.GET_REAL_ESTATE_BY_ID_USER.filter(
              (v: RealEstate) => v.idrealestate != DELETE_A_RE.id
            ),
        },
      });
    },
  });



  const getRealEstate = (id: number) => {
    refetch({
      idUser: id,
    });
    setIdUserState(id);
  };

  const val = {
    data,
    loading,
    getRealEstate,
    deleteRealEstate,
  };
  return (
    <ProfileContext.Provider value={val}>{children}</ProfileContext.Provider>
  );
};
