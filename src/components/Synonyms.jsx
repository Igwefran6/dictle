import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";

function Synonyms() {
  const [word, setWord] = useState("elegant"); // Default word
  const [synonyms, setSynonyms] = useState(null); // Synonyms state
  const [searchWord, setSearchWord] = useState("elegant"); // Search bar input state
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const apiUrl = `https://api.api-ninjas.com/v1/thesaurus?word=${word}`;
  const SYNKEY = "g7PbaBal0erf5yuUmKC6UQ==5VYkmSuryJJurSY7";

  useEffect(() => {
    if (!word) return;

    const getSynonyms = async () => {
      setIsLoading(true);
      try {
        const syn = await fetch(apiUrl, {
          headers: {
            "X-Api-Key": SYNKEY,
          },
        });
        const response = await syn.json();

        // Remove duplicates and sort synonyms alphabetically
        const uniqueSynonyms = [...new Set(response.synonyms)].sort();
        console.log(response);
        setSynonyms(uniqueSynonyms);
      } catch (e) {
        console.log(e);
        setSynonyms(null); // Handle error by setting synonyms to null
      }
      setIsLoading(false);
    };

    getSynonyms();
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
        <h1 className="text-3xl inline">Synonyms</h1>
        <span className="text-gray-600 font-semibold mx-2">
          Search synonyms of English words
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

        {/* Display synonyms */}
        <div className="max-w-[80%] my-4">
          {isLoading ? (
            <p>Loading...</p>
          ) : synonyms && synonyms.length > 0 ? (
            synonyms.map((synonym, i) => (
              <span
                key={i}
                className="py-1 px-2 m-2 bg-slate-300 inline-block rounded-sm font-semibold text-gray-700"
              >
                {i + 1 + "."} {synonym}
              </span>
            ))
          ) : (
            <p>No synonyms found for "{word}".</p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Synonyms;
