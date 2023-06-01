import styled from "styled-components";
import { RealEstateFavType } from "../../interfaces/realEstateFav";
import { useLanguage } from "@/global/context/languageContext";
import CardComponent from "./card";

const Title = styled.h2`
  text-align: center;
  font-size: 3rem;
  margin: 10px 0;
`;

interface Params {
  data: RealEstateFavType[];
  handleDeleteFavorite: (id: number) => void;
}

const ShowFavorites = ({ data, handleDeleteFavorite }: Params) => {
  const { text } = useLanguage();

  return (
    <section>
      <Title>{text.favoriteTitle}</Title>
      <div>
        {data &&
          data.map((v) => (
            <CardComponent v={v} handleDeleteFavorite={handleDeleteFavorite} />
          ))}
      </div>
    </section>
  );
};

export default ShowFavorites;
