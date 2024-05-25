import { httpPy } from "@/config/http";
import { apisExternal, index, postService } from "@/global/utilities/getServices";

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
  const url = httpPy + "translate-es-en" ;
  const { json } = await postService<ResponseData>(url, msg);
  const { val } = json;
  return val;
};
export default translate;

export const translateEnglishToSpanish = async (
  msg: string
): Promise<string> => {
  const url = httpPy + "translate-en-es" ;
  const { json } = await postService<ResponseData>(url, msg);
  const { val } = json;
  return val;
};

export const translateSpanishToPortuguese = async (
  msg: string
): Promise<string> => {
  const url = httpPy + "translate-es-pt" ;
  const { json } = await postService<ResponseData>(url, msg);
  const { val } = json;
  return val;
};
