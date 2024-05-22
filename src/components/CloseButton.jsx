import Icon from "@mdi/react";
import { mdiCloseCircleOutline } from "@mdi/js";

const CloseButton = ({ setShowContactPage, showContactPage }) => {
    return (
        <button
            className={
                "bg-blue-500 text-gray-100 fixed bottom-20 right-20 dark:bg-gray-800 rounded-full grid place-items-cente p-2 border border-gray-300 z-20 " +
                (!showContactPage ? "hidden" : "")
            }
            onClick={() => setShowContactPage(prev => !prev)}
        >
            <Icon
                path={mdiCloseCircleOutline}
                size="34px"
                className=" dark:text-gray-300"
            />
        </button>
    );
};

export default CloseButton;
