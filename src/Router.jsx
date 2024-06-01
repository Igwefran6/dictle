import About from "./components/About.jsx";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router-dom";
import Err404 from "./components/Err404.jsx";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Err404 />,
        children: [
            {
                path: "/about",
                element: <About />
            }
        ]
    },
    {
        path: "/about/",
        element: <About />
    }
]);

export default Router;
