import { RealEstate } from "interface/realEstate";
import { getRealEstateOfOnePublication as getRealEstate } from "services/realEstate";
import { H2, P, Container, ContainerContent } from "styles/modal/perfil";
import Load from "./modal/load";
import ImgCom from "./modal/img";
import useLoadData from "hooks/useFetch";
import { useRef, useState } from "react";
import ContainerBtnModal from "./containerBtnModal";
import Carousel from "../dynamic/carousel";
import translate from "services/translate";
import { useNavigate } from "react-router-dom";
import env from "config";
import { useLanguage } from "context/languageContext";

export const ContentModal = (v: RealEstate) => {
  const { text } = useLanguage();
  const [description, setDescription] = useState(v.description);
  const [title, setTitle] = useState(v.title);
  const [loadTxt, setLoadTxt] = useState(false);
  const navigate = useNavigate();
  const { data, loading } = useLoadData(getRealEstate, v.idrealestate);
  const slide = useRef<HTMLDivElement>(null);

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

  const handleSeeQuestions = (idRealEstate: number) => {
    navigate(`/answeQuestionInterested/${idRealEstate}`);
  };
  const handle360 = () => {
    window.open(`${env.img360Url}#/${v.idphoto}`, "_blank");
    /* navigate(`/img360/${v.idphoto}`); */
  };

  const handleTranslate = async () => {
    setLoadTxt(true);
    const { json } = await translate(v.description);
    const { json: jsonTtitle } = await translate(v.title);
    if (json) {
      const des = json.responseData.translatedText;
      setDescription(des);
      const tit = jsonTtitle.responseData.translatedText;
      setTitle(tit);
      setLoadTxt(false);
    }
  };

  let btnJSX = [
    {
      click: () => handleSeeQuestions(v.idrealestate),
      txt: text.homeBtnQuestionFrequent,
    },
    {
      click: () => handelDownloadImg(v.url),
      txt: text.homeBtnDownload,
    },
    {
      click: handle360,
      txt: text.homeBtnSee360,
    },
    {
      click: handleTranslate,
      txt: text.homeBtnTranslate,
    },
  ];

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
      {loading ? <Load /> : showCarousel()}
      {loadTxt ? (
        <Load />
      ) : (
        <ContainerContent>
          <H2>{title}</H2>
          <P>{description}</P>
          <ContainerBtnModal v={v} btnJSX={btnJSX} />
        </ContainerContent>
      )}
    </Container>
  );
};
