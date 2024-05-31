import { Input, Label } from "jz-validation-form";
import {
  ColorBtn,
  ColorText,
  InputFile,
  ColorBtnSecond,
  Button,
} from "@/global/styles/globals";
import { useLanguage } from "@/global/context/languageContext";
import Event from "@/global/interfaces/event";
import { useState } from "react";
import styled from "styled-components";

import Loader from "@/global/components/toast/loading";
import BtnLoader from "@/global/components/btnLoder";

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
  loading: boolean;
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
      <Input type="text" name={"price"} onChange={handleChange} />

      <Label colorText={ColorText}>{text.createPublicationBathroom}</Label>
      <Input type="text" name={"bathroom"} onChange={handleChange} />

      <Label colorText={ColorText}>{text.createPublicationSquareMert}</Label>
      <Input type="text" name={"squareMeter"} onChange={handleChange} />

      <InputFile type="file" onChange={(e) => setPhoto(e.target.files![0])} />

      <Button
        ColorBtn={ColorBtnSecond}
        onClick={() => changeForm(paginationForm - 1)}
      >
        {text.createPublciationBtnBack}
      </Button>

      <BtnLoader
        handleSend={handleSend}
        text={text.createPublciationBtnSave}
        colorBtn={ColorBtn}
        loading={params.loading}
      />
    </Container>
  );
};

export default SecondForm;
