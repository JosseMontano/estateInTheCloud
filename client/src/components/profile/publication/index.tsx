import styled from "styled-components";
import ContentImg from "./contentImg";
import { RealEstate } from "../../../interface/realEstate";

const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  margin-top: 15px;
`;
const ContainerFather = styled.div`
  display: grid;
  gap: 1px;
  grid-template-columns: repeat(3, 1fr);
  place-content: center;
  @media screen and (max-width: 1040px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 730px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const TextEmpty = styled.div`
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  margin-top: 15px;
  text-transform: uppercase;
`;
interface Params {
  data: RealEstate[];
  empty: boolean;
}

const Index = ({ data, empty }: Params) => {
  function showTitle() {
    if (empty) return <TextEmpty>No tienes publicaciones</TextEmpty>;
    return <Title>publicaciones</Title>;
  }

  function showData() {
    if (!empty) {
      return data.map((v, i) => <ContentImg key={i} {...v} />);
    }
  }

  return (
    <>
      {showTitle()}
      <ContainerFather>{showData()}</ContainerFather>
    </>
  );
};

export default Index;
