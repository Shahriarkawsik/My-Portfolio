import emailjs from "@emailjs/browser";
import { useRef } from "react";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa6";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_st4le18", "template_myfoq1r", form.current, {
        publicKey: "h0YYrSLlQ8JBBRYvR",
      })
      .then(
        () => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Thank you for your complement",
            showConfirmButton: false,
            timer: 1500,
          });
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section className="font-Raleway w-11/12 lg:w-4/5 mx-auto space-y-10 sm:space-y-20 lg:space-y-20">
      <div className="space-y-6">
        <h1 className="text-4xl leading-10 text-color1 font-bold border-b-4 border-pink-600 inline ">
          Contact
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-center gap-8 lg:space-y-20">
        {/* form */}
        <div
          // data-aos="fade-right"
          // data-aos-duration="1000"
          className="text-white space-y-7 sm:space-y-10 lg:space-y-10"
        >
          <h1 className="text-2xl sm:text-4xl lg:text-4xl font-bold text-color1 text-center">
            Let’s Message me
          </h1>
          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            {/* Name */}
            <div className=" space-y-3">
              <label className="fieldset-label font-Inter font-semibold text-xl leading-6 text-white">
                Name*
              </label>
              <input
                type="text"
                name="user_name"
                className="w-full input input-bordered bg-color3 font-Inter text-xl rounded-md p-3 text-color1"
                placeholder="Type here your name"
                required
              />
            </div>
            {/* Email */}
            <div className="w-full space-y-3">
              <label className="fieldset-label font-Inter font-semibold text-xl leading-6 text-white">
                Email*
              </label>
              <input
                type="email"
                placeholder="Type here your email"
                name="user_email"
                className="w-full input input-bordered bg-color3 font-Inter text-xl rounded-md p-3 "
                required
              />
            </div>
            {/* Message */}
            <div className="w-full space-y-3">
              <label className="fieldset-label font-Inter font-semibold text-xl leading-6 text-white">
                Message*
              </label>
              <textarea
                type="text"
                placeholder="Type here your complement"
                name="message"
                className="w-full h-40 input input-bordered bg-color3 font-Inter text-xl rounded-md p-3 text-color1 resize-none"
                required
              />
            </div>
            {/* submit */}
            <input
              type="submit"
              value="Send"
              className="bg-color3 text-white text-2xl py-2 w-full rounded-xl"
            />
          </form>
        </div>
        {/* social contact */}
        <div
          // Commented by sakib
          // data-aos="fade-left"
          // data-aos-duration="1000"
          className="space-y-16"
        >
          <div className="space-y-5">
            <h1 className="text-2xl sm:text-4xl lg:text-4xl font-bold text-color1 text-center">
              Let’s Connect
            </h1>
            <p className="text-white sm:text-2xl lg:text-2xl text-center">
              Get in touch with me via social media or send me an email.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5 items-center justify-center">
            {/* Facebook */}
            <div className="flex justify-center items-center gap-2">
              <button className="rounded-full p-2 bg-facebook">
                <a
                  href="https://www.facebook.com/shahriar.kawsik"
                  target="_blank"
                >
                  <FaFacebookF className="text-white font-extrabold text-xs" />
                </a>
              </button>
              <h1 className="text-base md:text-xl font-medium text-facebook">
                Facebook
              </h1>
            </div>
            {/* LinkedIn */}
            <div className="flex items-center gap-2">
              <button className="rounded-full p-2 bg-linkedIn">
                <a
                  href="https://www.linkedin.com/in/md-shahriar-kabir-cse"
                  target="_blank"
                >
                  <FaLinkedinIn className="text-white font-extrabold text-xs" />
                </a>
              </button>
              <h1 className="text-base md:text-xl font-medium text-linkedIn">
                LinkedIn
              </h1>
            </div>
            {/* Github */}
            <div className="flex justify-center items-center gap-2">
              <button className="rounded-full p-2 bg-github">
                <a href="https://github.com/Shahriarkawsik" target="_blank">
                  <FaGithub className="text-white font-extrabold text-xs" />
                </a>
              </button>
              <h1 className="text-base md:text-xl font-medium text-github">
                Github
              </h1>
            </div>
            {/* WhatsApp */}
            <div className="flex items-center gap-2">
              <button className="rounded-full p-2 bg-whatsApp">
                <a href="https://wa.me/01793747139" target="_blank">
                  <FaWhatsapp className="text-white font-extrabold text-xs" />
                </a>
              </button>
              <h1 className="text-base md:text-xl font-medium text-whatsApp">
                WhatsApp
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
