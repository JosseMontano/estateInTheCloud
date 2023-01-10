import  UserType from "@/interfaces/user";
import { Img } from "@/public/profile/styles/contentImg";

interface Params{
    data:UserType[]
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
