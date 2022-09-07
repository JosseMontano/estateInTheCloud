import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import HomeCom  from "../components/home";
const Container = styled.div`
 height: 100vh;
  width: 100%;
  background: #0f2027;
  background: -webkit-linear-gradient(to bottom, #2c5364, #203a43, #0f2027);
  background: linear-gradient(to bottom, #2c5364, #203a43, #0f2027);
`;

interface Rick {
  name: string;
  species: string;
  status: string;
  image: string;
}
const Home = () => {
  const [data, setData] = useState<Rick[]>([]);
  const getRicky = async () => {
    try {
      const response = await fetch(
        "https://rickandmortyapi.com/api/character",
        {
          method: "GET",
          headers: {},
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log(result.results);
        setData(result.results);
      }
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getRicky();
  }, []);
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
    <Container>
      <h2>Recomendado</h2>
      <Slider {...settings} className='slick'>
        {data.map((v, i) => (
          <HomeCom key={i} {...v} />
        ))}
      </Slider>
    </Container>
  );
};

export default Home;
