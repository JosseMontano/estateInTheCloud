import styled from "styled-components";
import { Input, Label, Button } from "jz-validation-form";
import ShowTypeRealEstate from "@/components/global/showTypeRealEstate";
import Event from "@/interface/event";
import { ColorBtn } from "@/styles/globals";
import { useLanguage } from "@/context/languageContext";
import Child from "./child";
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

interface childJSXType {
  label: string;
  component: JSX.Element;
}

const Index = () => {
  const { text } = useLanguage();
  const handleChange = (e: Event["inputChange"]) => {};

  const childJSX: childJSXType[] = [
    {
      label: text.filterBedroom,
      component: <Input type="text" placeholder="3" />,
    },
    {
      label: text.filterCustomPrice,
      component: (
        <>
          <Input type="text" placeholder="700" />
          <Input type="text" placeholder="1000" />
        </>
      ),
    },
    {
      label: text.filterCustomBathroom,
      component: <Input type="text" placeholder="2" />,
    },
    {
      label: text.filterCustomSize,
      component: (
        <>
          <Input type="text" placeholder="25" />
          <Input type="text" placeholder="40" />
        </>
      ),
    },
  ];
  
  return (
    <Container>
      {childJSX.map((v, i) => (
        <Child key={i} label={v.label} children={v.component} />
      ))}

      <ShowTypeRealEstate handleChange={handleChange} />

      <Button ColorBtn={ColorBtn}>Buscar</Button>
    </Container>
  );
};

export default Index;
