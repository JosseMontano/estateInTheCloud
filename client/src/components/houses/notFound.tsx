import NotFoundComp from "@/components/global/dataEmpty";
import { RealEstate } from "@/interface/realEstate";

interface Params {
  dataFilter: RealEstate[];
}

const NotFound = ({ dataFilter }: Params) => {
  return (
    <>
      {dataFilter.length === 0 && (
        <NotFoundComp msg="No se encontraron reusltados" />
      )}
    </>
  );
};

export default NotFound;
