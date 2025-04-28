import React from "react";
import { Routes, Route } from "react-router-dom";
import HeroSection from "../../pages/heroSection";
import Levels from "../../pages/levels";
import TestingPage from "../../pages/testingPage";

const RoutePage = () => {
  return (
    <Routes>
      <Route path="/" element={<HeroSection />}></Route>
      <Route path="/difficulty/:difficulty" element={<Levels />}></Route>
      <Route path="/questionaire/:difficulty" element={<TestingPage />}></Route>
    </Routes>
  );
};

export default RoutePage;
