import React from "react";
import styled from "styled-components";
import { RealEstateFavType } from "../../interfaces/realEstateFav";
import { Btn } from "@/global/styles/card";
import { useLanguage } from "@/global/context/languageContext";
import useTranslate from "../../hooks/useTranslate";

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  gap: 1rem;
  .content {
    width: 400px;
  }
  @media (max-width: 610px) {
    flex-direction: column;
  }
`;

const Img = styled.img`
  height: 250px;
  width: 250px;
  border-radius: 1rem;
`;

interface Params {
  v: RealEstateFavType;
  handleDeleteFavorite: (id: number) => void;
}

const CardComponent = ({ v , handleDeleteFavorite}: Params) => {
    const {text} = useLanguage()

    const {descriptionState, titleState} = useTranslate({
      description:v.description, title:v.title
    })

  return (
    <Card key={v.favorito_id}>
      <div>
        <Img src={v.url} alt={v.title} />
      </div>
      <div className="content">
        <h3>{titleState}</h3>
        <p>{descriptionState}</p>
        <Btn onClick={() => handleDeleteFavorite(v.favorito_id)}>
          {text.favoriteBtnDelete}
        </Btn>
      </div>
    </Card>
  );
};

export default CardComponent;
