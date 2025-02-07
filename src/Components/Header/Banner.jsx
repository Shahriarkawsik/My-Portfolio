// make it responsive for mobile, tablet, desktop

import { FaArrowRight } from "react-icons/fa6";
import "./banner.css";

const Banner = () => {
  return (
    <section className="font-Raleway relative lg:h-[600px] pt-24 sm:pt-24 lg:pt-24">
      {/* My Description */}
      <div className="w-10/12 lg:w-full xl:w-6/12 mx-auto py-10 sm:py-28 lg:py-24 space-y-2 sm:space-y-3 lg:space-y-5 -z-10 ">
        <p className="text-color4 leading-6 text-xl sm:text-xl lg:text-2xl xl:text-xl">
          Hi, my name is
        </p>
        <h1 className="text-3xl sm:text-6xl lg:text-5xl xl:text-7xl lg:leading-16 xl:leading-72 text-white font-extrabold">
          Md. Shahriar Kabir
        </h1>
        <p className="text-color6 text-justify sm:text-2xl">
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. I Am Graduated From
          <strong>
            {" "}
            Bangabandhu Sheikh Mujibur Rahman Science and Technology University.
          </strong>{" "}
          Currently, I’m focused on building responsive full-stack web
          applications.
        </p>
        <button className="animated-border p-3 text-white flex justify-center items-center gap-4 group transition-all duration-300 border border-white">
          <span className="sm:text-xl lg:text-2xl">View Work</span>
          <FaArrowRight className="transition-all duration-300 group-hover:rotate-90" />
        </button>
      </div>
    </section>
  );
};

export default Banner;
