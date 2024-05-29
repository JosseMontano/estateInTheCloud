import styled from "styled-components";

const ContainerAux = styled.div<{ margin: string; isHome?: boolean }>`
  @media screen and (max-width: ${(props) => props.margin}) {
    margin-top: ${(props) => (props.isHome ? "370px" : "80px")};
  }
`;

export interface params {
  margin: string;
  isHome?: boolean;
}

const AuxNav = ({ margin, isHome }: params) => {
  return <ContainerAux margin={margin} isHome={isHome} />;
};

export default AuxNav;
