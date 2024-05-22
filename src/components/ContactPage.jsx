const ContactPage = ({ showContactPage }) => {
    return (
        <div
            className={
                "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-[340px] bg-gray-100 flex items-center justify-center dark:bg-gray-600 " +
                (!showContactPage ? "hidden" : "")
            }
        >
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md dark:bg-gray-500">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
                    Contact Me...
                </h2>
                <form>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-200"
                            htmlFor="name"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-400 font-bold dark:text-gray-100"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-200"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-400 font-bold dark:text-gray-100"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-200"
                            htmlFor="message"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 dark:bg-gray-400 font-bold dark:text-gray-100"
                        ></textarea>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline dark:text-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;
