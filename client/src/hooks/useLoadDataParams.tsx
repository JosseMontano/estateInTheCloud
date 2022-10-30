import { useEffect, useState } from "react";

const useLoadDataParams = (
  servicesParams: (id: number) => Promise<any>,
  idNumber: number
) => {
  const [data, setData] = useState([]);
  const [empty, setEmpty] = useState(true);
  const [loading, setLoading] = useState(true);

  const handleGetData = async () => {
    const res = await servicesParams(idNumber);
    if (res?.status === 404) {
      setEmpty(false);
      setData([]);
    } else {
      setData(res.json);
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    handleGetData();
  }, []);

  return {
    data,
    loading,
    empty,
    handleGetData,
  };
};

export default useLoadDataParams;
