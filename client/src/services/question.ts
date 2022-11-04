import { http, headers } from "./http";
import Question from "../interface/question";
export const getQuestions = async (idRealEstate: number) => {
  try {
    const response = await fetch(`${http}question/${idRealEstate}`, {
      method: "GET",
    });

    const json = await response.json();
    const status = response.status;
    return { json, status };
  } catch (error) {
    console.log(error);
  }
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
  try {
    const response = await fetch(`${http}question/${id}`, {
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
