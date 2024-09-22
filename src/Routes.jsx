import About from "./components/About.jsx";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router-dom";
import Err404 from "./components/Err404.jsx";
import Quiz from "./components/Quiz.jsx";
import Synonyms from "./components/Synonyms.jsx";
import Antonyms from "./components/Antonyms.jsx";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Err404 />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <Err404 />,
  },
  {
    path: "/quiz",
    element: <Quiz />,
    errorElement: <Err404 />,
  },
  {
    path: "/synonyms",
    element: <Synonyms />,
    errorElement: <Err404 />,
  },
  {
    path: "/antonyms",
    element: <Antonyms />,
    errorElement: <Err404 />,
  },
]);

export default Routes;
