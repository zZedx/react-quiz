import { useQuiz } from "../contexts/QuizContext";

export default function Loader() {
  const {status} = useQuiz()
  if(status !== "loading") return
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <p>Loading questions...</p>
    </div>
  );
}
