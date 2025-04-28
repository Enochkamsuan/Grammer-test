import React from "react";
import { Link, useParams } from "react-router-dom";
import data from "../Assets/data/data";

const Levels = () => {
  const { difficulty } = useParams();

  let levels = [];

  if (difficulty === "beginner") {
    levels = data.levels
      .filter((item) => item.difficulty === "beginner")
      .map((item) => item.level);
  } else if (difficulty === "intermediate") {
    levels = data.levels
      .filter((item) => item.difficulty === "intermediate")
      .map((item) => item.level);
  } else {
    levels = data.levels.map((item) => item.level);
  }

  return (
    <div className="px-4 md:px-24 lg:px-28 py-10">
      <div className="text-center text-xl font-thin my-4">AVAILABLE LEVELS</div>
      <div className="flex justify-center">
        <div className="bg-gray-400 w-full md:w-1/2 rounded-md p-2">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {levels.map((level) =>
              level === "1" ? (
                <Link
                  to={`/questionaire/${difficulty}`}
                  key={level}
                  className="bg-white font-semibold my-2 p-4 rounded text-center"
                >
                  Level {level}
                </Link>
              ) : (
                <div
                  key={level}
                  className="bg-gray-300 font-semibold my-2 p-4 rounded text-center opacity-50 cursor-not-allowed"
                >
                  🔒 Level {level}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Levels;
