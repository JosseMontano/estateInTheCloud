
import styled from "styled-components";
import {RealEstate} from '../../interface/realEstate'
const Container = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 300px;
  height: 350px;
  &:hover {
    transform: scale(1.1);
  }
`;
const Content = styled.div`
  padding: 2px 16px;
  margin: 10px;
`;
const Img = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;
const H4 = styled.h4`
font-size: 22px;
color:#fff;
`
const P = styled.p`
font-size: 18px;
color:#fff;
`

const Index = (v:RealEstate) => {
  return (
    <Container>
      <Content>
      <Img className="img" src={v.url} alt="Avatar" />
        <H4>{v.title}</H4>
        <P>{v.description}</P>
        <P>{v.email}</P>
      </Content>
    </Container>
  );
};
export default Index

