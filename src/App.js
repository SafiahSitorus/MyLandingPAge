// src/App.js
import React from "react";
import { HashRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
// import Navbar from "./components/Navbar"; // opsional
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const particlesInit = async (main) => {
  await loadFull(main);
};

<Particles
  id="tsparticles"
  init={particlesInit}
  options={{
    background: { color: "#000000" },
    particles: {
      color: { value: "#ffffff" },
      links: {
        enable: true,
        color: "#ffffff",
        distance: 150,
        opacity: 0.4,
        width: 1
      },
      move: { enable: true, speed: 1 },
      number: { value: 50 },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    fullScreen: { zIndex: -1 }
  }}
/>

function App() {
  return (
    <Router basename="/MyLandingPAge">
      {/* <Navbar /> */}
      
      <Particles />
   <AppRoutes />

   
    </Router>
  );
}



export default App;
