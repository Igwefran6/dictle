import Icon from "@mdi/react";
import { mdiArrowLeft } from "@mdi/js";
import Footer from "./Footer.jsx";
import { Link } from "react-router-dom";
import Header from "./Header.jsx";

const About = () => {
  return (
    <>
      <Header />
      <div className="mx-auto p-6 bg-white shadow-md dark:bg-gray-600 dark:text-gray-200 pr-64">
        {/* <div className="p-2 border-2 mt-2 mb-4 bg-blue-500 dark:bg-gray-900 hover:bg-gray-700 w-24">
          <Link to="/">
            <Icon className="text-white" path={mdiArrowLeft} size="24px" />
          </Link>
        </div> */}
        <h1 className="text-3xl font-bold mb-4">About Dictle</h1>
        <p className="mb-4 text-gray-700 dark:text-gray-200">
          Dictle is an innovative lightweight dictionary app designed to provide
          users with a comprehensive and user-friendly tool for enhancing their
          vocabulary and understanding of the English language. Whether you're a
          student, writer, or just someone with a passion for words, Dictle is
          the perfect companion to help you find the meanings, synonyms,
          antonyms, and usage examples for any word you encounter.
        </p>
        <p className="mb-4 text-gray-700 dark:text-gray-200">
          Dictle is built with simplicity and efficiency in mind. With a clean
          and intuitive interface, Dictle ensures that you can quickly find the
          information you need without any hassle. Whether you're writing an
          essay, drafting a novel, or simply trying to understand a new word
          you've come across, Dictle is here to assist you every step of the
          way.
        </p>

        <h2 className="text-2xl font-semibold mb-3">Features</h2>
        <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-200">
          <li className="mb-2">
            <strong>Word Definitions:</strong> Access precise and clear
            definitions for any word, ensuring you understand the exact meaning
            and nuances.
          </li>
          <li className="mb-2">
            <strong>Synonyms and Antonyms:</strong> Explore a wide range of
            synonyms and antonyms to expand your vocabulary and find the perfect
            word for any context.
          </li>
          <li className="mb-2">
            <strong>Example Sentences:</strong> See how words are used in
            context with example sentences that help illustrate proper usage and
            improve your comprehension.
          </li>
        </ul>
        <p className="mb-4 text-gray-700 dark:text-gray-200">
          The goal is to provide you with a powerful tool that makes learning
          new words enjoyable and accessible. Whether you're looking to impress
          with your eloquence or simply trying to avoid misunderstandings,
          Dictle is your go-to resource for all things related to words.
        </p>
        <p className="text-gray-700 dark:text-gray-200">
          If you're a developer like me you can improve Dictle by adding more
          funtionalites. All you have to do is fork it from github repo, make
          improvements and create a pull request. Thanks.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default About;
