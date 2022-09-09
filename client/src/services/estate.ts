

export const getRicky = async () => {
    try {
      const response = await fetch(
        "https://rickandmortyapi.com/api/character",
        {
          method: "GET",
          headers: {},
        }
      );

      if (response.ok) {
        const result = await response.json();
        return result.results;
      }
    } catch (err) {
      console.error(err);
    }
  };