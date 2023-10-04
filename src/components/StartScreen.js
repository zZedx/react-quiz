import React from "react";
import { useQuiz } from "../contexts/QuizContext";

const StartScreen = () => {
  const {status , numQuestions , dispatch} = useQuiz()
  if(status !== "ready") return
  return (
    <div className="start">
      <h2>Welcome to React Quiz !</h2>
      <h3>{numQuestions} Question to test your React mastery</h3>
      <button className="btn btn-ui" onClick={()=>dispatch({type:"start"})}>Let's Start</button>
    </div>
  );
};

export default StartScreen;
