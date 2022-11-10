import styled from "styled-components";
import Card from "./card";
import { RealEstate } from "@/interface/realEstate";
export const ContainerSoon = styled.div`
  width: 300px;
  height: 400px;
`;

interface Params {
  dataFilter: RealEstate[];
  toggle: () => void;
  isShown: boolean;
}

const Index = ({ dataFilter, toggle, isShown }: Params) => {
  return (
    <>
      {dataFilter.map((v, i) => (
        <Card key={i} toggle={toggle} v={v} isShown={isShown} />
      ))}
    </>
  );
};

export default Index;
