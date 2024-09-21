import React from "react";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";

const SearchBar = (props) => {
  return (
    <div className="flex items-center border-b border-gray-300 dark:border-gray-500 dark:bg-gray-600 p-4 py-3">
      <Icon
        path={mdiMagnify}
        size={1}
        className="text-gray-500 dark:text-gray-400 mr-3"
      />
      <form onSubmit={(e) => props.handleSearch(e)}>
        <input
          type="text"
          placeholder="Search word here..."
          value={props.word}
          onChange={(e) => props.setWord(e.target.value)}
          className="appearance-none bg-transparent dark:text-gray-100 border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          ref={props.inputRef}
        />
      </form>
    </div>
  );
};

export default SearchBar;
