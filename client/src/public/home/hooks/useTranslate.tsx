import { useEffect, useState } from "react";
import translate from "@/utilities/translate";
import { useLanguage } from "@/context/languageContext";

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
    setLoadTxt(false);
    setDescriptionState(des!);
    setTitleState(tit!);
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
