import IAQ from "@/public/questionsAnswered/interfaces/answerQuestionInterested";
import styled from "styled-components";
import Content from "./content";

interface Params {
  data: IAQ[];
}


const Index = ({ data }: Params) => {
  return (
    <>
      {data.map((v, i) => (
        <div key={i}>
          <Content {...v} />
        </div>
      ))}
    </>
  );
};

export default Index;
