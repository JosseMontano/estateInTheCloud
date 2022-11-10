import { useEffect, useState } from "react";
import styled from "styled-components";
import { getUserById } from "@/services/user";
const Container = styled.div`
  justify-self: center;
  align-self: center;
`;
const ImgSty = styled.img`
  border-radius: 100%;
  height: 170px;
  width: 170px;
  object-fit: cover;
`;
interface params {
  commentator: number;
}
const Img = (params: params) => {
  const [photo, setPhoto] = useState("");
  const handleGetUser = async () => {
    const res = await getUserById(params.commentator);
    const objRes = Object.assign({}, res[0]);
    const auxUrl = objRes.url;
    setPhoto(auxUrl);
  };
  useEffect(() => {
    handleGetUser();
  }, []);

  return (
    <Container>
      <ImgSty src={photo} alt="" />
    </Container>
  );
};

export default Img;
