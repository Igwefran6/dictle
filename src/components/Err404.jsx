import { Link } from "react-router-dom";

const Err404 = () => {
  return (
    <div className="min-h-[100svh] grid place-items-center p-2 bg-gray-100 dark:bg-gray-600 text-center text-gray-600 dark:text-gray-200">
      <p className="text-2xl text-red-500 ">
        <span className="text-3xl block mb-2">
          <span className="text-5xl">404</span>
          <br />
          page does not exist!
        </span>
        Click{" "}
        {
          <Link className="underline" to="/">
            here
          </Link>
        }{" "}
        to go back to homepage
      </p>
    </div>
  );
};

export default Err404;
