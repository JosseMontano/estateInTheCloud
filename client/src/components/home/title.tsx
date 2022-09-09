import { Title, ColorText, ContainerMargin } from "../../styles/globals";

interface Params {
  title: string;
}
const TitleComponent = (v: Params) => {
  return (
    <ContainerMargin>
      <Title colorText={ColorText}>{v.title}</Title>
    </ContainerMargin>
  );
};

export default TitleComponent;
