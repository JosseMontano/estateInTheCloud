import { useState } from "react";
import Message from "./toast/message";
import { Btn } from "@/global/styles/btn";
import { useLanguage } from "@/global/context/languageContext";
import config from "@/config/config";
interface Params {
  idUser: number;
  email: string;
  realeEstate:number;
}
const Clipboard = ({ email, idUser,realeEstate }: Params) => {
  const { text } = useLanguage();
  const [copied, setCopied] = useState(false);
  const urlFront = config.frontendUrlDev;
  const copyText = () => {
    const urlShare = `${urlFront}visitUser/${idUser}/${email}/${realeEstate}`;
    navigator.clipboard.writeText(urlShare);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };
  return (
    <>
      <Btn marginInElements="10px" onClick={copyText}>
        {text.homeBtnCopyText}
      </Btn>
      {copied && <Message msg={"Copiado con exito"} />}
    </>
  );
};

export default Clipboard;
