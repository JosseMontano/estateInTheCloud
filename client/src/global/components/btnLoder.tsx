
import styled from "styled-components";
import Loader from "./toast/loading";
import { useLanguage } from "../context/languageContext";
import { Button } from "../styles/globals";

interface Props {
  handleSend: () => void;
  text: string;
  colorBtn: string;
  loading: boolean;
}

const ContentBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const BtnLoader = ({ handleSend, text, colorBtn, loading }: Props) => {
  const { text: texts } = useLanguage();
  return (
    <>
      <Button ColorBtn={colorBtn} onClick={() => handleSend()}>
        <ContentBtn>
          {loading && (
            <>
             {/*  <Loader /> */}
              <p>{texts.loadingBtn}</p>
            </>
          )}
          {!loading && text}
        </ContentBtn>
      </Button>
    </>
  );
};

export default BtnLoader;
