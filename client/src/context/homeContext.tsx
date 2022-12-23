import { createContext, useContext, useEffect, useState } from "react";
import { RealEstate } from "../interface/realEstate";
import {
  getRealEstateAll,
  getRealEstateMostRecent,
  getRealEstateRecommendedByUser as getRERecommendedByUser,
} from "../services/realEstate";
import Children from "@/interface/children";
import useFetch from "@/hooks/useFetch";
interface homeContext {
  homeData: RealEstate[];
  homeDataMostRecent: RealEstate[];
  DataRecommendedByUser: RealEstate[];
  loading: boolean;
}

const contextDefaultValue: homeContext = {
  homeData: [],
  homeDataMostRecent: [],
  DataRecommendedByUser: [],
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
  const [DataRecommendedByUser, setRecommendedByUser] = useState<RealEstate[]>(
    []
  );
  const [loading, setLoading] = useState(true);

  const handleGetRealEstateMostRecent = async () => {
    const { json, status } = await getRealEstateMostRecent<RealEstate[]>();
    if (json) {
      if (status != 404) {
        setDataMostRecent(json);
        return;
      }
      setDataMostRecent([]);
    }
  };

  const handleGetRealEstate = async () => {
    const { json, status } = await getRealEstateAll<RealEstate[]>();
    if (json) {
      if (status != 404) {
        setData(json);
        return;
      }
      setData([]);
    }
  };

  const handleGetRealEstateRecommendedByUser = async () => {
    const { json, status } = await getRERecommendedByUser<RealEstate[]>();
    if (json) {
      if (status != 404) {
        setRecommendedByUser(json);
        return;
      }
      setRecommendedByUser([]);
    }
  };

  useEffect(() => {
    handleGetRealEstateMostRecent();
    handleGetRealEstate();
    handleGetRealEstateRecommendedByUser();
    setLoading(false);
  }, []);

  return (
    <HomeContext.Provider
      value={{
        homeData,
        homeDataMostRecent,
        DataRecommendedByUser,
        loading,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
