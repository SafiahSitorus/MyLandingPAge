// src/AppRoutes.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/slinsingUIkirikanan";
import Create from "../pages/bilanganPrima";
import SlidingUIatasBAwah from "../pages/slidingUIatasBAwah";
import NotificationSlider from "../pages/slidingnotifications";
import Carousel from "../pages/carousel";
import Login from "../pages/login";
import LAndingPage from "../pages/landingPAge";
import Project from "../pages/projects";
import Projects1 from "../pages/component/Projects1";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="/slidingUIatasBAwah" element={<SlidingUIatasBAwah />} />
      <Route path="/slidingnotification" element={<NotificationSlider />} />
      <Route path="/carousel" element={<Carousel />} />
      <Route path="/login" element={<Login />} />
      <Route path="/landingPage" element={<LAndingPage />} />
      <Route path="/projects" element={<Project />} />
      <Route path="/projects1" element={<Projects1 />} />
      
    </Routes>
  );
}

export default AppRoutes;
