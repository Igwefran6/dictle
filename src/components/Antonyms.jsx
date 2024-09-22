import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

function Antonyms() {
  const [word, setWord] = useState("elegant"); // Default word
  const [antonyms, setAntonyms] = useState(null); // Antonyms state
  const [searchWord, setSearchWord] = useState("elegant"); // Search bar input state
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const apiUrl = `https://api.api-ninjas.com/v1/thesaurus?word=${word}`;
  const ANTKEY = "g7PbaBal0erf5yuUmKC6UQ==5VYkmSuryJJurSY7";

  useEffect(() => {
    if (!word) return;

    const getAntonyms = async () => {
      setIsLoading(true);
      try {
        const ant = await fetch(apiUrl, {
          headers: {
            "X-Api-Key": ANTKEY,
          },
        });
        const response = await ant.json();

        // Remove duplicates and sort Antonyms alphabetically
        const uniqueAntonyms = [...new Set(response.antonyms)].sort();
        console.log(response);
        setAntonyms(uniqueAntonyms);
      } catch (e) {
        console.log(e);
        setAntonyms(null); // Handle error by setting Antonyms to null
      }
      setIsLoading(false);
    };

    getAntonyms();
  }, [word]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchWord) {
      setWord(searchWord); // Set word to be searched
    }
  };

  return (
    <div className="min-h-svh flex flex-col justify-between">
      <Header />

      <div className="flex-1 p-6">
        <h1 className="text-3xl inline">Antonyms</h1>
        <span className="text-gray-600 font-semibold mx-2">
          Search antonyms of English words
        </span>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="my-4">
          <input
            type="text"
            value={searchWord}
            onChange={(e) => setSearchWord(e.target.value)}
            placeholder="Enter a word"
            className="py-2 px-4 border border-gray-300 rounded-md w-full"
          />
          <button
            type="submit"
            className="mt-2 py-2 px-4 bg-blue-500 text-white rounded-md"
          >
            Search
          </button>
        </form>

        {/* Display Antonyms */}
        <div className="max-w-[80%] my-4">
          {isLoading ? (
            <p>Loading...</p>
          ) : antonyms && antonyms.length > 0 ? (
            antonyms.map((antonym, i) => (
              <span
                key={i}
                className="py-1 px-2 m-2 bg-slate-300 inline-block rounded-sm font-semibold text-gray-700"
              >
                {i + 1 + "."} {antonym}
              </span>
            ))
          ) : (
            <p>No antonyms found for "{word}".</p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Antonyms;
