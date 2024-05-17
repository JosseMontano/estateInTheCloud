import { useEffect, useState } from "react";
import translate from "@/public/home/utilities/translate";
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
    const des = await translate(description);
    const tit = await translate(title);
    setDescriptionState(des!);
    setTitleState(tit!);
    setTimeout(() => {
      setLoadTxt(false);
    }, 3000);
  };

  

  useEffect(() => {
    if (lanActually == Language.english) handleTranslate();
  }, []);

  return {
    loadTxt,
    descriptionState,
    titleState,
  };
};
export default useTranslate;
