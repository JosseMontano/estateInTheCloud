import  UserType  from "@/global/interfaces/user";
import { Container, ChangePhoto, InputFile } from "../../styles/contentImg";
import ImgDataBase from "./imgDataBase";

interface Params {
  exists: boolean;
  data: UserType[];
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
