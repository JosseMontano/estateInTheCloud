import TypeRealEstate from "../components/dynamic/typeRealEstate";
import { getRealEstateByStudioDepartament } from "../services/realEstate";

interface Params {
  navbar: JSX.Element;
}

const StudioApartament = ({ navbar }: Params) => {
  return (
    <TypeRealEstate
      navbar={navbar}
      services={getRealEstateByStudioDepartament}
    />
  );
};

export default StudioApartament;
