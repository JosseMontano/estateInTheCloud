import { RealEstate } from "@/interface/realEstate";
import {
  ContainerContent,
  Button,
  H2,
  P,
  ContainerBtn,
} from "@/styles/modal/perfil";
import { InputFile } from "@/styles/globals";

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
  return (
    <ContainerContent>
      <H2>{p.v.title}</H2>
      <P>{p.v.description}</P>

      {p.showbtn && (
        <>
          <InputFile type="file" onChange={(e) => p.handleFile(e)} />
          <ContainerBtn>
            <Button onClick={() => p.handleAddNewPhoto()} ColorBtn={"#229ff2"}>
              Agregar foto
            </Button>
            <Button ColorBtn={"#ff26009e"} onClick={() => p.handleDelete()}>
              Eliminar Foto
            </Button>
            <Button
              onClick={() => p.handleAnswerQuestion(p.v.idrealestate)}
              ColorBtn={"#425e70"}
            >
              Preguntas
            </Button>

            {p.v.state === "Disponible" ? (
              <Button
                ColorBtn={"#00ff9d9e"}
                onClick={() => p.handleUpdateState(p.v.idrealestate, 0)}
              >
                Disponible
              </Button>
            ) : (
              <Button
                ColorBtn={"#51ff009e"}
                onClick={() => p.handleUpdateState(p.v.idrealestate, 1)}
              >
                No disponible
              </Button>
            )}
          </ContainerBtn>
        </>
      )}
    </ContainerContent>
  );
};

ContentTextModal.defaultProps = {
  showbtn: true,
};
export default ContentTextModal;
