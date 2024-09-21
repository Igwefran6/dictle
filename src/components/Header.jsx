import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const LinkButton = ({ text, path = "#", handleClick, extraStyles }) => {
  return (
    <li
      className={
        `relative hover:scale-105 transition-all cursor-pointer z-10 no-copy px-1 ` +
        extraStyles
      }
      onClick={(e) => {
        if (handleClick) {
          handleClick(e);
        }
      }}
    >
      <Link to={path}>{text}</Link>
    </li>
  );
};

const Header = ({ setShowContactPage }) => {
  const [learningTools, setLearningTools] = useState(false);
  const [project, setProject] = useState(false);
  const learningToolsRef = useRef(null);
  const projectRef = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    setShowContactPage((prev) => !prev);
  };

  const handleOpenLearningTools = () => {
    setLearningTools((prev) => !prev);
    setProject(false);
  };

  const handleProject = () => {
    setProject((prev) => !prev);
    setLearningTools(false);
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        learningToolsRef.current &&
        !learningToolsRef.current.contains(event.target)
      ) {
        setLearningTools(false);
      }
      if (projectRef.current && !projectRef.current.contains(event.target)) {
        setProject(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-blue-500 dark:bg-gray-900 text-white p-6 pb-4 flex items-baseline gap-8 relative">
      <h1 className="text-2xl font-bold flex ">Dictle.</h1>
      <nav>
        <ul className="flex space-x-4 font-semibold">
          <LinkButton text="Home" path="/" />
          <div ref={learningToolsRef}>
            <LinkButton
              text="Learning tools"
              path="/"
              extraStyles="dropdown"
              handleClick={handleOpenLearningTools}
            />
            <span
              className={
                `absolute w-48 bg-white rounded-lg p-4 flex-col gap-1 ` +
                (learningTools ? "flex" : "hidden")
              }
            >
              <Link
                to="/"
                className="w-full text-white bg-slate-500 block rounded-lg px-2 py-1 hover:scale-105 transition-all"
              >
                Quiz
              </Link>
              <Link
                to="/"
                className="w-full text-white bg-slate-500 block rounded-lg px-2 py-1 hover:scale-105 transition-all"
              >
                Vocabulary tool
              </Link>
              <Link
                to="/"
                className="w-full text-white bg-slate-500 block rounded-lg px-2 py-1 hover:scale-105 transition-all"
              >
                English Synonyms
              </Link>
              <Link
                to="/"
                className="w-full text-white bg-slate-500 block rounded-lg px-2 py-1 hover:scale-105 transition-all"
              >
                English Antonyms
              </Link>
            </span>
          </div>

          <div ref={projectRef}>
            <LinkButton
              text="Project"
              path="/"
              extraStyles="dropdown"
              handleClick={handleProject}
            />
            <span
              className={
                `absolute w-48 bg-white rounded-lg p-4 flex-col gap-1 ` +
                (project ? "flex" : "hidden")
              }
            >
              <Link
                to="/"
                className="w-full text-white bg-slate-500 block rounded-lg px-2 py-1 hover:scale-105 transition-all"
              >
                Learn more
              </Link>
              <Link
                to="/"
                className="w-full text-white bg-slate-500 block rounded-lg px-2 py-1 hover:scale-105 transition-all"
              >
                About project
              </Link>
              <Link
                to="/"
                className="w-full text-white bg-slate-500 block rounded-lg px-2 py-1 hover:scale-105 transition-all"
              >
                Bla bla bla
              </Link>
            </span>
          </div>

          <LinkButton text="Contact" handleClick={handleClick} />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
