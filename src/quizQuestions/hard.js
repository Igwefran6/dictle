// Array of harder English language quiz questions
const hardEnglishQuiz = [
  {
    question: "Which of the following is a subordinating conjunction?",
    options: ["And", "Or", "Because", "But"],
    correct: "Because",
  },
  {
    question: "Identify the sentence that uses the subjunctive mood.",
    options: [
      "If I was taller, I would play basketball.",
      "If I were taller, I would play basketball.",
      "I wish I was taller to play basketball.",
      "If only I was taller to play basketball.",
    ],
    correct: "If I were taller, I would play basketball.",
  },
  {
    question: "Which word is an example of an irregular verb?",
    options: ["Run", "Walk", "Talk", "Cut"],
    correct: "Cut",
  },
  {
    question:
      "What is the correct passive form of 'They are building a new bridge'?",
    options: [
      "A new bridge is being built.",
      "A new bridge will be built.",
      "A new bridge is built.",
      "A new bridge was built.",
    ],
    correct: "A new bridge is being built.",
  },
  {
    question: "What is the meaning of the word 'antithesis'?",
    options: [
      "A direct opposite",
      "A close similarity",
      "A type of metaphor",
      "An argument",
    ],
    correct: "A direct opposite",
  },
  {
    question: "Which sentence contains a misplaced modifier?",
    options: [
      "Running to the bus stop, my bag fell.",
      "My bag fell as I ran to the bus stop.",
      "While I ran to the bus stop, my bag fell.",
      "I dropped my bag while running to the bus stop.",
    ],
    correct: "Running to the bus stop, my bag fell.",
  },
  {
    question: "What is the past perfect tense of 'to go'?",
    options: ["Had gone", "Went", "Have gone", "Had been going"],
    correct: "Had gone",
  },
  {
    question:
      "Identify the sentence that contains a compound-complex sentence structure.",
    options: [
      "Although it was raining, we went to the park, and we played soccer.",
      "We went to the park, and we played soccer.",
      "Although it was raining, we still went to the park.",
      "We went to the park to play soccer.",
    ],
    correct:
      "Although it was raining, we went to the park, and we played soccer.",
  },
  {
    question:
      "Which word best describes something that cannot be expressed in words?",
    options: ["Ineffable", "Infallible", "Invariable", "Indefinite"],
    correct: "Ineffable",
  },
  {
    question: "Which sentence is grammatically correct?",
    options: [
      "I could of gone to the store.",
      "I could have gone to the store.",
      "I could gone to the store.",
      "I could had gone to the store.",
    ],
    correct: "I could have gone to the store.",
  },
  // Add more hard English questions here
];

// Function to randomize and export 10 harder English quiz questions
const getRandomHardQuizzes = (quizArray, numOfQuestions) => {
  // Shuffle the array using the Fisher-Yates algorithm
  for (let i = quizArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [quizArray[i], quizArray[j]] = [quizArray[j], quizArray[i]];
  }

  // Slice the first 'numOfQuestions' elements from the shuffled array
  return quizArray.slice(0, numOfQuestions);
};

// Export 10 random harder quizzes
const randomHardEnglishQuizzes = getRandomHardQuizzes(hardEnglishQuiz, 10);

export default randomHardEnglishQuizzes;
