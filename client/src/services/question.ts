import { http } from "./http";
import Question from "../interface/question";
export const getQuestions = async () => {
  try {
    const response = await fetch(`${http}question`, {
      method: "GET",
    });
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
export const postQuestion = async (form: Question) => {
  try {
    const response = await fetch(`${http}question`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question: form.question,
      }),
    });
    if(response.ok){
        return true;
    }
    return false
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
