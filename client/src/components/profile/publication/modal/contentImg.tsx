import Slider from "react-slick";
import Load from "../modal/load";
import DataImg from "./dataImg";

interface Params {
  load: boolean;
  data: never[];
}

const ContentImg = ({ load, data }: Params) => {
  return (
    <>{load ? <Load /> : <Slider className="slick">{DataImg(data)}</Slider>}</>
  );
};

export default ContentImg;
