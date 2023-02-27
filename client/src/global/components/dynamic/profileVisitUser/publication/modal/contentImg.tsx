import Loader from "@/global/components/toast/loading";
import REOnePublicationType from "@/global/interfaces/realEstateOfOnePublication";
import Carousel from "@/global/components/carousel";
import { useRef } from "react";
import ImgCom from "./img";
interface Params {
  load: boolean;
  data: REOnePublicationType[];
}

const ContentImg = ({ load, data }: Params) => {
  const slide = useRef<HTMLDivElement>(null);

  function content(va: REOnePublicationType, i: number) {
    console.log(va)
    return (
      <div className="slide" ref={slide} key={i}>
        {va.photos.map((v) => (
          <ImgCom url={v.url} />
        ))}
      </div>
    );
  }

  function children() {
    return data.map((va, i) => content(va, i));
  }

  return (
    <>{load ? <Loader /> : <Carousel children={children()} slide={slide} />}</>
  );
};

export default ContentImg;
