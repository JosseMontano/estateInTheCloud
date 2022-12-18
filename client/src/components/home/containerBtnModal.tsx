import { Btn } from "@/styles/btn";
import Clipboard from "../global/clipBoard";
import env from "@/config";
import { useNavigate } from "react-router-dom";
import { RealEstate } from "@/interface/realEstate";

interface Params {
  v: RealEstate;
}

const ContainerBtnModal = ({ v }: Params) => {
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

  const handleSeeQuestions = (idRealEstate: number) => {
    navigate(`/answeQuestionInterested/${idRealEstate}`);
  };
  const handle360 = () => {
    /*  window.open(`${env.img360Url}#/${v.idphoto}`, "_blank"); */
    navigate(`/img360/${v.idphoto}`);
  };

  return (
    <>
      <Clipboard txt={v.description} />
      <Btn
        marginInElements="10px"
        onClick={() => handleSeeQuestions(v.idrealestate)}
      >
        Preguntas frecuentes
      </Btn>
      <Btn marginInElements="10px" onClick={() => handelDownloadImg(v.url)}>
        Descargar
      </Btn>
      <Btn marginInElements="10px" onClick={handle360}>
        Ver en 360
      </Btn>
    </>
  );
};

export default ContainerBtnModal;
