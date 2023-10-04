import React from "react";
import { useQuiz } from "../contexts/QuizContext";

const NextButton = () => {
  const { dispatch, answer, status , index , numQuestions} = useQuiz();
  if (status !== "active") return;

  if (answer === null) return null;
  return (
    <button
      className="btn btn-ui"
      onClick={() => dispatch({ type: "nextQuestion" })}
    >{index + 1 === numQuestions ? "Finish" : "Next"}
    </button>
  );
};

export default NextButton;
