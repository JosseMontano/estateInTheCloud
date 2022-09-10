import styled from "styled-components";

const Container = styled.div``;
const H2 = styled.h2`
  @media screen and (max-width:900px) {
  text-align: center;
  }
`;

const ContentUser = () => {
  return (
    <Container>
      <H2>usuario</H2>
    </Container>
  );
};

export default ContentUser;
