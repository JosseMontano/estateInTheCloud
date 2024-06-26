import { RealEstate, FormDeleteType } from "@/global/interfaces/realEstate";
import {
  addNewPhotoToRealEstate,
  getRealEstateOfOnePublication as services,
} from "@/global/services/realEstate";
import { useState } from "react";
import useToast from "@/global/hooks/useToast";
import { Container } from "@/global/styles/modal/perfil";
import ContentTextModal from "./contentTextModal";
import { useNavigate } from "react-router-dom";
import ContentImg from "./contentImg";
import LoadAndResponse from "@/global/components/toast/loadAndResponse";
import useLoadData from "@/global/hooks/useFetch";
import REOnePublicationType from "@/global/interfaces/realEstateOfOnePublication";
import Event from "@/global/interfaces/event";
import { useProfile } from "@/global/context/profileContext";
import { ShowInfo } from "../types/showInfo";
import UsePlacesNear from "@/public/visitUser/hooks/usePlacesNear";
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
    v.id_real_estate
  );

  const handleDelete = async () => {
    const form: FormDeleteType = {
      idrealestatephoto: v.id_real_estate_photo,
      idphoto: v.id_photo,
      idrealestate: v.id_real_estate,
    };
    await deleteRealEstate(form);
  };

  const handleAddNewPhoto = async () => {
    setLoading(true);
    const dataForm = new FormData();
    dataForm.append("url", photo);
    const res = await addNewPhotoToRealEstate(v.id_real_estate, dataForm);
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

  //show more information
  const [showMoreInfo, setshowMoreInfo] = useState<ShowInfo>("General");
  const handleShowMoreInfo = (show: ShowInfo) => {
    setshowMoreInfo(show);
  };

  const { placesNear, handleRedirectToMaps, types, loadingPlacesNear } =
    UsePlacesNear({
      v: v,
    });

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
        handleShowMoreInfo={handleShowMoreInfo}
        showMoreInfo={showMoreInfo}
        placesNear={placesNear}
        handleRedirectToMaps={handleRedirectToMaps}
        types={types}
        loading={loadingPlacesNear}
      />

      <LoadAndResponse loading={loading} response={response} msg={toast} />
    </Container>
  );
};
