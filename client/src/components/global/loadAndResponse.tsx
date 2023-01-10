import Message from "@/components/global/message";
import Loader from "@/components/global/loading";

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
