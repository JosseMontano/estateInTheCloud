import { http } from "./http";

export const getUser = async (email?: string) => {
  try {
    const response = await fetch(`${http}getUserPhotoProfile/${email}`, {
      method: "GET",
      headers: {},
    });

    if (response.ok) {
      const result = await response.json();
      return result;
    }
  } catch (err) {
    console.error(err);
  }
};

export const getUserById = async (id?: number) => {
  try {
    const response = await fetch(`${http}getUserPhotoProfile/${id}`, {
      method: "GET",
      headers: {},
    });

    if (response.ok) {
      const result = await response.json();
      return result;
    }
  } catch (err) {
    console.error(err);
  }
};
