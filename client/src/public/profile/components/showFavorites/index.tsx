import styled from "styled-components";
import { Btn } from "@/global/styles/card";
import { RealEstateFavType } from "../../interfaces/realEstateFav";

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
  return (
    <section>
      <Title>Favoritos</Title>
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
                  Eliminar
                </Btn>
              </div>
            </Card>
          ))}
      </div>
    </section>
  );
};

export default ShowFavorites;
