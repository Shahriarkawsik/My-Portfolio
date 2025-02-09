import { FiExternalLink, FiGithub } from "react-icons/fi";
import project1 from "../../assets/projects/project1.png";
import project2 from "../../assets/projects/project2.png";
import project3 from "../../assets/projects/project3.png";

const Projects = () => {
  return (
    <section className=" font-Raleway w-11/12 lg:w-4/5 mx-auto space-y-10 lg:space-y-20">
      <div className="space-y-6">
        <h1 className="text-4xl leading-10 text-color1 font-bold border-b-4 border-pink-600 inline ">
          Projects
        </h1>
        <p className="text-color5 mt-5">Check out some of my recent work</p>
      </div>
      {/* Projects */}
      <div className="space-y-6">
        {/* Project one */}
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center justify-center  max-lg:space-y-5 p-3 rounded-xl sm:rounded-2xl bg-color3 hover:scale-105 transition-all"
        >
          <figure className="col-span-1 w-full">
            <img
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="w-full h-full rounded-2xl  bg-fixed "
              src={project1}
              alt=""
            />
          </figure>
          <div className="col-span-1 lg:col-span-2 space-y-3">
            <div className="flex justify-between items-center p-1">
              <h1 className="text-white text-2xl sm:text-3xl lg:text-3xl font-bold">
                FoodBites
              </h1>
              <div className="space-x-3">
                {/* Live link */}
                <a href="https://foodbites-2008e.web.app" target="_blank">
                  <button className="rounded-full p-2  sm:p-3 lg:p-3 bg-bgIcon text-white">
                    <FiExternalLink className="text-2xl sm:text-3xl lg:text-3xl hover:text-[#6a7987]" />
                  </button>
                </a>
                {/* github */}
                <a
                  href="https://github.com/Shahriarkawsik/PHB10A11-FoodBites-Client.git"
                  target="_blank"
                >
                  <button className="rounded-full p-2 sm:p-3 lg:p-3 bg-bgIcon text-white">
                    <FiGithub className="text-2xl sm:text-3xl lg:text-3xl hover:text-[#6a7987]" />
                  </button>
                </a>
              </div>
            </div>
            <p className="text-white7 text-justify">
              FoodBites is a food-sharing platform dedicated to reducing food
              waste and helping those in need. It enables users to donate
              surplus food and organize events to support underprivileged
              communities. Logged-in users can create food donation listings,
              and other users can request to receive these donations, fostering
              a collaborative and compassionate environment.
            </p>
            <h3 className="text-white text-xl lg:text-2xl font-medium">
              Uses Technology
            </h3>
            {/* Uses Technology */}
            <div className="flex flex-wrap items-center gap-3">
              <button className="uppercase bg-white7 text-color2 rounded-md px-2 py-1">
                tailwindcss
              </button>
              <button className="uppercase bg-white7 text-color2 rounded-md px-2 py-1">
                javascript
              </button>
              <button className="uppercase bg-white7 text-color2 rounded-md px-2 py-1">
                react
              </button>
              <button className="uppercase bg-white7 text-color2 rounded-md px-2 py-1">
                node
              </button>
              <button className="uppercase bg-white7 text-color2 rounded-md px-2 py-1">
                express
              </button>
              <button className="uppercase bg-white7 text-color2 rounded-md px-2 py-1">
                mongodb
              </button>
            </div>
          </div>
        </div>
        {/* Project Two */}
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center justify-center max-lg:space-y-5 p-3 rounded-xl sm:rounded-2xl bg-color3 hover:scale-105 transition-all"
        >
          <figure className="col-span-1 w-full">
            <img
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="w-full h-full rounded-2xl  bg-fixed "
              src={project2}
              alt=""
            />
          </figure>
          <div className="col-span-1 lg:col-span-2 space-y-3">
            <div className="flex justify-between items-center p-1">
              <h1 className="text-white text-2xl sm:text-3xl lg:text-3xl font-bold">
                Task2Earn
              </h1>
              <div className="space-x-3">
                {/* Live link */}
                <a href="https://task2earn-a6f57.web.app" target="_blank">
                  <button className="rounded-full p-2  sm:p-3 lg:p-3 bg-bgIcon text-white">
                    <FiExternalLink className="text-2xl sm:text-3xl lg:text-3xl hover:text-[#6a7987]" />
                  </button>
                </a>
                {/* github */}
                <a
                  href="https://github.com/Shahriarkawsik/Task2Earn-Client.git"
                  target="_blank"
                >
                  <button className="rounded-full p-2 sm:p-3 lg:p-3 bg-bgIcon text-white">
                    <FiGithub className="text-2xl sm:text-3xl lg:text-3xl hover:text-[#6a7987]" />
                  </button>
                </a>
              </div>
            </div>
            <p className="text-white7 text-justify">
              Task2Earn is an innovative platform designed to connect users with
              task-based earning opportunities. Whether it`s completing small
              tasks, freelance gigs, or project-based work, users can easily
              earn rewards. The platform simplifies finding, managing, and
              tracking tasks, making it an efficient way to monetize skills and
              time.
            </p>
            <h3 className="text-white text-xl lg:text-2xl font-medium">
              Uses Technology
            </h3>
            {/* Uses Technology */}
            <div className="flex flex-wrap items-center gap-3">
              <button className="uppercase bg-white7 text-color2 rounded-md px-2 py-1">
                tailwindcss
              </button>
              <button className="uppercase bg-white7 text-color2 rounded-md px-2 py-1">
                javascript
              </button>
              <button className="uppercase bg-white7 text-color2 rounded-md px-2 py-1">
                react
              </button>
              <button className="uppercase bg-white7 text-color2 rounded-md px-2 py-1">
                node
              </button>
              <button className="uppercase bg-white7 text-color2 rounded-md px-2 py-1">
                express
              </button>
              <button className="uppercase bg-white7 text-color2 rounded-md px-2 py-1">
                mongodb
              </button>
            </div>
          </div>
        </div>
        {/* Project  three*/}
        <div
          data-aos="fade-down"
          data-aos-duration="1000"
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center justify-center max-lg:space-y-5 p-3 rounded-xl sm:rounded-2xl bg-color3 hover:scale-105 transition-all"
        >
          <figure className="col-span-1 w-full">
            <img
              data-aos="zoom-in"
              data-aos-duration="1000"
              className="w-full h-full rounded-2xl  bg-fixed "
              src={project3}
              alt=""
            />
          </figure>
          <div className="col-span-1 lg:col-span-2 space-y-3">
            <div className="flex justify-between items-center p-1">
              <h1 className="text-white text-2xl sm:text-3xl lg:text-3xl font-bold">
                Movie Portal
              </h1>
              <div className="space-x-3">
                {/* Live link */}
                <a href="https://movie-portal-abed2.web.app" target="_blank">
                  <button className="rounded-full p-2  sm:p-3 lg:p-3 bg-bgIcon text-white">
                    <FiExternalLink className="text-2xl sm:text-3xl lg:text-3xl hover:text-[#6a7987]" />
                  </button>
                </a>
                {/* github */}
                <a
                  href="https://github.com/Shahriarkawsik/Movie-Portal-Client.git"
                  target="_blank"
                >
                  <button className="rounded-full p-2 sm:p-3 lg:p-3 bg-bgIcon text-white">
                    <FiGithub className="text-2xl sm:text-3xl lg:text-3xl hover:text-[#6a7987]" />
                  </button>
                </a>
              </div>
            </div>
            <p className="text-white7 text-justify">
              A modern and user-friendly platform to explore, discover, and stay
              updated with your favorite movies!
              <br />
              The purpose of this project is to create a centralized hub for
              movie enthusiasts, offering a seamless experience for discovering
              movies, exploring details, and sharing feedback. The platform is
              designed to be accessible and interactive, providing tools like
              dynamic search, animations, and user notifications to enhance
              engagement.
            </p>
            <h3 className="text-white text-xl lg:text-2xl font-medium">
              Uses Technology
            </h3>
            {/* Uses Technology */}
            <div className="flex flex-wrap items-center gap-3">
              <button className="uppercase bg-white7 text-color2 rounded-md px-2 py-1">
                tailwindcss
              </button>
              <button className="uppercase bg-white7 text-color2 rounded-md px-2 py-1">
                javascript
              </button>
              <button className="uppercase bg-white7 text-color2 rounded-md px-2 py-1">
                react
              </button>
              <button className="uppercase bg-white7 text-color2 rounded-md px-2 py-1">
                node
              </button>
              <button className="uppercase bg-white7 text-color2 rounded-md px-2 py-1">
                express
              </button>
              <button className="uppercase bg-white7 text-color2 rounded-md px-2 py-1">
                mongodb
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
