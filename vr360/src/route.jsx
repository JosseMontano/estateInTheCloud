import { Route, Routes, HashRouter } from "react-router-dom";
import App from "./App";
const RouteComponent = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<p>Hola</p>} />
        <Route path="/:id" element={<App />} />
      </Routes>
    </HashRouter>
  );
};

export default RouteComponent;
