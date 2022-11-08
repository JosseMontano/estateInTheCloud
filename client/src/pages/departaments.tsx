import TypeRealEstate from "../components/dynamic/typeRealEstate";
import { getRealEstateByDepartament } from "../services/realEstate";

interface Params {
  navbar: JSX.Element;
}

const Departaments = ({ navbar }: Params) => {
  return (
    <TypeRealEstate navbar={navbar} services={getRealEstateByDepartament} />
  );
};

export default Departaments;
