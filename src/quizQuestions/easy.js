// Array of English language quiz questions
const englishQuiz = [
  {
    question: "What is the antonym of 'happy'?",
    options: ["Sad", "Excited", "Calm", "Confused"],
    correct: "Sad",
  },
  {
    question: "Which word is a noun?",
    options: ["Run", "Jump", "Apple", "Quickly"],
    correct: "Apple",
  },
  {
    question: "What is the past tense of 'go'?",
    options: ["Goes", "Went", "Going", "Gone"],
    correct: "Went",
  },
  {
    question: "Which sentence is correct?",
    options: [
      "She don't like pizza.",
      "She doesn’t likes pizza.",
      "She doesn’t like pizza.",
      "She didn’t likes pizza.",
    ],
    correct: "She doesn’t like pizza.",
  },
  {
    question: "What is the plural of 'child'?",
    options: ["Childs", "Children", "Childrens", "Childern"],
    correct: "Children",
  },
  {
    question: "What type of word is 'quickly'?",
    options: ["Adjective", "Noun", "Adverb", "Verb"],
    correct: "Adverb",
  },
  {
    question: "Which of the following is an exclamation?",
    options: ["Run", "Wow", "Is", "The"],
    correct: "Wow",
  },
  {
    question: "What is the synonym of 'fast'?",
    options: ["Slow", "Quick", "Still", "Lazy"],
    correct: "Quick",
  },
  {
    question: "Which is a correct question?",
    options: [
      "Do you likes coffee?",
      "Are you liking coffee?",
      "Do you like coffee?",
      "Are you like coffee?",
    ],
    correct: "Do you like coffee?",
  },
  {
    question: "What is the third person singular of 'to do'?",
    options: ["Do", "Does", "Doing", "Done"],
    correct: "Does",
  },
  // Add more English questions here
];

// Function to randomize and export 10 English quiz questions
const getRandomQuizzes = (quizArray, numOfQuestions) => {
  // Shuffle the array using the Fisher-Yates algorithm
  for (let i = quizArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [quizArray[i], quizArray[j]] = [quizArray[j], quizArray[i]];
  }

  // Slice the first 'numOfQuestions' elements from the shuffled array
  return quizArray.slice(0, numOfQuestions);
};

// Export 10 random quizzes
const randomEasyEnglishQuizzes = getRandomQuizzes(englishQuiz, 10);

console.log(randomEasyEnglishQuizzes); // Log or export the randomized quizzes
export default randomEasyEnglishQuizzes;
