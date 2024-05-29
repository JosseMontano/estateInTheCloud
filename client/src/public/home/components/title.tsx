import {ColorText, ContainerMargin, TitleHome } from "@/global/styles/globals";

interface Params {
  title: string;
}
const TitleComponent = (v: Params) => {
  return (
    <ContainerMargin>
      <TitleHome colorText={ColorText}>{v.title}</TitleHome>
    </ContainerMargin>
  );
};

export default TitleComponent;
