// make it responsive for mobile, tablet, desktop
import {
  FaArrowRight,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa6";
import "./banner.css";

const Banner = () => {
  return (
    <section className="font-Raleway relative lg:h-[600px]">
      <div className="lg:absolute lg:top-[25%] lg:-left-32 flex flex-col gap-3 scroll-smooth transition-all max-lg:hidden">
        {/* Facebook */}
        <button className="bg-facebook px-2 py-3 transition-all duration-300 lg:hover:translate-x-32">
          <a
            className="flex items-center justify-between gap-2"
            href="https://www.facebook.com/shahriar.kawsik"
            target="_blank"
          >
            <span className="text-color1 text-2xl leading-6">Facebook</span>
            <FaFacebookF className="bg-facebook text-color1 text-4xl" />
          </a>
        </button>
        {/* LinkedIn */}
        <button className="bg-linkedIn px-2 py-3 transition-all duration-300 lg:hover:translate-x-32">
          <a
            className="flex items-center justify-between gap-2"
            href="https://www.linkedin.com/in/md-shahriar-kabir-cse"
            target="_blank"
          >
            <span className="text-color1 text-2xl leading-6">LinkedIn</span>
            <FaLinkedinIn className="bg-linkedIn text-color1 text-4xl" />
          </a>
        </button>
        {/* Github */}
        <button className="bg-github px-2 py-3 transition-all duration-300 lg:hover:translate-x-32">
          <a
            className="flex items-center justify-between gap-2"
            href="https://github.com/Shahriarkawsik"
            target="_blank"
          >
            <span className="text-color1 text-2xl leading-6">Github</span>
            <FaGithub className="bg-github text-color1 text-4xl" />
          </a>
        </button>
        {/* WhatsApp */}
        <button className="bg-whatsApp px-2 py-3 transition-all duration-300 lg:hover:translate-x-32">
          <a
            className="flex items-center justify-between gap-2"
            href="https://wa.me/01793747139"
            target="_blank"
          >
            <span className="text-color1 text-2xl leading-6">WhatsApp</span>
            <FaWhatsapp className="bg-whatsApp text-4xl text-color1" />
          </a>
        </button>
      </div>
      {/* My Description */}
      <div className="w-9/12 lg:w-2/5 mx-auto py-10 lg:py-24 space-y-2 sm:space-y-3 lg:space-y-5 -z-10">
        <p className="text-color4 leading-6 ">Hi, my name is</p>
        <h1 className="text-3xl sm:text-6xl lg:text-7xl lg:leading-72 text-white font-extrabold">
          Md. Shahriar Kabir
        </h1>
        <p className="text-color6 max-lg:text-justify sm:text-2xl">
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
