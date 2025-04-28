import React, { useEffect, useState } from "react";
import data from "../Assets/data/data";
import { useParams } from "react-router-dom";

const TestingPage = () => {
  const { difficulty } = useParams();

  const [question, setQuestion] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const filteredLevels = data.levels.filter(
      (level) => level.difficulty === difficulty
    );

    if (filteredLevels.length > 0) {
      const allQuestion = filteredLevels.flatMap((levels) => levels.questions);

      setQuestion(allQuestion);
    }
  }, [difficulty]);

  const handleAnswerClick = (option) => {
    if (isAnswered) return;

    setSelectedAnswer(option);
    setIsAnswered(true);

    const currentQuestion = question[currentQuestionIndex];

    setIsCorrectAnswer(option === currentQuestion.answer);

    if (isCorrectAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setIsAnswered(false);
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };
  const currentQuestion = question[currentQuestionIndex];

  const calculateScore = () => {
    return (score / question.length) * 100;
  };

  return (
    <div className="px-4 md:px-24 lg:px-28 py-10">
      {question.length > 0 ? (
        <>
          <div className="font-bold text-sm">
            Question {currentQuestionIndex + 1} of {question.length}
          </div>
          <div className="font-semibold my-3">{currentQuestion.question}</div>
          <div>
            {currentQuestion.options.map((option, index) => (
              <div
                key={index}
                className={`p-3 my-2 w-full border rounded-md cursor-pointer ${
                  selectedAnswer === option
                    ? isCorrectAnswer
                      ? "bg-green-100 border-green-500"
                      : "bg-red-100 border-red-500"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => handleAnswerClick(option)}
              >
                {option}
              </div>
            ))}
          </div>
          {isAnswered && (
            <div className="mt-6">
              <div
                className={`font-bold ${
                  isCorrectAnswer ? "text-green-600" : "text-red-600"
                }`}
              >
                {isCorrectAnswer ? "Correct!" : "Wrong answer!"}
              </div>

              {!isCorrectAnswer && (
                <div className="mt-2">
                  The correct answer is:
                  <span className="font-medium">{currentQuestion.answer}</span>
                </div>
              )}

              {(isCorrectAnswer || !isCorrectAnswer) &&
                currentQuestionIndex < question.length - 1 && (
                  <button
                    onClick={handleNextQuestion}
                    className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    Next Question
                  </button>
                )}
              {currentQuestionIndex === question.length - 1 && (
                <div>
                  <div className="mt-4 font-semibold">
                    You've completed all questions!
                  </div>
                  <div className="font-bold bg-cyan-600 rounded-lg text-white my-4 p-2 w-1/3">
                    Your Results is {calculateScore()}%
                  </div>
                </div>
              )}
            </div>
          )}
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default TestingPage;
