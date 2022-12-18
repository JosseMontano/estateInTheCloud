import Load from "../modal/load";
import DataImg from "./dataImg";
import REOnePublicationType from "@/interface/realEstateOfOnePublication";
interface Params {
  load: boolean;
  data: REOnePublicationType[];
}

const ContentImg = ({ load, data }: Params) => {
  return (
    <>{load ? <Load /> : <div className="slick">{DataImg(data)}</div>}</>
  );
};

export default ContentImg;
