import http from "./http";

export const getDestinates = async (id) => {
  try {
    const response = await fetch(`${http}photo/${id}`, {
      method: "GET",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const result = await response.json();
      return result;
    }
  } catch (err) {
    console.error(err);
  }
};
