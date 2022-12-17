import Slider from "react-slick";
import Load from "../modal/load";
import DataImg from "./dataImg";
import REOnePublicationType from "@/interface/realEstateOfOnePublication";
interface Params {
  load: boolean;
  data: REOnePublicationType[];
}

const ContentImg = ({ load, data }: Params) => {
  return (
    <>{load ? <Load /> : <Slider className="slick">{DataImg(data)}</Slider>}</>
  );
};

export default ContentImg;
