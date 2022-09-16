import { RealEstate } from "../../../interface/realEstate";
import Slider from "react-slick";
import {
  deleteRealEstateProfil,
  addNewPhotoToRealEstate,
  getRealEstateOfOnePublication,
} from "../../../services/realEstate";
import { InputFile } from "../../../styles/globals";
import { useContext, useEffect, useState } from "react";
import Message from "../../../components/message";
import { ToastContext } from "../../../context/toast";
import ImgCom from "./modal/img";
import {
  Container,
  ContainerContent,
  Button,
  H2,
  P,
} from "../../../styles/modal/perfil";
import Load from "./modal/load";

export const ContentModal = (v: RealEstate) => {
  const { toast, handleToast } = useContext(ToastContext);
  const [response, setResponse] = useState(false);
  const [load, setLoad] = useState(true);
  const [photo, setPhoto] = useState<any>("");
  const [data, setData] = useState([]);
  const handleDelete = async () => {
    const res = await deleteRealEstateProfil(
      v.idrealestatephoto,
      v.idphoto,
      v.idrealestate
    );
    if (res.action) {
      handleToast("El proceso fue exitoso");
    } else handleToast("Ha ocurrido un error");
    setResponse(true);
    setTimeout(() => setResponse(false), 3000);
  };

  const handleAddNewPhoto = async () => {
    const dataForm = new FormData();
    dataForm.append("url", photo);
    const res = await addNewPhotoToRealEstate(v.idrealestate, dataForm);
    const r = await res?.json();
    if (r.action) handleToast("El proceso fue exitoso");
    else handleToast("Ha ocurrido un error");
    setResponse(true);
    setTimeout(() => setResponse(false), 3000);
  };
  const handleGetEstate = async () => {
    const res = await getRealEstateOfOnePublication(v.idrealestate);
    setData(res);
    setLoad(false);
  };
  useEffect(() => {
    handleGetEstate();
  }, []);

  return (
    <Container>
      {load ? (
     <Load />
      ) : (
        <Slider className="slick">
          {data.map((va, i) => (
            <ImgCom {...(va as object)} key={i} />
          ))}
        </Slider>
      )}

      <ContainerContent>
        <H2>{v.title}</H2>
        <P>{v.description}</P>
        <InputFile type="file" onChange={(e) => setPhoto(e.target.files![0])} />
        <Button onClick={() => handleAddNewPhoto()} ColorBtn={"#229ff2"}>
          Agregar foto
        </Button>
        <Button ColorBtn={"#ff26009e"} onClick={() => handleDelete()}>
          Eliminar
        </Button>
      </ContainerContent>
      {response && <Message msg={toast} />}
    </Container>
  );
};
