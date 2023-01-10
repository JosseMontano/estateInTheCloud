import Comments from "./comments";
import { Comments as CommentsTypes } from "@/interfaces/comments";

interface ParamsType {
  data: CommentsTypes[];
  idUser: number;
}

const LoadComments = ({ idUser, data }: ParamsType) => {
  return (
    <>
      {data.map((v, i) => (
        <Comments
          key={i}
          v={v}
          idUser={idUser}
        />
      ))}
    </>
  );
};

export default LoadComments;
