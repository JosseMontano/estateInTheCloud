import TypeRealEstate from "../components/dynamic/typeRealEstate";
import { getRealEstateByGarzoniers } from "../services/realEstate";

interface Params {
  navbar: JSX.Element;
}

const Garzoniers = ({ navbar }: Params) => {
  return (
    <TypeRealEstate navbar={navbar} services={getRealEstateByGarzoniers} />
  );
};

export default Garzoniers;
