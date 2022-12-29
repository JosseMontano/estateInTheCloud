import { createContext, useContext, useEffect, useState } from "react";
import Children from "@/interface/children";
import { Comments as CommentsTypes } from "@/interface/comments";
import { getCommentsByUser } from "@/services/comment";
import { DocumentNode, useMutation, useQuery } from "@apollo/client";
import { deleteComment } from "@/services/comment";

interface ContextType {
  data: any;
  setIdCommentUser: React.Dispatch<React.SetStateAction<number>>;
  loading: boolean;
  handleDelete: (id: number) => void;
}

const initialVal: ContextType = {
  data: null,
  setIdCommentUser: () => {},
  loading: false,
  handleDelete: () => {},
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
  const [loadingDelete, setLoadingDelete] = useState(true);

  const { data, loading, error } = useQuery(getCommentsByUser(idCommentUser));

  const [DELETE_COMMENT] = useMutation(deleteComment(), {
    refetchQueries: [{ query: getCommentsByUser(idCommentUser) }],
  });

  const handleDelete = async (id: number) => {
    DELETE_COMMENT({ variables: { id } });
    setLoadingDelete(true);
    setTimeout(() => {
      setLoadingDelete(false);
    }, 3000);
  };

  const val = { data, setIdCommentUser, loading, handleDelete };

  return (
    <CommentsContext.Provider value={val}>{children}</CommentsContext.Provider>
  );
};
