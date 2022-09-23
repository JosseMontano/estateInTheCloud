import styled from "styled-components";
import Photo from "../../../assets/profile/photoProfile.jpg";

const ContentSoon = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
  margin-top: 15px;
  @media screen and (max-width: 870px) {
    grid-template-columns: 30% 70%;
  }
  @media screen and (max-width: 732px) {
    grid-template-columns: 1fr;
  }
`;
const Container = styled.div`
  margin: 0 10%;
  @media screen and (max-width: 1050px) {
    margin: 0;
  }
`;
const ContainerImg = styled.div`
  justify-self: center;
  align-self: center;
`;
const Img = styled.img`
  border-radius: 100%;
  height: 150px;
`;
const ContainerContent = styled.div`
  align-self: center;
`;
const Title = styled.h2`
  text-align: center;
  font-size: 32px;
  margin-top: 15px;
`;
const NameUser = styled.h3`
  @media screen and (max-width: 732px) {
    text-align: center;
    font-size: 26px;
  }
`;
const Index = () => {
  return (
    <div>
      <Title>Comentarios</Title>
      <Container>
        <ContentSoon>
          <ContainerImg>
            <Img src={Photo} alt="" />
          </ContainerImg>
          <ContainerContent>
            <NameUser>NameUser</NameUser>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              eaque dignissimos. Ipsam sit omnis corporis, praesentium dolorum
              sint doloribus. Laborum ducimus beatae qui accusamus, id
              necessitatibus numquam incidunt libero alias.
            </p>
          </ContainerContent>
        </ContentSoon>
      </Container>
    </div>
  );
};

export default Index;
