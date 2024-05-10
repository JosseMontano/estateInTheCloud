import { RealEstate } from "@/global/interfaces/realEstate";
import {
  ContainerContent,
  H2,
  P,
  ContainerBtn,
} from "@/global/styles/modal/perfil";
import { ColorBtn, InputFile, Title } from "@/global/styles/globals";
import { useEffect, useState } from "react";
import { useLanguage } from "@/global/context/languageContext";
import { Btn } from "@/global/styles/btn";
import useTranslate from "@/public/profile/hooks/useTranslate";
import { isWithin10Blocks } from "@/global/utilities/coordinates";
import { schools } from "@/global/data/education";
import { hospitals } from "@/global/data/hospital";
import { ShowInfo } from "../types/showInfo";
import styled from "styled-components";
import GeneralInfo from "./generalInfo";

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
}

const ContainerNearPlaces = styled.div`
  height: 250px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: black transparent;
`;

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

  interface Properties {
    OBJECTID: number;
    NOMBRE: string;
    TIPO?: string;
    SUB_SECTOR?: string;
    NIVEL?: string;
    TIPO_ESTAB?: string;
    Prueba?: string;
    //school
    DEPENDENCI?: string;
    CICLOS?: string;
  }

  interface placesNear {
    title: string;
    properties: Properties[];
  }

  const [placesNear, setPlacesNear] = useState([] as placesNear[]);
  useEffect(() => {
    if (p.v.lat_long === null) return;

    const [lat, long] = p.v.lat_long.split(",");

    const point1 = {
      type: "Point",
      coordinates: [Number(long), Number(lat)],
    };
    let nearPlacesSchool = [] as Properties[];
    for (let educ of schools.features) {
      const res = isWithin10Blocks(point1, educ.geometry);
      if (res) {
        nearPlacesSchool.push(educ.properties);
      }
    }

    let nearPlacesHospital = [] as Properties[];
    for (let hosp of hospitals.features) {
      const res = isWithin10Blocks(point1, hosp.geometry);
      if (res) {
        nearPlacesHospital.push(hosp.properties);
      }
    }

    setPlacesNear([
      { title: "Educacion", properties: nearPlacesSchool },
      { title: "Hospitales", properties: nearPlacesHospital },
    ]);
  }, []);

  return (
    <ContainerContent>
      {/* Show basic info  */}
      {p.showMoreInfo == "General" && (
        <GeneralInfo description={descriptionState} title={titleState} />
      )}

      {/* Show Complete info  */}
      {p.showMoreInfo == "Specific" && (
        <div>
          <P>
            {text.visitUseramount_bedroom}
            {p.v.amount_bedroom}
          </P>
          <P>
            {text.visitUserprice}
            {p.v.price}
          </P>

          <P>
            {text.visitUseramount_bathroom}
            {p.v.amount_bathroom}
          </P>

          <P>
            {text.visitUsersquare_meter}
            {p.v.square_meter}
          </P>

          <P>
            {text.visitUserprice}
            {p.v.price}
          </P>

          {/*   <P>
            {text.visitUserlat_long}
            {p.v.lat_long}
          </P> */}

          <P>
            {text.visitUseraddress}
            {p.v.address}
          </P>
        </div>
      )}

      {p.showMoreInfo === "Near places" && (
        <ContainerNearPlaces>
          {placesNear.map((v, i) => (
            <>
              <Title colorText={ColorBtn}>{v.title}</Title>
              {v.properties.map((va, i) => (
                <P key={i}>
                  {i + 1}. {va.NOMBRE} - {va.DEPENDENCI} - {va.NIVEL}
                </P>
              ))}
            </>
          ))}
        </ContainerNearPlaces>
      )}

      {p.showbtn ? (
        <>
          <InputFile type="file" onChange={(e) => p.handleFile(e)} />
          <ContainerBtn>
            {btnJSX.map((v, i) => (
              <Btn key={i} marginInElements="0px" onClick={v.click}>
                {v.txt}
              </Btn>
            ))}
            <Btn marginInElements="0px" onClick={handleUpdateStateRE}>
              {stateAvailable
                ? text.profileBtnAvailable
                : text.profileBtnNoAvailable}
            </Btn>
          </ContainerBtn>
        </>
      ) : (
        <>
          <Btn marginInElements="0px">{textBtn}</Btn>
          {p.showMoreInfo == "General" && (
            <Btn
              marginInElements="0px"
              onClick={() => p.handleShowMoreInfo("Specific")}
            >
              {text.visitUserShowMoreInfo}
            </Btn>
          )}
          {p.showMoreInfo == "Specific" && (
            <>
              <Btn
                marginInElements="0px"
                onClick={() => p.handleShowMoreInfo("General")}
              >
                {text.visitUserShowLessInfo}
              </Btn>
              <Btn
                marginInElements="0px"
                onClick={() => p.handleShowMoreInfo("Near places")}
              >
                Lugares cercanos
              </Btn>
            </>
          )}

          {p.showMoreInfo == "Near places" && (
            <>
              <Btn
                marginInElements="0px"
                onClick={() => p.handleShowMoreInfo("General")}
              >
                {text.visitUserShowLessInfo}
              </Btn>
            </>
          )}
        </>
      )}
    </ContainerContent>
  );
};

ContentTextModal.defaultProps = {
  showbtn: true,
};
export default ContentTextModal;
