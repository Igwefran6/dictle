import { mdiMenu, mdiClose } from "@mdi/js";
import Icon from "@mdi/react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import MenuForSm from "./MenuForSm";

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
  const [learningGuide, setlearningGuide] = useState(false);
  const learningToolsRef = useRef(null);
  const learningGuideRef = useRef(null);
  const [menu, setMenu] = useState(false);
  const icon = menu ? mdiClose : mdiMenu;

  const handleClick = (e) => {
    e.preventDefault();
    setShowContactPage((prev) => !prev);
  };

  const handleOpenLearningTools = () => {
    setLearningTools((prev) => !prev);
    setlearningGuide(false);
  };

  const handlelearningGuide = () => {
    setlearningGuide((prev) => !prev);
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
      if (
        learningGuideRef.current &&
        !learningGuideRef.current.contains(event.target)
      ) {
        setlearningGuide(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-blue-500 dark:bg-gray-900 text-white p-6 pb-4 flex items-baseline gap-8 relative z-40 w-full">
      <h1 className="text-2xl font-bold flex">Dictle.</h1>
      <div className="absolute right-6 md:hidden z-50">
        <Icon
          onClick={() => setMenu((prev) => !prev)}
          path={icon}
          size="32px"
          color="white"
        />
      </div>
      <MenuForSm menu={menu} />
      <nav className="max-sm:hidden">
        <ul className="flex space-x-4 font-semibold">
          <LinkButton text="Home" path="/" />
          <div ref={learningGuideRef}>
            <LinkButton
              text="Learning guide"
              extraStyles="dropdown"
              handleClick={handlelearningGuide}
            />
            <span
              className={
                `absolute w-48 bg-white rounded-lg p-4 flex-col gap-1 shadow-lg ` +
                (learningGuide ? "flex" : "hidden")
              }
            >
              {" "}
              <Link
                to="/Course-content"
                className="w-full text-white bg-blue-500 dark:bg-gray-900 block rounded-lg px-2 py-1 hover:scale-105 transition-all"
              >
                Course content
              </Link>
              <Link
                to="/learning-path"
                className="w-full text-white bg-blue-500 dark:bg-gray-900 block rounded-lg px-2 py-1 hover:scale-105 transition-all"
              >
                Learning path
              </Link>
            </span>
          </div>

          <div ref={learningToolsRef}>
            <LinkButton
              text="Learning tools"
              extraStyles="dropdown"
              handleClick={handleOpenLearningTools}
            />
            <span
              className={
                `absolute w-48 bg-white rounded-lg p-4 flex-col gap-1 shadow-lg ` +
                (learningTools ? "flex" : "hidden")
              }
            >
              <Link
                to="/quiz"
                className="w-full text-white bg-blue-500 dark:bg-gray-900 block rounded-lg px-2 py-1 hover:scale-105 transition-all"
              >
                Quiz
              </Link>
              <Link
                to="/dictionary"
                className="w-full text-white bg-blue-500 dark:bg-gray-900 block rounded-lg px-2 py-1 hover:scale-105 transition-all"
              >
                Dictionary
              </Link>
              <Link
                to="/synonyms"
                className="w-full text-white bg-blue-500 dark:bg-gray-900 block rounded-lg px-2 py-1 hover:scale-105 transition-all"
              >
                English Synonyms
              </Link>
              <Link
                to="/antonyms"
                className="w-full text-white bg-blue-500 dark:bg-gray-900 block rounded-lg px-2 py-1 hover:scale-105 transition-all"
              >
                English Antonyms
              </Link>
            </span>
          </div>

          <LinkButton text="Feedback" path="/feedback" />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
