// src/components/LearningStage.js
import React from "react";

const LearningStage = ({ title, description, steps }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-8">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <ul className="list-disc pl-5">
        {steps.map((step, index) => (
          <li key={index} className="text-gray-600">
            {step}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LearningStage;
