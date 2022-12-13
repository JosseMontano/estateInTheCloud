import http from "./http";

export const getDestinates = async (id) => {
  try {
    const response = await fetch(`${http}estateOfOnePublication/${id}`, {
      method: "GET",
      headers: {},
    });

    if (response.ok) {
      const result = await response.json();
      return result
    }
  } catch (err) {
    console.error(err);
  }
};
