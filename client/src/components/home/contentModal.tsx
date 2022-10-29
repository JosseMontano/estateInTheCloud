import { RealEstate } from "../../interface/realEstate";
import Slider from "react-slick";
import { getRealEstateOfOnePublication } from "../../services/realEstate";
import { useEffect, useState } from "react";
import {
  Container,
  ContainerContent,
  H2,
  P,
  Button,
} from "../../styles/modal/perfil";
import Load from "./modal/load";
import ImgCom from "./modal/img";
import Clipboard from "../global/clipBoard";
import { useNavigate } from "react-router-dom";

export const ContentModal = (v: RealEstate) => {
  const [load, setLoad] = useState(true);
  const [data, setData] = useState<RealEstate[]>([]);
  const navigate = useNavigate();
  const handleGetEstate = async () => {
    const res = await getRealEstateOfOnePublication(v.idrealestate);
    setData(res);
    setLoad(false);
  };

  useEffect(() => {
    handleGetEstate();
  }, []);

  const handleSeeQuestions = (idRealEstate: number) => {
    navigate(`/answeQuestionInterested/${idRealEstate}`);
  };

  return (
    <Container>
      {load ? (
        <Load />
      ) : (
        <Slider className="slick">
          {data.map((va, i) => (
            <div key={i}>
              <ImgCom {...va} />
            </div>
          ))}
        </Slider>
      )}

      <ContainerContent>
        <H2>{v.title}</H2>
        <P>{v.description}</P>
        <Clipboard txt={v.description} />
        <Button
          ColorBtn="#e9e905d5"
          onClick={() => handleSeeQuestions(v.idrealestate)}
        >
          Preguntas frecuentes
        </Button>
      </ContainerContent>
    </Container>
  );
};
