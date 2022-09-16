import styled from "styled-components";
import ContentImg from "./contentImg";
import { RealEstate } from "../../../interface/realEstate";

const Container = styled.div``;
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

interface Params {
  data: RealEstate[];
  empty:boolean;
}

const Index = (params: Params) => {

  return (
    <Container>
      <Title>publicaciones</Title>
      <ContainerFather>
        {!params.empty && (
            params.data.map((v, i) => (
            <>
              <ContentImg key={i} {...v} />
            </>
          ))
          )}
      </ContainerFather>
    </Container>
  );
};

export default Index;
