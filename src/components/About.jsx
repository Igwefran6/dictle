import Icon from "@mdi/react";
import { mdiArrowLeft } from "@mdi/js";
import Footer from "./Footer.jsx";
import {Link} from "react-router-dom";

const About = () => {
    return (
        <>
            <div className="max-w-4xl mx-auto p-6 bg-white shadow-md dark:bg-gray-600 dark:text-gray-200">
                <div className="p-2 border-2 mt-2 mb-4 bg-gray-800 hover:bg-gray-700">
                    <Link to="/">
                        <Icon path={mdiArrowLeft} size="24px" />
                    </Link>
                </div>
                <h1 className="text-3xl font-bold mb-4">About Dictle</h1>
                <p className="mb-4 text-gray-700 dark:text-gray-200">
                    Dictle is an innovative dictionary app designed to provide
                    users with a comprehensive and user-friendly tool for
                    enhancing their vocabulary and understanding of the English
                    language. Whether you're a student, writer, or just someone
                    with a passion for words, Dictle is the perfect companion to
                    help you find the meanings, synonyms, antonyms, and usage
                    examples for any word you encounter.
                </p>
                <p className="mb-4 text-gray-700 dark:text-gray-200">
                    Our app is built with simplicity and efficiency in mind.
                    With a clean and intuitive interface, Dictle ensures that
                    you can quickly find the information you need without any
                    hassle. Whether you're writing an essay, drafting a novel,
                    or simply trying to understand a new word you've come
                    across, Dictle is here to assist you every step of the way.
                </p>

                <h2 className="text-2xl font-semibold mb-3">Features</h2>
                <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-200">
                    <li className="mb-2">
                        <strong>Word Definitions:</strong> Access precise and
                        clear definitions for any word, ensuring you understand
                        the exact meaning and nuances.
                    </li>
                    <li className="mb-2">
                        <strong>Synonyms and Antonyms:</strong> Explore a wide
                        range of synonyms and antonyms to expand your vocabulary
                        and find the perfect word for any context.
                    </li>
                    <li className="mb-2">
                        <strong>Example Sentences:</strong> See how words are
                        used in context with example sentences that help
                        illustrate proper usage and improve your comprehension.
                    </li>
                </ul>
                <p className="mb-4 text-gray-700 dark:text-gray-200">
                    At Dictle, we believe that a rich vocabulary is the
                    cornerstone of effective communication. Our goal is to
                    provide you with a powerful tool that makes learning new
                    words enjoyable and accessible. Whether you're looking to
                    impress with your eloquence or simply trying to avoid
                    misunderstandings, Dictle is your go-to resource for all
                    things related to words.
                </p>
                <p className="text-gray-700 dark:text-gray-200">
                    Enjoy using Dictle and watch your vocabulary grow. Enhance
                    your writing, boost your understanding, and communicate with
                    confidence. With Dictle, the world of words is at your
                    fingertips.
                </p>
            </div>
            <Footer />
        </>
    );
};

export default About;
