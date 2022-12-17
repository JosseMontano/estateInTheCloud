import { useEffect, useState } from "react";

const useLoadData = (services: (id?: number) => Promise<any>, id?: number) => {
  const [data, setData] = useState([]);
  const [empty, setEmpty] = useState(true);
  const [loading, setLoading] = useState(true);

  const handleGetData = async () => {
    let res;
    if (id) {
      res = await services(id);
    } else {
      res = await services();
    }

    if (res?.status === 404) {
      setEmpty(false);
      setData([]);
      return;
    } else {
      setData(res.json);
      setEmpty(true);
    }
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
