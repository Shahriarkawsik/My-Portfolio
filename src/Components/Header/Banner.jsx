import { FaArrowRight } from "react-icons/fa6";
import "./banner.css";
import Lottie from "lottie-react";
import api from "../../assets/api.json";

const Banner = () => {
  return (
    <section className="font-Raleway w-11/12 lg:w-4/5 mx-auto lg:h-[600px] pt-24 sm:pt-24 lg:pt-24 grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center items-center">
      {/* My Description */}
      {/* w-10/12 lg:w-full xl:w-6/12 mx-auto py-10 sm:py-28 lg:py-24 -z-10*/}
      <div className="space-y-3 sm:space-y-3 lg:space-y-5">
        <p className="text-color4 leading-6 text-xl sm:text-xl lg:text-2xl xl:text-xl">
          Hi, my name is
        </p>
        <h1 className="text-3xl sm:text-6xl lg:text-4xl xl:text-5xl lg:leading-16 xl:leading-72 text-white font-extrabold">
          Md. Shahriar Kabir
        </h1>
        <p className="text-color6 text-justify sm:text-2xl">
          I’m a frontend developer specializing in building (and occasionally
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
      {/* Lottie */}
      <div className="h-full ">
        <Lottie animationData={api} className="h-full lg:h-[600px]" />
      </div>
    </section>
  );
};

export default Banner;
