import { createContext, useContext, useState } from "react";
import Children from "@/interfaces/children";
import { getCommentsByUser } from "@/services/comment";
import { useMutation, useQuery, useSubscription } from "@apollo/client";
import { deleteComment, deleteCommentSubs } from "@/services/comment";
import { Comments } from "@/interfaces/comments";
import { useApolloClient } from "@apollo/client";

interface ContextType {
  data: any;
  setIdCommentUser: React.Dispatch<React.SetStateAction<number>>;
  loading: boolean;
  handleDelete: (id: number) => void;
  deleteCommentState: boolean;
}

const initialVal: ContextType = {
  data: null,
  setIdCommentUser: () => {},
  loading: false,
  handleDelete: () => {},
  deleteCommentState: false,
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

  const client = useApolloClient();

  const { data, loading, error } = useQuery(getCommentsByUser(idCommentUser));

  useSubscription(deleteCommentSubs, {
    onData: ({ data }) => {
      const { DELETE_A_COMMENT } = data.data;

      const dataInStore = client.readQuery({
        query: getCommentsByUser(idCommentUser),
      });
      console.log(dataInStore);
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
    DELETE_COMMENT({ variables: { id } });
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
  };

  return (
    <CommentsContext.Provider value={val}>{children}</CommentsContext.Provider>
  );
};
