import { FormComment } from "../interface/formComment";
import { http, headers } from "./http";
import deleteServ from "../utilities/deleteServices";

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
      headers: headers,
      body: JSON.stringify({
        commentator: form.commentator,
        description: form.description,
        person_commented: form.person_commented,
        amount_start: form.amount_start,
      }),
    });
    console.log(response);
    if (response.status === 200) {
      return true;
    }
  } catch (err) {
    console.error(err);
  }
};

export const deleteComment = async (id: number) => {
  const url = `${http}comment/${id}`;
  const response = await deleteServ(url);
  return response;
};
