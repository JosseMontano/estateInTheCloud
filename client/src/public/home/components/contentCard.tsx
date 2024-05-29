import styled from "styled-components";
import { RealEstate } from "@/global/interfaces/realEstate";
import ContainterBtn from "./containterBtn";
import { ColorText, ColorTextP, borderImg } from "@/global/styles/globals";

const Content = styled.div`
  margin: ${borderImg};
  margin-top: 0px;
  display: flex;
  flex-direction: column;
  gap:5px;
`;
const Img = styled.img`
  height: calc(250px - 20px);
  object-fit: cover;
  border-radius: ${borderImg};
  margin:10px;
  margin-bottom: 0px;
  width: calc(100% - 20px);
`;
const H4 = styled.h4`
  font-size: 18px;
  color: #323232;
`;
const P = styled.p`
  font-size: 16px;
  color: #4e4e4e;
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
