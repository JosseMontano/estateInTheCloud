import styled from "styled-components";
import Links from "./links";

interface Params {
  nameUser: string;
  emailState: string;
}

const Ul = styled.ul`
  float: right;
  margin-right: 20px;
  @media (max-width: 858px) {
    position: fixed;
    width: 100%;
    height: 100vh;
    background: #2c3e50;
    top: 80px;
    left: -100%;
    text-align: center;
    transition: all 0.5s;
  }

  @media (max-width: 858px) {
    #check:checked ~ & {
      left: 0;
    }
  }
`;

const ContainerLinks = ({ nameUser, emailState }: Params) => {
  let data = [
    {
      text: nameUser,
      url: "",
    },
    {
      text: "Preguntas",
      url: "",
    },
    {
      text: "Casas",
      url: "",
    },
    {
      text: "Salir",
      url: "",
    },
  ];
  return (
    <Ul>
      {data.map((v, i) => (
        <Links v={v} key={i} emailState={emailState} />
      ))}
    </Ul>
  );
};

export default ContainerLinks;
