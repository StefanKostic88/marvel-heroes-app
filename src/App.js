import { Routes, Route } from "react-router";
import { Root, HomePage } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Root />}>
        <Route path={"/"} element={<HomePage />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
