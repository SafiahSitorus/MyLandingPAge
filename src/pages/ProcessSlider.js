import React, { useState } from "react";

export default function ProcessSlider() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const handlePrev = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  return (
    <div className="process-slider">
      <div className="left-content">
        <h2>{steps[currentStep].title}</h2>
        <ul>
          {steps[currentStep].highlights.map((h, idx) => (
            <li key={idx}>✅ {h}</li>
          ))}
        </ul>
        <p>{steps[currentStep].description}</p>
      </div>

      <div className="right-nav">
        <div className="steps-list">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`step-item ${
                index === currentStep ? "active" : ""
              }`}
              onClick={() => setCurrentStep(index)}
            >
              <span className="step-number">{index + 1}</span>
              <span>{step.title}</span>
            </div>
          ))}
        </div>

        <div className="nav-buttons">
          <button onClick={handlePrev}>◀</button>
          <button onClick={handleNext}>▶</button>
        </div>
      </div>
    </div>
  );
}

const steps = [
  {
    title: "Business enquiry",
    highlights: ["Initial call", "Understand needs"],
    description: "We discuss your business goals and pain points...",
  },
  {
    title: "Project workshop",
    highlights: ["Stakeholders", "Define scope"],
    description: "Together we refine requirements through collaborative sessions...",
  },
  {
    title: "Software development",
    highlights: ["Agile", "Custom code"],
    description: "We build and test the product iteratively...",
  },
  {
    title: "Support & further development",
    highlights: ["Whoever you need", "As long as you need"],
    description:
      "We're not the kind of company which leaves you on your own after the release of the product...",
  },
];
