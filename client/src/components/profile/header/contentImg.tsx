import { useEffect, useState } from "react";
import Photo from "@/assets/profile/photoProfile.jpg";
import { User } from "@/interface/user";
import { getUser } from "@/services/user";
import {
  Container,
  Img,
  ChangePhoto,
  InputFile,
} from "@/styles/profile/header/contentImg";
import ImgDataBase from "./imgDataBase";

interface Params {
  email?: string;
}

const ContentImg = (params: Params) => {
  const [data, setData] = useState<User[]>([]);
  const [exists, setExists] = useState(false);
  const handleGetUser = async () => {
    const res = await getUser(params.email);
    if (res) {
      setData(res);
      setExists(true);
    }
  };
  useEffect(() => {
    handleGetUser();
  }, []);

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
