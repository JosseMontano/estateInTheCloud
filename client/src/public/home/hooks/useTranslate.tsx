import { useEffect, useState } from "react";
import translate, {
  translateToPortuguese,
} from "@/public/home/utilities/translate";
import { useLanguage } from "@/global/context/languageContext";

interface Params {
  description: string;
  title: string;
}

enum Language {
  english = "en",
}

const useTranslate = ({ description, title }: Params) => {
  const [descriptionState, setDescriptionState] = useState(description);
  const [titleState, setTitleState] = useState(title);
  const [loadTxt, setLoadTxt] = useState(true);
  const { lanActually } = useLanguage();

  const handleTranslate = async () => {
    setLoadTxt(true);

    if (lanActually == "en") {
      const des = await translate(description);
      const tit = await translate(title);
      setDescriptionState(des!);
      setTitleState(tit!);
      setTimeout(() => {
        setLoadTxt(false);
      }, 3000);
    }

    if (lanActually == "pt") {
      const des = await translateToPortuguese(description);
      const tit = await translateToPortuguese(title);
      setDescriptionState(des!);
      setTitleState(tit!);
      setTimeout(() => {
        setLoadTxt(false);
      }, 3000);
    }
  };

  useEffect(() => {
    if (lanActually == "en" || lanActually == "pt") handleTranslate();
  }, []);

  return {
    loadTxt,
    descriptionState,
    titleState,
  };
};
export default useTranslate;
