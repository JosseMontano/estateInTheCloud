import styled from "styled-components";
import ContentImg from "./contentImg";
import { RealEstate } from "@/interface/realEstate";
import Skeleton from "./skeleton";
import { useLanguage } from "@/context/languageContext";
import { useProfile } from "@/context/profile/profileContext";

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
  showbtn: boolean;
}

const Index = (params: Params) => {
  const { text } = useLanguage();
  const { data, loading } = useProfile();

  function showTitle() {
    if (loading) {
      return <TextEmpty>{text.visitUserLoadTitle}</TextEmpty>;
    }
    if (data.length === 0)
      return <TextEmpty>{text.visitUserNoEmpty}</TextEmpty>;
    return <Title>{text.visitUserTitle}</Title>;
  }

  function showData() {
    if (loading) return [1, 2, 3, 4, 5, 6].map((_, i) => <Skeleton key={i} />);

    return data.map((v, i) => (
      <ContentImg key={i} v={v} showbtn={params.showbtn} />
    ));
  }

  return (
    <>
      {showTitle()}
      <ContainerFather>{showData()}</ContainerFather>
    </>
  );
};

export default Index;
