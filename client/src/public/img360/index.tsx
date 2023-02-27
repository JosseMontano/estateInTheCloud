import { useParams } from "react-router-dom";
import { getImgTo360 } from "./services/get";
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

interface Type {
  id: number;
  public_id: string;
  url: string;
}

const Img360 = () => {
  let { id } = useParams();
  const [data, setData] = useState<Type>();
  const getRealEstate = async (id: number) => {
    const { json } = await getImgTo360<Type[]>(id);
    if (json) {
      setData(json[0]);
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
          {/* 
// @ts-ignore */}
          <a-scene className="RV">
            {/* 
// @ts-ignore */}
            <a-sky src={data.url} rotation="0 -130 0"></a-sky>
            {/* 
// @ts-ignore */}
          </a-scene>
        </Container>
      )}
    </>
  );
};

export default Img360;
