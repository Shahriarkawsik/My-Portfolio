import { Link } from "react-router-dom";
import resume from "../../assets/ShahriarCV.pdf";
import { FaDownload } from "react-icons/fa6";
const NavBar = () => {
  const navItems = (
    <>
      <li className="text-2xl sm:text-3xl lg:text-xl font-semibold font-Raleway text-color1">
        <Link to={"/"}>Home</Link>
      </li>
      <li className="text-2xl sm:text-3xl lg:text-xl font-semibold font-Raleway text-color1">
        <Link to={"/"}>About</Link>
      </li>
      <li className="text-2xl sm:text-3xl lg:text-xl font-semibold font-Raleway text-color1">
        <Link to={"/"}>Skill</Link>
      </li>
      <li className="text-2xl sm:text-3xl lg:text-xl font-semibold font-Raleway text-color1">
        <Link to={"/"}>Projects</Link>
      </li>
      <li className="text-2xl sm:text-3xl lg:text-xl font-semibold font-Raleway text-color1">
        <Link to={"/"}>Contact</Link>
      </li>
    </>
  );
  return (
    <div className="fixed top-0 left-0 right-0 lg:w-4/5 mx-auto max-sm:px-2 max-lg:px-4 py-4 z-50">
      <div className="navbar bg-color3 rounded-xl sm:rounded-2xl px-3 max-sm:mx-2 my-2 shadow-md">
        {/* Start */}
        <div className="navbar-start text-color1 space-x-3">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 sm:h-7 sm:w-7 font-extrabold"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-color2 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              {navItems}
            </ul>
          </div>
          <a className="text-color1 text-2xl font-Raleway uppercase font-bold">
            Shahriar
          </a>
        </div>
        {/* Nav Items: center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        {/* Right */}
        <div className="navbar-end">
          <a href={resume} download="Resume">
            <button className="btn">
              <FaDownload />
              <span className="text-xl">Resume</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
