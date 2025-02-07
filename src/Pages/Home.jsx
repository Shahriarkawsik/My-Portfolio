import Banner from "../Components/Header/Banner";
import Contact from "../Components/Home/Contact";
import Projects from "../Components/Home/Projects";
import Skills from "../Components/Home/Skills";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa6";

const Home = () => {
  return (
    <div className="space-y-10 lg:space-y-20 relative">
      {/* Social Icons */}

      <div className="fixed lg:top-2/3 xl:top-1/4 left-0 flex flex-col gap-3 z-50 max-lg:hidden">
        {/* Facebook */}
        <button className="bg-facebook px-2 py-3 transition-all duration-300 lg:-translate-x-[115px] lg:hover:translate-x-0 rounded-r-md">
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
        <button className="bg-linkedIn px-2 py-3 transition-all duration-300 lg:-translate-x-[115px] lg:hover:translate-x-0 rounded-r-md">
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
        <button className="bg-github px-2 py-3 transition-all duration-300 lg:-translate-x-[115px] lg:hover:translate-x-0 rounded-r-md">
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
        <button className="bg-whatsApp px-2 py-3 transition-all duration-300 lg:-translate-x-[115px] lg:hover:translate-x-0 rounded-r-md">
          <a
            className="flex items-center justify-between gap-2"
            href="https://wa.me/01793747139"
            target="_blank"
          >
            <span className="text-color1 text-2xl leading-6">WhatsApp</span>
            <FaWhatsapp className="bg-whatsApp text-color1 text-4xl" />
          </a>
        </button>
      </div>

      <Banner />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
