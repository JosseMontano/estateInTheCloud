import { RealEstate } from "@/interface/realEstate";
import { getRealEstateOfOnePublication as getRealEstate } from "@/services/realEstate";
import * as S from "@/styles/modal/perfil";
import Load from "./modal/load";
import ImgCom from "./modal/img";
import Clipboard from "../global/clipBoard";
import { useNavigate } from "react-router-dom";
import useLoadData from "@/hooks/useFetch";
import styled from "styled-components";
import { useRef } from "react";
import { Button } from "@/styles/modal/perfil";
import env from "@/config";
const Container = styled.div`
  .slider-wrapper {
    margin: 1rem;
    position: relative;
    /*     overflow: hidden; */
  }

  .slides-container {
    display: flex;
    /*  overflow: scroll;  */
    overflow: hidden;
    scroll-behavior: smooth;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .slide-arrow {
    position: absolute;
    display: flex;
    top: 10px;
    bottom: 0px;
    margin: auto;
    height: 4rem;
    background-color: white;
    border: none;
    width: 2rem;
    font-size: 3rem;
    padding: 0;
    cursor: pointer;
    opacity: 0.5;
    transition: opacity 100ms;
  }

  .slide-arrow:hover,
  .slide-arrow:focus {
    opacity: 1;
  }

  #slide-arrow-prev {
    left: 0px;
    border-radius: 2rem;
    top: 45px;
  }

  #slide-arrow-next {
    right: 20px;
    border-radius: 2rem;
    top: 45px;
  }

  .slide {
    width: 100%;
    height: 100%;
    flex: 1 0 100%;
  }
`;

const A = styled.a`
  border-radius: 12px solid #fff;
  background-color: #e57124;
  list-style: none;
  color: #fff;
  padding: 15px;
  margin-top: 2px;
  text-decoration: none;
  display: block;
  width: 70px;
  &:hover {
    cursor: pointer;
  }
`;

export const ContentModal = (v: RealEstate) => {
  const navigate = useNavigate();
  const { data, loading } = useLoadData(getRealEstate, v.idrealestate);

  const handleSeeQuestions = (idRealEstate: number) => {
    navigate(`/answeQuestionInterested/${idRealEstate}`);
  };

  const slide = useRef<HTMLDivElement>(null);
  const slidesContainer = useRef<HTMLDivElement>(null);

  const handelDownloadImg = (url: string) => {
    //url is thr route of the app
    fetch(url, {
      method: "GET",
      headers: {},
    })
      .then((response) => {
        response.arrayBuffer().then(function (buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "image.png"); //or any other extension
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlePrev = () => {
    if (slide.current) {
      const slideWidth = slide.current.clientWidth;
      if (slidesContainer.current) {
        slidesContainer.current.scrollLeft -= slideWidth;
      }
    }
  };

  const handleNext = () => {
    if (slide.current) {
      const slideWidth = slide.current.clientWidth;
      if (slidesContainer.current) {
        slidesContainer.current.scrollLeft += slideWidth;
      }
    }
  };

  return (
    <S.Container>
      {loading ? (
        <Load />
      ) : (
        <Container>
          <div className="slider-wrapper">
            <button
              onClick={handlePrev}
              className="slide-arrow"
              id="slide-arrow-prev"
            >
              &#8249;
            </button>
            <button
              onClick={handleNext}
              className="slide-arrow"
              id="slide-arrow-next"
            >
              &#8250;
            </button>
            <div
              className="slides-container"
              ref={slidesContainer}
              id="slides-container"
            >
              {data.map((va, i) => (
                <div className="slide" ref={slide}>
                  <ImgCom {...(va as RealEstate)} key={i} />
                </div>
              ))}
            </div>
          </div>
        </Container>
      )}

      <S.ContainerContent>
        <S.H2>{v.title}</S.H2>
        <S.P>{v.description}</S.P>
        <Clipboard txt={v.description} />
        <S.Button
          ColorBtn="#e9e905d5"
          onClick={() => handleSeeQuestions(v.idrealestate)}
        >
          Preguntas frecuentes
        </S.Button>
        <Button onClick={() => handelDownloadImg(v.url)} ColorBtn={"#229ff2"}>
          Descargar
        </Button>
        <A href={`${env.img360Url}#/${v.idphoto}`} target={"_blank"}>
          Ver en 360
        </A>
      </S.ContainerContent>
    </S.Container>
  );
};
