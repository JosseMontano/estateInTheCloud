import { FormComment } from "../interface/formComment";
import { http } from "./http";
import deleteServ from "../utilities/deleteServices";
import { gql } from "@apollo/client";

export const getCommentsByUser = (id: number) => {
  const query = gql`
    query{
      getAllCommentsByUser(person_commented:${id}){
        email
        id_comment
        commentator
        description
        amount_start
        url
      }
    } 
  `;
  return query;
};

export const postComment = () => {
  const query = gql`
    mutation CREATECOMMENT(
      $person_commented: Float!
      $commentator: Float!
      $description: String!
      $amount_start: Float!
    ) {
      CREATE_COMMENT(
        person_commented: $person_commented
        commentator: $commentator
        description: $description
        amount_start: $amount_start
      ) {
        id
        commentator
        description
        amount_start
      }
    }
  `;
  return query;
};

export const deleteComment = () => {
  const query = gql`
    mutation DELETE_COMMENT($id: ID!) {
      DELETE_COMMENT(id: $id)
    }
  `;
  return query;
};


  export const deleteCommentSubs = gql`
    subscription {
      DELETE_A_COMMENT {
        id
      }
    }
  `;

