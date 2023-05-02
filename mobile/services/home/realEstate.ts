import { getServices } from "../../utils/getServices";

export const getRealEstateAll = async () => {
  const res = await getServices("allRealEstate");
  return res;
};

export const getRealEstateMostRecent = async () => {
  const res = await getServices("estateMostRecent");
  return res;
};

export const getRealEstateRecommended = async () => {
  const res = await getServices("estateRecommendedByUser");
  return res;
};

export const getRealEstateForYou = async (userId: number) => {
  const res = await getServices("filter-intelligent/" + userId);
  return res;
};
