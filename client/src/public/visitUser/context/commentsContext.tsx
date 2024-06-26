import { createContext, useContext, useState } from "react";
import Children from "@/global/interfaces/children";
import {
  addCommentSubs,
  getCommentsByUser,
} from "@/public/visitUser/services/comment";
import { useMutation, useQuery, useSubscription } from "@apollo/client";
import {
  deleteComment,
  deleteCommentSubs,
} from "@/public/visitUser/services/comment";
import { Comments } from "@/public/visitUser/interfaces/comments";
import { useApolloClient } from "@apollo/client";
import { postComment } from "@/public/visitUser/services/comment";
import { CommentsPostType } from "@/public/visitUser/interfaces/comments";
import { showToast } from "@/global/utilities/toast";
import { useLanguage } from "@/global/context/languageContext";
interface ContextType {
  data: any;
  setIdCommentUser: React.Dispatch<React.SetStateAction<number>>;
  loading: boolean;
  handleDelete: (id: number) => void;
  deleteCommentState: boolean;
  addComment: (form: CommentsPostType) => void;
}

const initialVal: ContextType = {
  data: null,
  setIdCommentUser: () => {},
  loading: false,
  handleDelete: () => {},
  deleteCommentState: false,
  addComment: () => {},
};

const CommentsContext = createContext(initialVal);

export const useComments = () => {
  const context = useContext(CommentsContext);
  if (!context) {
    throw new Error(
      "this contexts must be used whitin a CommentsContextProvider"
    );
  }
  return context;
};

export const CommentsContextProvider = ({ children }: Children) => {
  const [idCommentUser, setIdCommentUser] = useState(0);
  const [deleteCommentState, setDeleteCommentState] = useState(false);
  const {text} = useLanguage()

  const client = useApolloClient();

  const { data, loading, error } = useQuery(getCommentsByUser(idCommentUser));

  const [CREATE_COMMENT] = useMutation(postComment);

  useSubscription(addCommentSubs, {
    onData: ({ data }) => {
      const { ADD_A_COMMENT } = data.data;
      const dataInStore = client.readQuery({
        query: getCommentsByUser(idCommentUser),
      });
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
    showToast(text.saveComment);
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

  const val = {
    data,
    setIdCommentUser,
    loading,
    handleDelete,
    deleteCommentState,
    addComment,
  };

  return (
    <CommentsContext.Provider value={val}>{children}</CommentsContext.Provider>
  );
};
