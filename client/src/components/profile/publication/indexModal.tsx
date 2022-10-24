import { RealEstate } from "../../../interface/realEstate";
import Slider from "react-slick";
import {
  deleteRealEstateProfil,
  addNewPhotoToRealEstate,
  getRealEstateOfOnePublication,
} from "../../../services/realEstate";
import { useContext, useEffect, useState } from "react";
import Message from "../../message";
import { ToastContext } from "../../../context/toast";
import ImgCom from "./modal/img";
import { Container } from "../../../styles/modal/perfil";
import Load from "./modal/load";
import Loader from "../../loader";
import ContentTextModal from "./contentTextModal";
import { useNavigate } from "react-router-dom";
export const ContentModal = (v: RealEstate) => {
  const { toast, handleToast } = useContext(ToastContext);
  const [response, setResponse] = useState(false);
  const [load, setLoad] = useState(true);
  const [photo, setPhoto] = useState<any>("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
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
      {load ? (
        <Load />
      ) : (
        <Slider className="slick">
          {data.map((va, i) => (
            <ImgCom {...(va as object)} key={i} />
          ))}
        </Slider>
      )}

      <ContentTextModal
        v={v}
        handleAddNewPhoto={handleAddNewPhoto}
        handleDelete={handleDelete}
        handleFile={handleFile}
        handleAnswerQuestion={handleAnswerQuestion}
      />

      {loading && <Loader />}
      {response && <Message msg={toast} />}
    </Container>
  );
};
