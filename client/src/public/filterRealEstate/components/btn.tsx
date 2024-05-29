import styled from "styled-components";
import { ColorBtn, ColorBtnFourth } from "@/global/styles/globals";
import { BtnsDataType } from "@/public/home/interfaces/btnsDataType";
import { dataTypeEnum } from "@/public/home/interfaces/dataTypeEnum";

const StyleBtn = styled.button<{
  catActually: string;
  borderColor: string;
  backgroundImg: string;
  colorImg: string;
  textColor: string;
  fontWeight: string;
}>`
  display: flex;
  align-items: center;
  gap: 7px;
  border-radius: 30px;
  padding: 8px;
  margin: 0px 5px;
  background: ${(props) => props.catActually};
  color: ${(props) => props.textColor};
  font-weight: ${(props) => props.fontWeight};
  margin-bottom: 7px;
  border: 1px solid ${(props) => props.borderColor};
  &:hover {
    cursor: pointer;
  }
  div {
    background-color: ${(props) => props.backgroundImg};
    border-radius: 50%;
    height: 25px;
    width: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    & img {
      width: 20px;
      height: 20px;
      filter: ${(props) => props.colorImg};
    }
  }
`;

interface Params {
  v: BtnsDataType;
  catActually: dataTypeEnum;
  changeData: (dataType: dataTypeEnum) => void;
  Img: string;
}

const Btn = ({ v, catActually, changeData, Img }: Params) => {
  const handleChangeData = (name: dataTypeEnum) => {
    changeData(name);
  };

  const backbround = catActually === v.dataType ? ColorBtnFourth : "#fff";
  const textColor = catActually === v.dataType ? ColorBtn : "#000";
  const borderColor = catActually === v.dataType ? ColorBtn : "#fff";
  const backgroundImg = catActually === v.dataType ? "#fff" : "#e9f3f5";
  const fontWeight = catActually === v.dataType ? "600" : "normal";

  const colorImg =
    catActually === v.dataType
      ? "invert(33%) sepia(66%) saturate(4951%) hue-rotate(354deg) brightness(94%) contrast(92%)"
      : "";

  return (
    <StyleBtn
      catActually={backbround}
      borderColor={borderColor}
      backgroundImg={backgroundImg}
      colorImg={colorImg}
      textColor={textColor}
      fontWeight={fontWeight}
      onClick={() => handleChangeData(v.dataType as dataTypeEnum)}
    >
      <div>
        <img src={Img} alt="new" width={18} height={18} />
      </div>
      <p>{v.title}</p>
    </StyleBtn>
  );
};

export default Btn;
