import { Routes, Route } from "react-router-dom";
import { routes } from "./routes/routes";

const App = () => {
  return (
    <Routes>
      {routes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
  );
};

export default App;