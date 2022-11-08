import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { UseModal } from "../../hooks/useModal";
import Links from "./links";
import { logOut } from "../../services/auth";

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
  const navigate = useNavigate();
  const { isShown, toggle } = UseModal();

  let dataJSX = [
    {
      text: nameUser,
      click: () => {
        navigate(`/profile/${emailState}`);
      },
    },
    {
      text: "Preguntas",
      click: () => {
        toggle();
      },
    },
    {
      text: "Casas",
      click: () => {
        navigate(`/house`);
      },
    },
    {
      text: "Departamentos",
      click: () => {
        navigate(`/departaments`);
      },
    },
    {
      text: "Salir",
      click: async () => {
        var resp = await logOut();
        if (!resp) {
          navigate("/");
        }
      },
    },
  ];

  return (
    <Ul>
      {dataJSX.map((v, i) => (
        <Links v={v} key={i} isShown={isShown} toggle={toggle} />
      ))}
    </Ul>
  );
};

export default ContainerLinks;
