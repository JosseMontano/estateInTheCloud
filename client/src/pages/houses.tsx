import styled from "styled-components";
import Search from "../components/global/search";
import useLoadData from "../hooks/useLoadData";
import { UseModal } from "../hooks/useModal";
import { getRealEstateByHouse } from "../services/realEstate";
import Card from "../components/houses";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background: #0f2027;
  background: -webkit-linear-gradient(to bottom, #2c5364, #203a43, #0f2027);
  background: linear-gradient(to bottom, #2c5364, #203a43, #0f2027);
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

interface Params {
  navbar: JSX.Element;
}

const Houses = ({ navbar }: Params) => {
  const { data } = useLoadData(getRealEstateByHouse);
  const { isShown, toggle } = UseModal();

  const getValueSearch = (val: string) => {
    console.log(val);
  };

  return (
    <Container>
      {navbar}
      <div>
        <Search getValueSearch={getValueSearch} />
        <ContainerCard>
          {data.map((v, i) => (
            <Card key={i} toggle={toggle} v={v} />
          ))}
        </ContainerCard>
      </div>
    </Container>
  );
};

export default Houses;
