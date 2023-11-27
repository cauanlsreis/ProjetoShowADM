import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import Option from "./Option";

import "./Question.css";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestion];
  const acertarValue = 100000; // Ajuste aqui

  const onSelectOption = (option) => {
    dispatch({
      type: "CHECK_ANSWER",
      payload: { answer: currentQuestion.answer, option },
    });
  };

  const questaoAtual = quizState.currentQuestion + 1;
  const valorPerguntaCerta = 100000;
  const valorPerguntaErrada = 50000;

  return (
    <div id="question">
      <div className="status-indicators">
        <div className="status-indicator">Parar: {quizState.prizeAmount}</div>
        <div className="status-indicator">Acertar: {quizState.somatorio >= 1 ? valorPerguntaErrada : quizState.acertarValue}</div>
      </div>
      <h2>Pergunta {questaoAtual} de {quizState.questions.length}</h2>
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

      {!quizState.answerSelected && !quizState.isSkipButtonUsed && (
        <button onClick={() => dispatch({ type: "SKIP_QUESTION" })}>
          Pular
        </button>
      )}

      {!quizState.answerSelected && !quizState.isStopButtonUsed && (
        <button onClick={() => dispatch({ type: "STOP_GAME" })}>
          Parar
        </button>
      )}

      {quizState.answerSelected && (
        <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>
          Continuar
        </button>
      )}
    </div>
  );
};

export default Question;
