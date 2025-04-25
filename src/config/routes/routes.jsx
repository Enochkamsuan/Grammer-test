import React from "react";
import { Routes, Route } from "react-router-dom";
import HeroSection from "../../pages/heroSection";
import Levels from "../../pages/levels";

const RoutePage = () => {
  return (
    <Routes>
      <Route path="/" element={<HeroSection />}></Route>
      <Route path="/beginner/:difficulty" element={<Levels />}></Route>
    </Routes>
  );
};

export default RoutePage;
