import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import JogoMilhao from "../img/jogodomilhao.webp";
import "./Welcome.css";

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="welcome">
        <img src={JogoMilhao} alt="Início do Jogo" />
        <p>Clique no botão abaixo para começar:</p>
        <button onClick={() => dispatch({type: "CHANGE_STATE"})}>Iniciar</button>
    </div>
  );
};

export default Welcome;