import { RealEstate } from "@/interface/realEstate";
import { getRealEstateOfOnePublication as getRealEstate } from "@/services/realEstate";
import { H2, P, Container, ContainerContent } from "@/styles/modal/perfil";
import Load from "./modal/load";
import ImgCom from "./modal/img";
import useLoadData from "@/hooks/useFetch";
import { useEffect, useRef, useState } from "react";
import ContainerBtnModal from "./containerBtnModal";
import Carousel from "../dynamic/carousel";
import { useNavigate } from "react-router-dom";
import env from "@/config";
import { useLanguage } from "@/context/languageContext";
import handleDownloadImg from "@/utilities/downloadImg";
import translate from "@/utilities/translate";

enum Language {
  english = "en",
}

export const ContentModal = (v: RealEstate) => {
  const { text, lanActually } = useLanguage();
  const [description, setDescription] = useState(v.description);
  const [title, setTitle] = useState(v.title);
  const [loadTxt, setLoadTxt] = useState(false);
  const navigate = useNavigate();
  const { data, loading } = useLoadData(getRealEstate, v.idrealestate);
  const slide = useRef<HTMLDivElement>(null);

  const handleSeeQuestions = (idRealEstate: number) => {
    navigate(`/answeQuestionInterested/${idRealEstate}`);
  };

  const handle360 = () => {
    window.open(`${env.img360Url}#/${v.idphoto}`, "_blank");
    /* navigate(`/img360/${v.idphoto}`); */
  };

  const handleTranslate = async () => {
    setLoadTxt(true);
    const des = await translate(v.description);
    setDescription(des!);
    const tit = await translate(v.title);
    setTitle(tit!);
    setLoadTxt(false);
  };

  let btnJSX = [
    {
      click: () => handleSeeQuestions(v.idrealestate),
      txt: text.homeBtnQuestionFrequent,
    },
    {
      click: () => handleDownloadImg(v.url),
      txt: text.homeBtnDownload,
    },
    {
      click: handle360,
      txt: text.homeBtnSee360,
    },
  ];

  useEffect(() => {
    if (lanActually == Language.english) handleTranslate();
  }, []);

  function children() {
    return data.map((v, i) => (
      <div className="slide" key={i} ref={slide}>
        <ImgCom {...(v as RealEstate)} />
      </div>
    ));
  }

  function showCarousel() {
    return <Carousel children={children()} slide={slide} />;
  }

  return (
    <Container>
      {loading && loadTxt ? (
        <div className="load">
          <Load />
        </div>
      ) : (
        <>
          {showCarousel()}
          <ContainerContent>
            <H2>{title}</H2>
            <P>{description}</P>
            <ContainerBtnModal v={v} btnJSX={btnJSX} />
          </ContainerContent>
        </>
      )}
    </Container>
  );
};
