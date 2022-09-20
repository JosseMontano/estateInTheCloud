import React from "react";
import styled from "styled-components";
import { Button } from "../../../styles/modal/perfil";
const Img = styled.img`
  height: 200px;
  width: 200px;
  object-fit: cover;
  margin-top: 15px;
  @media screen and (max-width: 1450px) {
    height: 200px;
  }
  @media screen and (max-width: 730px) {
    height: 300px;
  }
  @media screen and (max-width: 572px) {
    width: 100%;
  }
  @media screen and (max-width: 470px) {
    height: 240px;
  }
`;

const ImgCom = (v: any) => {
  const handelDownloadImg = (url: string) => {
    //url is thr route of the app
    fetch(url, {
      method: "GET",
      headers: {},
    })
      .then((response) => {
        response.arrayBuffer().then(function (buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "image.png"); //or any other extension
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Img src={v.url} alt="" />
      <Button onClick={() => handelDownloadImg(v.url)} ColorBtn={"#229ff2"}>
        Descargar
      </Button>
    </>
  );
};

export default ImgCom;
