import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import EmptyBody from "./components/EmptyBody";

function App() {
    return (
        <div className="min-h-[100svh] flex flex-col ">
            <Header /> <SearchBar />
            <EmptyBody />
            <Footer />
        </div>
    );
}

export default App;
