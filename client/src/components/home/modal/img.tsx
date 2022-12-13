import styled from "styled-components";
import { Button } from "@/styles/modal/perfil";
import { useNavigate } from "react-router-dom";
import { RealEstate } from "@/interface/realEstate";
import env from "@/config";
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

const A = styled.a`
  border-radius: 12px solid #fff;
  background-color: #e57124;
  list-style: none;
  color: #fff;
  padding: 15px;
  margin-top: 2px;
  text-decoration: none;
  display: block;
  width: 70px;
  &:hover {
    cursor: pointer;
  }
`;

const ImgCom = (v: RealEstate) => {
  const navigate = useNavigate();
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

  const handleRedirect = (id: number) => {
    navigate(`/img360/${id}`);
  };

  return (
    <>
      <Img src={v.url} alt="" />
      <Button onClick={() => handelDownloadImg(v.url)} ColorBtn={"#229ff2"}>
        Descargar
      </Button>
      {/*       <Button onClick={() => handleRedirect(v.idrealestate)} ColorBtn={"#f27222"}>
        Ver en 360
      </Button> */}
      <A href={`${env.img360Url}#/${v.idphoto}`} target={"_blank"}>
        Ver en 360
      </A>
    </>
  );
};

export default ImgCom;
