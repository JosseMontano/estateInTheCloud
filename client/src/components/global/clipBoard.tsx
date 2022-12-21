import { useState } from "react";
import Message from "./message";
import { Btn } from "styles/btn";
import { useLanguage } from "context/languageContext";

interface Params {
  txt: string;
}
const Clipboard = (params: Params) => {
  const { text } = useLanguage();
  const [copied, setCopied] = useState(false);
  const copyText = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };
  return (
    <>
      <Btn
        marginInElements="10px"
        onClick={() => {
          copyText(params.txt);
        }}
      >
        {text.homeBtnCopyText}
      </Btn>
      {copied && <Message msg={"Copiado con exito"} />}
    </>
  );
};

export default Clipboard;
