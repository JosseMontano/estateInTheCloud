import { useLanguage } from "@/global/context/languageContext";
import { RealEstate } from "@/global/interfaces/realEstate";
import styled from "styled-components";

interface Props {
  v: RealEstate;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  p {
    color: #3e3e3e;
    margin: 5px 0;
    font-size: 16px;

    span {
      font-weight: 300;
    }
  }
`;

const MoreInfo = ({ v }: Props) => {
  const { text } = useLanguage();
  return (
    <Container>
      <p>
        {text.visitUseramount_bedroom}
        <span>{v.amount_bedroom}</span>
      </p>
      <p>
        {text.visitUserprice}
        <span> {v.price}</span>
      </p>

      <p>
        {text.visitUseramount_bathroom}
        <span>{v.amount_bathroom}</span>
      </p>

      <p>
        {text.visitUsersquare_meter}
        <span> {v.square_meter}</span>
      </p>

      <p>
        {text.visitUserprice}
        <span> {v.price}</span>
      </p>

      <p>
        {text.visitUseraddress}
        <span> {v.address}</span>
      </p>
    </Container>
  );
};

export default MoreInfo;
