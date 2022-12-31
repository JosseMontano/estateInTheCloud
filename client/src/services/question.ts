import { http, headers } from "./http";
import Question from "../interfaces/question";
import { index } from "../utilities/getServices";
import deleteServ from "../utilities/deleteServices";

export const getQuestions = async (idRealEstate: number | undefined) => {
  const url = `${http}question/${idRealEstate}`;
  const { json, status } = await index(url);
  return { json, status };
};

export const postQuestion = async (form: Question) => {
  try {
    const response = await fetch(`${http}question`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        question: form.question,
      }),
    });
    if (response.ok) {
      return true;
    }
    return false;
  } catch (err) {
    console.error(err);
  }
};

export const deleteQuestion = async (id: number) => {
  const url = `${http}question/${id}`;
  const response = await deleteServ(url);
  return response;
};
