import React from "react";
import { useQuiz } from "../contexts/QuizContext";

const Finished = () => {
  const {status , points , maxPoints , dispatch} = useQuiz()
  if(status !== "finished") return

  const percent = ((points / maxPoints) * 100).toFixed(2) + "%";
  return (
    <>
      <p className="result">
        You Scored <strong>{points}</strong> out of {maxPoints} ({percent})
      </p>
      <button className="btn btn-ui" onClick={()=>dispatch({type:'reset'})}>Restart Quiz</button>
    </>
  );
};

export default Finished;
