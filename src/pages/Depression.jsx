// ADHD.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
import PageNav from "../components/PageNav";

// Questions for Depression assessment
const questions = [
  {
    question: "Little interest or pleasure in doing things",
    options: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
  },
  {
    question: "Feeling down, depressed, or hopeless",
    options: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
  },
  {
    question: "Trouble falling or staying asleep, or sleeping too much",
    options: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
  },
  {
    question: "Feeling tired or having little energy",
    options: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
  },
  {
    question: "Poor appetite or overeating",
    options: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
  },
  {
    question:
      "Feeling bad about yourself, or feeling like a failure or that you've let yourself or your family down",
    options: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
  },
  {
    question:
      "Trouble concentrating on things, such as reading the newspaper or watching television",
    options: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
  },
  {
    question:
      "Moving or speaking so slowly that others could have noticed, or the opposite: being so fidgety or restless that you've been moving around more than usual",
    options: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
  },
  {
    question:
      "Thoughts that you would be better off dead, or of hurting yourself",
    options: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
  },
  {
    question:
      "If you checked off any problems, how difficult have these made things at work, home, or with others?",
    options: [
      "Not difficult at all",
      "Somewhat difficult",
      "Very difficult",
      "Extremely difficult",
    ],
  },
];

const Depression = () => {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isKnowledgeBoardOpen, setIsKnowledgeBoardOpen] = useState(false);

  const currentYear = new Date().getFullYear(); // Get the current year

  const handleAnswer = (index) => {
    setSelectedOption(index);
    setScore(score + index);
  };

  const nextQuestion = () => {
    const nextIndex = currentQuestion + 1;
    if (nextIndex < questions.length) {
      setCurrentQuestion(nextIndex);
      setSelectedOption(null); // Reset selected option for the next question
    } else {
      navigate("/ACES-MHS/depression-result", { state: { score } });
    }
  };

  const prevQuestion = () => {
    const prevIndex = currentQuestion - 1;
    if (prevIndex >= 0) {
      setCurrentQuestion(prevIndex);
      setSelectedOption(null); // Reset selected option when going back
    }
  };

  return (
    <>
      <PageNav />
      <div className="flex flex-col items-center justify-center min-h-screen w-full font-poppins mt-20 bg-gray-50 pt-6">
        <h1 className="text-2xl font-bold mb-4">Mental Health Test</h1>
        <p className="text-sm mb-6">
          Rate yourself by taking this Depression assessment
        </p>
        <p className="text-sm mb-6 w-3/4">
          Over the last 2 weeks, how often have you been bothered by any of the
          following problems?
        </p>
        <p className="text-lg mb-6 w-3/4">
          <span className="font-bold">Q{currentQuestion + 1}. </span>
          {questions[currentQuestion].question}
        </p>
        <div className="flex flex-col space-y-2 mb-6 w-2/4">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className={`py-2 px-4 rounded-2xl border border-gray-300 text-sm ${
                selectedOption === index
                  ? "bg-blue-600 text-white"
                  : "bg-white text-black hover:bg-gray-100"
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="w-9/12 h-fit mb-6">
          <button
            onClick={() => setIsKnowledgeBoardOpen(!isKnowledgeBoardOpen)}
            className="w-full bg-blue-600 text-white rounded-t-3xl p-4 flex items-center justify-center hover:bg-blue-700 transition-colors duration-200"
          >
            <div className="flex items-center">
              <div className="bg-blue-800 text-white text-sm inline-flex items-center justify-center px-2 py-1 rounded-full">
                Knowledge board
              </div>
            </div>
            {isKnowledgeBoardOpen ? (
              <ChevronUp className="w-5 h-5 justify-end" />
            ) : (
              <ChevronDown className="w-5 h-5 justify-end" />
            )}
          </button>

          <div
            className={`overflow-y-auto transition-all duration-300 ease-in-out ${
              isKnowledgeBoardOpen ? "max-h-48" : "max-h-0"
            }`}
          >
            <div className="bg-blue-600 text-white rounded-b-3xl p-4">
              <p className="text-center text-sm">
                Depression, also known as major depressive disorder (MDD), is a
                mood disorder characterized by persistent feelings of sadness,
                loss of interest or pleasure in activities, and a range of
                physical and emotional symptoms. These symptoms may include
                changes in appetite or weight, sleep disturbances, fatigue,
                difficulty concentrating, feelings of worthlessness or guilt,
                and thoughts of death or suicide. Depression can significantly
                impair daily functioning and quality of life.
              </p>
            </div>
          </div>
        </div>

        <div className="flex space-x-10 mb-32">
          <button
            onClick={prevQuestion}
            disabled={currentQuestion === 0}
            className="bg-gray-300 text-black py-2 px-4 rounded-2xl disabled:opacity-50 hover:bg-gray-400 hover:text-white transition duration-200"
          >
            Previous
          </button>
          <button
            onClick={nextQuestion}
            className="bg-black text-white py-2 px-4 rounded-2xl hover:bg-gray-300 hover:text-black transition duration-200"
          >
            Next
          </button>
        </div>
      </div>

      <footer className="bg-black text-white text-center py-4">
        © {currentYear} All Rights Reserved
      </footer>
    </>
  );
};

export default Depression;
