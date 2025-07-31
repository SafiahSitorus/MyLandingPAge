import React, { useState, useEffect } from "react";
import imglanding from "../images/imagebc.png";
import logo from "../images/sobat.png";
import ProcessSlider from "./ProcessSlider"; 



export default function LandingPage() {
  const [hideHeader, setHideHeader] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      // Scroll ke bawah
      setHideHeader(true);
    } else {
      // Scroll ke atas
      setHideHeader(false);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className="app-container">
      <header className={`header sticky-header ${hideHeader ? "hide" : ""}`}>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <nav className="nav-links">
          <a href="#service">Service</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#beliefs">Beliefs</a>
          <a href="#process">Process</a>
          <a href="#news">Good News <span className="badge">soon</span></a>
        </nav>

        <div className="cta">
          <button className="cta-button">Estimate your project</button>
        </div>
      </header>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Accelerate your business</h1>
            <p className="subtitle">Dream • Design • Build it</p>
            <p className="desc">
              Custom app and business for those who expect more.
            </p>
            <button className="cta-btn">Estimate your project</button>
          </div>

          <div className="hero-image">
            <img src={imglanding} alt="landing" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Web Development</h2>
        <p>
          We excel in frontend and backend: Laravel, React, Node.js, Angular,
          Vue.js, etc.
        </p>
        <div className="tech-boxes">
          {["Laravel", "Node.js", "Angular", "React", "Next.js", "Vue.js"].map(
            (tech) => (
              <div className="tech-box" key={tech}>
                {tech}
              </div>
            )
          )}
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <h2>How do we make software?</h2>
        <div className="steps">
          {[
            "Business enquiry",
            "Project workshop",
            "Software development",
            "Support & further development",
          ].map((step, i) => (
            <div className="step-box" key={i}>
              <strong>{i + 1}. {step}</strong>
              <p>
                {i === 0 && "Initial contact and project discussion."}
                {i === 1 && "Meetings with stakeholders to define goals."}
                {i === 2 && "Agile development tailored to your needs."}
                {i === 3 && "Post-launch maintenance and support."}
              </p>
            </div>
          ))}
        </div>
      </section>
      <ProcessSlider />
      {/* Footer */}
      <footer className="footer">© 2025 SobatBisnis. All rights reserved.</footer>
    </div>
  );
}
