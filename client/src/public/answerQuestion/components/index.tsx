import QuestionType from "../interfaces/question";
import { CardSoon, Box } from "@/styles/card";
import ContentCard from "./contentCard";

interface Params {
  v: QuestionType;
  handleClick: (id?: number) => void;
}

const Index = ({ v, handleClick }: Params) => {
  return (
    <CardSoon>
      <Box>
        <ContentCard handleClick={handleClick} v={v} />
      </Box>
    </CardSoon>
  );
};

export default Index;
