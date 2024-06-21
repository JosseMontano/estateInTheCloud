import { useEffect, useState } from "react";
import translate, {
  translateToPortuguese,
  translateToSpanish,
} from "@/public/home/utilities/translate";
import { useLanguage } from "@/global/context/languageContext";

interface Params {
  title: string;
  description: string;
}

enum Language {
  english = "en",
  portuguese = "pt",
  spanish = "es",
}

const useTranslate = ({ title, description }: Params) => {
  const [descriptionState, setDescriptionState] = useState(description);
  const [titleState, setTitleState] = useState(title);

  const [loadTxt, setLoadTxt] = useState(true);
  const { lanActually } = useLanguage();

  const handleTranslate = async () => {
    setLoadTxt(true);
    //description
    const des = await translate(description);
    setDescriptionState(des!);

    //title
    const tit = await translate(title);
    setTitleState(tit!);

    setTimeout(() => {
      setLoadTxt(false);
    }, 500);
  };

  const handleTranslateToSpanish = async () => {
    setLoadTxt(true);
    //description
    const des = await translateToSpanish(description);
    setDescriptionState(des!);

    //title
    const tit = await translateToSpanish(title);
    setTitleState(tit!);

    setTimeout(() => {
      setLoadTxt(false);
    }, 500);
  };

  const handleTranslateToPortugues = async () => {
    setLoadTxt(true);
    //description
    const des = await translateToPortuguese(description);
    setDescriptionState(des!);

    //title
    const tit = await translateToPortuguese(title);
    setTitleState(tit!);

    setTimeout(() => {
      setLoadTxt(false);
    }, 500);
  };

  useEffect(() => {
    if (lanActually == Language.english) handleTranslate();
    if (lanActually == Language.portuguese) handleTranslateToPortugues();
    if (lanActually == Language.spanish) handleTranslateToSpanish();
  }, [lanActually]);

  return {
    loadTxt,
    descriptionState,
    titleState,
  };
};
export default useTranslate;
