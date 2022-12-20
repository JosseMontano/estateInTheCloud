import styled from "styled-components";
import { useLanguage } from "@/context/languageContext";

const Container = styled.div`
  display: flex;
  justify-content: end;
`;
const Btn = styled.button`
  background-color: #fff;
  color: #000;
  border: none;
  padding: 5px;
  border-radius: 10px;
  margin-left: 15px;
`;

interface Params {
  idUser: number;
  email: string;
  toggle: () => void;
  visitUser: (idUser: number, email: string) => void;
}

const ContainterBtn = ({ idUser, toggle, visitUser, email }: Params) => {
  const { text } = useLanguage();
  let data = [
    {
      name: text.homeMoreInfor,
      click: toggle,
    },
    {
      name: text.homeVist,
      click: () => visitUser(idUser, email),
    },
  ];

  return (
    <Container>
      {data.map((v, i) => (
        <Btn key={i} onClick={v.click}>
          {v.name}
        </Btn>
      ))}
    </Container>
  );
};

export default ContainterBtn;
