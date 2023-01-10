import styled from "styled-components";
import Search from "@/global/components/search";
import { UseModal } from "@/global/hooks/useModal";
import { RealEstate } from "@/interfaces/realEstate";
import useSearch from "@/global/hooks/useSearch";
import { Suspense, useEffect, useState } from "react";
import ContainerBtn from "./components/containerBtn";
import ModalContent from "./components/modal";
import ContainerCard from "./components/containerCard";
import Navbar from "@/components/navbar";
import { Modal } from "@/global/components/modal";
import {
  getRealEstateByFilterCustom,
  getRealEstateByType,
} from "./services/get";
import { RealEstateFilterCustom } from "./interfaces/filterCustom";

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background: #0f2027;
  background: -webkit-linear-gradient(to bottom, #2c5364, #203a43, #0f2027);
  background: linear-gradient(to bottom, #2c5364, #203a43, #0f2027);
`;

const TypeRealEstate = () => {
  const [data, setData] = useState<RealEstate[]>([]);
  const { isShown, toggle } = UseModal({});
  const { filter, getValueSearch } = useSearch();

  const changeData = async (type: string) => {
    const { json } = await getRealEstateByType<RealEstate[]>(type);
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

  const searchCustom = async (form: RealEstateFilterCustom) => {
    const { json } = await getRealEstateByFilterCustom(form);
    setData(json);
    toggle();
  };

  useEffect(() => {
    changeData("Garzonier");
  }, []);

  return (
    <Suspense fallback={<p>Loading</p>}>
      <Container>
        <Navbar />
        <Search getValueSearch={getValueSearch} />
        <ContainerBtn toggle={toggle} changeData={changeData} />
        <ContainerCard dataFilter={dataFilter} />
      </Container>
      <Modal
        hide={toggle}
        isShown={isShown}
        modalContent={<ModalContent searchCustom={searchCustom} />}
      />
    </Suspense>
  );
};

export default TypeRealEstate;
