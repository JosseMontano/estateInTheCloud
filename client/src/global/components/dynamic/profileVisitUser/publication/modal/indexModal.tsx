import { RealEstate, FormDeleteType } from "@/global/interfaces/realEstate";
import {
  addNewPhotoToRealEstate,
  getRealEstateOfOnePublication as services,
  updateStateRealEstate,
} from "@/services/realEstate";
import { useState } from "react";
import useToast from "@/global/hooks/useToast";
import { Container } from "@/styles/modal/perfil";
import ContentTextModal from "./contentTextModal";
import { useNavigate } from "react-router-dom";
import ContentImg from "./contentImg";
import LoadAndResponse from "@/global/components/loadAndResponse";
import useLoadData from "@/global/hooks/useFetch";
import REOnePublicationType from "@/global/interfaces/realEstateOfOnePublication";
import Event from "@/global/interfaces/event";
import { useProfile } from "@/global/context/profileContext";
interface Params {
  v: RealEstate;
  showbtn: boolean;
}

export const ContentModal = ({ v, showbtn }: Params) => {
  const { toast, handleToast } = useToast();

  const [response, setResponse] = useState(false);
  const [photo, setPhoto] = useState<any>("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { deleteRealEstate, updateState } = useProfile();
  const { data, loading: load } = useLoadData<REOnePublicationType>(
    services,
    v.idrealestate
  );

  const handleDelete = async () => {
    const form: FormDeleteType = {
      idrealestatephoto: v.idrealestatephoto,
      idphoto: v.idphoto,
      idrealestate: v.idrealestate,
    };
    await deleteRealEstate(form);
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
    await updateState(id, available);
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
