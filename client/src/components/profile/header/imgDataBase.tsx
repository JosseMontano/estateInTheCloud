import { User } from "@/interface/user";
import { Img } from "@/styles/profile/header/contentImg";

interface Params{
    data:User[]
}

const ImgDataBase = (params:Params) => {
  return (
    <>
      {params.data.map((v, i) => (
        <div key={i}>
          <Img src={v.url} alt="" />
        </div>
      ))}
    </>
  );
};

export default ImgDataBase;
