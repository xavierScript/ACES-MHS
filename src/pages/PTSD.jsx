// ADHD.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
import { RangedFifty } from "../data/Max50";

import PageNav from "../components/PageNav";

// Questions for PTSD assessment
const questions = [
  {
    question:
      "Had nightmares about the event(s) or thought about the event(s) when you did not want to?",
    options: ["No", "Yes"],
  },
  {
    question:
      "Tried hard not to think about the event(s) or went out of your way to avoid situations that reminded you of the event(s)?",
    options: ["No", "Yes"],
  },
  {
    question: "Been constantly on guard, watchful, or easily startled?",
    options: ["No", "Yes"],
  },
  {
    question:
      "Felt numb or detached from people, activities, or your surroundings?",
    options: ["No", "Yes"],
  },
  {
    question:
      "Felt guilty or unable to stop blaming yourself or others for the event(s) or any problems the event(s) may have caused?",
    options: ["No", "Yes"],
  },
];

const PTSD = () => {
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
      navigate("/ACES-MHS/ptsd-result", { state: { scorerange } });
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
          Rate yourself by taking this PTSD assessment
        </p>
        <p className="text-sm mb-6 w-3/4">In the past month, have you....</p>
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
                PTSD is a mental health disorder that can develop after
                experiencing or witnessing a traumatic event, such as war,
                natural disasters, serious accidents, or violent assaults.
                Symptoms may include intrusive thoughts or memories, nightmares,
                severe anxiety, avoidance of reminders of the trauma, emotional
                numbness, and hyperarousal (increased startle response,
                irritability, difficulty sleeping). PTSD can significantly
                affect a person's daily life and relationships.
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

export default PTSD;
