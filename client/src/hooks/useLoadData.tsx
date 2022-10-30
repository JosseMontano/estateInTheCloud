import { useEffect, useState } from "react";

const useLoadData = (services: () => Promise<any>) => {
  const [data, setData] = useState([]);
  const [empty, setEmpty] = useState(true);
  const [loading, setLoading] = useState(true);
  const handleGetData = async () => {
    const res = await services();
    if (res?.status === 404) {
      setEmpty(false);
      return;
    }
    setData(res);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    window.scroll(0, 0);
    handleGetData();
  }, []);

  return {
    data,
    empty,
    loading,
    handleGetData,
  };
};

export default useLoadData;
