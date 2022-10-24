import { createContext, useState } from "react";
import { getCommentsByUser } from "../../services/comment";
import { Comments } from "../../interface/comments";
interface LoadContextState {
  comments: Comments[];
  getComments: (id: number) => void;
  loading: boolean;
}
interface MyContextProp {
  children: JSX.Element;
}
const contextDefaultValue: LoadContextState = {
  comments: [],
  getComments: () => {},
  loading: true,
};

export const CommentsContext =
  createContext<LoadContextState>(contextDefaultValue);
const CommentsProvider = ({ children }: MyContextProp) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const getComments = async (id: number) => {
    setLoading(true);
    const resp = await getCommentsByUser(id);
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
