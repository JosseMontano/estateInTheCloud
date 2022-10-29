import { HashRouter } from "react-router-dom";
import "./App.css";
import RouteComponent from "./route";

const App = () => {
  return (
    <HashRouter>
      <RouteComponent />
    </HashRouter>
  );
};

export default App;
