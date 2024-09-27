import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [showContactPage, setShowContactPage] = useState(false);

  return (
    <div className="h-[100svh] flex flex-col  ">
      <Header setShowContactPage={setShowContactPage} />
      <div className="flex flex-1 p-2 gap-2">
        <div className="relative w-full bg-slate-700 rounded-lg p-12 font-semibold flex flex-col items-center justify-center bg-no-repeat bg-cover text-white bg-[url('/images/dict.png')]">
          <h2 className="text-5xl text-slate-700 text-center no-copy max-sm:text-4xl">
            Welcome to Dictle
          </h2>
          <p className="text-slate-700 text-center ">
            A simple, yet interactive guide to learning english language.
          </p>
          <Link
            to="/dictionary"
            className="block text-2xl m-4 py-2 px-4 border-2 rounded-lg bg-slate-900 hover:scale-105 transition-all"
          >
            Open dictionary
          </Link>
          <p className=" absolute bottom-4 left-4 text-slate-900">
            A language is an extension of your thought for communication.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
