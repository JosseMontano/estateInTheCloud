import Slider from "react-slick";
import Card from "./card";
import { RealEstate } from "@/interface/realEstate";
import Title from "./title";
interface Params {
  title: string;
  data: RealEstate[];
}
const Index = (v: Params) => {
  //settings that use the slider
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Title title={v.title} />
      <Slider {...settings} className="slick">
        {v.data.map((va, i) => (
          <Card key={i} {...va} />
        ))}
      </Slider>
    </>
  );
};

export default Index;
