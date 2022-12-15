import { Route, Routes } from "react-router-dom";
import routes from "./routes/routes";

const RouteComponent = () => {
  return (
    <Routes>
      {routes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path="*" element={<p>Page no found</p>} />
    </Routes>
  );
};

export default RouteComponent;
