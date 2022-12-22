import { useEffect, useState } from "react";

type serviceType = (id?: number) => Promise<any>;


/**
 * Load the data from the server in a array
 * @param services Is the function that do the call to backend
 * @param {number} id If the service use a id
 * @returns Array, boolean and the function that load the data in the array
 */
function useFetch <T>(services: serviceType, id?: number) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);

  const handleGetData = async () => {
    setLoading(true);
    let res;
    //run the services
    if (id) {
      res = await services(id);
    } else {
      res = await services();
    }

    //save the data in the state
    if (res.status === 404) {
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
    handleGetData,
    setData
  };
};

export default useFetch;
