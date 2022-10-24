import { RealEstate } from "../../../interface/realEstate";
import {
  deleteRealEstateProfil,
  addNewPhotoToRealEstate,
  getRealEstateOfOnePublication,
} from "../../../services/realEstate";
import { useContext, useEffect, useState } from "react";
import { ToastContext } from "../../../context/toast";
import { Container } from "../../../styles/modal/perfil";
import ContentTextModal from "./contentTextModal";
import { useNavigate } from "react-router-dom";
import ContentImg from "./modal/contentImg";
import LoadAndResponse from "../../home/modalQuestion/loadAndResponse";

export const ContentModal = (v: RealEstate) => {
  const { toast, handleToast } = useContext(ToastContext);
  const [response, setResponse] = useState(false);
  const [load, setLoad] = useState(true);
  const [photo, setPhoto] = useState<any>("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleDelete = async () => {
    setLoading(true);
    const res = await deleteRealEstateProfil(
      v.idrealestatephoto,
      v.idphoto,
      v.idrealestate
    );
    if (res?.ok) {
      handleToast("El proceso fue exitoso");
    } else {
      handleToast("Ha ocurrido un error");
    }
    setResponse(true);
    setTimeout(() => setResponse(false), 3000);
    setLoading(false);
  };

  const handleAddNewPhoto = async () => {
    setLoading(true);
    const dataForm = new FormData();
    dataForm.append("url", photo);
    const res = await addNewPhotoToRealEstate(v.idrealestate, dataForm);
    const r = await res?.json();
    if (r.action)
      handleToast("guardado!, cierre la ventana y vuelvala a abrir");
    else handleToast("Ha ocurrido un error");
    setResponse(true);
    setTimeout(() => setResponse(false), 3000);
    setLoading(false);
  };

  const handleGetEstate = async () => {
    const res = await getRealEstateOfOnePublication(v.idrealestate);
    setData(res);
    setLoad(false);
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoto(e.target.files![0]);
  };

  const handleAnswerQuestion = (id: number) => {
    navigate(`/answeQuestion/${id}`);
  };
  
  useEffect(() => {
    handleGetEstate();
  }, []);

  return (
    <Container>
      <ContentImg data={data} load={load} />

      <ContentTextModal
        v={v}
        handleAddNewPhoto={handleAddNewPhoto}
        handleDelete={handleDelete}
        handleFile={handleFile}
        handleAnswerQuestion={handleAnswerQuestion}
      />

      <LoadAndResponse loading={loading} response={response} msg={toast} />
    </Container>
  );
};
