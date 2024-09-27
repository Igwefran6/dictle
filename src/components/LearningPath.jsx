// src/components/LearningPath.js
import React, { useState, useEffect } from "react";
import LearningStage from "./LearningStage";
import Footer from "./Footer";
import Header from "./Header";

const stages = [
  {
    title: "Foundational Stage (Beginners)",
    description:
      "Start with learning the basics of grammar and essential vocabulary.",
    steps: [
      "Learn basic grammar: sentence structure, tenses, and parts of speech.",
      "Use beginner apps like Duolingo, Babbel.",
      "Practice speaking simple phrases daily.",
    ],
  },
  {
    title: "Basic Conversational Level",
    description:
      "Focus on pronunciation, expand your listening and speaking abilities.",
    steps: [
      "Master English sounds and challenging pronunciations.",
      "Engage in simple conversations with language partners.",
      "Watch beginner-level TV shows with subtitles.",
    ],
  },
  {
    title: "Intermediate Stage",
    description: "Advance grammar knowledge, vocabulary, and writing skills.",
    steps: [
      "Expand vocabulary and learn idiomatic expressions.",
      "Watch movies in English without subtitles.",
      "Start writing journals or short essays.",
    ],
  },
  {
    title: "Advanced Fluency Stage",
    description:
      "Master complex grammar, engage in debates, and read more advanced material.",
    steps: [
      "Learn complex grammar topics like subjunctive mood.",
      "Engage in public speaking and debates.",
      "Watch TED Talks and documentaries without subtitles.",
    ],
  },
];

const LearningPath = () => {
  // Initialize state with data from localStorage or default values
  const [currentStage, setCurrentStage] = useState(() => {
    const savedStage = localStorage.getItem("currentStage");
    return savedStage !== null ? JSON.parse(savedStage) : 0; // Default to 0 if not found
  });

  const [completedStages, setCompletedStages] = useState(() => {
    const savedCompletedStages = localStorage.getItem("completedStages");
    return savedCompletedStages !== null
      ? JSON.parse(savedCompletedStages)
      : [];
  });

  // Update localStorage whenever the current stage or completed stages change
  useEffect(() => {
    localStorage.setItem("currentStage", JSON.stringify(currentStage));
  }, [currentStage]);

  useEffect(() => {
    localStorage.setItem("completedStages", JSON.stringify(completedStages));
  }, [completedStages]);

  // Handle marking the current stage as completed
  const markAsComplete = () => {
    setCompletedStages((prev) => {
      if (!prev.includes(currentStage)) {
        return [...prev, currentStage];
      }
      return prev;
    });
  };

  // Handle going to the next stage
  const nextStage = () => {
    if (currentStage < stages.length - 1) {
      setCurrentStage(currentStage + 1);
    }
  };

  // Handle going to the previous stage
  const prevStage = () => {
    if (currentStage > 0) {
      setCurrentStage(currentStage - 1);
    }
  };

  return (
    <>
      <Header />
      <div className="container mx-auto p-6 min-h-[80svh]">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
          Learning Path
        </h1>

        {/* Render the current stage */}
        <LearningStage
          title={stages[currentStage].title}
          description={stages[currentStage].description}
          steps={stages[currentStage].steps}
        />

        {/* Navigation buttons */}
        <div className="flex justify-between mt-4">
          <button
            onClick={prevStage}
            disabled={currentStage === 0}
            className={`px-4 py-2 bg-gray-300 rounded-lg ${
              currentStage === 0 ? "opacity-50" : "hover:bg-gray-400"
            }`}
          >
            Previous
          </button>

          <button
            onClick={nextStage}
            disabled={currentStage === stages.length - 1}
            className={`px-4 py-2 bg-blue-500 text-white rounded-lg ${
              currentStage === stages.length - 1
                ? "opacity-50"
                : "hover:bg-blue-600"
            }`}
          >
            Next
          </button>
        </div>

        {/* Mark as complete */}
        <button
          onClick={markAsComplete}
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          Mark as Complete
        </button>

        {/* Show completion status */}
        <div className="mt-4">
          {completedStages.includes(currentStage) ? (
            <p className="text-green-600">You have completed this stage!</p>
          ) : (
            <p className="text-red-600">This stage is not completed yet.</p>
          )}
        </div>

        {/* Progress indicator */}
        <div className="mt-4">
          <p>
            Progress: {completedStages.length}/{stages.length} stages completed
          </p>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{
                width: `${(completedStages.length / stages.length) * 100}%`,
              }}
            ></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LearningPath;
