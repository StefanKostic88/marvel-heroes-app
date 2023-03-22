import { Routes, Route } from "react-router";
import { Root, HomePage, CharactersPage } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Root />}>
        <Route path={"/"} element={<HomePage />}></Route>
        <Route path={"/characters/:id"} element={<CharactersPage />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
