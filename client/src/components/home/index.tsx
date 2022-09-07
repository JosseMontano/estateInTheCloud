
import styled from "styled-components";
const Container = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 300px;
  height: 400px;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;
const Content = styled.div`
  padding: 2px 16px;
  margin: 10px;
`;
const Img = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;
const H4 = styled.h4`
font-size: 22px;
`
const P = styled.p`
font-size: 18px;
`
interface Rick {
    name: string;
    species: string;
    status: string;
    image: string;
  }
const Index = (v:Rick) => {
  return (
    <Container>
      <Img className="img" src={v.image} alt="Avatar" />
      <Content>
        <H4>John Doe</H4>
        <P>Architect & Engineer</P>
      </Content>
    </Container>
  );
};
export default Index

