import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { UseModal } from "@/global/hooks/useModal";
import Links from "./links";
import { logOut } from "@/services/auth";
import { useLanguage } from "@/global/context/languageContext";

import { Modal } from "@/global/components/modal";
import ModalQuestion from "@/public/home/components/modalQuestion";
import ModalConfig from "./modalConfig";
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

interface Params {
  nameUser: string;
  emailState: string;
  handleRedirect: (msg: string) => void;
}

const ContainerLinks = ({ nameUser, emailState, handleRedirect }: Params) => {
  const { text } = useLanguage();
  const navigate = useNavigate();
  const { isShown, toggle } = UseModal({});
  const { isShown: isShownConfig, toggle: toggleConfig } = UseModal({});

  let dataJSX = [
    {
      text: nameUser,
      click: () => {
        handleRedirect(`/profile/${emailState}`);
      },
    },
    {
      text: text.navbarFilter,
      click: () => {
        handleRedirect(`/realEstateFilter`);
      },
    },
    {
      text: text.navbarQuestion,
      click: () => {
        toggle();
      },
    },
    {
      text: text.navbarConfigure,
      click: () => {
        toggleConfig();
      },
    },
    {
      text: text.navbarGoOut,
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
        <Links v={v} key={i} />
      ))}
      <Modal isShown={isShown} hide={toggle} modalContent={<ModalQuestion />} />
      <Modal
        isShown={isShownConfig}
        hide={toggleConfig}
        modalContent={<ModalConfig />}
      />
    </Ul>
  );
};

export default ContainerLinks;
