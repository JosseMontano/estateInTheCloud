import styled from "styled-components";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./button";
import ContentFormLogin from "./contentFormLogin";
import LoadingAndResponse from "@/global/components/toast/loadAndResponse";
import Language from "@/global/components/language";
import { useLanguage } from "@/global/context/languageContext";

const Container = styled.form`

`;

const ContainerBtn = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap:5px;
`;

const ContainerConfig = styled.div`
position: absolute;
bottom: 5px;
left: 5px;
& p{
  cursor: pointer;
  
}
`

interface BtnType {
  onclick: (e: any) => void;
  color: string;
  text: string;

}

interface DataformType {
  label: string;
  name: string;
  value: string;
  errors: string;
  type: string;
}

interface ParamsType {
  msg: string;
  dataForm: DataformType[];
  dataBtn: BtnType[];
  loading: boolean;
  response: boolean;
  handleChange: (e: any) => void;
  handleShowPass: () => void;
  EyeJSX: () => JSX.Element;
  toggleConfig: () => void
}

const Form = (props: ParamsType) => {
  const navigate = useNavigate();
  const { text } = useLanguage();

  useEffect(() => {
    if (props.msg === "El proceso fue exitoso") {
      navigate("/home");
      location.reload();
    }
  }, [props.msg]);

  return (
    <Container>
      {props.dataForm.map((v, i) => (
        <ContentFormLogin
          key={i}
          v={v}
          handleChange={props.handleChange}
          handleShowPass={props.handleShowPass}
          EyeJSX={props.EyeJSX}
        />
      ))}
      <ContainerBtn>
        {props.dataBtn.map((v, i) => (
          <Button key={i} {...v} />
        ))}
      </ContainerBtn>

      {/* <Language /> */}
      <ContainerConfig>
        <p onClick={props.toggleConfig}>{text.navbarConfigure}</p>
      </ContainerConfig>


      <LoadingAndResponse
        loading={props.loading}
        msg={props.msg}
        response={props.response}
      />
    </Container>
  );
};

export default Form;
