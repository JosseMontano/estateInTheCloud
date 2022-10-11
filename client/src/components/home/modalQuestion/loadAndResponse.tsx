import React from "react";
import Message from "../../message";
import Loader from "../../loader";
interface props {
  loading: boolean;
  response: boolean;
  msg: string;
}
const LoadAndResponse = (p: props) => {
  return (
    <div>
      {p.loading && <Loader />}
      {p.response && <Message msg={p.msg} />}
    </div>
  );
};

export default LoadAndResponse;
