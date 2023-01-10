import styled from "styled-components";
import Search from "@/components/global/search";
import { UseModal } from "@/hooks/useModal";
import { RealEstate, RealEstateFilterCustom } from "@/interfaces/realEstate";
import useSearch from "@/hooks/useSearch";
import { Suspense, useEffect, useState } from "react";
import { getRealEstateByType } from "@/services/realEstate";
import ContainerBtn from "@/components/typeRealEstate/containerBtn";
import ModalContent from "@/components/typeRealEstate/modal";
import ContainerCard from "@/components/typeRealEstate/containerCard";
import Navbar from "@/components/navbar";
import { Modal } from "@/components/global/modal";
import { getRealEstateByFilterCustom } from "@/services/realEstate";

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
    console.log(form);
    const {json, status} = await getRealEstateByFilterCustom(form)
    console.log(status)
    console.log(json)
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
