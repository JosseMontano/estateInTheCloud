import { getServices } from "../../utils/getServices";

export const getUser = async (id: number) => {
  const res = await getServices("getUserComplete/" + id);
  return res;
};
