import { skills } from "../../JavaScript/skills";

const Skills = () => {
  return (
    <section
      data-aos="fade-down"
      data-aos-duration="1000"
      className=" font-Raleway w-11/12 lg:w-4/5 mx-auto lg:space-y-20"
    >
      <div className="space-y-6">
        <h1 className="text-4xl leading-10 text-color1 font-bold border-b-4 border-pink-600 inline ">
          Skills
        </h1>
        <p className="text-color5 mt-5">
          These are the technologies Ive worked with
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center justify-center">
        {/* Html */}
        {skills.map((skill, index) => (
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            key={index}
            className="flex flex-col justify-center items-center gap-2 rounded-xl shadow-[0px_4px_6px_-1px_rgb(4,12,22),0px_2px_4px_-2px_rgb(4,12,22)] p-5 hover:scale-105 transition-all"
          >
            <figure className="w-20 h-20">
              <img
                className="w-full h-full object-center "
                src={skill?.logo}
                alt=""
              />
            </figure>
            <h1 className="text-color1 leading-6">{skill?.skill}</h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
