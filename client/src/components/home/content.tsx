import Slider from "react-slick";
import Card from "./card";
import { RealEstate } from "@/interface/realEstate";
import Title from "./title";

interface Params {
  title: string;
  data: RealEstate[];
  visitUser: (idUser: number, email: string) => void;
}
const Index = ({ data, title, visitUser }: Params) => {
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
      <Title title={title} />
      <Slider {...settings} className="slick">
        {data.map((va, i) => (
          <Card key={i} v={va} visitUser={visitUser} />
        ))}
      </Slider>
    </>
  );
};

export default Index;
