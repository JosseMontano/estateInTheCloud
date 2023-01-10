import  UserType  from "@/global/interfaces/user";
import {
  Container,
  ChangePhoto,
  InputFile,
} from "@/public/profile/styles/contentImg";
import ImgDataBase from "./imgDataBase";

interface Params {
  data: UserType[];
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
