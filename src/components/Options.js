import React from "react";

const Options = ({ question, dispatch, answer }) => {
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          disabled={answer !== null}
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            answer !==null
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;
