import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import PageNav from './PageNav';

const Results = () => {
  const location = useLocation();
  const { answers } = location.state || { answers: [] };

  const questions = [
    {
      question: "Mental illness is rare.",
      correctAnswer: "False",
    },
    {
      question: "Mental illness can be cured through sheer willpower.",
      correctAnswer: "False",
    },
    {
      question: "Talking about mental illness makes it worse.",
      correctAnswer: "False",
    },
    {
      question: "You can only have one mental health disorder at a time.",
      correctAnswer: "False",
    },
    {
      question: "Mental illness is more common than cancer or diabetes.",
      correctAnswer: "True",
    },
    {
      question: "People with mental illness are violent and unpredictable.",
      correctAnswer: "False",
    },
    {
      question: "Mental health is just as important as physical health.",
      correctAnswer: "True",
    },
    {
      question: "Stress is always bad for you.",
      correctAnswer: "False",
    },
    {
      question: "Short-term stress can be helpful.",
      correctAnswer: "True",
    },
    {
      question:
        "Long-term stress can lead to health problems like heart disease.",
      correctAnswer: "True",
    },
    {
      question:
        "Self-care is only for people who are struggling with mental health issues.",
      correctAnswer: "False",
    },
    {
      question: "Getting enough sleep is part of self-care.",
      correctAnswer: "True",
    },
    {
      question: "Setting boundaries is a form of self-care.",
      correctAnswer: "True",
    },
    {
      question:
        "Anxiety disorders are the most common mental health disorders in the world.",
      correctAnswer: "True",
    },
    {
      question: "Obsessive-Compulsive Disorder (OCD) only affects adults.",
      correctAnswer: "False",
    },
    {
      question:
        "PTSD can occur after experiencing or witnessing a traumatic event.",
      correctAnswer: "True",
    },
    {
      question: "Gratitude can reduce symptoms of depression.",
      correctAnswer: "True",
    },
  ];

  const correctAnswersCount = answers.reduce((count, answer, index) => {
    return answer === questions[index].correctAnswer ? count + 1 : count;
  }, 0);

  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className='text-center mb-8'>
      <PageNav />
      <h1 className='font-[500] text-2xl mb-4'>Mental Health Trivia</h1>
      <p>Congratulations you have completed the trivia.</p>
      <p>Your score:</p>
      <div>
        <span className='text-[100px]'>{correctAnswersCount}</span>
        <span className='text-[50px]'>/</span>
        <span className='text-[50px]'>{questions.length}</span>
      </div>
      <h2>
        You answered {correctAnswersCount} out of {questions.length} questions
        correctly.
      </h2>

      {showDetails ? (
        <ul className='bg-slate-100 rounded-md p-4 grid grid-cols-3 md:grid-cols-4 m-8 text-sm text-left'>
          {questions.map((question, index) => (
            <li className='p-2' key={index}>
              <h3>
                &#40;{index + 1}&#41; {question.question}
              </h3>
              <p>Your answer: {answers[index]}</p>
              <p>Correct answer: {question.correctAnswer}</p>
              <p
                className={
                  answers[index] === question.correctAnswer
                    ? "correct"
                    : "incorrect"
                }
              >
                {/* {answers[index] === question.correctAnswer
                  ? "✅ Correct!"
                  : "❌ Wrong!"} */}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Click the button below to view your detailed results.</p>
      )}

      <button
        onClick={() => setShowDetails(!showDetails)}
        className='bg-blue-500 p-2 rounded-md mt-4'
      >
        {showDetails ? "Hide Results" : "View Detailed Results"}
      </button>

      <br />
      <br />

      <Link className='bg-slate-200 p-2 rounded-md' to='/ACES-MHS/'>
        End
      </Link>
    </div>
  );
};

export default Results;
