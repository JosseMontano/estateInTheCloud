import Loader from "@/global/components/toast/loading";
import REOnePublicationType, {
  Photo,
} from "@/global/interfaces/realEstateOfOnePublication";
import Carousel from "@/global/components/carousel";
import { useRef } from "react";
import ImgCom from "./img";
import LoaderContent from "@/global/components/toast/loaderContent";
interface Params {
  load: boolean;
  data: REOnePublicationType[];
}

const ContentImg = ({ load, data }: Params) => {
  const slide = useRef<HTMLDivElement>(null);

  function content(v: Photo, i: number) {
    return (
      <div className="slide" ref={slide} key={i}>
        <ImgCom url={v.url} />
      </div>
    );
  }

  function children() {
    const dataObj = Object.assign({}, data[0]);
    return dataObj.photos.map((va, i) => content(va, i));
  }

  return (
    <>{load ? <LoaderContent /> : <Carousel children={children()} slide={slide} />}</>
  );
};

export default ContentImg;
