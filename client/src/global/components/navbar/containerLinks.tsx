import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Modal, useModal } from "jz-modal";
import Links from "./links";
import { logOut } from "@/global/services/auth";
import { useLanguage } from "@/global/context/languageContext";
import ModalQuestion from "@/public/home/components/modalQuestion";
import ModalConfig from "./modalConfig";
import { useState } from "react";
import { Enlace, currentLink } from "@/global/interfaces/nav";
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
  handleRedirect: (msg: string, value: currentLink) => void;
  currentLink: currentLink;
  handleChangeCurrentLink: (value: currentLink) => void
}

const ContainerLinks = ({
  nameUser,
  emailState,
  handleRedirect,
  currentLink,
  handleChangeCurrentLink
}: Params) => {
  const { text } = useLanguage();
  const navigate = useNavigate();
  const { isShown, toggle } = useModal({});
  const { isShown: isShownConfig, toggle: toggleConfig } = useModal({});

  let dataJSX: Enlace[] = [
    {
      text: nameUser,
      click: () => {
        handleRedirect(`/profile/${emailState}`, "profile");
      },
      val: "profile",
    },
    /*     {
      text: text.navbarFilter,
      click: () => {
        handleRedirect(`/realEstateFilter`);
      },
    }, */
    {
      text: text.navbarQuestion,
      click: () => {
        toggle();
        handleChangeCurrentLink("question");
      },
      val: "question",
    },
    {
      text: text.navbarConfigure,
      click: () => {
        toggleConfig();
        handleChangeCurrentLink("configure");
      },
      val: "configure",
    },
    {
      text: text.navbarGoOut,
      click: async () => {
        var resp = await logOut();
        if (!resp) {
          navigate("/");
          handleChangeCurrentLink("goOut");
        }
      },
      val: "goOut",
    },
  ];

  return (
    <Ul>
      {dataJSX.map((v, i) => (
        <Links v={v} currentLink={currentLink} key={i} />
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
