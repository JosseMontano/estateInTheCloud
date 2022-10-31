import { createContext, useContext, useEffect, useState } from "react";
import { RealEstate } from "../../interface/realEstate";
import {
  getRealEstateAll,
  getRealEstateMostRecent,
  getRealEstateRecommendedByUser,
} from "../../services/realEstate";

interface Children {
  children: JSX.Element;
}

interface homeContext {
  homeData: RealEstate[];
  homeDataMostRecent: RealEstate[];
  homeDataRecommendedByUser:RealEstate[],
  loading: boolean;
}

const contextDefaultValue: homeContext = {
  homeData: [],
  homeDataMostRecent: [],
  homeDataRecommendedByUser:[],
  loading: true,
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
  const [homeDataMostRecent, setDataMostRecent] = useState<RealEstate[]>([]);
  const [homeDataRecommendedByUser, setDataRecommendedByUser] = useState<RealEstate[]>([]);
  const [loading, setLoading] = useState(true);

  const handleGetRealEstateMostRecent = async () => {
    const resp = await getRealEstateMostRecent();
    setDataMostRecent(resp);
  };

  const handleGetRealEstate = async () => {
    const resp = await getRealEstateAll();
    setData(resp);
  };

  const handleGetRealEstateRecommendedByUser = async () => {
    const resp = await getRealEstateRecommendedByUser();
    setDataRecommendedByUser(resp);
    setLoading(false);
  };


  useEffect(() => {
    handleGetRealEstateMostRecent();
    handleGetRealEstate();
    handleGetRealEstateRecommendedByUser();
  }, []);

  return (
    <HomeContext.Provider
      value={{
        homeData,
        homeDataMostRecent,
        homeDataRecommendedByUser,
        loading,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
