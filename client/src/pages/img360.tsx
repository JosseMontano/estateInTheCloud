import { useParams } from "react-router-dom";
import { getDestinates } from "@/services/realEstate";
import { useEffect, useState } from "react";
import { RealEstate } from "@/interface/realEstate";

const Img360 = () => {
  let { id } = useParams();
  const [data, setData] = useState<RealEstate | null>();
  const getRealEstate = async (id: number) => {
    const { json } = await getDestinates(id);
    if (json) {
      setData(json[0]);
      console.log(json[0]);
    }
  };

  useEffect(() => {
    if (id) {
      getRealEstate(parseFloat(id));
    }
  }, []);

  return (
    <div>
      <img src={data?.url} alt="" />
    </div>
  );
};

export default Img360;
