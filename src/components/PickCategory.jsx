import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import "./PickCategory.css";

const PickCategory = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  const chooseCategoryAndReorderQuestions = (category) => {
    dispatch ({ type: "START_GAME", payload: category });

    dispatch({ type: "REORDER_QUESTIONS" });
  }

  return (
    <div id="category">
        <h2>Escolha abaixo um nível de dificuldade:</h2>
        <div>
            {quizState.questions.map((question) => (
                <button onClick={() => chooseCategoryAndReorderQuestions(question.category)} key={question.category}>{question.category}</button>
            ))}
        </div>
    </div>
  )
}

export default PickCategory