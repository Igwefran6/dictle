import About from "./components/About.jsx";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router-dom";
import Err404 from "./components/Err404.jsx";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Err404 />
    },
    {
        path: "/dictle",
        element: <App />,
        errorElement: <Err404 />
    },
    {
        path: "/dictle/about",
        element: <About />,
        errorElement: <Err404 />
    }
]);

export default Routes;
