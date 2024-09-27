import React, { useState } from "react";
import { Link } from "react-router-dom";

function MenuForSm({ menu }) {
  const [x, setX] = useState(false);
  const [y, setY] = useState(false);
  return (
    menu && (
      <div className="fixed right-0 top-0 w-2/3 h-[600px] bg-slate-700 px-4 py-20 md:hidden flex flex-col gap-2 justify-center items-start">
        <Link to="/">Home</Link>
        <button className="dropdown" onClick={() => setX((prev) => !prev)}>
          Learning guide
        </button>
        <div
          className={"overflow-hidden transition-all " + (!x ? "h-0" : "h-24")}
        >
          <span className="p-4 mr-2  bg-blue-400 dark:bg-slate-600 text-sm flex flex-col gap-1">
            <Link to="learning-path">Learning Path</Link>
            <Link to="course-content">Course Content</Link>
          </span>
        </div>
        <button className="dropdown" onClick={() => setY((prev) => !prev)}>
          Learning Tools
        </button>
        <div
          className={"overflow-hidden transition-all " + (!y ? "h-0" : "h-32")}
        >
          <span className="p-4 mr-2  bg-blue-400 dark:bg-slate-600 text-sm flex flex-col gap-1">
            <Link to="/quiz">Quiz</Link>
            <Link to="/dictionary">Dictionary</Link>
            <Link to="/synonyms">English Synonyms</Link>
            <Link to="/antonyms">English Antonyms</Link>
          </span>
        </div>
        <Link to="/feedback">Feedback</Link>
      </div>
    )
  );
}

export default MenuForSm;
