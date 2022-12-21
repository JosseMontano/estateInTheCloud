import styled from "styled-components";
import Card from "components/houses";
import NoFound from "components/houses/notFound";
import { RealEstate } from "interface/realEstate";

export const ContainerCardCss = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

interface ParamsType {
  dataFilter: RealEstate[];
  toggle: () => void;
  isShown: boolean;
}

const ContainerCard = ({ dataFilter, toggle, isShown }: ParamsType) => {
  return (
    <ContainerCardCss>
      <Card dataFilter={dataFilter} toggle={toggle} isShown={isShown} />
      <NoFound dataFilter={dataFilter} />
    </ContainerCardCss>
  );
};

export default ContainerCard;
