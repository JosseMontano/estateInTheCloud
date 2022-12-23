import translateSer from "@/services/translate";

const translate = async (text: string) => {
  const { json } = await translateSer(text);
  if (json) {
    const des = json.responseData.translatedText;
    return des;
  }
};

export default translate;
