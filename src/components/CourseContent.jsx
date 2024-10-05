// src/components/CourseContent.js
import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const CourseContent = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto p-6 min-h-screen">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
          Course Content
        </h1>

        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            What You'll Learn
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>
              Develop a strong understanding of English grammar, including
              sentence structures and tenses.
            </li>
            <li>
              Expand your vocabulary to effectively communicate in daily
              conversations.
            </li>
            <li>
              Improve your pronunciation and listening skills through guided
              practice.
            </li>
            <li>
              Write more confidently by learning intermediate and advanced
              grammar concepts.
            </li>
            <li>
              Engage in discussions and debates to improve your speaking and
              comprehension skills.
            </li>
            <li>
              Watch and understand advanced-level English media like TED Talks
              and documentaries.
            </li>
          </ul>
        </div>

        <div className="text-center">
          {/* Link to the Learning Path */}
          <Link
            to="/learning-path"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
          >
            Start Course
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CourseContent;
