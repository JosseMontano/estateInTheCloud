import { ColorBtnSecond, ColorText, InputFile } from "@/global/styles/globals";
import { Input, Label, Button, TextArea } from "jz-validation-form";

import { useLanguage } from "@/global/context/languageContext";
import Event from "@/global/interfaces/event";
import ShowTypeRealEstate from "@/global/components/showTypeRealEstate";
import styled from "styled-components";

const Container = styled.div`
  animation: moveNext 1s;
  transform: translateX(0px);
  @keyframes moveNext {
    0% {
      transform: translateX(-50px);
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
  changeForm: (pagination: number) => void;
  paginationForm: number;
}

const Form = ({ handleChange, changeForm, paginationForm }: Params) => {
  const { text } = useLanguage();

  return (
    <Container>
      <Label colorText={ColorText}>{text.createPublicationTitle}</Label>
      <Input type="text" name={"title"} onChange={(e) => handleChange(e)} />

      <Label colorText={ColorText}>{text.createPublicationDescription}</Label>
      <TextArea
        cols={40}
        rows={7}
        name={"description"}
        onChange={(e) => handleChange(e)}
      />

      <ShowTypeRealEstate handleChange={handleChange} />

      <Label colorText={ColorText}>{text.createPublicationBedrom}</Label>
      <Input type="text" name={"bedroom"} onChange={(e) => handleChange(e)} />

      <Button
        ColorBtn={ColorBtnSecond}
        onClick={() => changeForm(paginationForm + 1)}
      >
        {text.createPublciationBtnNext}
      </Button>
    </Container>
  );
};

export default Form;
