import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";

const SearchButton = props => (
    <button
        className="bg-blue-500 text-gray-100 fixed bottom-20 right-5 dark:bg-gray-800 rounded-full grid place-items-cente p-2 border border-gray-300 md:hidden z-20"
        onClick={() => props.handleButtonClick()}
    >
        <Icon path={mdiMagnify} size="34px" className=" dark:text-gray-300" />
    </button>
);

export default SearchButton;
