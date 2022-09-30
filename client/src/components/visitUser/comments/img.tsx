import { useEffect, useState } from "react";
import styled from "styled-components";
import Photo from "../../../assets/profile/photoProfile.jpg";
import { getUserById } from "../../../services/user";
const Container = styled.div`
  justify-self: center;
  align-self: center;
`;
const ImgSty = styled.img`
  border-radius: 100%;
  height: 150px;
`;
interface params {
  commentator: number;
}
const Img = (params: params) => {
  const [idUser, setIdUser] = useState(0);
  const handleGetUser = async () => {
    const res = await getUserById(params.commentator);
    console.log(res);
  };
  useEffect(() => {
    handleGetUser();
  }, []);

  return (
    <Container>
      <ImgSty src={Photo} alt="" />
    </Container>
  );
};

export default Img;
