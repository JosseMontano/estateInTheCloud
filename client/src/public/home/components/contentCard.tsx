import styled from "styled-components";
import { RealEstate } from "@/global/interfaces/realEstate";
import ContainterBtn from "./containterBtn";
import { ColorText, ColorTextP, borderImg } from "@/global/styles/globals";

const Content = styled.div`
  padding: 2px 16px;
  margin: ${borderImg};
`;
const Img = styled.img`
  height: 250px;
  object-fit: cover;
  border-radius: ${borderImg};
  border-bottom-right-radius:0px;
  border-bottom-left-radius:0px;
  width: 100%;
`;
const H4 = styled.h4`
  font-size: 22px;
  color: ${ColorText};
`;
const P = styled.p`
  font-size: 18px;
  color: ${ColorTextP};
`;

interface Params {
  v: RealEstate;
  toggle: () => void;
  visitUser: (idUser: number, email: string) => void;
  addFavorite?: (realEstateId: number) => void;
}

const ContentCard = ({ v, toggle, visitUser, addFavorite }: Params) => {
  return (
    <>
      <Img className="img" src={v.url} alt="Avatar" />
      <Content>
        <H4>{v.title}</H4>
        <P>{v.email}</P>
        <ContainterBtn
          v={v}
          toggle={toggle}
          visitUser={visitUser}
          addFavorite={addFavorite}
        />
      </Content>
    </>
  );
};

export default ContentCard;
