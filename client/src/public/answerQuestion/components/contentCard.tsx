import QuestionType from "../interfaces/question";
import { Content, Btn, Description, Icon, Title } from "@/global/styles/card";

interface Params {
  v: QuestionType;
  handleClick: (id?: number) => void;
}

const ContentCard = ({ v, handleClick }: Params) => {
  return (
    <Content>
      <Icon>?</Icon>
      <Title>Pregunta</Title>
      <Description>{v.question}</Description>
      <Btn onClick={() => handleClick(v.id)}>Responder</Btn>
    </Content>
  );
};

export default ContentCard;
