import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import Option from "./Option";

import "./Question.css";

const Question = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    const currentQuestion = quizState.questions[quizState.currentQuestion];

    const onSelectOption = (option) => {
      dispatch({
        type: "CHECK_ANSWER",
        payload: {answer: currentQuestion.answer, option}
      });
    };
    
  return (
    <div id="question">
        <div className="status-indicators">
          <div className="status-indicator">Errar: {quizState.score}</div>
          <div className="status-indicator">Parar: {quizState.currentQuestion}</div>
          <div className="status-indicator">Acertar: {quizState.questions.length - quizState.currentQuestion - 1}</div>
        </div>
        <h2>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</h2>
        <p>{currentQuestion.question}</p>
        <div id="options-container">
            {currentQuestion.options.map((option) => (
              <Option 
              option={option} 
              key={option} 
              answer={currentQuestion.answer} 
              selectOption={() => onSelectOption(option)}
              hide={quizState.optionToHide === option ? "hide" : null}
              />
            ))}
        </div>
        {!quizState.answerSelected && quizState.isRemoveOptionButtonVisible && (
          <button onClick={() => dispatch({ type: "REMOVE_OPTION" })}>
            Excluir uma
          </button>
        )}

        {quizState.answerSelected && (
          <button onClick={() => dispatch({type: "CHANGE_QUESTION"})}>
            Continuar
          </button>
        )}
    </div>
  )
}

export default Question