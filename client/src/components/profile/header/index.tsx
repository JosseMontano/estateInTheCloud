import styled from "styled-components";
import ContentBtn from "./contentBtn";
import ContentImg from "./contentImg";
import ContentMid from "./contentMid";
import ContentUser from "./contentUser";
const Container = styled.div`
  display: grid;
  grid-template-columns: 30% 40%;
  justify-content: center;
  border-bottom: 1px solid #a0a0a0;
  padding: 10px;
  width: 100%;
  @media screen and (max-width:900px) {
    grid-template-columns: 1fr;
    gap:10px
  }
`;

const ContainerContent = styled.div`
  display: grid;
  place-content: center;
`;

interface Params{
  email?:string
}
const Header = (params:Params) => {
  return (
    <Container>
      <ContentImg />
      <ContainerContent>
        <ContentBtn email={params.email} />
        <ContentMid />
        <ContentUser />
      </ContainerContent>
    </Container>
  );
};

export default Header;
