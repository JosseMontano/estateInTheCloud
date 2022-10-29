import { useEffect, useState } from "react";

const useLoadData = (services: () => Promise<any>) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const handleGetData = async () => {
    const resp = await services();
    setData(resp);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    handleGetData();
  }, []);

  return {
    data, loading
  };
};

export default useLoadData;
