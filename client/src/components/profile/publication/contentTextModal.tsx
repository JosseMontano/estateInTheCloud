import { RealEstate } from "../../../interface/realEstate";
import { ContainerContent, Button, H2, P } from "../../../styles/modal/perfil";
import { InputFile } from "../../../styles/globals";

interface params {
  v: RealEstate;
  handleAddNewPhoto: () => void;
  handleDelete: () => void;
  handleFile: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAnswerQuestion: (id: number) => void;
}

const ContentTextModal = (p: params) => {
  return (
    <ContainerContent>
      <H2>{p.v.title}</H2>
      <P>{p.v.description}</P>
      <InputFile type="file" onChange={(e) => p.handleFile(e)} />

      <Button onClick={() => p.handleAddNewPhoto()} ColorBtn={"#229ff2"}>
        Agregar foto
      </Button>

      <Button
        onClick={() => p.handleAnswerQuestion(p.v.idrealestate)}
        ColorBtn={"#425e70"}
      >
        Responder preguntas
      </Button>

      <Button ColorBtn={"#ff26009e"} onClick={() => p.handleDelete()}>
        Eliminar
      </Button>
    </ContainerContent>
  );
};

export default ContentTextModal;
