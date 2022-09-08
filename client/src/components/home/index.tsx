import React from "react";
import { Title, ColorText } from "../../styles/globals";
import Slider from "react-slick";
import Card from "./card";
import {Rick} from '../../models/rick'

interface Params{
    title:string,
    data:Rick[]
}
const Index = (v:Params) => {
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
      <Title colorText={ColorText}>{v.title}</Title>
      <Slider {...settings} className="slick">
        {v.data.map((va, i) => (
          <Card key={i} {...va} />
        ))}
      </Slider>
    </>
  );
};

export default Index;
