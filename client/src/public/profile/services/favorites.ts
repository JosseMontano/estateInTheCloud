import { http, httpGo } from "@/config/http";
import deleteServ from "@/global/utilities/deleteService";
import { index } from "@/global/utilities/getServices";

export const getREFavs = async <T>(
  id?: number
): Promise<{ json: T; status: number }> => {
  const url = `${httpGo}favorite-real-estate/${id}`;
  const { json, status } = await index<T>(url);
  return { json, status };
};

export const deleteFav = async (id: number) => {
  const url = `${httpGo}favorite-real-estate/${id}`;
  const response = await deleteServ(url);
  return response;
};
