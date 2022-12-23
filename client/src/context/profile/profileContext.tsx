import { createContext, useContext, useState } from "react";
import Children from "@/interface/children";
import { RealEstate } from "@/interface/realEstate";

interface Params {
  data: RealEstate[];
  deleteRealEstate: (id: number) => void;
  updateStateRE: (available: boolean, id: number) => void;
  createRealEstate: (newData: RealEstate) => void;
  loadData: (dataRe: RealEstate[]) => void;
}

const initialVal: Params = {
  data: [],
  deleteRealEstate: () => {},
  updateStateRE: () => {},
  createRealEstate: () => {},
  loadData: () => {},
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
  const [data, setData] = useState<RealEstate[]>([]);

  const loadData = (dataRe: RealEstate[]) => {
    setData(dataRe);
  };

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
    loadData,
    deleteRealEstate,
    updateStateRE,
    createRealEstate,
  };
  return (
    <ProfileContext.Provider value={val}>{children}</ProfileContext.Provider>
  );
};
