import { useState } from "react";
import { useMutation, useQuery, useSubscription } from "@apollo/client";
import {
  Comments,
  CommentsPostType,
} from "../../interfaces/visitUser/comments";
import { useApolloClient } from "@apollo/client";
import {
  addCommentSubs,
  deleteComment,
  deleteCommentSubs,
  postComment,
  getCommentsByUser,
} from "../../services/visitUser/comments";

export const useComments = () => {
  const [idCommentUser, setIdCommentUser] = useState(0);
  const [deleteCommentState, setDeleteCommentState] = useState(false);

  const client = useApolloClient();

  const { data, loading, error } = useQuery(getCommentsByUser(idCommentUser));

  const [CREATE_COMMENT] = useMutation(postComment);

  useSubscription(addCommentSubs, {
    onData: ({ data }) => {
      console.log(data.data);
      const { ADD_A_COMMENT } = data.data;
      const dataInStore = client.readQuery({
        query: getCommentsByUser(idCommentUser),
      });
      console.log(dataInStore);
      client.writeQuery({
        query: getCommentsByUser(idCommentUser),
        data: {
          ...dataInStore,
          getAllCommentsByUser: [
            ...dataInStore.getAllCommentsByUser,
            ADD_A_COMMENT,
          ],
        },
      });
    },
  });

  const addComment = async (form: CommentsPostType) => {
    const { amountStart, description, id_user_visited, id_user_commentator } =
      form;
    await CREATE_COMMENT({
      variables: {
        person_commented: id_user_visited,
        commentator: id_user_commentator,
        description,
        amount_start: amountStart,
      },
    });
    alert("Se publico tu comentario");
  };

  useSubscription(deleteCommentSubs, {
    onData: ({ data }) => {
      const { DELETE_A_COMMENT } = data.data;
      const dataInStore = client.readQuery({
        query: getCommentsByUser(idCommentUser),
      });
      client.writeQuery({
        query: getCommentsByUser(idCommentUser),
        data: {
          ...dataInStore,
          getAllCommentsByUser: dataInStore.getAllCommentsByUser.filter(
            (v: Comments) => v.id_comment != DELETE_A_COMMENT.id
          ),
        },
      });
    },
  });

  const [DELETE_COMMENT] = useMutation(deleteComment());

  const handleDelete = async (id: number) => {
    await DELETE_COMMENT({ variables: { id } });

    setDeleteCommentState(true);
    setTimeout(() => {
      setDeleteCommentState(false);
    }, 3000);
  };

  return {
    data,
    setIdCommentUser,
    loading,
    handleDelete,
    deleteCommentState,
    addComment,
  };
};
