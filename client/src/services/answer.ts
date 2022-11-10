import FormAnswer from "../interface/answer";
import { http, headers } from "./http";
import { index } from "../utilities/getServices";

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

export const getAnswerByRealEstate = async (id: number) => {
  const url = `${http}answer/${id}`;
  const { json, status } = await index(url);
  return { json, status };
};

export const deleteAnswer = async (id: number) => {
  try {
    const response = await fetch(`${http}answer/${id}`, {
      method: "DELETE",
      body: JSON.stringify(false),
    });

    if (response.ok) {
      const result = await response.json();
      return result;
    }
  } catch (err) {
    console.error(err);
  }
};
