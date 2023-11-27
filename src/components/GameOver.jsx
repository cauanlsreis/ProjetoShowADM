import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import './GameOver.css'

const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  // Formata o número para o formato desejado (por exemplo, 100.000,00)
  const formattedPrizeAmount = quizState.prizeAmount.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <div id="gameover">
        <h2>Fim de Jogo!</h2>
        <p>Prêmio: R${formattedPrizeAmount}</p>
        <p>Você acertou {quizState.score} de {quizState.questions.length} perguntas.</p>
        <button onClick={() => dispatch({ type: "NEW_GAME" })}>Reiniciar</button>
    </div>
  )
}

export default GameOver;
