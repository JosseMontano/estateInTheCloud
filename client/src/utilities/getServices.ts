export const index = async (
  url: string
): Promise<{ json: null; status: number }> => {
  try {
    const response = await fetch(url, {
      method: "GET",
    });
    const json = await response.json();
    const status = response.status;
    return { json, status };
  } catch (error) {
    console.log(error);
    return { json: null, status: 0 };
  }
};
