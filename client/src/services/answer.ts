import FormAnswer from "../interface/answer";
import { http } from "./http";

export const addAnswer = async (form: FormAnswer) => {
  try {
    const response = await fetch(`${http}answer`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        answer: form.answer,
        id_real_estate: form.id_real_estate,
        id_question:form.id_question,
      }),
    });
    if(response.ok){
        return true;
    }
  } catch (err) {
    console.error(err);
  }
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
