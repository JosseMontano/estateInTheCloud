import { useEffect, useState } from "react";
import translate from "@/public/home/utilities/translate";
import { useLanguage } from "@/global/context/languageContext";

interface Params {
  title: string;
  description: string;
}

enum Language {
  english = "en",
}

const useTranslate = ({ title, description }: Params) => {
  const [descriptionState, setDescriptionState] = useState(description);
const [titleState, setTitleState] = useState(title)

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
    }, 3000);
  };

  useEffect(() => {
    if (lanActually == Language.english) handleTranslate();
  }, []);

  return {
    loadTxt,
    descriptionState,
    titleState
  };
};
export default useTranslate;
