import { useState } from "react";
import Message from "./message";
import { Button } from "jz-validation-form";
interface Params{
    txt:string
}
const Clipboard = (params:Params) => {
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
      <Button
        ColorBtn={"#15d20e"}
        onClick={() => {
          copyText(params.txt);
        }}
      >
        Copiar Texto
      </Button>
      {copied && <Message msg={"Copiado con exito"} />}
    </>
  );
};

export default Clipboard;
