import { useEffect, useState } from "react";
import translate, { translateToPortuguese, translateToSpanish } from "@/public/home/utilities/translate";
import { useLanguage } from "@/global/context/languageContext";

interface Params {
  description: string;
}

enum Language {
  english = "en",
  portuguese = "pt",
  spanish = "es",
}

const useTranslate = ({ description }: Params) => {
  const [descriptionState, setDescriptionState] = useState(description);
  const [loadTxt, setLoadTxt] = useState(true);
  const { lanActually } = useLanguage();

  const handleTranslate = async () => {
    setLoadTxt(true);
    const des = await translate(description);
    setDescriptionState(des!);
    setTimeout(() => {
      setLoadTxt(false);
    }, 3000);
  };

  const handleTranslateToSpanish = async () => {
    setLoadTxt(true);
    //description
    const des = description;
    setDescriptionState(des!);

    setTimeout(() => {
      setLoadTxt(false);
    }, 3000);
  };

  const handleTranslateToPortugues = async () => {
    setLoadTxt(true);
    //description
    const des = await translateToPortuguese(description);
    setDescriptionState(des!);


    setTimeout(() => {
      setLoadTxt(false);
    }, 3000);
  };



  useEffect(() => {
    if (lanActually == Language.english) handleTranslate();
    if (lanActually == Language.portuguese) handleTranslateToPortugues();
    if (lanActually == Language.spanish) handleTranslateToSpanish();
    console.log(lanActually);
  }, [lanActually]);

  return {
    loadTxt,
    descriptionState,
  };
};
export default useTranslate;
