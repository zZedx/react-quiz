import { useQuiz } from "../contexts/QuizContext";

function Error() {
  const {status} = useQuiz()
  if(status !== "error") return
  return (
    <p className="error">
      <span>💥</span> There was an error fecthing questions.
    </p>
  );
}

export default Error;
