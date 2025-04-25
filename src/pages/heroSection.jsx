import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="px-4 md:px-24 lg:px-28 py-10">
      <div className="text-center font-bold font-fairDisplay text-3xl">
        Test Your Grammar
      </div>
      <div className="text-center text-xl font-thin mt-4">
        Choose difficulty level
      </div>
      <div className="flex flex-col justify-center items-center py-9">
        <Link
          to="/beginner/:difficulty"
          className="w-full md:w-10/12 lg:w-1/2 "
        >
          <div className="bg-black text-white text-lg mt-3 p-3">BEGINNER</div>
        </Link>
        <Link to="/beginner/:difficulty" className="w-full md:w-10/12 lg:w-1/2">
          <div className="bg-black text-white text-lg mt-3 p-3">
            INTERMIDIATE
          </div>
        </Link>
        <Link to="/beginner/:difficulty" className="w-full md:w-10/12 lg:w-1/2">
          <div className="bg-black text-white text-lg mt-3 p-3">LEGEND</div>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
