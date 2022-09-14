import { RealEstate } from "../interface/realEstateData";
import { http } from "./http";


export const getRealEstateAll = async () => {
  try {
    const response = await fetch(`${http}estate`,{
      method:"GET"
    });
    return await response.json();
  } catch (error) {
    
  }
}

export const getRealEstateProfil = async (id:number) => {
  try {
    const response = await fetch(`${http}estate/${id}`,{
      method:"GET"
    });
    return await response.json();
  } catch (error) {
    
  }
}

export const saveRealEstate = async (data:FormData) => {
  try {
    const response = await fetch(`${http}estate`, {
      method: "POST",
      body: data
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
