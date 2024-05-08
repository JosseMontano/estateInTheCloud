import styled from "styled-components";
import ParamsTypeRealEstate from "@/global/interfaces/typeRealEstate";
import { ColorBtn, ColorBtnFourth } from "@/global/styles/globals";

const StyleBtn = styled.button<{ catActually: string; borderColor: string }>`
  border-radius: 15px;
  padding: 8px;
  margin: 0px 5px;
  background: ${(props) => props.catActually};
  color: #000;
  margin-bottom: 7px;
  border: 1px solid ${(props) => props.borderColor};
  &:hover {
    cursor: pointer;
    background: ${ColorBtnFourth};
    border: 1px solid ${ColorBtn};
  }
`;

interface Params {
  v: ParamsTypeRealEstate;
  catActually: string;
  changeData: (type: string) => void;
}

const Btn = ({ v, catActually, changeData }: Params) => {
  const handleChangeData = (name: string) => {
    changeData(name);
  };

  const backbround = catActually === v.name ? ColorBtnFourth : "#fff";
  const borderColor = catActually === v.name ? ColorBtn : "#fff";

  return (
    <StyleBtn
      catActually={backbround}
      borderColor={borderColor}
      onClick={() => handleChangeData(v.name)}
    >
      {v.name}
    </StyleBtn>
  );
};

export default Btn;
