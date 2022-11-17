import Comments from "./comments";
import { Comments as CommentsTypes } from "@/interface/comments";

interface ParamsType {
  data: CommentsTypes[];
  handleDelete: (id: number) => {};
  idUser: number;
}

const LoadComments = ({ idUser, data, handleDelete }: ParamsType) => {
  return (
    <>
      {data.map((v, i) => (
        <Comments
          key={i}
          v={v}
          handleDeleteComment={handleDelete}
          idUser={idUser}
        />
      ))}
    </>
  );
};

export default LoadComments;
