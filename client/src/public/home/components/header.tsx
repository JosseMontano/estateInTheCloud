import Lottie from "react-lottie";
import AnimationData from "@/global/assets/header.json";
import styled from "styled-components";
import { useLanguage } from "@/global/context/languageContext";
import Search from "@/global/components/search";
import Btn from "@/public/filterRealEstate/components/btn";
import { useHome } from "../context/homeContext";
import UseSearch from "@/global/hooks/useSearch";

interface Props {}

const ContainerFather = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 290px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  gap: 50px;
`;

const LottieContainer = styled.div`
  width: 200px;
`;

const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5px;
  width: 630px;
  h2 {
    font-size: 22px;
  }
  p {
    color: #323232;
    font-size: 15px;
  }
  p:nth-child(3) {
    margin-top: 10px;
    span {
      font-weight: bold;
    }
  }
`;

const ContainerFilter = styled.div`
  display: flex;
  margin: 0px 10px;
`;

const ContainersBtns = styled.div`
  display: flex;
  align-items: center;
`;

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: AnimationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Header = ({}: Props) => {
  const { text } = useLanguage();
  const { btnsDataType, handleDataTypeState, dataType } = useHome();
  const { filter, getValueSearch } = UseSearch();
  return (
    <ContainerFather>
      <Container>
        <LottieContainer>
          <Lottie options={defaultOptions} height={230} width={230} />
        </LottieContainer>
        <ContainerContent>
          <h2>{text.homeTitle}</h2>
          <p>{text.homeDescription}</p>
          <p>
            {text.homeFooter1} <span>{text.homeFooter2}</span>{" "}
            {text.homeFooter3}
          </p>
        </ContainerContent>
      </Container>

      <ContainerFilter>
        <Search getValueSearch={getValueSearch} />
        <ContainersBtns>
          {btnsDataType.map((btn, i) => (
            <Btn
              key={i}
              changeData={handleDataTypeState}
              catActually={dataType}
              v={btn}
              Img={btn.img}
            />
          ))}
        </ContainersBtns>
      </ContainerFilter>
    </ContainerFather>
  );
};

export default Header;
