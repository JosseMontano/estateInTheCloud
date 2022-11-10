const deleteAnswer = async (url: string) => {
  try {
    const response = await fetch(url, {
      method: "DELETE",
      body: JSON.stringify(false),
    });

    if (response.ok) {
      const result = await response.json();
      return result;
    }
  } catch (err) {
    console.error(err);
  }
};
export default deleteAnswer;
