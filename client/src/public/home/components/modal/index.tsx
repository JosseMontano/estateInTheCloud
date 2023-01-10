import styled from "styled-components";
import Card from "./card";
import { RealEstate } from "@/global/interfaces/realEstate";
export const ContainerSoon = styled.div`
  width: 300px;
  height: 400px;
`;

interface Params {
  dataFilter: RealEstate[];
}

const Index = ({ dataFilter }: Params) => {
  return (
    <>
      {dataFilter.map((v, i) => (
        <Card key={i} v={v} />
      ))}
    </>
  );
};

export default Index;
