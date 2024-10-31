import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageNav from '../components/PageNav';

const TriviaPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [feedback, setFeedback] = useState(null);
  const navigate = useNavigate();

  const questions = [
    {
      question: "Mental illness is rare.",
      options: ["True", "False"],
      correctAnswer: "False",
      fact: "Mental health conditions affect 1 in 5 adults in the U.S. each year.",
    },
    {
      question: "Mental illness can be cured through sheer willpower.",
      options: ["True", "False"],
      correctAnswer: "False",
      fact: "Mental illnesses often require medical treatment, therapy, and support for effective management.",
    },
    {
      question: "Talking about mental illness makes it worse.",
      options: ["True", "False"],
      correctAnswer: "False",
      fact: "Open conversations about mental health can reduce stigma and encourage individuals to seek help.",
    },
    {
      question: "You can only have one mental health disorder at a time.",
      options: ["True", "False"],
      correctAnswer: "False",
      fact: "It is common for people to experience multiple mental health conditions, such as depression and anxiety.",
    },
    {
      question: "Mental illness is more common than cancer or diabetes.",
      options: ["True", "False"],
      correctAnswer: "True",
      fact: "Mental health disorders are widespread, affecting millions globally, surpassing some physical health conditions in prevalence.",
    },
    {
      question: "People with mental illness are violent and unpredictable.",
      options: ["True", "False"],
      correctAnswer: "False",
      fact: "Most people with mental illness are not violent; the condition itself does not cause unpredictable behavior.",
    },
    {
      question: "Mental health is just as important as physical health.",
      options: ["True", "False"],
      correctAnswer: "True",
      fact: "Mental health significantly impacts overall well-being and quality of life.",
    },
    {
      question: "Stress is always bad for you.",
      options: ["True", "False"],
      correctAnswer: "False",
      fact: "Short-term stress can boost alertness and motivation, but chronic stress can be harmful.",
    },
    {
      question: "Short-term stress can be helpful.",
      options: ["True", "False"],
      correctAnswer: "True",
      fact: "Short-term stress triggers the body’s natural 'fight or flight' response, which can be useful in challenging situations.",
    },
    {
      question:
        "Long-term stress can lead to health problems like heart disease.",
      options: ["True", "False"],
      correctAnswer: "True",
      fact: "Chronic stress is linked to serious health issues, including heart disease and weakened immune function.",
    },
    {
      question:
        "Self-care is only for people who are struggling with mental health issues.",
      options: ["True", "False"],
      correctAnswer: "False",
      fact: "Self-care is beneficial for everyone, supporting both mental and physical health.",
    },
    {
      question: "Getting enough sleep is part of self-care.",
      options: ["True", "False"],
      correctAnswer: "True",
      fact: "Adequate sleep improves mood, memory, and overall health.",
    },
    {
      question: "Setting boundaries is a form of self-care.",
      options: ["True", "False"],
      correctAnswer: "True",
      fact: "Setting boundaries helps maintain healthy relationships and reduce stress.",
    },
    {
      question:
        "Anxiety disorders are the most common mental health disorders in the world.",
      options: ["True", "False"],
      correctAnswer: "True",
      fact: "Anxiety disorders affect an estimated 264 million people globally, making them highly prevalent.",
    },
    {
      question: "Obsessive-Compulsive Disorder (OCD) only affects adults.",
      options: ["True", "False"],
      correctAnswer: "False",
      fact: "OCD can affect people of all ages, including children and teens.",
    },
    {
      question:
        "PTSD can occur after experiencing or witnessing a traumatic event.",
      options: ["True", "False"],
      correctAnswer: "True",
      fact: "PTSD is a mental health condition that can develop after traumatic events, affecting both military and civilian populations.",
    },
    {
      question: "Gratitude can reduce symptoms of depression.",
      options: ["True", "False"],
      correctAnswer: "True",
      fact: "Practicing gratitude has been shown to improve mood and reduce symptoms of depression over time.",
    },
  ];

  const handleAnswer = (option) => {
    setSelectedAnswer(option);

    const isCorrect = option === questions[currentQuestionIndex].correctAnswer;
    setFeedback(isCorrect ? "Correct!" : "Wrong!");

    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = option;
    setAnswers(updatedAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      // Move to the next question
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(answers[currentQuestionIndex + 1] || null);
      setFeedback(null);
    } else {
      navigate("/ACES-MHS/trivia-result", { state: { answers } });
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedAnswer(answers[currentQuestionIndex - 1] || null);
      setFeedback(null);
    }
  };

  return (
    <div className='flex-col justify-center m-4'>
      <PageNav />
      <div className='text-center mb-8 mt-[100px]'>
        <h1 className='font-[500] text-2xl'>Mental Health Trivia</h1>
        <p className=''>How well do you understand your mental health?</p>
        <p className=''>Take these questions to find out.</p>
      </div>

      {currentQuestionIndex < questions.length ? (
        <div className='bg-[#F7F8FE] p-4 pb-8 rounded-xl'>
          <h2 className='text-lg'>
            <span className='font-semibold font-serif mr-4'>
              Q{currentQuestionIndex + 1}.{" "}
            </span>
            {questions[currentQuestionIndex].question}
          </h2>

          <div className='flex flex-col '>
            {questions[currentQuestionIndex].options.map((option, index) => (
              <label
                key={index}
                className='checkbox-label m-2 flex items-center'
              >
                <input
                  type='checkbox'
                  name='answer'
                  value={option}
                  checked={selectedAnswer === option}
                  onChange={() => handleAnswer(option)}
                  className={`
                    hover:bg-slate-200
                  appearance-none
                  w-6 h-6
                  border-2 
                  rounded-md
                  cursor-pointer
                  ${
                    selectedAnswer === option
                      ? option === questions[currentQuestionIndex].correctAnswer
                        ? "bg-green-500 border-green-500 text-white custom-correct"
                        : "bg-red-500 border-red-500 text-white custom-incorrect"
                      : "bg-gray-300 border-gray-800"
                  }
                  ${
                    selectedAnswer === option
                      ? "flex items-center justify-center"
                      : ""
                  }
                `}
                  disabled={
                    selectedAnswer !== null && selectedAnswer !== option
                  }
                />
                <span className='pl-2'>{option}</span>
              </label>
            ))}
          </div>

          {feedback && (
            <div className='flex flex-col bg-[#272EE5] min-w-[308px] rounded-[20px] mt-8 px-4 pb-8 mb-8'>
              <div className='bg-white bg-opacity-15 text-white mx-auto px-2 mt-1 rounded-md'>
                <span className='text-sm'>Knowledge Board</span>
              </div>
              <div className='text-center text-white text-sm'>
                <p>{feedback}</p>
                <p className='text-center'>
                  {questions[currentQuestionIndex].fact}
                </p>
              </div>
            </div>
          )}

          <div className='button-group flex justify-between mx-4'>
            <button
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
              className='btn px-8 py-1 text-[#525659] bg-white rounded-md shadow-md m-2 hover:text-black'
            >
              Previous
            </button>

            <button
              onClick={handleNext}
              className='btn px-8 py-1 bg-black text-[#CFCFCF] border-none rounded-md shadow-md m-2 hover:text-white'
            >
              {currentQuestionIndex < questions.length - 1 ? "Next" : "Submit"}
            </button>
          </div>
        </div>
      ) : (
        <p>Loading results...</p>
      )}
    </div>
  );
};

export default TriviaPage;
