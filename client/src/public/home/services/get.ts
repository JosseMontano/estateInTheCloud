import { http, httpGo } from "@/config/http";
import { index } from "@/global/utilities/getServices";

export const getREAll = async <T>(): Promise<{
  json: T;
  status: number;
}> => {
  const url = `${httpGo}allRealEstate`;
  const { json, status } = await index<T>(url);
  return { json, status };
};

export const getREMostRecent = async <T>(): Promise<{
  json: T;
  status: number;
}> => {
  const url = `${httpGo}estateMostRecent`;
  const { json, status } = await index<T>(url);
  return { json, status };
};

export const getRERecommendedByUser = async <T>(): Promise<{
  json: T;
  status: number;
}> => {
  const url = `${httpGo}estateRecommendedByUser`;
  const { json, status } = await index<T>(url);
  return { json, status };
};

export const getJustForYou = async <T>(
  userId: number
): Promise<{
  json: T;
  status: number;
}> => {
  const url = `${httpGo}filter-intelligent/` + userId;
  const { json, status } = await index<T>(url);
  return { json, status };
};
