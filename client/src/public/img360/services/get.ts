import { http, httpGo } from "@/config/http";
import { index } from "@/global/utilities/getServices";

export const getImgTo360 = async <T>(
  id: number
): Promise<{ json: T; status: number }> => {
  const url = `${httpGo}photo/${id}`;
  const { json, status } = await index<T>(url);
  return { json, status };
};
