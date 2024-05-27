import Home from "./components/Home";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path="/home/" element={<Home />}></Route>
            <Route path="/about/" element={<About />}></Route>
        </Routes>
    );
}

export default App;
