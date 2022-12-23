import { useEffect } from "react";
import { HashRouter } from "react-router-dom";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import routes from "./routes/routes";
const App = () => {
  const handle = () => {
    const isProduction = import.meta.env.PROD;
    if (isProduction && "serviceWorker" in navigator) {
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
      <Routes>
        {routes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        <Route path="*" element={<p>Page no found</p>} />
      </Routes>
    </HashRouter>
  );
};

export default App;
