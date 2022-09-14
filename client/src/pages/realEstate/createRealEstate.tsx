import { ToastContext } from "../../context/toast";
import {
  ColorBtn,
  Input,
  Label,
  ColorText,
  Button,
  TextArea,
  InputFile,
} from "../../styles/globals";
import { useContext, useState } from "react";
import styled from "styled-components";
import Message from "../../components/message";
import { NameUserContext } from "../../context/nameUser";
import { saveRealEstate } from "../../services/realEstate";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  place-content: center;
`;

const Index = () => {
  const { toast } = useContext(ToastContext);

  const { idUser } = useContext<any>(NameUserContext);
  const [photo, setPhoto] = useState<any>("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [response, setResponse] = useState(false);
  const { handleToast } = useContext(ToastContext); //toast
  const sendData = async () => {
    try {
      const data = new FormData();
      data.append("url", photo);
      data.append("title", title);
      data.append("description", description);
      data.append("id_user", idUser);
      const res = await saveRealEstate(data);
      if (res?.status === 200) {
        handleToast("El proceso fue exitoso");
      } else {
        handleToast("Ha ocurrido un error");
      }
      setResponse(true);
      setTimeout(() => setResponse(false), 3000);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Label colorText={ColorText}>Title</Label>
      <Input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <Label colorText={ColorText}>Description</Label>
      <TextArea
        cols={40}
        rows={7}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <InputFile type="file" onChange={(e) => setPhoto(e.target.files![0])} />

      <Button ColorBtn={ColorBtn} onClick={() => sendData()}>
        Save
      </Button>

      {response && <Message msg={toast} />}
    </Container>
  );
};

export default Index;
