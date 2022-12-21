import { useParams } from "react-router-dom";
import { getDestinates } from "services/realEstate";
import { useEffect, useState } from "react";
import { RealEstate } from "interface/realEstate";
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
  const [data, setData] = useState<RealEstate | null>();
  const getRealEstate = async (id: number) => {
    const { json } = await getDestinates<RealEstate[]>(id);
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
      {/* <img src={data?.url} alt="" />  */}
      {data && (
        <Container>
     
        </Container>
      )}
    </>
  );
};

export default Img360;
