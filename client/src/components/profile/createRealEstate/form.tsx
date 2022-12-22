import { useState } from "react";
import { ColorBtn, ColorText, InputFile } from "@/styles/globals";
import { Input, Label, Button, TextArea } from "jz-validation-form";
import { getTypeRealEstate } from "@/services/realEstate";
import useLoadData from "@/hooks/useFetch";
import Select from "./select";
import ParamsTypeRealEstate from "@/interface/typeRealEstate";
import { useLanguage } from "@/context/languageContext";
interface Params {
  handleChange: (e: any) => void;
  sendData: (photo: any) => void;
}

const Form = ({ handleChange, sendData }: Params) => {
  const [photo, setPhoto] = useState<any>("");
  const { text } = useLanguage();
  const { data } = useLoadData<ParamsTypeRealEstate>(getTypeRealEstate);

  const handleSend = () => {
    sendData(photo);
  };

  return (
    <>
      <Label colorText={ColorText}>{text.createPublicationTitle}</Label>
      <Input
        type="text"
        name={"title"}
        onChange={(e) => handleChange(e)}
        required
      />

      <Label colorText={ColorText}>{text.createPublicationDescription}</Label>
      <TextArea
        cols={40}
        rows={7}
        name={"description"}
        onChange={(e) => handleChange(e)}
        required
      />

      <Label colorText={ColorText}>{text.createPublicationType}</Label>
      <select
        defaultValue={"DEFAULT"}
        name={"id_type"}
        onChange={(e) => handleChange(e)}
      >
        <option value={"DEFAULT"} disabled>
          Choose option
        </option>
        {data.map((v, i) => (
          <Select key={i} v={v} />
        ))}
      </select>

      <InputFile type="file" onChange={(e) => setPhoto(e.target.files![0])} />

      <Button ColorBtn={ColorBtn} onClick={() => handleSend()}>
        Save
      </Button>
    </>
  );
};

export default Form;
