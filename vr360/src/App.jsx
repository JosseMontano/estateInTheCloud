import { useEffect, useState } from "react";
import "./App.css";
import { getDestinates } from "./services/destinates";

function App() {
  const [data, setData] = useState({});
  const [id, setId] = useState(0);
  const [btn1, setBtn1] = useState(false);
  useEffect(() => {
    getId(window.location.href);
  }, []);

  const getId = (url) => {
    const res = url.replace("https://realestate360-db9fa.web.app/#/", "");
    handlGgetDestinates(+res);
  };

  const handlGgetDestinates = async (id) => {
    let Obj = {};
    const res = await getDestinates(id);
    Obj = Object.assign({}, res[0]);
    setData(Obj);
    console.log(Obj);
    setId(id);
  };

  const forward = () => {
    handlGgetDestinates(id + 1);
  };

  const backward = () => {
    if (id === 1) {
      return;
    }
    handlGgetDestinates(id - 1);
  };

  return (
    <div className="container">
      <a-scene className="RV">
        <a-sky src={data.url} rotation="0 -130 0"></a-sky>
      </a-scene>
      {/* <div className="content">
        <h2 className="title">{data.nombre}</h2>
        <p>{data.descripcion}</p>
      </div>
      <button className="backward btn" disabled={btn1} onClick={backward}>
        {"<"}
      </button>
      <button className="forward btn" onClick={forward}>
        {">"}
      </button> */}
    </div>
  );
}

export default App;
