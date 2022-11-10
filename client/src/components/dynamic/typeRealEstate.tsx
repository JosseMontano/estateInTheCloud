import styled from "styled-components";
import Search from "@/components/global/search";
import useLoadData from "@/hooks/useLoadData";
import { UseModal } from "@/hooks/useModal";
import Card from "@/components/houses";
import NoFound from "@/components/houses/notFound";
import { RealEstate } from "@/interface/realEstate";
import useSearch from "@/hooks/useSearch";

export const Container = styled.div`
  min-height: 100vh;
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
  services: () => Promise<any>;
}

const TypeRealEstate = ({ navbar, services }: Params) => {
  const { data } = useLoadData(services);
  const { isShown, toggle } = UseModal();
  const { filter, getValueSearch } = useSearch();

  const search = (v: RealEstate) => {
    if (filter === "") return v;
    if (v.title.toLocaleLowerCase().includes(filter.toLowerCase())) {
      return v;
    }
  };

  let dataFilter = data.filter((v) => {
    return search(v);
  });

  return (
    <Container>
      {navbar}
      <>
        <Search getValueSearch={getValueSearch} />
        <ContainerCard>
          <Card dataFilter={dataFilter} toggle={toggle} isShown={isShown} />
          <NoFound dataFilter={dataFilter} />
        </ContainerCard>
      </>
    </Container>
  );
};

export default TypeRealEstate;
