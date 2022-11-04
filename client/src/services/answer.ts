import FormAnswer from "../interface/answer";
import { http, headers } from "./http";

export const addAnswer = async (form: FormAnswer) => {
  try {
    const response = await fetch(`${http}answer`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        answer: form.answer,
        id_real_estate: form.id_real_estate,
        id_question: form.id_question,
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
  try {
    const response = await fetch(`${http}answer/${id}`, {
      method: "GET",
    });
    const json = await response.json();
    const status = response.status;
    return { json, status };
  } catch (error) {}
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
