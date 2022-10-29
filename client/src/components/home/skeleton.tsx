import styled from "styled-components";

const ContainerFather = styled.div`
  width: 100%;
`;

const ContainerCardFather = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Container = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 300px;
  height: 380px;
  margin: 20px;
  display: inline-block;
  &:hover {
    transform: scale(1.1);
  }
`;
const Content = styled.div`
  padding: 2px 16px;
  margin: 10px;
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const H4 = styled.h4`
  font-size: 22px;
  color: #fff;
  position: relative;
  overflow: hidden;
  margin-top: 5px;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(
      to left,
      transparent,
      rgb(216, 216, 216),
      transparent
    );
    animation: loading-ans 1s linear infinite;
  }
  @keyframes loading-ans {
    0% {
      transform: translateX(-100%);
    }

    100% {
      transform: translateX(100%);
    }
  }
`;
const P = styled.p`
  font-size: 18px;
  color: #fff;
  position: relative;
  overflow: hidden;
  margin-top: 5px;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(
      to left,
      transparent,
      rgb(216, 216, 216),
      transparent
    );
    animation: loading-ans 1s linear infinite;
  }
  @keyframes loading-ans {
    0% {
      transform: translateX(-100%);
    }

    100% {
      transform: translateX(100%);
    }
  }
`;
const ContainerBtn = styled.div`
  display: flex;
  justify-content: end;
`;
const Btn = styled.p`
  border: none;
  width: 70px;
  padding: 5px;
  border-radius: 10px;
  margin-left: 15px;
  position: relative;
  overflow: hidden;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(
      to left,
      transparent,
      rgb(216, 216, 216),
      transparent
    );
    animation: loading-ans 1s linear infinite;
  }
  @keyframes loading-ans {
    0% {
      transform: translateX(-100%);
    }

    100% {
      transform: translateX(100%);
    }
  }
  @media screen and (max-width: 732px) {
    text-align: center;
    font-size: 26px;
  }
`;
const ImgSty = styled.div`
  background-color: rgb(190, 190, 190);
  width: 100%;
  height: 250px;
  object-fit: cover;
  position: relative;
  overflow: hidden;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(
      to left,
      transparent,
      rgb(216, 216, 216),
      transparent
    );
    animation: loading-ans 1s linear infinite;
  }
  @keyframes loading-ans {
    0% {
      transform: translateX(-100%);
    }

    100% {
      transform: translateX(100%);
    }
  }
`;
const Title = styled.h1`
  font-size: 42px;
  font-weight: bold;
  width: 300px;
  height: 40px;
  margin-left: 50px;
  /* EFFEC SLOADER */
  position: relative;
  overflow: hidden;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(
      to left,
      transparent,
      rgb(216, 216, 216),
      transparent
    );
    animation: loading-ans 1s linear infinite;
  }
  @keyframes loading-ans {
    0% {
      transform: translateX(-100%);
    }

    100% {
      transform: translateX(100%);
    }
  }
  @media screen and (max-width: 732px) {
    text-align: center;
    font-size: 26px;
  }
`;
const Skeleton = () => {
  return (
    <>
      <Title>&#160;</Title>
      <ContainerCardFather>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((_, i) => (
          <Container key={i}>
            <Content>
              <div className="img">
                <ImgSty />
              </div>
              <H4 className="loading">&#160;</H4>
              <P className="loading">&#160;</P>
              <ContainerBtn>
                {[1, 2].map((_, i) => (
                  <Btn key={i}>&#160;</Btn>
                ))}
              </ContainerBtn>
            </Content>
          </Container>
        ))}
      </ContainerCardFather>
    </>
  );
};

export default Skeleton;
