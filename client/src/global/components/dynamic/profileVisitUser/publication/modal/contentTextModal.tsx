import { RealEstate } from "@/global/interfaces/realEstate";
import { ContainerContent } from "@/global/styles/modal/perfil";
import { useState } from "react";
import { useLanguage } from "@/global/context/languageContext";
import useTranslate from "@/public/profile/hooks/useTranslate";
import { ShowInfo } from "../types/showInfo";
import GeneralInfo from "./generalInfo";
import MoreInfo from "./moreInfo";
import NearPlaces from "./nearPlaces";
import { PlacesType, PropertiesPlaces } from "../types/places";
import BtnsToVisitor from "./btnsToVistitor";
import BtnsToOwner from "./btnsToOwner";

interface params {
  v: RealEstate;
  showbtn?: boolean;
  handleAddNewPhoto: () => void;
  handleDelete: () => void;
  handleFile: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAnswerQuestion: (id: number) => void;
  handleUpdateState: (id: number, available: number) => void;
  handleShowMoreInfo: (val: ShowInfo) => void;
  showMoreInfo: ShowInfo;
  placesNear: PlacesType[];
  handleRedirectToMaps: (v: PropertiesPlaces) => void
}

const ContentTextModal = (p: params) => {
  const { text } = useLanguage();
  const [stateAvailable, setStateAvailable] = useState(
    p.v.available ? true : false
  );
  let stateNumber = stateAvailable ? 0 : 1;
  //variable to show the text of the btn
  const available = text.profileBtnAvailable;
  const noAvailable = text.profileBtnNoAvailable;
  let textBtn = stateAvailable ? available : noAvailable;

  let btnJSX = [
    {
      click: () => p.handleAddNewPhoto(),
      txt: text.profileBtnAddPhoto,
    },
    {
      click: () => p.handleDelete(),
      txt: text.profileBtnDeletePhoto,
    },
    {
      click: () => p.handleAnswerQuestion(p.v.id_real_estate),
      txt: text.profileBtnQuestion,
    },
  ];

  const handleUpdateStateRE = () => {
    p.handleUpdateState(p.v.id_real_estate, stateNumber);
    setStateAvailable(!stateAvailable);
  };

  const { descriptionState, titleState } = useTranslate({
    title: p.v.title,
    description: p.v.description,
  });
  
  return (
    <ContainerContent>
      {p.showMoreInfo == "General" && (
        <GeneralInfo description={descriptionState} title={titleState} />
      )}

      {p.showMoreInfo == "Specific" && <MoreInfo v={p.v} />}

      {p.showMoreInfo === "Near places" && (
        <NearPlaces placesNear={p.placesNear} handleRedirectToMaps={p.handleRedirectToMaps}/>
      )}

      {p.showbtn ? (
        <BtnsToOwner
          btnJSX={btnJSX}
          handleFile={p.handleFile}
          handleUpdateStateRE={handleUpdateStateRE}
          stateAvailable={stateAvailable}
        />
      ) : (
        <>
          <BtnsToVisitor
            handleShowMoreInfo={p.handleShowMoreInfo}
            showMoreInfo={p.showMoreInfo}
            textBtn={textBtn}
          />
        </>
      )}
    </ContainerContent>
  );
};

ContentTextModal.defaultProps = {
  showbtn: true,
};

export default ContentTextModal;