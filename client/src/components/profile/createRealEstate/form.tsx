import { useState } from "react";
import {
  ColorBtn,
  Input,
  Label,
  ColorText,
  Button,
  TextArea,
  InputFile,
} from "../../../styles/globals";

interface Params {
  handleChange: (e: any) => void;
  sendData: (photo: any) => void;
}

const Form = ({ handleChange, sendData }: Params) => {
  const [photo, setPhoto] = useState<any>("");

  const handleSend = () => {
    sendData(photo);
  };

  return (
    <>
      <Label colorText={ColorText}>Title</Label>
      <Input
        type="text"
        name={"title"}
        onChange={(e) => handleChange(e)}
        required
      />
      
      <Label colorText={ColorText}>Description</Label>
      <TextArea
        cols={40}
        rows={7}
        name={"description"}
        onChange={(e) => handleChange(e)}
        required
      />

      <InputFile type="file" onChange={(e) => setPhoto(e.target.files![0])} />

      <Button ColorBtn={ColorBtn} onClick={() => handleSend()}>
        Save
      </Button>
    </>
  );
};

export default Form;
