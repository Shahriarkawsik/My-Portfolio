import { Outlet } from "react-router-dom";
import NavBar from "./Components/Header/NavBar";
import Footer from "./Components/Home/Footer";

const Root = () => {
  return (
    <section className="bg-color2">
      <NavBar />
      <Outlet />
      <Footer />
    </section>
  );
};

export default Root;
