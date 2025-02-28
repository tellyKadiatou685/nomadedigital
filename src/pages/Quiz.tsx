
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Flag, ChevronRight, RefreshCw } from "lucide-react";

interface Question {
  country: string;
  capital: string;
  choices: string[];
}

const QUESTIONS: Question[] = [
  {
    country: "France",
    capital: "Paris",
    choices: ["Londres", "Paris", "Madrid", "Berlin"],
  },
  {
    country: "Espagne",
    capital: "Madrid",
    choices: ["Lisbonne", "Rome", "Madrid", "Barcelone"],
  },
  {
    country: "Italie",
    capital: "Rome",
    choices: ["Milan", "Venise", "Naples", "Rome"],
  },
  {
    country: "Allemagne",
    capital: "Berlin",
    choices: ["Munich", "Hambourg", "Berlin", "Francfort"],
  },
  {
    country: "Portugal",
    capital: "Lisbonne",
    choices: ["Porto", "Lisbonne", "Faro", "Braga"],
  },
];

const Quiz = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const currentQuestion = QUESTIONS[currentQuestionIndex];

  const handleAnswer = (answer: string) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(answer);
    const correct = answer === currentQuestion.capital;
    setIsCorrect(correct);

    if (correct) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestionIndex < QUESTIONS.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null);
        setIsCorrect(null);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setIsCorrect(null);
  };

  if (showResult) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex items-center justify-center p-4"
      >
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="mb-8"
          >
            <Flag className="w-20 h-20 mx-auto text-primary" />
          </motion.div>
          <h2 className="text-3xl font-bold mb-4">Quiz Terminé !</h2>
          <p className="text-xl mb-6">
            Ton score : {score} sur {QUESTIONS.length}
          </p>
          <div className="space-y-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={restartQuiz}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <RefreshCw className="w-5 h-5" />
              Recommencer
            </motion.button>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <p className="text-lg text-muted-foreground">
              Question {currentQuestionIndex + 1}/{QUESTIONS.length}
            </p>
            <h2 className="text-3xl font-bold">
              Quelle est la capitale de {currentQuestion.country} ?
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
          {currentQuestion.choices.map((choice, index) => (
            <motion.button
              key={choice}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleAnswer(choice)}
              disabled={selectedAnswer !== null}
              className={`
                p-4 text-lg font-medium rounded-xl shadow-lg transition-all duration-300
                ${
                  selectedAnswer === null
                    ? "hover:scale-105 bg-white/80 hover:bg-white"
                    : selectedAnswer === choice
                    ? isCorrect
                      ? "bg-green-500 text-white transform scale-105"
                      : "bg-red-500 text-white"
                    : choice === currentQuestion.capital && selectedAnswer !== null
                    ? "bg-green-500 text-white"
                    : "bg-white/80 opacity-50"
                }
              `}
            >
              {choice}
            </motion.button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-8 text-center"
        >
          <p className="text-xl font-semibold">
            Score: {score}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Quiz;
