import styled from "styled-components";
import Search from "@/components/global/search";
import { UseModal } from "@/hooks/useModal";
import { RealEstate } from "@/interface/realEstate";
import useSearch from "@/hooks/useSearch";
import { useEffect, useState } from "react";
import { getRealEstateByType } from "@/services/realEstate";
import ContainerBtn from "@/components/typeRealEstate/containerBtn";
import ContainerCard from "@/components/typeRealEstate/containerCard";

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background: #0f2027;
  background: -webkit-linear-gradient(to bottom, #2c5364, #203a43, #0f2027);
  background: linear-gradient(to bottom, #2c5364, #203a43, #0f2027);
`;

interface Params {
  navbar: JSX.Element;
}

const TypeRealEstate = ({ navbar }: Params) => {
  const [data, setData] = useState<RealEstate[]>([]);
  const { isShown, toggle } = UseModal();
  const { filter, getValueSearch } = useSearch();

  const changeData = async (type: string) => {
    const { json } = await getRealEstateByType(type);
    if (json) {
      setData(json);
    }
  };

  const search = (v: RealEstate) => {
    if (filter === "") return v;
    if (v.title.toLocaleLowerCase().includes(filter.toLowerCase())) {
      return v;
    }
  };

  let dataFilter = data.filter((v) => {
    return search(v);
  });

  useEffect(() => {
    changeData("Casa");
  }, []);

  return (
    <Container>
      {navbar}
      <Search getValueSearch={getValueSearch} />
      <ContainerBtn changeData={changeData} />
      <ContainerCard
        dataFilter={dataFilter}
        isShown={isShown}
        toggle={toggle}
      />
    </Container>
  );
};

export default TypeRealEstate;
