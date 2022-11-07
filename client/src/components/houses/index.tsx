import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Card from "../../components/home/contentCard";
import { RealEstate } from "../../interface/realEstate";
export const ContainerSoon = styled.div`
  width: 300px;
  height: 400px;
`;

interface Params {
  v: RealEstate;
  toggle: () => void;
}

const Index = ({ toggle, v }: Params) => {
  const navigate = useNavigate();
  const visitUser = () => navigate(`/visitUser/${v.iduser}/${v.email}`);
  return (
    <ContainerSoon>
      <Card v={v} toggle={toggle} visitUser={visitUser} />
    </ContainerSoon>
  );
};

export default Index;
