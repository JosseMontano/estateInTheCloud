import styled from "styled-components";
import { RealEstate } from "@/global/interfaces/realEstate";
import ContainterBtn from "./containterBtn";

const Content = styled.div`
  padding: 2px 16px;
  margin: 10px;
`;
const Img = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;
const H4 = styled.h4`
  font-size: 22px;
  color: #fff;
`;
const P = styled.p`
  font-size: 18px;
  color: #fff;
`;

interface Params {
  v: RealEstate;
  toggle: () => void;
  visitUser: (idUser: number, email: string) => void;
  addFavorite?: (realEstateId: number) => void;
}

const ContentCard = ({ v, toggle, visitUser, addFavorite }: Params) => {
  return (
    <Content>
      <Img className="img" src={v.url} alt="Avatar" />
      <H4>{v.title}</H4>
      <P>{v.email}</P>
      <ContainterBtn
        v={v}
        toggle={toggle}
        visitUser={visitUser}
        addFavorite={addFavorite}
      />
    </Content>
  );
};

export default ContentCard;
