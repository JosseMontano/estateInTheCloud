import { RealEstate } from "@/global/interfaces/realEstate";
import { getRealEstateOfOnePublication as getRealEstate } from "@/services/realEstate";
import { H2, P, Container, ContainerContent } from "@/global/styles/modal/perfil";
import Loader from "@/global/components/loading";
import ImgCom from "./img";
import useLoadData from "@/global/hooks/useFetch";
import { useRef } from "react";
import ContainerBtnModal from "./containerBtnModal";
import Carousel from "@/global/components/carousel";
import { useLanguage } from "@/global/context/languageContext";
import handleDownloadImg from "@/utilities/downloadImg";
import useModal from "../../hooks/useModal";
import useTranslate from "../../hooks/useTranslate";

export const ContentModal = (v: RealEstate) => {
  const { text } = useLanguage();
  const { data, loading } = useLoadData(getRealEstate, v.idrealestate);
  const slide = useRef<HTMLDivElement>(null);

  // ? Paramaters that received useModal
  const formHookModal = {
    idPhoto: v.idphoto,
    idRealEstate: v.idrealestate,
  };
  const { handleSeeQuestions, handle360 } = useModal(formHookModal);

  // ? Paramaters that received useTranslate
  const formHookTranslate = {
    description: v.description,
    title: v.title,
  };
  const { descriptionState, loadTxt, titleState } =
    useTranslate(formHookTranslate);

  let btnJSX = [
    {
      click: () => handleSeeQuestions(),
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
          <Loader />
        </div>
      ) : (
        <>
          {showCarousel()}
          <ContainerContent>
            <H2>{titleState}</H2>
            <P>{descriptionState}</P>
            <ContainerBtnModal v={v} btnJSX={btnJSX} />
          </ContainerContent>
        </>
      )}
    </Container>
  );
};
