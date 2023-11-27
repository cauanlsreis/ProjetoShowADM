import { createContext, useReducer} from "react";
import questions from '../data/questions_complete'

const STAGES = ["Start", "Category", "Playing", "End"]

const initialState = {
  gameStage: STAGES[0],
  questions,
  currentQuestion: 0,
  score: 0,
  answerSelected: false,
  optionToHide: null,
  isRemoveOptionButtonVisible: true,
  isSkipButtonUsed: false,
  isStopButtonUsed: false,
  prizeAmount: 0,
  acertarValue: 100000, // Adicione aqui
};


const quizReducer = (state, action) => {
    
    switch(action.type) {
        case "CHANGE_STATE":
            return {
                ...state,
                gameStage: STAGES[1],
            };

        case "START_GAME":
          let quizQuestions = null

          state.questions.forEach((question) => {
            if(question.category === action.payload){
              quizQuestions = question.questions
            }
          })

          return {
            ...state,
            questions: quizQuestions,
            gameStage: STAGES[2],
          }
        
        case "REORDER_QUESTIONS":
          const reorderedQuestions = state.questions.sort(() => {
            return Math.random() - 0.5;
          });

          // Pegar as 10 primeiras perguntas reordenadas
          const selectedQuestions = reorderedQuestions.slice(0, 10);

          return {
            // estado presente
            ...state,
            // perguntas = perguntas reordenadas
            questions: selectedQuestions,
          };
        
        case "CHANGE_QUESTION":
          const nextQuestion = state.currentQuestion + 1;
          let isEndGame = false;

          if (!state.questions[nextQuestion]) {
              isEndGame = true;
          }
          
          return {
              ...state,
              currentQuestion: nextQuestion,
              gameStage: isEndGame ? STAGES[3] : state.gameStage,
              answerSelected: false,
          };
        
        case "NEW_GAME":
          return initialState;
        
        case "CHECK_ANSWER":
          if (state.answerSelected) return state;
        
          const answer = action.payload.answer;
          const option = action.payload.option;
          let correctAnswer = 0;
          let somatorio = state.somatorio || 0;
          const valorPerguntaCerta = 100000;
          const valorPerguntaErrada = 50000;
          let newAcertarValue = state.acertarValue || 100000;
          let newPrizeAmount = state.prizeAmount;
        
          if (answer === option) {
            correctAnswer = 1;
        
            if (somatorio === 0) {
              // Se for a primeira resposta certa, incrementa pelo valor da pergunta certa
              newPrizeAmount += valorPerguntaCerta;
            } else {
              // Se for uma resposta certa após a primeira errada, incrementa valorPerguntaErrada
              newPrizeAmount += valorPerguntaErrada;
            }
          } else {
            somatorio += 1;
        
            if (somatorio === 1) {
              // Se for a primeira resposta errada, o prêmio acumulado é dividido por 2
              newPrizeAmount = Math.floor(newPrizeAmount / 2);
              newAcertarValue = valorPerguntaErrada;
            } else if (somatorio > 1) {
              // Se somatorio for maior que 1, as respostas corretas valem valorPerguntaErrada
              newPrizeAmount = 0;
            }
          }
        
          return {
            ...state,
            score: state.score + correctAnswer,
            answerSelected: option,
            somatorio: somatorio,
            gameStage: somatorio >= 2 ? "End" : state.gameStage,
            prizeAmount: newPrizeAmount,
            acertarValue: newAcertarValue,
          };
        
          
          
          
          
          
        case "REMOVE_OPTION":
          const questionWithoutOption = state.questions[state.currentQuestion]
          
          let repeat = true 
          let optionToHide

          questionWithoutOption.options.forEach((option) => {
            if(option !== questionWithoutOption.answer && repeat){
              optionToHide = option
              repeat=false;
            }
          });

          return{
            ...state,
            optionToHide,
            isRemoveOptionButtonVisible: false,
          }

          case "SKIP_QUESTION":
            return {
                ...state,
                currentQuestion: state.currentQuestion + 1,
                isSkipButtonUsed: true,
                answerSelected: false,
            };
        
        case "STOP_GAME":
          return {
            ...state,
            gameStage: STAGES[3],
            isStopButtonUsed: true,
            answerSelected: false,
          };
        
        default:
            return state;
    }
}

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
    const value = useReducer(quizReducer, initialState);

    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};