import { http, headers } from "./http";
import { index } from "../utilities/getServices";

export const getUser = async (email?: string) => {
  const url = `${http}getUserPhotoProfile/${email}`;
  const { json, status } = await index(url);
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
