// ADHD.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RangedFifty } from "../data/Max50";

import PageNav from "../components/PageNav";

// Questions for Anxiety assessment
const questions = [
  {
    question: "Feeling nervous, anxious, or on edge",
    options: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
  },
  {
    question: "Not being able to stop or control worrying",
    options: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
  },
  {
    question: "Worrying too much about different things",
    options: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
  },
  {
    question: "Trouble relaxing",
    options: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
  },
  {
    question: "Being so restless that it is hard to sit still",
    options: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
  },
  {
    question: "Becoming easily annoyed or irritable",
    options: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
  },
  {
    question: "Feeling afraid, as if something awful might happen",
    options: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
  },
];

const Anxiety = () => {
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

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
      const scorerange = RangedFifty(score, 3, questions.length)
      navigate("/ACES-MHS/anxiety-result", { state: { scorerange } });
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
          Rate yourself by taking this Anxiety assessment
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

        <div className="bg-blue-600 text-white rounded-3xl p-4 mb-6 w-9/12 flex flex-col items-center justify-center">
          <div className="bg-blue-800 text-white text-sm inline-flex items-center justify-center px-2 py-1 rounded-full mb-2">
            Knowledge board
          </div>
          <p className="text-center text-sm">
            Anxiety disorders are a group of mental health conditions
            characterized by excessive fear or worry that is difficult to
            control. Common types of anxiety disorders include generalized
            anxiety disorder (GAD), panic disorder, social anxiety disorder, and
            specific phobias. Symptoms may include restlessness, rapid
            heartbeat, sweating, trembling, difficulty concentrating, and
            avoidance of anxiety-provoking situations. These disorders can
            interfere with daily activities and quality of life.
          </p>
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

export default Anxiety;
