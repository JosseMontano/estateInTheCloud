import { useEffect, useState } from "react";

interface Params {
  services: (id:number) => Promise<{ data: any } | undefined>;
  id:number;
}

const Usefetch = <T,>({ services, id }: Params) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoadData = async () => {
      const res = await services(id);
      setLoading(false);
      if (res) setData(res.data);
    };

    handleLoadData();
  }, [id]);

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
