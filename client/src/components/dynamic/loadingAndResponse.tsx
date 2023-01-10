import React from "react";
import Loader from "@/global/components/loading";
import Message from "@/global/components/message";

interface Params {
  loading: boolean;
  response: boolean;
  msg: string;
}

const LoadingAndResponse = ({ loading, response, msg }: Params) => {
  return (
    <>
      {loading && <Loader />}
      {response && <Message msg={msg} />}
    </>
  );
};

export default LoadingAndResponse;
