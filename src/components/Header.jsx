import Icon from "@mdi/react";
import { mdiBookAlphabet } from "@mdi/js";

const Header = ({ setShowContactPage }) => {
    const handleClick = e => {
        e.preventDefault();
        setShowContactPage(prev => !prev)
    };
    return (
        <header className="bg-blue-500 dark:bg-gray-900 text-white p-6 pb-4">
            <h1 className="text-2xl font-bold flex">
                <Icon path={mdiBookAlphabet} size="26px" />
                Dictle.
            </h1>
            <nav>
                <ul className="flex space-x-4">
                    <li>
                        <a
                            href="#home"
                            className="hover:underline hover:font-bold"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            className="hover:underline hover:font-bold "
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="hover:underline hover:font-bold"
                            onClick={e => handleClick(e)}
                        >
                            Developer's contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
