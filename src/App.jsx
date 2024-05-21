import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import Body from "./components/Body";
import EmptyBody from "./components/EmptyBody";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
    const [word, setWord] = useState("");
    const [definitions, setDefinitions] = useState(null);
    const [error, setError] = useState(null);

    const fetchDefinitions = async () => {
        try {
            const response = await axios.get(
                `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
            );
            console.log(response.data[0]);
            setDefinitions(response.data[0]);
            setError(null);
        } catch (err) {
            setDefinitions(null);
            setError("Word not found");
        }
    };

    useEffect(() => {
        if (word.trim() === "") {
            setDefinitions(null);
        }
    }, [word]);

    const handleSearch = e => {
        e.preventDefault();
        if (word.trim()) {
            fetchDefinitions();
        }
    };
    return (
        <div className="min-h-[100svh] flex flex-col ">
            <Header />
            <SearchBar
                handleSearch={handleSearch}
                word={word}
                setWord={setWord}
            />

            {word === "" ? (
                <EmptyBody />
            ) : (
                <Body definitions={definitions} word={word} error={error} />
            )}

            <Footer />
        </div>
    );
}

export default App;
