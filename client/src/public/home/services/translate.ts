import { apisExternal } from "@/global/utilities/getServices";

interface TranslateType {
  responseData: ResponseData;
  quotaFinished: boolean;
  mtLangSupported?: any;
  responseDetails: string;
  responseStatus: number;
  responderId?: any;
  exception_code?: any;
  matches: Match[];
}

interface Match {
  id: number;
  segment: string;
  translation: string;
  source: string;
  target: string;
  quality: number;
  reference: string;
  "usage-count": number;
  subject: boolean;
  "created-by": string;
  "last-updated-by": string;
  "create-date": string;
  "last-update-date": string;
  match: number;
  model: string;
}

interface ResponseData {
  translatedText: string;
  match: number;
}

const translate = async (
  msg: string
): Promise<{ json: TranslateType; status: number }> => {
  const url = `https://api.mymemory.translated.net/get?q=${msg}&langpair=es|en`;
  const { json, status } = await apisExternal<TranslateType>(url);
  return { json, status };
};
export default translate;

export const translateEnglishToSpanish = async (
  msg: string
): Promise<{ json: TranslateType; status: number }> => {
  const url = `https://api.mymemory.translated.net/get?q=${msg}&langpair=en|es`;
  const { json, status } = await apisExternal<TranslateType>(url);
  return { json, status };
};


