import { http } from "@/services/http";
import { index } from "@/utilities/getServices";

export const getREAll = async <T>(): Promise<{
  json: T;
  status: number;
}> => {
  const url = `${http}estate`;
  const { json, status } = await index<T>(url);
  return { json, status };
};

export const getREMostRecent = async <T>(): Promise<{
  json: T;
  status: number;
}> => {
  const url = `${http}estateMostRecent`;
  const { json, status } = await index<T>(url);
  return { json, status };
};

export const getRERecommendedByUser = async <T>(): Promise<{
  json: T;
  status: number;
}> => {
  const url = `${http}estateRecommendedByUser`;
  const { json, status } = await index<T>(url);
  return { json, status };
};

