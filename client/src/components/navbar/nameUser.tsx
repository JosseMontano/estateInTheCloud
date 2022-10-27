import styled from "styled-components";

const Span = styled.span<{ textBig: boolean }>`
  @media screen and (max-width: 520px) {
    font-size: ${(props) => (props.textBig ? "15px" : "30px")};
  }
`;

interface Params {
  textBig: boolean;
  msg: string;
}

const NameUser = ({ textBig, msg }: Params) => {
  return <Span textBig={textBig}>{msg}</Span>;
};

export default NameUser;
