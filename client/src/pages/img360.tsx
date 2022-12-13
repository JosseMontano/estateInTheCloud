import { useParams } from "react-router-dom";
import { getRealEstateOfOnePublication } from "@/services/realEstate";
import { useEffect, useState } from "react";
import { RealEstate } from "@/interface/realEstate";

const Img360 = () => {
  let { idRealEstate } = useParams();
  const [data, setData] = useState<RealEstate | null>();
  const getRealEstate = async (id: number) => {
    const { json } = await getRealEstateOfOnePublication(id);
    if (json) {
      setData(json[0]);
      console.log(json[0]);
    }
  };

  useEffect(() => {
    if (idRealEstate) {
      getRealEstate(parseFloat(idRealEstate));
    }
  }, []);

  return (
    <div>
   <img src={data?.url} alt="" />

    </div>
  );
};

export default Img360;
