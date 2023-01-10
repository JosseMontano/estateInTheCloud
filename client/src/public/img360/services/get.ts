import { http } from "@/services/http";
import { index } from "@/utilities/getServices";

export const getImgTo360 = async <T>(
  id: number
): Promise<{ json: T; status: number }> => {
  const url = `${http}photo/${id}`;
  const { json, status } = await index<T>(url);
  return { json, status };
};
