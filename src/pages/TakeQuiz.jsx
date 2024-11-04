import React from 'react';
import { Link } from 'react-router-dom';

function TakeQuiz() {
  return (
    <section className="py-8 px-4 bg-white text-center">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Take a Mental Health Trivia Quiz
      </h2>
      <ul className="flex flex-col gap-3 mx-auto w-full max-w-md">
       
        <Link to="/ACES-MHS/trivia">
          <li className="bg-gray-100 text-gray-700 py-3 rounded-md shadow hover:bg-gray-200 hover:scale-105 transition-transform duration-150 cursor-pointer">
            Trivia
          </li>
        </Link>
      </ul>
    </section>
  );
}

export default TakeQuiz;
