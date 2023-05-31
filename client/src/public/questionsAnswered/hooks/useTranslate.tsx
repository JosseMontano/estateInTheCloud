import { useEffect, useState } from "react";
import translate from "@/public/home/utilities/translate";
import { useLanguage } from "@/global/context/languageContext";

interface Params {
  title: string;
  response:string;
}

enum Language {
  english = "en",
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

  useEffect(() => {
    if (lanActually == Language.english) handleTranslate();
  }, []);

  return {
    loadTxt,
    titleState,
    responseState
  };
};
export default useTranslate;
