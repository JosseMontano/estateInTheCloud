import styled from "styled-components";
import { Input, Label, Button } from "jz-validation-form";
import ShowTypeRealEstate from "@/components/global/showTypeRealEstate";
import Event from "@/interface/event";
import { ColorBtn } from "@/styles/globals";
import { useLanguage } from "@/context/languageContext";
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

const Child = styled.div`
  margin-top: 10px;
`;

const ConAux = styled.div`
  display: flex;
  input {
    margin: 0px 5px;
  }
`;

const Index = () => {
  const { text } = useLanguage();
  const handleChange = (e: Event["inputChange"]) => {};
  return (
    <Container>
      <Child>
        <Label>{text.filterCustomPrice}</Label>
        <ConAux>
          <Input type="text" placeholder="700" />
          <Input type="text" placeholder="1000" />
        </ConAux>
      </Child>

      <Child>
        <Label>{text.filterBedroom}</Label>
        <ConAux>
          <Input type="text" placeholder="3" />
        </ConAux>
      </Child>

      <Child>
        <Label>{text.filterCustomBathroom}</Label>
        <ConAux>
          <Input type="text" placeholder="2" />
        </ConAux>
      </Child>
      <ShowTypeRealEstate handleChange={handleChange} />
      <Child>
        <Label>{text.filterCustomSize}</Label>
        <ConAux>
          <Input type="text" placeholder="25" />
          <Input type="text" placeholder="40" />
        </ConAux>
      </Child>

      <Button ColorBtn={ColorBtn}>Buscar</Button>
    </Container>
  );
};

export default Index;
