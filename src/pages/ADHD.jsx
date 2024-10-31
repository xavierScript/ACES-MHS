// ADHD.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
import PageNav from "../components/PageNav";

// Questions for ADHD assessment
const questions = [
  {
    question:
      "How often do you have trouble wrapping up the final details of a project, once the challenging parts have been done?",
    options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  },
  {
    question:
      "How often do you have difficulty getting things in order when you have to do a task that requires organization?",
    options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  },
  {
    question:
      "How often do you have problems remembering appointments or obligations?",
    options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  },
  {
    question:
      "When you have a task that requires a lot of thought, how often do you avoid or delay getting started?",
    options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  },
  {
    question:
      "How often do you fidget or squirm with your hands or feet when you have to sit down for a long time?",
    options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  },
  {
    question:
      "How often do you feel overly active and compelled to do things, like you were driven by a motor?",
    options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  },
  {
    question:
      "How often do you make careless mistakes when you have to work on a boring or difficult project?",
    options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  },
  {
    question:
      "How often do you have difficulty keeping your attention when you are doing boring or repetitive work?",
    options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  },
  {
    question:
      "How often do you have difficulty concentrating on what people say to you, even when they are speaking to you directly?",
    options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  },
  {
    question:
      "How often do you misplace or have difficulty finding things at home or at work?",
    options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  },
  {
    question: "How often are you distracted by activity or noise around you?",
    options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  },
  {
    question:
      "How often do you leave your seat in meetings or other situations in which you are expected to remain seated?",
    options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  },
  {
    question: "How often do you feel restless or fidgety?",
    options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  },
  {
    question:
      "How often do you have difficulty unwinding and relaxing when you have time to yourself?",
    options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  },
  {
    question:
      "How often do you find yourself talking too much when you are in social situations?",
    options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  },
  {
    question: "How often do you finish others' sentences a in conversation?",
    options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  },
  {
    question:
      "How often do you have difficulty waiting your turn in situations when turn taking is required?",
    options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  },
  {
    question: "How often do you interrupt others when they are busy?",
    options: ["Never", "Rarely", "Sometimes", "Often", "Very Often"],
  },
];

const ADHD = () => {
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
      navigate("/ACES-MHS/adhd-result", { state: { score } });
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
          Rate yourself by taking this ADHD assessment
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

        <div className="w-9/12 mb-6">
          <button
            onClick={() => setIsKnowledgeBoardOpen(!isKnowledgeBoardOpen)}
            className="w-full bg-blue-600 text-white rounded-t-3xl p-4 flex items-center justify-between hover:bg-blue-700 transition-colors duration-200"
          >
            <div className="flex items-center">
              <div className="bg-blue-800 text-white text-sm inline-flex items-center justify-center px-2 py-1 rounded-full">
                Knowledge board
              </div>
            </div>
            {isKnowledgeBoardOpen ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </button>
          
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isKnowledgeBoardOpen ? "max-h-48" : "max-h-0"
            }`}
          >
            <div className="bg-blue-600 text-white rounded-b-3xl p-4">
              <p className="text-center text-sm">
                ADHD is a neurodevelopmental disorder characterized by patterns of
                inattention, hyperactivity, and impulsivity that interfere with
                functioning or development. Symptoms may include difficulty
                focusing, forgetfulness, excessive talking, fidgeting, and
                difficulty organizing tasks. ADHD can affect children and persist
                into adulthood, impacting academic, occupational, and social
                functioning.
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

export default ADHD;
