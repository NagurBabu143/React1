import React from "react";

const AnswerButton = ({ option, onAnswerSelect }) => {
  return (
    <button className="answer-btn" onClick={() => onAnswerSelect(option)}>
      {option}
    </button>
  );
};

export default AnswerButton;
