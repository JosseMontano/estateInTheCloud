import Load from "../modal/load";
import REOnePublicationType from "@/interface/realEstateOfOnePublication";
import Carousel from "@/components/dynamic/carousel";
import { useRef } from "react";
import ImgCom from "../modal/img";
interface Params {
  load: boolean;
  data: REOnePublicationType[];
}

const ContentImg = ({ load, data }: Params) => {
  const slide = useRef<HTMLDivElement>(null);

  function content(va: REOnePublicationType, i: number) {
    return (
      <div className="slide" ref={slide}>
        <ImgCom {...(va as object)} key={i} />
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
