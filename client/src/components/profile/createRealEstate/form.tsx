import { useState } from "react";
import { ColorBtn, ColorText, InputFile } from "@/styles/globals";
import { Input, Label, Button, TextArea } from "jz-validation-form";

import { useLanguage } from "@/context/languageContext";
import Event from "@/interface/event";
import ShowTypeRealEstate from "@/components/global/showTypeRealEstate";
interface Params {
  handleChange: (e: Event["inputChange"]) => void;
  sendData: (photo: any) => void;
}

const Form = ({ handleChange, sendData }: Params) => {
  const [photo, setPhoto] = useState<any>("");
  const { text } = useLanguage();

  const handleSend = () => {
    sendData(photo);
  };

  return (
    <>
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

      <InputFile type="file" onChange={(e) => setPhoto(e.target.files![0])} />

      <Button ColorBtn={ColorBtn} onClick={() => handleSend()}>
        Save
      </Button>
    </>
  );
};

export default Form;
