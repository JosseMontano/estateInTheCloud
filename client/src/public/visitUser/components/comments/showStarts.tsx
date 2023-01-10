import styled from "styled-components";
import StartIcon from "../../../../icons/start";

const Container = styled.div`
  display: flex;
  .star-widget {
    display: flex;
    justify-content: center;
  }
  .star-widget label {
    font-size: 40px;
    color: #fd4;
    padding: 10px;
    transition: all 0.2 ease;
  }
`;

interface Params {
  sizeStart: number;
}

const ShowStarts = ({ sizeStart }: Params) => {
  let data = [];
  for (let i = 0; i < sizeStart; i++) {
    data.push(i);
  }

  return (
    <Container>
      {data.map((_, i) => (
        <div className="star-widget" key={i}>
          <label>
            <StartIcon />
          </label>
        </div>
      ))}
    </Container>
  );
};

export default ShowStarts;
