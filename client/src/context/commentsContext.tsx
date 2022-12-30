import { createContext, useContext, useState } from "react";
import { getCommentsByUser } from "../services/comment";
import { Comments } from "../interface/comments";
import { DocumentNode } from "graphql";

interface LoadContextState {
  comments: DocumentNode | undefined;
  getComments: (id: number) => void;
  loading: boolean;
}
interface MyContextProp {
  children: JSX.Element;
}
const contextDefaultValue: LoadContextState = {
  comments: undefined,
  getComments: () => {},
  loading: true,
};

export const CommentsContext =
  createContext<LoadContextState>(contextDefaultValue);

export const CommentsProvider = ({ children }: MyContextProp) => {
  const [comments, setComments] = useState<DocumentNode>();
  const [loading, setLoading] = useState(true);

  const getComments = async (id: number) => {
    const resp = getCommentsByUser(id);
    setComments(resp);
    setLoading(false);
  };

  return (
    <CommentsContext.Provider
      value={{
        comments,
        getComments,
        loading,
      }}
    >
      {children}
    </CommentsContext.Provider>
  );
};
export default CommentsProvider;
