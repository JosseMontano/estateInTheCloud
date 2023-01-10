import { Title, ColorText, ContainerMargin } from "@/global/styles/globals";

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
