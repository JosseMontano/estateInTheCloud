import { useEffect, useState } from "react";

const useLoadData = (
  servicesParams: (id: number) => Promise<any>,
  idNumber: number
) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleGetData = async () => {
    const resp = await servicesParams(idNumber);
    setData(resp);
    setTimeout(() => {
      setLoading(false);
    }, 10);
  };

  useEffect(() => {
    handleGetData();
  }, []);

  return {
    data,
    loading,
    handleGetData
  };
};

export default useLoadData;
