import NotFoundComp from "@/global/components/dataEmpty";
import { RealEstate } from "@/global/interfaces/realEstate";
import { useLanguage } from "@/global/context/languageContext";
interface Params {
  dataFilter: RealEstate[];
}

const NotFound = ({ dataFilter }: Params) => {
  const { text } = useLanguage();
  return (
    <>{dataFilter.length === 0 && <NotFoundComp msg={text.dataEmpty} />}</>
  );
};

export default NotFound;
