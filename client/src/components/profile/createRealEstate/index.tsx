import { useContext, useState } from "react";
import styled from "styled-components";
import { NameUserContext } from "@/context/nameUserContext";
import { saveRealEstate } from "@/services/realEstate";
import Loading from "@/components/dynamic/loadingAndResponse";
import Form from "./form";
import { RealEstate } from "@/interface/realEstate";
import useToast from "@/hooks/useToast";
const Container = styled.div`
  display: grid;
  place-content: center;
`;

interface Params {
  createRealEstate: (data: RealEstate) => void;
}

const Index = ({ createRealEstate }: Params) => {
  const { toast, handleToast } = useToast();
  const { idUser } = useContext<any>(NameUserContext);
  const [response, setResponse] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    id_type: "1",
  });

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendData = async (photo: any) => {
    try {
      setLoading(true);
      const data = new FormData();
      data.append("url", photo);
      data.append("title", formData.title);
      data.append("description", formData.description);
      data.append("id_type", formData.id_type);
      data.append("id_user", idUser);
      const res = await saveRealEstate(data);
      if (res) {
        console.log(res.status);
        if (res.status == 200) {
          handleToast("El proceso fue exitoso");
          createRealEstate(await res.json());
        } else {
          handleToast("Ha ocurrido un error");
        }
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
