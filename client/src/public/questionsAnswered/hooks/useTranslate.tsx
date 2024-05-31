import { useEffect, useState } from "react";
import translate, { translateToPortuguese, translateToSpanish } from "@/public/home/utilities/translate";
import { useLanguage } from "@/global/context/languageContext";

interface Params {
  title: string;
  response:string;
}

enum Language {
  english = "en",
  portuguese = "pt",
  spanish = "es"
}

const useTranslate = ({ title, response }: Params) => {
  const [titleState, setTittleState] = useState(title);
  const [responseState, setResponseState] = useState(title);
  const [loadTxt, setLoadTxt] = useState(true);
  const { lanActually } = useLanguage();

  const handleTranslate = async () => {
    setLoadTxt(true);
    //description
    const des = await translate(title);
    setTittleState(des!);

    //response
    const res = await translate(response);
    setResponseState(res!);

    setTimeout(() => {
      setLoadTxt(false);
    }, 3000);
  };

  const handleTranslatePortugues = async () => {
    setLoadTxt(true);
    //description
    const des = await translateToPortuguese(title);
    setTittleState(des!);

    //response
    const res = await translateToPortuguese(response);
    setResponseState(res!);

    setTimeout(() => {
      setLoadTxt(false);
    }, 3000);
  };

  const handleTranslateSpanish = async () => {
    setLoadTxt(true);
    //description
    const des = await translateToSpanish(title);
    setTittleState(des!);

    //response
    const res = await translateToSpanish(response);
    setResponseState(res!);

    setTimeout(() => {
      setLoadTxt(false);
    }, 3000);
  
  }

  useEffect(() => {
    if (lanActually == Language.english) handleTranslate();
    if(lanActually == Language.portuguese) handleTranslatePortugues();
    if(lanActually == Language.spanish) handleTranslateSpanish();

  }, [lanActually]);

  return {
    loadTxt,
    titleState,
    responseState
  };
};
export default useTranslate;
