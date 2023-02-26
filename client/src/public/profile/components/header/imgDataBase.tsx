import UserType from "@/global/interfaces/user";
import { Img } from "@/public/profile/styles/contentImg";

interface Params {
  data: UserType;
}

const ImgDataBase = (params: Params) => {
  return <Img src={params.data.url_photo} alt="" />;
};

export default ImgDataBase;
