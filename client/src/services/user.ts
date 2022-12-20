import { http, headers } from "./http";
import { index } from "../utilities/getServices";

export const getUser = async <T>(email?: string):Promise<{json:T, status:number}> => {
  const url = `${http}getUserPhotoProfile/${email}`;
  const { json, status } = await index<T>(url);
  return { json, status };
};

export const getUserByEmail = async (email?: number) => {
  const url = `${http}getUserPhotoProfile/${email}`;
  const { json, status } = await index(url);
  return { json, status };
};

export const getUserById = async (id?: number) => {
  const url = `${http}getUserComplete/${id}`;
  const { json, status } = await index(url);
  return { json, status };
};
