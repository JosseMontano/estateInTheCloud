import { createContext, useContext, useEffect, useState } from "react";
import { RealEstate } from "../../interface/realEstate";
import {
  getRealEstateAll,
  getRealEstateMostRecent,
  getRealEstateRecommendedByUser,
} from "../../services/realEstate";
import Children from "@/interface/children";


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
      setDataMostRecent(json);
    }
  };

  const handleGetRealEstate = async () => {
    const { json, status } = await getRealEstateAll<RealEstate[]>();
    if (json) {
      setData(json);
    }
  };

  const handleGetRealEstateRecommendedByUser = async () => {
    const { json, status } = await getRealEstateRecommendedByUser<
      RealEstate[]
    >();
    if (json) {
      setRecommendedByUser(json);
    }
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
        DataRecommendedByUser,
        loading,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
