import { useParams } from "react-router-dom";
import { getImgTo360 } from "@/services/realEstate";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  position: relative;
  display: flex;
  font-size: calc(10px + 2vmin);
  color: white;
  justify-content: center;
`;

const Img360 = () => {
  let { id } = useParams();
  const [data, setData] = useState();
  const getRealEstate = async (id) => {
    const { json } = await getImgTo360(id);
    if (json) {
      setData(json[0]);
      console.log(json[0]);
    }
  };

  useEffect(() => {
    if (id) {
      getRealEstate(parseFloat(id));
    }
  }, []);

  return (
    <>
      {data && (
        <Container>
          <a-scene className="RV">
            <a-sky src={data.url} rotation="0 -130 0"></a-sky>
          </a-scene>
        </Container>
      )}
    </>
  );
};

export default Img360;
