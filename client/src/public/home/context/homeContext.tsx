import { createContext, useContext, useEffect, useState } from "react";
import { RealEstate } from "@/global/interfaces/realEstate";
import {
  getREAll,
  getREMostRecent,
  getRERecommendedByUser,
} from "../services/get";
import Children from "@/global/interfaces/children";
import { useNameUser } from "@/global/context/nameUserContext";
interface homeContext {
  homeData: RealEstate[];
  homeDataMostRecent: RealEstate[];
  DataRecommendedByUser: RealEstate[];
  loading: boolean;
  loadData: () => void;
}

const contextDefaultValue: homeContext = {
  homeData: [],
  homeDataMostRecent: [],
  DataRecommendedByUser: [],
  loading: true,
  loadData: () => {},
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
  const {nameUser}= useNameUser()

  const handleGetRealEstateMostRecent = async () => {
    const { json, status } = await getREMostRecent<RealEstate[]>();
    console.log('ya pues')
    if (json) {
      if (status != 404) {
        setDataMostRecent(json);
        return;
      }
      setDataMostRecent([]);
    }
  };

  const handleGetRealEstate = async () => {
    const { json, status } = await getREAll<RealEstate[]>();
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


  const loadData = async () => {
    setLoading(true);
    await handleGetRealEstateMostRecent();
    await handleGetRealEstate();
    await handleGetRealEstateRecommendedByUser();
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, [nameUser]);

  return (
    <HomeContext.Provider
      value={{
        homeData,
        homeDataMostRecent,
        DataRecommendedByUser,
        loading,
        loadData,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
