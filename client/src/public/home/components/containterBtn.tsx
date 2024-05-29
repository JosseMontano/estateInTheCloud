import styled from "styled-components";
import { useLanguage } from "@/global/context/languageContext";
import { RealEstate } from "@/global/interfaces/realEstate";
import { ColorBtn, ColorBtnSecond } from "@/global/styles/globals";

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  gap:5px;
`;

const Btn = styled.button`
  background-color: #fff;
  color: #000;
  border: none;
  padding: 5px;
  border-radius: 10px;
  cursor: pointer;
  &:hover{
    background-color: ${ColorBtn};
    color: #fff;
  
  }
`;

interface Params {
  v: RealEstate;
  toggle: () => void;
  visitUser: (idUser: number, email: string) => void;
  addFavorite?: (realEstateId: number) => void;
}

const ContainterBtn = ({ v, toggle, visitUser, addFavorite }: Params) => {
  const { text } = useLanguage();

  const handleAddFav = ()=>{
    if(addFavorite){
      addFavorite(v.id_real_estate)
    }
  }

  let data = [
    {
      name: text.homeMoreInfor,
      click: toggle,
    },
    {
      name: text.homeVist,
      click: () => visitUser(v.id_user, v.email),
    },
    {
      name: "❤",
      click: handleAddFav,
    },
  ];

  return (
    <Container>
      {data.map((v, i) => (
        <Btn key={i} onClick={v.click}>
          {v.name}
        </Btn>
      ))}
    </Container>
  );
};

export default ContainterBtn;
