import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import Header from "./Header";
import Footer from "./Footer";

const ContactPage = ({ showContactPage }) => {
  const form = useRef(null);
  const submitButton = useRef(null);
  const [submitSent, setSubmitSent] = useState(false);
  const recaptchaRef = useRef(null);
  const [isHuman, setIsHuman] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    if (!isHuman) {
      console.log("Please verify that you are a human.");
      return;
    }

    emailjs
      .sendForm("service_phwi3kw", "template_zrohmna", form.current, {
        publicKey: "Jevwt9uRllCInf_FC",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setSubmitSent(true);
          submitButton.current.innerHTML = "Sent";
          recaptchaRef.current.reset();
          const timeOut = setTimeout(() => {
            setSubmitSent(false);
            submitButton.current.innerHTML = "Send";
            clearTimeout(timeOut);
          }, 2000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const handleRecaptchaChange = (value) => {
    if (value) {
      setIsHuman(true);
    }
  };

  return (
    <>
      <Header />
      <div
        className={
          "p-4 w-full bg-gray-100 flex items-center justify-center dark:bg-gray-600 min-h-svh "
        }
      >
        <div className="bg-white p-8 rounded-lg shadow-lg  dark:bg-gray-500 flex-1 max-w-[600px]">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
            Write me a feedback...
          </h2>
          <form ref={form} onSubmit={sendEmail}>
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
                required
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
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-400 font-bold dark:text-gray-100"
              />
            </div>
            <div className="mb-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-200"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 dark:bg-gray-400 font-bold dark:text-gray-100"
              ></textarea>
            </div>

            <div className="mb-4">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6Lf_zuQpAAAAALwSqSe5w8uiVMTDflU6ChG2L7Fn"
                onChange={handleRecaptchaChange}
              />
            </div>

            <div className="flex items-center justify-between mt-2">
              <button
                type="submit"
                ref={submitButton}
                className={
                  "text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline " +
                  (submitSent
                    ? "bg-green-500 dark:bg-green-500"
                    : "bg-blue-500 hover:bg-blue-700 dark:text-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700")
                }
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
