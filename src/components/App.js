import { QuizProvider } from "../contexts/QuizContext";

import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import Finished from "./Finished";
import Timer from "./Timer";


export default function App() {

  return (
    <div className="app">
      <Header />
      <Main>
        <Loader />
        <Error />
        <StartScreen />
          <>
            <Progress/>
            <Question/>
            <Timer />
            <NextButton />
          </>
          <Finished/>
      </Main>
    </div>
  );
}
