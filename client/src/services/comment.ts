import { FormComment } from "../interface/formComment";
import { http } from "./http";

export const getCommentsByUser = async (id: number) => {
  try {
    const response = await fetch(`${http}comment/${id}`, {
      method: "GET",
    });
    return await response.json();
  } catch (error) {}
};

export const postComment = async (form: FormComment) => {
  try {
    const response = await fetch(`${http}comment`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        commentator: form.commentator,
        description: form.description,
        person_commented: form.person_commented,
      }),
    });
    return response;

  } catch (err) {
    console.error(err);
  }
};
