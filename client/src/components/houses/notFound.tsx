import NotFoundComp from "@/components/global/dataEmpty";
import { RealEstate } from "@/interfaces/realEstate";
import { useLanguage } from "@/context/languageContext";
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
