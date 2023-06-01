import translateSer, { translateEnglishToSpanish } from "../services/translate";

const translate = async (text: string) => {
  const { json } = await translateSer(text);
  if (json) {
    const des = json.responseData.translatedText;
    return des;
  }
};

export const translateToSpanish = async (text: string) => {
  const { json } = await translateEnglishToSpanish(text);
  if (json) {
    const des = json.responseData.translatedText;
    return des;
  }
};

export default translate;
