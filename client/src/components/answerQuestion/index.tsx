import IQuestion from "@/interface/answerQuestion";
import { CardSoon, Box } from "@/styles/card";
import ContentCard from "./contentCard";

interface Params {
  v: IQuestion;
  handleClick: (id: number) => void;
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
