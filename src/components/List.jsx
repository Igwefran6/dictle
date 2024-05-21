const List = ({ listData }) => {
    return (
        <>
            {listData.length === 0 ? (
                <p className="ml-2">non available.</p>
            ) : (
                <ul className="mb-2">
                    {listData.map((item, i) => (
                        <li key={i}>
                            <sup className="mr-[2px] text-gray-400">
                                {i + 1}
                            </sup>
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default List;
