import { Header, Footer } from "../../components";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
