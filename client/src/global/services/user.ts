import { http } from "../../config/http";
import { index } from "../utilities/getServices";

export const getUserById = async (id?: number) => {
  const url = `${http}getUserComplete/${id}`;
  const { json, status } = await index(url);
  return { json, status };
};
