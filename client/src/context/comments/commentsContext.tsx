import { createContext, useState } from "react";
import { getCommentsByUser } from "../../services/comment";
import { Comments }  from '../../interface/comments'
interface LoadContextState {
    comments:Comments[];
  getComments: (id:number)=>void;
}
interface MyContextProp {
  children: JSX.Element;
}
const contextDefaultValue: LoadContextState = {
    comments:[],
    getComments:()=>{}
};

export const CommentsContext = createContext<LoadContextState>(contextDefaultValue);
const CommentsProvider = ({ children }: MyContextProp) => {

const [comments, setComments] = useState([])
  const getComments = async(id:number) => {
    const resp = await getCommentsByUser(id);
    setComments(resp);
  };
  return (
    <CommentsContext.Provider
      value={{
        comments,
        getComments,
      }}
    >
      {children}
    </CommentsContext.Provider>
  );
};
export default CommentsProvider
