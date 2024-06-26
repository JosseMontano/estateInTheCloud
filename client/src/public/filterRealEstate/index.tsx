import styled from "styled-components";
import Search from "@/global/components/search";
import { RealEstate } from "@/global/interfaces/realEstate";
import useSearch from "@/global/hooks/useSearch";
import { Suspense, useEffect, useState } from "react";
import ContainerBtn from "./components/containerBtn";
import ModalContent from "./components/modal";
import ContainerCard from "./components/containerCard";
import {
  getRealEstateByFilterCustom,
  getRealEstateByType,
} from "./services/get";
import { RealEstateFilterCustom } from "./interfaces/filterCustom";
import { useModal, Modal } from "jz-modal";
import Event from "@/global/interfaces/event";

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
/*   background: #0f2027;
  background: -webkit-linear-gradient(to bottom, #2c5364, #203a43, #0f2027);
  background: linear-gradient(to bottom, #2c5364, #203a43, #0f2027); */
`;

const TypeRealEstate = () => {
  const [data, setData] = useState<RealEstate[]>([]);
  const { isShown, toggle } = useModal({});
  const { filter, getValueSearch } = useSearch();
  const [catActually, setCatActually] = useState("Garzonier");

  const changeData = async (type: string) => {
    setCatActually(type);
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

  const [typeRealEstate, setTypeRealEstate] = useState('')
  const handleChangeInput = (e: Event["inputChange"]) => {
    setTypeRealEstate(e.target.value)
  };

  const searchCustom = async (form: RealEstateFilterCustom) => {
    form.type = typeRealEstate;
    const { json } = await getRealEstateByFilterCustom(form);
    setData(json);
    console.log(json)
    setCatActually("Custom");
    toggle();
  };


  useEffect(() => {
    changeData("Garzonier");
  }, []);

  return (
    <Suspense fallback={<p>Loading</p>}>
      <Container>
        <Search getValueSearch={getValueSearch} />
        <ContainerBtn
          catActually={catActually}
          toggle={toggle}
          changeData={changeData}
        />
        <ContainerCard dataFilter={dataFilter} />
      </Container>
      <Modal
        hide={toggle}
        isShown={isShown}
        modalContent={<ModalContent handleChangeInput={handleChangeInput} searchCustom={searchCustom} />}
      />
    </Suspense>
  );
};

export default TypeRealEstate;
