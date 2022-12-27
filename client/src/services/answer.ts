import { http } from "./http";
import deleteServ from "../utilities/deleteServices";
import { gql } from "@apollo/client/core";

export const addAnswer = () => {
  const query = gql`
    mutation CreateAnswer(
      $answer: String!
      $id_real_estate: Float!
      $id_question: Float!
    ) {
      createAnswer(
        answer: $answer
        id_real_estate: $id_real_estate
        id_question: $id_question
      ) {
        id
        answer
        id_real_estate
        id_question
      }
    }
  `;
  return query;
};

export const getAnswerByRealEstate = (id: number) => {
  const query = gql`
    query {
      getAnswerQuestionByRealEstate(id_real_estate: ${id}) {
        id_real_estate
        answer
        question
        id
        id_question
      }
    }
  `;
  return query;
};

export const deleteAnswer = async (id: number) => {
  const url = `${http}answer/${id}`;
  const result = await deleteServ(url);
  return result;
};
