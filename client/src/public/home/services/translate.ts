import { httpPy } from "@/config/http";
import { apisExternal, index } from "@/global/utilities/getServices";

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
  val: string;
}

const translate = async (msg: string): Promise<string> => {
  const url = httpPy + "translate-es-en/" + msg;
  const { json } = await index<ResponseData>(url);
  const { val } = json;
  return val;
};
export default translate;

export const translateEnglishToSpanish = async (
  msg: string
): Promise<string> => {
  const url = httpPy + "translate-en-es/" + msg;
  const { json } = await index<ResponseData>(url);
  const { val } = json;
  return val;
};

export const translateSpanishToPortuguese = async (
  msg: string
): Promise<string> => {
  const url = httpPy + "translate-es-pt/" + msg;
  const { json } = await index<ResponseData>(url);
  const { val } = json;
  return val;
};
