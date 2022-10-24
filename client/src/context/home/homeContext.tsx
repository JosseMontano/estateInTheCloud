import { createContext, useContext, useState } from "react";
import { RealEstate } from "../../interface/realEstate";
import { getRealEstateAll } from "../../services/realEstate";

interface Children {
  children: JSX.Element;
}

interface homeContext {
  homeData: RealEstate[];
  handleGetRealEstate: () => void;
}

const contextDefaultValue: homeContext = {
  homeData: [],
  handleGetRealEstate: () => {},
};

export const HomeContext = createContext<homeContext>(contextDefaultValue);

export const useHome = () => {
  const context = useContext(HomeContext);
  if (!context) {
    throw new Error(
      "this contexts must be used whitin a IllnessesContextProvider"
    );
  }
  return context;
};

export const HomeContextProvider = ({ children }: Children) => {
  const [homeData, setData] = useState<RealEstate[]>([]);

  const handleGetRealEstate = async () => {
    const resp = await getRealEstateAll();
    setData(resp);
  };

  return (
    <HomeContext.Provider value={{ homeData, handleGetRealEstate }}>
      {children}
    </HomeContext.Provider>
  );
};
