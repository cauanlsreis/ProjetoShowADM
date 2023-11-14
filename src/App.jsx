// react, componentes, estáticos
import JogoMilhao from "./img/jogodomilhao.webp";

import Welcome from './components/Welcome';

import './App.css'


function App() {
  return (
      <div className="App">
        <img src={JogoMilhao} alt="Início do Jogo" />
        <Welcome />
      </div>
  );
}

export default App
