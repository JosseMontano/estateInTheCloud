import { http } from "@/config/http";

export const saveRealEstate = async (data: FormData) => {
    try {
      const response = await fetch(`${http}estate`, {
        method: "POST",
        body: data,
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  };