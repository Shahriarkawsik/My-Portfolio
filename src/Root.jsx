import { Outlet } from "react-router-dom";
import NavBar from "./Components/Header/NavBar";

const Root = () => {
  return (
    <section className="bg-color2">
      <NavBar />
      <Outlet />
    </section>
  );
};

export default Root;
