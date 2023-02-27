import { RealEstate } from "@/global/interfaces/realEstate";
import { ContainerContent, H2, P, ContainerBtn } from "@/global/styles/modal/perfil";
import { InputFile } from "@/global/styles/globals";
import { useState } from "react";
import { useLanguage } from "@/global/context/languageContext";
import { Btn } from "@/global/styles/btn";

interface params {
  v: RealEstate;
  showbtn?: boolean;
  handleAddNewPhoto: () => void;
  handleDelete: () => void;
  handleFile: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAnswerQuestion: (id: number) => void;
  handleUpdateState: (id: number, available: number) => void;
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

  return (
    <ContainerContent>
      <H2>{p.v.title}</H2>
      <P>{p.v.description}</P>

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
        <Btn marginInElements="0px">{textBtn}</Btn>
      )}
    </ContainerContent>
  );
};

ContentTextModal.defaultProps = {
  showbtn: true,
};
export default ContentTextModal;
