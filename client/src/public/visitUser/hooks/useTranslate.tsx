import { useEffect, useState } from "react";
import translate from "@/public/home/utilities/translate";
import { useLanguage } from "@/global/context/languageContext";

interface Params {
  description: string;
}

enum Language {
  english = "en",
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

  useEffect(() => {
    if (lanActually == Language.english) handleTranslate();
  }, []);

  return {
    loadTxt,
    descriptionState,
  };
};
export default useTranslate;
