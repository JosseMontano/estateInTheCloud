import { useState } from "react";
import styled from "styled-components";
import { useNameUser } from "@/context/nameUserContext";
import { saveRealEstate } from "@/services/realEstate";
import Loading from "@/components/dynamic/loadingAndResponse";
import FirstForm from "./firstForm";
import { RealEstate } from "@/interfaces/realEstate";
import useToast from "@/hooks/useToast";
import funFormData from "@/utilities/formData";
import Event from "@/interfaces/event";
import SecondForm from "./secondForm";

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
    id_user: 0,
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

    const data = funFormData(vecFormData);

    const res = await saveRealEstate(data);

    if (res?.status == 200) {
      handleToast("El proceso fue exitoso");
      createRealEstate(await res.json());
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
    1: (
      <FirstForm
        handleChange={handleChange}
        changeForm={changeForm}
        paginationForm={paginationForm}
      />
    ),
    2: (
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
