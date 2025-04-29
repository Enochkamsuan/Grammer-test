import React from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="bg-black flex justify-between px-4 md:px-24 lg:px-28 py-4">
      <div className="text-white">Powered by Liangtuang tech</div>
      <div className="flex gap-5 items-center">
        <div className="text-white">
          <FaInstagram />
        </div>
        <div className="text-white">
          <FaFacebookF />
        </div>
        <div className="text-white">
          <CiMail />
        </div>
      </div>
    </div>
  );
};

export default Footer;
