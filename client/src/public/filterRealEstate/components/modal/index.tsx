import styled from "styled-components";
import ShowTypeRealEstate from "@/global/components/showTypeRealEstate";
import Event from "@/global/interfaces/event";
import { useLanguage } from "@/global/context/languageContext";
import FormComponent from "./form";
import { RealEstateFilterCustom } from "../../interfaces/filterCustom";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

interface Params {
  searchCustom: (form: RealEstateFilterCustom) => void;
  handleChangeInput : (e: Event["inputChange"]) =>void
}

const Index = ({ searchCustom, handleChangeInput }: Params) => {
  const { text } = useLanguage();
 

  return (
    <Container>
      <FormComponent searchCustom={searchCustom} />
      <ShowTypeRealEstate handleChange={handleChangeInput} />
    </Container>
  );
};

export default Index;
