import React from "react";
import styled from "styled-components";
import { Params } from "@/global/interfaces/modal";
import ReactDOM from "react-dom";
import { useModalStore } from "../store/modalStore";

type StyType = string | undefined;

const Container = styled.div<{ open: boolean }>`
  position: fixed;
  z-index: 99999;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.open ? "flex" : "none")};
  justify-content: center;
  align-items: center;

  animation-name: transitionBackground;
  animation-duration: 1s;
  @keyframes transitionBackground {
    0% {
      background-color: rgba(0, 0, 0, 0.1);
    }
    100% {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
`;

const ContainerSoon = styled.div<{ background: StyType; color: StyType }>`
  background: ${({ background }) => (background ? background : "#2c5364")};
  color: ${({ color }) => (color ? color : "#fff")};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05), 0px 4px 6px rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  padding: 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: move 1s;
  transform: translateY(50px);
  margin-bottom: 100px;
  @keyframes move {
    0% {
      transform: translateY(0px);
      opacity: 0;
    }
    100% {
      transform: translateY(50px);
      opacity: 1;
    }
  }
`;

const Close = styled.p`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

type Event = React.MouseEvent<HTMLDivElement, MouseEvent>;

export const Modal = (params: Params) => {
  const { isShown, hide, modalContent } = params;

  const handleModalContainerClick = (e: Event) => e.stopPropagation();
  const { background, color } = useModalStore();
  const modal = (
    <Container open={isShown} onClick={hide}>
      <ContainerSoon
        background={background}
        color={color}
        onClick={(e) => handleModalContainerClick(e)}
      >
        <Close onClick={hide}>X</Close>
        {modalContent}
      </ContainerSoon>
    </Container>
  );
  return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};
