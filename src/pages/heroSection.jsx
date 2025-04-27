import React from "react";
import { Link, useParams } from "react-router-dom";
import data from "../Assets/data/data";

const HeroSection = () => {
  const { difficulty } = useParams();

  const levels = data?.levels || [];

  const uniqueDifficulties = [
    ...new Set(levels.map((level) => level.difficulty)),
  ];

  return (
    <div className="px-4 md:px-24 lg:px-28 py-10 h-screen">
      <div className="text-center font-bold font-fairDisplay text-3xl">
        Test Your Grammar
      </div>
      <div className="text-center text-xl font-thin mt-4">
        Choose difficulty level
      </div>
      <div className="flex flex-col justify-center items-center py-9">
        {uniqueDifficulties.map((difficulty, index) => (
          <Link
            key={index}
            to={`/difficulty/${difficulty}`}
            className="w-full md:w-10/12 lg:w-1/2"
          >
            <div
              className={`rounded-md text-center text-white text-lg mt-3 p-3 ${
                difficulty ? "bg-blue-900" : "bg-blue-700"
              }`}
            >
              {difficulty.toUpperCase()}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
