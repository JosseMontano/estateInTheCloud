import { useEffect } from "react";
import { HashRouter } from "react-router-dom";
import "./App.css";
import RouteComponent from "./route";

const App = () => {

  const handle = () => {
    const isProduction = import.meta.env.PROD;
    if (isProduction && 'serviceWorker' in navigator) {
      navigator.serviceWorker.register("sw.js");
    } else {
/*       alert("Su navegador no cuenta con la opcion offline"); */
    }
  };
  useEffect(() => {
    handle();
  }, []);

  return (
    <HashRouter>
      <RouteComponent />
    </HashRouter>
  );
};

export default App;
