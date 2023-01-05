import Load from "./load";
import REOnePublicationType from "@/interfaces/realEstateOfOnePublication";
import Carousel from "@/components/dynamic/carousel";
import { useRef } from "react";
import ImgCom from "./img";
interface Params {
  load: boolean;
  data: REOnePublicationType[];
}

const ContentImg = ({ load, data }: Params) => {
  const slide = useRef<HTMLDivElement>(null);

  function content(va: REOnePublicationType, i: number) {
    return (
      <div className="slide" ref={slide} key={i}>
        <ImgCom url={va.url} />
      </div>
    );
  }

  function children() {
    return data.map((va, i) => content(va, i));
  }

  return (
    <>{load ? <Load /> : <Carousel children={children()} slide={slide} />}</>
  );
};

export default ContentImg;
