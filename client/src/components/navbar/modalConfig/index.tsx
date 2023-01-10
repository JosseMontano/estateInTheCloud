import Languages from "@/global/components/language";
import { useLanguage } from "@/context/languageContext";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 15px;
  div {
    align-self: center;
    text-align: center;
    text-transform: uppercase;
    font-size: 22px;
  }
`;
const Index = () => {
  const { text } = useLanguage();
  return (
    <Container>
      <div>{text.configurationLanguage}</div>
      <Languages />
    </Container>
  );
};

export default Index;
