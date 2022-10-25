import { ToastContext } from "../../../context/toast";
import { useContext, useState } from "react";
import styled from "styled-components";
import { NameUserContext } from "../../../context/nameUser";
import { saveRealEstate } from "../../../services/realEstate";
import Loading from "../../../components/dynamic/loadingAndResponse";
import Form from "./form";

const Container = styled.div`
  display: grid;
  place-content: center;
`;

interface Params {
  getRealEstate: () => void;
}

const Index = ({ getRealEstate }: Params) => {
  const { toast } = useContext(ToastContext);
  const { idUser } = useContext<any>(NameUserContext);
  const [response, setResponse] = useState(false);
  const [loading, setLoading] = useState(false);
  const { handleToast } = useContext(ToastContext); //toast

  const [formData, setFormData] = useState({
    title: "",
    description: "",
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
      data.append("id_user", idUser);
      const res = await saveRealEstate(data);
      if (res?.status === 200) {
        handleToast("El proceso fue exitoso");
        getRealEstate();
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
