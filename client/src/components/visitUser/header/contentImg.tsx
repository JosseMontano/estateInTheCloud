import { User } from "@/interfaces/user";
import {
  Container,
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
      {exists && <ImgDataBase data={data} />}
      {/* When the user it's close of img  */}
      <ChangePhoto className="changePhoto">
        <InputFile type="file" />
      </ChangePhoto>
    </Container>
  );
};

export default ContentImg;
