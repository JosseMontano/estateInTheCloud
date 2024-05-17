import translateSer, {
  translateEnglishToSpanish,
  translateSpanishToPortuguese,
} from "../services/translate";

const translate = async (text: string) => {
  const val = await translateSer(text);
  return val;
};

export const translateToSpanish = async (text: string) => {
  const val = await translateEnglishToSpanish(text);
  return val;
};

export const translateToPortuguese = async (text: string) => {
  const val = await translateSpanishToPortuguese(text);
  return val;
};

export default translate;
