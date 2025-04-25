import React from "react";

const Levels = () => {
  const levelCount = 15;
  const levels = Array.from({ length: levelCount }, (_, i) => i + 1);

  return (
    <div className="px-4 md:px-24 lg:px-28 py-10">
      <div className="text-center text-xl font-thin my-4">AVAILABLE LEVELS</div>
      <div className="bg-gray-400 rounded-md p-2">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {levels.map((level) => (
            <div key={level} className="bg-white my-2 p-4 rounded">
              {level}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Levels;
