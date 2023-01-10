import styled from "styled-components";
import ShowTypeRealEstate from "@/global/components/showTypeRealEstate";
import Event from "@/global/interfaces/event";
import { useLanguage } from "@/context/languageContext";
import FormComponent from "./form";
import { RealEstateFilterCustom } from "../../interfaces/filterCustom";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

interface Params {
  searchCustom: (form: RealEstateFilterCustom) => void;
}

const Index = ({ searchCustom }: Params) => {
  const { text } = useLanguage();
  const handleChange = (e: Event["inputChange"]) => {};

  return (
    <Container>
      <FormComponent searchCustom={searchCustom} />
      <ShowTypeRealEstate handleChange={handleChange} />
    </Container>
  );
};

export default Index;
