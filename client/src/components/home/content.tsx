import Card from "./card";
import { RealEstate } from "@/interface/realEstate";
import Title from "./title";
import styled from "styled-components";

const ContainerCard = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

interface Params {
  title: string;
  data: RealEstate[];
  visitUser: (idUser: number, email: string) => void;
}
const Index = ({ data, title, visitUser }: Params) => {
  return (
    <>
      <Title title={title} />
      <ContainerCard>
        {data.map((va, i) => (
          <Card key={i} v={va} visitUser={visitUser} />
        ))}
      </ContainerCard>
    </>
  );
};

export default Index;
