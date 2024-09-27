import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import randomEnglishQuizzes from "../quizQuestions/easy";
import randomHardEnglishQuizzes from "../quizQuestions/hard";

function Quiz() {
  const easyQuestions = randomEnglishQuizzes;
  const hardQuestions = randomHardEnglishQuizzes;

  const [difficulty, setDifficulty] = useState("easy"); // "easy" or "hard"
  const [questions, setQuestions] = useState(easyQuestions);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [timer, setTimer] = useState(15);
  const [score, setScore] = useState(0);
  const [progress, setProgress] = useState(0);
  const [lifelines, setLifelines] = useState({
    fiftyFifty: true,
    skip: true,
    hint: true,
  });
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [scoreHistory, setScoreHistory] = useState([]);
  const [leaderboard, setLeaderboard] = useState([]);
  const [start, setStart] = useState(false);

  // Timer Logic
  useEffect(() => {
    if (!start) return;
    if (timer > 0 && !quizCompleted) {
      const interval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (timer === 0) {
      handleTimeOut();
    }
  }, [timer, quizCompleted, start]);

  // Handle timeout
  const handleTimeOut = () => {
    setFeedback("Time's up!");
    setTimeout(() => nextQuestion(), 1000);
  };

  // Handle answer selection
  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    if (answer === questions[currentQuestion].correct) {
      setFeedback("Correct!");
      setScore(score + 1);
    } else {
      setFeedback("Incorrect!");
    }
    setTimeout(() => nextQuestion(), 1000); // Move to next question after 1 second
  };

  // Move to the next question or end the quiz
  const nextQuestion = () => {
    setFeedback("");
    setTimer(15);
    setProgress(((currentQuestion + 1) / questions.length) * 100);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      finishQuiz();
    }
  };

  // Finish the quiz
  const finishQuiz = () => {
    setQuizCompleted(true);
    setScoreHistory([...scoreHistory, score]);
    updateLeaderboard();
  };

  // Reset the quiz
  const retryQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setProgress(0);
    setQuizCompleted(false);
    setTimer(15);
    setLifelines({ fiftyFifty: true, skip: true, hint: true }); // Reset lifelines
  };

  // Update leaderboard
  const updateLeaderboard = () => {
    const newLeaderboard = [...leaderboard, score]
      .sort((a, b) => b - a)
      .slice(0, 5);
    setLeaderboard(newLeaderboard);
  };

  // Lifelines functionality
  const useFiftyFifty = () => {
    if (lifelines.fiftyFifty) {
      const incorrectOptions = questions[currentQuestion].options.filter(
        (option) => option !== questions[currentQuestion].correct
      );
      const randomOption =
        incorrectOptions[Math.floor(Math.random() * incorrectOptions.length)];
      setQuestions((prevQuestions) =>
        prevQuestions.map((q, i) =>
          i === currentQuestion
            ? {
                ...q,
                options: [q.correct, randomOption],
              }
            : q
        )
      );
      setLifelines({ ...lifelines, fiftyFifty: false }); // Disable after use
    }
  };

  const skipQuestion = () => {
    if (lifelines.skip) {
      nextQuestion();
      setLifelines({ ...lifelines, skip: false }); // Disable after use
    }
  };

  const useHint = () => {
    if (lifelines.hint) {
      setFeedback(
        `Hint: The correct answer starts with ${questions[
          currentQuestion
        ].correct.charAt(0)}`
      );
      setLifelines({ ...lifelines, hint: false }); // Disable after use
    }
  };

  // Set difficulty
  const selectDifficulty = (level) => {
    setDifficulty(level);
    setQuestions(level === "easy" ? easyQuestions : hardQuestions);
    retryQuiz(); // Reset quiz for new difficulty
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <div className="flex-1 p-6">
        <h1 className="text-3xl inline">Quiz</h1>{" "}
        <span className="text-gray-700 font-semibold">
          Test yourself with Dictle English quiz
        </span>
        {!quizCompleted ? (
          <div className="mt-4">
            {/* Difficulty Selection */}
            <div className="flex justify-between ">
              <button
                onClick={() => selectDifficulty("easy")}
                className={`bg-green-500 text-white py-2 px-4 rounded ${
                  difficulty === "easy" ? "bg-green-700" : ""
                }`}
              >
                Easy
              </button>
              <button
                onClick={() => selectDifficulty("hard")}
                className={`bg-red-500 text-white py-2 px-4 rounded ${
                  difficulty === "hard" ? "bg-red-700" : ""
                }`}
              >
                Hard
              </button>
            </div>

            <div className="flex justify-between items-center mb-4">
              <div className="text-lg">
                Difficulty:{" "}
                {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
              </div>
              <div className="text-lg">Time left: {timer}s</div>
            </div>

            <div className="progress-bar bg-gray-200 h-2 mb-4">
              <div
                className="bg-green-500 h-2"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            <div className="mb-4">
              <p className="text-xl font-semibold">
                {questions[currentQuestion].question}
              </p>
              <div className="mt-2">
                {questions[currentQuestion].options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleAnswer(option)}
                    className={`bg-blue-500 text-white py-2 px-4 rounded my-2 mr-2 ${
                      selectedAnswer === option ? "bg-blue-700" : ""
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
              <div className="text-lg mt-2">{feedback}</div>
            </div>

            {/* Lifelines */}
            <div className="mt-4">
              {lifelines.fiftyFifty && (
                <button
                  onClick={useFiftyFifty}
                  className="bg-gray-500 text-white py-2 px-4 rounded"
                >
                  50/50
                </button>
              )}
              {lifelines.skip && (
                <button
                  onClick={skipQuestion}
                  className="bg-gray-500 text-white py-2 px-4 rounded ml-2"
                >
                  Skip
                </button>
              )}
              {lifelines.hint && (
                <button
                  onClick={useHint}
                  className="bg-gray-500 text-white py-2 px-4 rounded ml-2"
                >
                  Hint
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold">Quiz Completed!</h2>
            <p>Your score: {score}</p>
            <button
              onClick={retryQuiz}
              className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
            >
              Retry Quiz
            </button>

            <h3 className="mt-4 text-xl font-semibold">Score History</h3>
            <ul className="list-disc list-inside">
              {scoreHistory.map((score, index) => (
                <li key={index}>
                  Attempt {index + 1}: {score} points
                </li>
              ))}
            </ul>

            <h3 className="mt-4 text-xl font-semibold">Leaderboard</h3>
            <ul className="list-disc list-inside">
              {leaderboard.map((score, index) => (
                <li key={index}>
                  #{index + 1}: {score} points
                </li>
              ))}
            </ul>
          </div>
        )}
        {!start && (
          <div className="fixed top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2 p-4 bg-blue-500 dark:bg-slate-700 rounded-lg text-white w-full h-full flex flex-col justify-center items-center gap-4">
            <p className="max-w-[600px] text-center">
              This is an English language quiz. Your are expected to answer each
              question within 15 seconds.
            </p>
            <button
              onClick={() => setStart(true)}
              className="border-2 p-4 rounded-lg hover:scale-105 bg-green-800 transition-all"
            >
              Start Quiz
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Quiz;
