import React from "react";
import styled from "styled-components";
import ParamsTypeRealEstate from "@/global/interfaces/typeRealEstate";

const StyleBtn = styled.button<{ catActually: string }>`
  border-radius: 15px;
  padding: 8px;
  margin: 0px 5px;
  background: ${(props) => props.catActually};
  color: #fff;
  margin-bottom: 7px;
  &:hover {
    cursor: pointer;
    background: #0a1113;
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

  const backbround = catActually === v.name_type ? "#0a1113" : "#243f47";

  return (
    <StyleBtn
      catActually={backbround}
      onClick={() => handleChangeData(v.name_type)}
    >
      {v.name_type}
    </StyleBtn>
  );
};

export default Btn;
