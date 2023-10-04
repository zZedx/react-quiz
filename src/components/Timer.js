import React, { useEffect, useState } from "react";
import { useQuiz } from "../contexts/QuizContext";

const Timer = () => {
  const { status ,dispatch } = useQuiz();

  const [time, setTime] = useState(420);
  useEffect(() => {
    setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);
  }, []);
  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;

  useEffect(() => {
    if (time === 0) {
      dispatch({ type: "finish" });
    }
}, [time, dispatch]);

  if (status !== "active") return;


  return (
    <div className="timer">
      <strong>
        0{minutes} : {seconds}
      </strong>
    </div>
  );
};

export default Timer;
