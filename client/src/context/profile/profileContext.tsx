import { createContext, useContext } from "react";
import Children from "@/interface/children";
import { RealEstate } from "@/interface/realEstate";
import useFetch from "@/hooks/useFetch";
import { getRealEstateProfil as services } from "@/services/realEstate";
import { NameUserContext } from "../nameUserContext";

interface Params {
  data: RealEstate[];
  setData: (data: RealEstate[]) => void;
  handleGetData: () => void;
  deleteRealEstate: (id: number) => void;
  updateStateRE: (available: boolean, id: number) => void;
  createRealEstate: (newData: RealEstate) => void;
  loading: boolean;
}

const initialVal: Params = {
  data: [],
  setData: () => {},
  handleGetData: () => {},
  deleteRealEstate: () => {},
  updateStateRE: () => {},
  createRealEstate: () => {},
  loading: true,
};

const ProfileContext = createContext<Params>(initialVal);

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
  const { idUser } = useContext(NameUserContext);
  const { data, loading, handleGetData, setData } = useFetch<RealEstate>(
    services,
    idUser
  );

  const createRealEstate = (newData: RealEstate) => {
    setData([...data, newData]);
  };

  const deleteRealEstate = (id: number) => {
    setData(data.filter((v) => v.idrealestate != id));
  };

  const updateStateRE = (available: boolean, id: number) => {
    console.log(available);
    setData(
      data.map((v) =>
        v.idrealestate === id
          ? {
              ...v,
              state: available,
            }
          : v
      )
    );
  };

  const val: Params = {
    data,
    setData,
    handleGetData,
    deleteRealEstate,
    updateStateRE,
    createRealEstate,
    loading,
  };
  return (
    <ProfileContext.Provider value={val}>{children}</ProfileContext.Provider>
  );
};
