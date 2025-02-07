const Footer = () => {
  return (
    <footer className=" bg-white7 mt-8 sm:mt-14 lg:mt-10">
      <div className="font-Raleway w-11/12 lg:w-4/5 mx-auto text-center">
        <h1 className="py-2 sm:text-2xl lg:text-2xl font-semibold">
          {" "}
          {/* &copy; {new Date().getFullYear()} Md. Shahriar Kabir. All rights
          reserved. */}
          © {new Date().getFullYear()} Md. Shahriar Kabir. All rights reserved.
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
