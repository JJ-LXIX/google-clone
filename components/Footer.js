import React from "react";

const Footer = () => {
  return (
    <footer className="grid w-full">
      <div className=" flex location-footer text-xs md:text-sm items-center ">
        India
      </div>

      <div className="flex flex-col sm:flex-row sm:justify-between ">
        <div className="p-3 items-center  flex justify-evenly md:justify-evenly w-full md:w-1/2 lg:w-1/3 text-xs md:text-sm ">
          <p>About</p>
          <p>Advertising</p>
          <p>Business</p>
          <p>How Search Works</p>
        </div>
        <div className="p-3 items-center  flex justify-evenly text-xs md:text-sm w-full md:w-1/2 lg:w-1/3">
          <p>Privacy</p>
          <p>Terms</p>
          <p>Settings</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
