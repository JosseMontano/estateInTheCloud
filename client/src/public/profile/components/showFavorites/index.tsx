import styled from "styled-components";
import { Btn } from "@/global/styles/card";
import { RealEstateFavType } from "../../interfaces/realEstateFav";
import { useLanguage } from "@/global/context/languageContext";

const Title = styled.h2`
  text-align: center;
  font-size: 3rem;
  margin: 10px 0;
`;

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
  data: RealEstateFavType[];
  handleDeleteFavorite: (id: number) => void;
}

const ShowFavorites = ({ data, handleDeleteFavorite }: Params) => {
    const {text} = useLanguage()
  return (
    <section>
      <Title>{text.favoriteTitle}</Title>
      <div>
        {data &&
          data.map((v) => (
            <Card key={v.favorito_id}>
              <div>
                <Img src={v.url} alt={v.title} />
              </div>
              <div className="content">
                <h3>{v.title}</h3>
                <p>{v.description}</p>
                <Btn onClick={() => handleDeleteFavorite(v.favorito_id)}>
                  {text.favoriteBtnDelete }
                </Btn>
              </div>
            </Card>
          ))}
      </div>
    </section>
  );
};

export default ShowFavorites;
