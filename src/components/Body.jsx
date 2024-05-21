import List from "./List";

const Body = props => {
    function capitalizeFirstLetter(string) {
        if (string.length === 0) {
            return string;
        }
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <div className="grow flex flex-col  p-4 bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-200">
            <h2 className="font-bold text-2xl opacity-75 ">
                {capitalizeFirstLetter(props.word)}
            </h2>
            {props.error && <p className="text-red-500">{props.error}</p>}
            {props.definitions && <p> {props.definitions.phonetic}</p>}
            {props.definitions && (
                <div>
                    {props.definitions.meanings.map((meaning, i) => (
                        <div
                            className="mb-4 border-b-[1px] border-gray-500 pb-2"
                            key={i}
                        >
                            <h2 className="opacity-75 font-bold">
                                {meaning.partOfSpeech}
                            </h2>

                            {meaning.definitions.map((def, i) => (
                                <p key={i}>
                                    <sup className="mr-[2px] italic opacity-75">
                                        {i + 1}
                                    </sup>
                                    {def.definition}
                                </p>
                            ))}
                            <div className="border-l-[2px] border-gray-500">
                                <p className="ml-2">
                                    <span className="opacity-75 font-bold">
                                        antonym(s):
                                    </span>
                                    {<List listData={meaning.antonyms} />}
                                </p>
                                <p className="ml-2">
                                    <span className="opacity-75 font-bold">
                                        synonym(s):
                                    </span>
                                    {<List listData={meaning.synonyms} />}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Body;
