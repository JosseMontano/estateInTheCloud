import React, { useEffect } from "react";
import { getAnswerByRealEstate } from "../services/answer";
import { useParams } from "react-router-dom";

const AnswerQuestionInterested = () => {
  const { id } = useParams();
  const idNumer = parseFloat(id!);
  const getData = async () => {
    const res = await getAnswerByRealEstate(idNumer);
    console.log(res)
  };

  useEffect(() => {
    getData();
  }, []);

  return <div>AnswerQuestionInterested</div>;
};

export default AnswerQuestionInterested;
