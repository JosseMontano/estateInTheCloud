import React from "react";
import Message from "../../global/message";
import Loader from "../../global/loading";
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
