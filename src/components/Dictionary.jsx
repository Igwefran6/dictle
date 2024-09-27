import Header from "./Header";
import SearchBar from "./SearchBar";
import Footer from "./Footer";
import Body from "./Body";
import EmptyBody from "./EmptyBody";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import SearchButton from "./SearchButton";
import ContactPage from "./ContactPage";
import CloseButton from "./CloseButton";

function Dictionary() {
  const [word, setWord] = useState("");
  const [definitions, setDefinitions] = useState(null);
  const [error, setError] = useState(null);
  const inputRef = useRef(null);
  const [showContactPage, setShowContactPage] = useState(false);

  const fetchDefinitions = async () => {
    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
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

  const handleSearch = (e) => {
    e.preventDefault();
    if (word.trim()) {
      fetchDefinitions();
    }
  };

  const handleButtonClick = () => {
    inputRef.current.focus();
  };
  const handlePageClick = () => {
    if (showContactPage === true) {
      setShowContactPage((prev) => !prev);
    }
  };

  return (
    <div className="min-h-[100svh] flex flex-col  ">
      <Header setShowContactPage={setShowContactPage} />
      <SearchBar
        handleSearch={handleSearch}
        word={word}
        setWord={setWord}
        inputRef={inputRef}
      />

      {word === "" ? (
        <EmptyBody />
      ) : (
        <Body definitions={definitions} word={word} error={error} />
      )}
      <SearchButton handleButtonClick={handleButtonClick} />
      <CloseButton
        setShowContactPage={setShowContactPage}
        showContactPage={showContactPage}
      />
      <Footer />
    </div>
  );
}

export default Dictionary;
