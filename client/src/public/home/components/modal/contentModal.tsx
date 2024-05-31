import { RealEstate } from "@/global/interfaces/realEstate";
import { getRealEstateOfOnePublication as getRealEstate } from "@/global/services/realEstate";
import { H2, P, Container, ContainerContent } from "@/global/styles/modal/perfil";
import Loader from "@/global/components/toast/loading";
import ImgCom from "./img";
import useLoadData from "@/global/hooks/useFetch";
import { useRef } from "react";
import ContainerBtnModal from "./containerBtnModal";
import Carousel from "@/global/components/carousel";
import { useLanguage } from "@/global/context/languageContext";
import handleDownloadImg from "@/global/utilities/downloadImg";
import useModal from "../../hooks/useModal";
import useTranslate from "../../hooks/useTranslate";
import REOnePublicationType from "@/global/interfaces/realEstateOfOnePublication";
import LoaderContent from "@/global/components/toast/loaderContent";

export const ContentModal = (v: RealEstate) => {
  const { text } = useLanguage();
  const { data, loading } = useLoadData<REOnePublicationType>(getRealEstate, v.id_real_estate);
  const slide = useRef<HTMLDivElement>(null);

  // ? Paramaters that received useModal
  const formHookModal = {
    idPhoto: v.id_photo,
    idRealEstate: v.id_real_estate,
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
    const newData = Object.assign({}, data[0])
    return newData.photos.map((v, i) => (
      <div className="slide" key={i} ref={slide}>
        <ImgCom url={v.url} />
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
          <LoaderContent />
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
