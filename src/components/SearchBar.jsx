import React from "react";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";

const SearchBar = () => {
    return (
        <div className="flex items-center border-b border-gray-300 p-4 py-3">
            <Icon path={mdiMagnify} size={1} className="text-gray-500 mr-3" />
            <input
                type="text"
                placeholder="Search..."
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            />
        </div>
    );
};

export default SearchBar;
