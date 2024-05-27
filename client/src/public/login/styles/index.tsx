import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  place-content: center;
  height: 100vh;
  width: 100%;
  /*   background: #0f2027; */
  /*   background: -webkit-linear-gradient(to bottom, #2c5364, #203a43, #0f2027);
  background: linear-gradient(to bottom, #2c5364, #203a43, #0f2027); */
  background-color: #f2f2f2;
`;
export const ContainerSoon = styled.div`
  display: grid;
  position: relative;
   grid-template-columns: 1fr 1fr; 
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
`;

export const ContainerColPhoto = styled.div`
  width: 100%;
  div {
    height: 100%;
  }
  div img {
    width: 100%;
    height: 450px;
  }
`;
export const ContainerBtn = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap:5px;
`;

export const ContainerSocialMedia = styled.div`
  text-align: center;
  margin-top: 5px;
  cursor: pointer;
  p{
    color:#2c325b;
    font-weight: bold;
  }
`
