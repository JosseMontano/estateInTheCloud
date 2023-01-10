import styled from "styled-components";
import { marginInElements } from "@/global/styles/globals";

const Container = styled.div`
  display: flex;
`;
const P = styled.p<{ marginInElements: string }>`
  margin-right: ${(props) => props.marginInElements};
  margin-bottom: ${(props) => props.marginInElements};
  text-align: center;
`;

interface Params {
  amountPublication: number;
}

const ContentMid = ({ amountPublication }: Params) => {
  return (
    <Container>
      <P marginInElements={marginInElements}>
        {amountPublication} publicaciones
      </P>
      <P marginInElements={marginInElements}>100 seguidores</P>
      <P marginInElements={marginInElements}>100 seguidos</P>
    </Container>
  );
};

export default ContentMid;
