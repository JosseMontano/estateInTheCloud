import styled from "styled-components";
import Card from "@/public/home/components/modal";
import NoFound from "@/public/home/components/modal/notFound";
import { RealEstate } from "@/global/interfaces/realEstate";

export const ContainerCardCss = styled.div`
  display: flex;
  flex-direction: row;
  gap:10px;
  flex-wrap: wrap;
  justify-content: center;
`;

interface ParamsType {
  dataFilter: RealEstate[];
}

const ContainerCard = ({ dataFilter }: ParamsType) => {
  return (
    <ContainerCardCss>
      <Card dataFilter={dataFilter} />
      <NoFound dataFilter={dataFilter} />
    </ContainerCardCss>
  );
};

export default ContainerCard;
