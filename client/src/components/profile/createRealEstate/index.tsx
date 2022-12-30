import { useState } from "react";
import styled from "styled-components";
import { useNameUser } from "@/context/nameUserContext";
import { saveRealEstate } from "@/services/realEstate";
import Loading from "@/components/dynamic/loadingAndResponse";
import Form from "./form";
import { RealEstate } from "@/interface/realEstate";
import useToast from "@/hooks/useToast";
import funFormData from "@/utilities/formData";
import Event from "@/interface/event";

const Container = styled.div`
  display: grid;
  place-content: center;
`;

interface Params {
  createRealEstate: (data: RealEstate) => void;
}

const Index = ({ createRealEstate }: Params) => {
  const { toast, handleToast } = useToast();
  const { idUser } = useNameUser();
  const [response, setResponse] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    id_type: "1",
  });

  const handleChange = (e: Event["inputChange"]) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendData = async (photo: any) => {
    try {
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
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Form handleChange={handleChange} sendData={sendData} />
      <Loading loading={loading} msg={toast} response={response} />
    </Container>
  );
};

export default Index;
