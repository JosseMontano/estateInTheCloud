import { useEffect, useState } from "react";

interface Params {
  services: () => Promise<{ data: any } | undefined>;
}

const Usefetch = <T,>({ services }: Params) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoadData = async () => {
      const res = await services();
      setLoading(false);
      if (res) setData(res.data);
    };

    handleLoadData();
  }, [services]);

  const showMsgEmpty = () => {
    return <p>No hay datos</p>;
  };

  return {
    data,
    loading,
    showMsgEmpty,
  };
};

export default Usefetch;
