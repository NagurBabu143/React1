import React, { useState, useEffect } from "react";
import AnswerButton from "./AnswerButton";

const Question = ({ questionData, onAnswerSelect, isCorrect }) => {
  const [attempted, setAttempted] = useState(false);

  
  useEffect(() => {
    setAttempted(false);
  }, [questionData]);

  const handleAnswerClick = (option) => {
    setAttempted(true);
    onAnswerSelect(option);
  };

  return (
    <div className="question-card">
      <h2>{questionData.question}</h2>
      <div className="options">
        {questionData.options.map((option, index) => (
          <AnswerButton
            key={index}
            option={option}
            onAnswerSelect={handleAnswerClick}
          />
        ))}
      </div>
      {attempted && (
        <p className={isCorrect ? "correct" : "incorrect"}>
          {isCorrect ? "✔ Correct!" : "❌ Try Again"}
        </p>
      )}
    </div>
  );
};

export default Question;
