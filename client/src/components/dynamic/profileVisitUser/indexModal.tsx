import { RealEstate } from "@/interface/realEstate";
import {
  deleteRealEstateProfil,
  addNewPhotoToRealEstate,
  getRealEstateOfOnePublication as services,
  updateStateRealEstate,
} from "@/services/realEstate";
import { useContext, useState } from "react";
import useToast from "@/hooks/useToast";
import { Container } from "@/styles/modal/perfil";
import ContentTextModal from "./contentTextModal";
import { useNavigate } from "react-router-dom";
import ContentImg from "../../dynamic/profileVisitUser/modal/contentImg";
import LoadAndResponse from "../../home/modalQuestion/loadAndResponse";
import useLoadData from "@/hooks/useFetch";
import REOnePublicationType from "@/interface/realEstateOfOnePublication";
import Event from "@/interface/event";

interface Params {
  v: RealEstate;
  showbtn: boolean;
  deleteRealEstate?: (id: number) => void;
  updateStateRE?: (available: boolean, id: number) => void;
}

export const ContentModal = ({
  v,
  showbtn,
  deleteRealEstate,
  updateStateRE,
}: Params) => {
  const { toast, handleToast } = useToast();

  const [response, setResponse] = useState(false);
  const [photo, setPhoto] = useState<any>("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { data, loading: load } = useLoadData<REOnePublicationType>(
    services,
    v.idrealestate
  );

  const handleDelete = async () => {
    setLoading(true);
    const res = await deleteRealEstateProfil(
      v.idrealestatephoto,
      v.idphoto,
      v.idrealestate
    );
    if (res.action) {
      handleToast("El proceso fue exitoso");
    } else {
      handleToast("Ha ocurrido un error");
    }
    if (deleteRealEstate) deleteRealEstate(v.idrealestate);
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

  const handleFile = (e: Event["file"]) => {
    setPhoto(e.target.files![0]);
  };

  const handleAnswerQuestion = (id: number) => {
    navigate(`/answeQuestion/${id}`);
  };

  const handleUpdateState = async (id: number, available: number) => {
    await updateStateRealEstate(id, available);
    if (updateStateRE) updateStateRE(v.available, id);
  };

  return (
    <Container>
      <ContentImg data={data} load={load} />

      <ContentTextModal
        v={v}
        showbtn={showbtn}
        handleAddNewPhoto={handleAddNewPhoto}
        handleDelete={handleDelete}
        handleFile={handleFile}
        handleAnswerQuestion={handleAnswerQuestion}
        handleUpdateState={handleUpdateState}
      />

      <LoadAndResponse loading={loading} response={response} msg={toast} />
    </Container>
  );
};
