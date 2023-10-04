import React from "react";
import Options from "./Options";
import { useQuiz } from "../contexts/QuizContext";

const Question = () => {
  const { questions, dispatch, answer, status, index } = useQuiz();
  const question = questions[index];
  if (status !== "active") return;
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
};

export default Question;
