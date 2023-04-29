import { useState } from "react";
import styled from "styled-components";
import { useNameUser } from "@/global/context/nameUserContext";
import { saveRealEstate } from "@/public/profile/services/post";
import Loading from "@/global/components/toast/loadAndResponse";
import FirstForm from "./firstForm";
import { RealEstate } from "@/global/interfaces/realEstate";
import useToast from "@/global/hooks/useToast";
import funFormData from "@/global/utilities/formData";
import Event from "@/global/interfaces/event";
import SecondForm from "./secondForm";
import MapForm from "./mapForm";

const Container = styled.div`
  display: grid;
  place-content: center;
`;

interface Params {
  createRealEstate: (data: RealEstate) => void;
}

interface MapFormType {
  [key: number]: JSX.Element;
}

const Index = ({ createRealEstate }: Params) => {
  const { toast, handleToast } = useToast();
  const { idUser } = useNameUser();
  const [response, setResponse] = useState(false);
  const [loading, setLoading] = useState(false);
  const [paginationForm, setPaginationForm] = useState(1);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    id_type: "1",
    bedroom: "",
    price: "",
    bathroom: "",
    squareMeter: "",
    id_user: idUser,
    url: "",
  });

  const handleChange = (e: Event["inputChange"]) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendData = async (photo?: any) => {
    setLoading(true);

    let vecFormData = [
      {
        type: "url",
        val: photo,
      },
      {
        type: "title",
        val: formData.title,
      },
      {
        type: "description",
        val: formData.description,
      },
      {
        type: "id_type",
        val: formData.id_type,
      },
      {
        type: "id_user",
        val: idUser,
      },
      {
        type: "bedroom",
        val: formData.bedroom,
      },
      {
        type: "price",
        val: formData.price,
      },
      {
        type: "bathroom",
        val: formData.bathroom,
      },
      {
        type: "squareMeter",
        val: formData.squareMeter,
      },
    ];

    setFormData({
      ...formData,
      id_user: idUser,
    });
    /* console.log(vecFormData) */
    /*  const data = funFormData(vecFormData); */
    const res = await saveRealEstate(formData, photo);

    if (res != null) {
      handleToast("El proceso fue exitoso");
      createRealEstate(await res);
    } else {
      handleToast("Ha ocurrido un error");
    }

    setResponse(true);
    setTimeout(() => setResponse(false), 3000);
    setLoading(false);
  };

  const changeForm = (pagine: number) => {
    setPaginationForm(pagine);
  };

  const mapForm: MapFormType = {
    1: <MapForm changeForm={changeForm} paginationForm={paginationForm} />,
    2: (
      <FirstForm
        handleChange={handleChange}
        changeForm={changeForm}
        paginationForm={paginationForm}
      />
    ),
    3: (
      <SecondForm
        handleChange={handleChange}
        sendData={sendData}
        paginationForm={paginationForm}
        changeForm={changeForm}
      />
    ),
  };

  function showForm() {
    return mapForm[paginationForm];
  }
  return (
    <Container>
      <>
        {showForm()}
        <Loading loading={loading} msg={toast} response={response} />
      </>
    </Container>
  );
};

export default Index;
