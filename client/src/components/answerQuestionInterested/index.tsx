import IAQ from "@/interfaces/answerQuestionInterested";
import Content from "./content";

interface Params {
  data: IAQ[];
}

const Index = ({ data }: Params) => {
  return (
    <>
      {data.map((v, i) => (
        <Content {...v} key={i} />
      ))}
    </>
  );
};

export default Index;
