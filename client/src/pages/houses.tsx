import TypeRealEstate from "../components/dynamic/typeRealEstate";
import { getRealEstateByHouse } from "../services/realEstate";

interface Params {
  navbar: JSX.Element;
}

const Houses = ({ navbar }: Params) => {
  return <TypeRealEstate navbar={navbar} services={getRealEstateByHouse} />;
};

export default Houses;
