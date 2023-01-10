import { RealEstateFilterCustom } from "../interfaces/filterCustom";
import { http, headers } from "@/config/http";
import { index } from "@/global/utilities/getServices";

export const getRealEstateByFilterCustom = async <T>(
  form: RealEstateFilterCustom
) => {
  const {
    amountBathroom,
    amountBedroom,
    maxPrice,
    maxSquareMeter,
    minPrice,
    minSquareMeter,
    type,
  } = form;
  const response = await fetch(`${http}estateByFilterCustom`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      type,
      amountBathroom,
      amountBedroom,
      minPrice,
      maxPrice,
      minSquareMeter,
      maxSquareMeter,
    }),
  });
  if (response.status === 200) {
    const json = await response.json();
    const status = response.status;
    return { json, status };
  }
  const json: any = [];
  const status = response.status;
  return { json, status };
};

export const getRealEstateByType = async <T>(
  type: string
): Promise<{ json: T; status: number }> => {
  const url = `${http}estateByType/${type}`;
  const { json, status } = await index<T>(url);
  return { json, status };
};
