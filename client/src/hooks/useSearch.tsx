import { useState } from "react";

const UseSearch = () => {
  const [filter, setFilter] = useState("");

  const getValueSearch = (val: string) => {
    setFilter(val);
  };

  return {
    filter,
    getValueSearch,
  };
};

export default UseSearch;
