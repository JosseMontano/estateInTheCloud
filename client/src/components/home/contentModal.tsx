import { RealEstate } from "@/interface/realEstate";
import Slider from "react-slick";
import { getRealEstateOfOnePublication as getRealEstate } from "@/services/realEstate";
import * as S from "@/styles/modal/perfil";
import Load from "./modal/load";
import ImgCom from "./modal/img";
import Clipboard from "../global/clipBoard";
import { useNavigate } from "react-router-dom";
import useLoadData from "@/hooks/useLoadDataParams";


export const ContentModal = (v: RealEstate) => {
  const navigate = useNavigate();
  const {data, loading} = useLoadData(getRealEstate, v.idrealestate);
  
  const handleSeeQuestions = (idRealEstate: number) => {
    navigate(`/answeQuestionInterested/${idRealEstate}`);
  };

  return (
    <S.Container>
      {loading ? (
        <Load />
      ) : (
        <Slider className="slick">
          {data.map((va, i) => (
            <div key={i}>
              <ImgCom {...(va as RealEstate)} />
            </div>
          ))}
        </Slider>
      )}

      <S.ContainerContent>
        <S.H2>{v.title}</S.H2>
        <S.P>{v.description}</S.P>
        <Clipboard txt={v.description} />
        <S.Button
          ColorBtn="#e9e905d5"
          onClick={() => handleSeeQuestions(v.idrealestate)}
        >
          Preguntas frecuentes
        </S.Button>
      </S.ContainerContent>
    </S.Container>
  );
};
