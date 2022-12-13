import { useEffect, useState } from "react";
import "./App.css";
import { getDestinates } from "./services/destinates";
import { useParams } from "react-router-dom";
function App() {
  const [data, setData] = useState({});
  let { id } = useParams();

  const handlGgetDestinates = async (id) => {
    let Obj = {};
    const res = await getDestinates(id);
    console.log(res);
    Obj = Object.assign({}, res[0]);
    setData(Obj);
    console.log(Obj);
  };

  useEffect(() => {
    handlGgetDestinates(id);
  }, []);

  return (
    <div className="container">
      <a-scene className="RV">
        <a-sky src={data.url} rotation="0 -130 0"></a-sky>
      </a-scene>
    </div>
  );
}

export default App;
