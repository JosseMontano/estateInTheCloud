import styled from "styled-components";
import ContentImg from "./contentImg";
import { RealEstate } from "@/interfaces/realEstate";
import Skeleton from "./skeleton";
import { useLanguage } from "@/context/languageContext";

const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  margin-top: 15px;
`;
const ContainerFather = styled.div`
  display: grid;
  gap: 1px;
  grid-template-columns: repeat(3, 1fr);
  place-content: center;
  @media screen and (max-width: 1040px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 730px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const TextEmpty = styled.div`
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  margin-top: 15px;
  text-transform: uppercase;
`;
interface Params {
  data: RealEstate[];
  loading: boolean;
  showbtn: boolean;
  deleteRealEstate?: (id: number) => void;
  updateStateRE?: (available: boolean, id: number) => void;
  idRealEstate?: number;
}

const Index = (params: Params) => {
  const { text } = useLanguage();

  const vecSkeleton = [1, 2, 3, 4, 5, 6];

  function showTitle() {
    if (params.loading) {
      return <TextEmpty>{text.visitUserLoadTitle}</TextEmpty>;
    }
    if (params.data.length === 0)
      return <TextEmpty>{text.visitUserNoEmpty}</TextEmpty>;
    return <Title>{text.visitUserTitle}</Title>;
  }

  function showContent(v: RealEstate, i: number) {
    return (
      <ContentImg
        deleteRealEstate={params.deleteRealEstate}
        key={i}
        v={v}
        showbtn={params.showbtn}
        updateStateRE={params.updateStateRE}
        idRealEstate={params.idRealEstate}
      />
    );
  }

  function showData() {
    if (params.loading) return vecSkeleton.map((_, i) => <Skeleton key={i} />);
    return params.data.map((v, i) => showContent(v, i));
  }

  return (
    <>
      {showTitle()}
      <ContainerFather>{showData()}</ContainerFather>
    </>
  );
};

export default Index;