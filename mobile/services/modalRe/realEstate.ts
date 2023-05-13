import { getServices } from "../../utils/getServices";

export const getRealEstatePhotos = async (id: number) => {
  const res = await getServices("realEstate/" + id);
  return res;
};
