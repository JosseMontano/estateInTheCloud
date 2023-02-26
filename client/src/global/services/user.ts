import { http, httpGo } from "../../config/http";
import { index } from "../utilities/getServices";

export const getUserById = async (id?: number) => {
  const url = `${httpGo}getUserComplete/${id}`;
  const { json, status } = await index(url);
  return { json, status };
};
