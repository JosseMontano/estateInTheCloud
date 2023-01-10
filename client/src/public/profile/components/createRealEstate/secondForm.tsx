import { Input, Label, Button, TextArea } from "jz-validation-form";
import {
  ColorBtn,
  ColorText,
  InputFile,
  ColorBtnSecond,
} from "@/styles/globals";
import { useLanguage } from "@/context/languageContext";
import Event from "@/global/interfaces/event";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
 animation: moveBack 1s;
  transform: translateX(0px);
  @keyframes moveBack {
    0% {
      transform: translateX(50px);
      opacity: 0;
    }
    100% {
      transform: translateX(0px);
      opacity: 1;
    }
  } 
`;

interface Params {
  handleChange: (e: Event["inputChange"]) => void;
  sendData: (photo: any) => void;
  changeForm: (pagiantion: number) => void;
  paginationForm: number;
}

const SecondForm = (params: Params) => {
  const { handleChange, sendData, changeForm, paginationForm } = params;

  const { text } = useLanguage();
  const [photo, setPhoto] = useState<any>("");

  const handleSend = () => {
    sendData(photo);
  };

  return (
    <Container>
      <Label colorText={ColorText}>{text.createPublicationPrice}</Label>
      <Input type="text" name={"price"} onChange={(e) => handleChange(e)} />

      <Label colorText={ColorText}>{text.createPublicationBathroom}</Label>
      <Input type="text" name={"bathroom"} onChange={(e) => handleChange(e)} />

      <Label colorText={ColorText}>{text.createPublicationSquareMert}</Label>
      <Input
        type="text"
        name={"squareMeter"}
        onChange={(e) => handleChange(e)}
      />

      <InputFile type="file" onChange={(e) => setPhoto(e.target.files![0])} />

      <Button
        ColorBtn={ColorBtnSecond}
        onClick={() => changeForm(paginationForm - 1)}
      >
        {text.createPublciationBtnBack}
      </Button>

      <Button ColorBtn={ColorBtn} onClick={() => handleSend()}>
        {text.createPublciationBtnSave}
      </Button>
    </Container>
  );
};

export default SecondForm;
