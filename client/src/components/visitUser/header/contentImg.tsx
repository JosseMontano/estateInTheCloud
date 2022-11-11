import Photo from "@/assets/profile/photoProfile.jpg";
import { User } from "@/interface/user";
import {
  Container,
  Img,
  ChangePhoto,
  InputFile,
} from "@/styles/profile/header/contentImg";
import ImgDataBase from "./imgDataBase";

interface Params {
  data: User[];
  exists: boolean;
}

const ContentImg = ({ data, exists }: Params) => {
  return (
    <Container>
      {exists ? <ImgDataBase data={data} /> : <Img src={Photo} alt="" />}
      {/* When the user it's close of img  */}
      <ChangePhoto className="changePhoto">
        <InputFile type="file" />
      </ChangePhoto>
    </Container>
  );
};

export default ContentImg;
