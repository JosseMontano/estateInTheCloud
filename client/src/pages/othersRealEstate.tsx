import TypeRealEstate from "../components/dynamic/typeRealEstate";
import { getRealEstateOthers } from "../services/realEstate";

interface Params {
  navbar: JSX.Element;
}

const OthersRealEstate = ({ navbar }: Params) => {
  return <TypeRealEstate navbar={navbar} services={getRealEstateOthers} />;
};

export default OthersRealEstate;
