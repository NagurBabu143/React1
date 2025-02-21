import React, { useState } from "react";
import Question from "./Question";

const questionsData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    correctAnswer: "Paris",
  },
  {
    question: "Which is the largest planet in our solar system?",
    options: ["Mars", "Earth", "Jupiter", "Venus"],
    correctAnswer: "Jupiter",
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: ["Shakespeare", "Hemingway", "Tolkien", "Austen"],
    correctAnswer: "Shakespeare",
  },
  {
    question: "What is the boiling point of water at sea level?",
    options: ["90°C", "100°C", "110°C", "120°C"],
    correctAnswer: "100°C",
  },
  {
    question: "Which language is primarily used for web development?",
    options: ["Python", "JavaScript", "C++", "Java"],
    correctAnswer: "JavaScript",
  },
  {
    question: "What is the largest mammal on Earth?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    correctAnswer: "Blue Whale",
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    options: ["Gold", "Oxygen", "Silver", "Osmium"],
    correctAnswer: "Oxygen",
  },
  {
    question: "In which year did the first man land on the moon?",
    options: ["1965", "1969", "1972", "1975"],
    correctAnswer: "1969",
  },
];

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const Answer = (selectedAnswer) => {
    if (selectedAnswer === questionsData[currentQuestionIndex].correctAnswer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const NextQuestion = () => {
    if (currentQuestionIndex < questionsData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setIsCorrect(false);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="quiz-container">
      {!showResult ? (
        <>
          <Question
            questionData={questionsData[currentQuestionIndex]}
            onAnswerSelect={Answer}
            isCorrect={isCorrect}
          />
          {isCorrect && (
            <button className="next-btn" onClick={NextQuestion}>
              Next Question
            </button>
          )}
        </>
      ) : (
        <h2 className="final-message">🎉 Quiz Completed! 🎉</h2>
      )}
    </div>
  );
};

export default Quiz;
