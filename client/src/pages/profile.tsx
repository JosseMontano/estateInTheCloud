import { useParams } from "react-router";
import styled from "styled-components";
import Header from "../components/profile/header";
import { marginGlobal, ColorText } from "../styles/globals";
import Navbar from "../components/navbar";
import AuxNav from "../components/navbar/auxNav";
import Publication from "../components/profile/publication";
const Container = styled.div<{ marginGlobal: string; ColorText: string }>`
  height: 100%;
  margin: ${(props) => props.marginGlobal};
  color: ${(props) => props.ColorText};
`;

const Profile = () => {
  const { email } = useParams();
  let data = [
    {
      iter: 1,
    },
    {
      iter: 2,
    },
    {
      iter: 3,
    },
    {
      iter: 4,
    },
    {
      iter: 5,
    },
    {
      iter: 6,
    },
    {
      iter: 7,
    },
    {
      iter: 8,
    },
    ,
    {
      iter: 9,
    },
  ];
  return (
    <>
      <Navbar />
      <AuxNav margin={"1700px"} />
      <Container marginGlobal={marginGlobal} ColorText={ColorText}>
        <Header email={email} />
        <Publication data={data} />
      </Container>
    </>
  );
};

export default Profile;
