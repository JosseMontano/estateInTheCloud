import FormAnswer from "../interface/answer";
import { http, headers } from "./http";
import { index } from "../utilities/getServices";
import deleteServ from "../utilities/deleteServices";
export const addAnswer = async (form: FormAnswer) => {
  const { answer, id_question, id_real_estate } = form;
  try {
    const response = await fetch(`${http}answer`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        answer,
        id_real_estate,
        id_question,
      }),
    });
    if (response.ok) {
      return true;
    }
  } catch (err) {
    console.error(err);
  }
};

export const getAnswerByRealEstate = async (id: number | undefined) => {
  const url = `${http}answer/${id}`;
  const { json, status } = await index(url);
  return { json, status };
};

export const deleteAnswer = async (id: number) => {
  const url = `${http}answer/${id}`;
  const result = await deleteServ(url);
  return result;
};
