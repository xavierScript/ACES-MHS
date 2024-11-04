// ADHD.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
import PageNav from "../components/PageNav";
import { RangedFifty } from "../data/Max50";

// Questions for Bipolar assessment
const questions = [
  {
    question:
      "You felt so good or hyper that other people thought you were not your normal self or were so hyper that you got into trouble?",
    options: ["No", "Yes"],
  },
  {
    question:
      "You were so irritable that you shouted at people or started fights or arguments?",
    options: ["No", "Yes"],
  },
  {
    question: "You felt much more self-confident than usual?",
    options: ["No", "Yes"],
  },
  {
    question:
      "You got much less sleep than usual and found you didn’t really miss it?",
      options: ["No", "Yes"],
  },
  {
    question: "You were much more talkative or spoke much faster than usual?",
    options: ["No", "Yes"],
  },
  {
    question:
      "Thoughts raced through your head or you couldn’t slow your mind down?",
    options: ["No", "Yes"],
  },
  {
    question:
      "You were so easily distracted by things around you that you had trouble concentrating or staying on track?",
    options: ["No", "Yes"],
  },
  {
    question: "You had much more energy than usual?",
    options: ["No", "Yes"],
  },
  {
    question:
      "You were much more social or outgoing than usual, for example, you telephoned friends in the middle of the night?",
    options: ["No", "Yes"],
  },
  {
    question: "You were much more interested in sex than usual?",
    options: ["No", "Yes"],
  },
  {
    question:
      "You did things that were unusual for you or that other people might have thought were excessive, foolish, or risky?",
     options: ["No", "Yes"],
  },
  {
    question: "Spending money got you or your family into trouble?",
    options: ["No", "Yes"],
  },
];

const Bipolar = () => {
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
      const scorerange = RangedFifty(score, 1, questions.length)
      navigate("/ACES-MHS/bipolar-result", { state: { scorerange } });
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
          Rate yourself by taking this Bipolar assessment
        </p>
        <p className="text-sm mb-6 w-3/4">
          Has there ever been a period of time when you were not your usual self
          and...
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
              className={`py-2 px-4 rounded-2xl border border-gray-300 ${
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
                Bipolar disorder is a mental health condition marked by extreme
                mood swings that include emotional highs (mania or hypomania)
                and lows (depression). During manic episodes, individuals may
                feel overly energized, euphoric, or irritable, and may engage in
                risky behaviors. Depressive episodes involve feelings of
                sadness, hopelessness, and a loss of interest in activities. The
                severity and duration of these episodes can vary widely among
                individuals.
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

export default Bipolar;
