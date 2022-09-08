import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Navbar from "../components/navbar";
import Img1 from "../assets/home/fondo1.jpg";
import Slider from '../components/home'
import {Rick} from '../models/rick'
const Container = styled.div`
  width: 100%;
`;
const Img = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;
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
        setData(result.results);
      }
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getRicky();
  }, []);
 
  let dataComplete = [
    {
      title: "Mas recientes",
      data: data,
    },
    {
      title: "Todos",
      data: data,
    },
    {
      title: "Recomendado",
      data: data,
    },
    {
      title: "Solo para ti",
      data: data,
    },
  ];
  return (
    <Container>
      <Navbar />
      <Img src={Img1} alt="" />
      {/* Show all the estates */}
      {dataComplete.map((v, i) => (
        <>
         <Slider key={i} {...v} />
        </>
      ))}
    </Container>
  );
};

export default Home;
