import React from "react";
import MainContent from "./MainContent";
import "./style.css";

function ExperienceEducation() {
  return (
    <section id="experienceEducation" className="relative">
      <div className="container mx-auto relative">
        <div className="w-full">
          {/* heading */}
          <div className="experienceEducation-heading h-20 flex items-center mb-10">
            <div className="experienceEducation-heading-border-1 bg-mexuvo-red-500"></div>
            <div className="experienceEducation-heading-content flex-1">
              <h1 className="text-4xl font-bold tracking-tight text-shark-500 text-center">
                Experience & Education
              </h1>
            </div>
            <div className="experienceEducation-heading-border-2 bg-mexuvo-red-500"></div>
          </div>
        </div>
        <div className="w-full">
          <MainContent />
        </div>
      </div>
    </section>
  );
}

export default ExperienceEducation;
