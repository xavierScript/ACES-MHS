import React from 'react';
import { Link } from 'react-router-dom';

function TakeTest() {
  return (
    <section className="py-8 px-4 bg-white text-center">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Take a Mental Health Test
      </h2>
      <ul className="flex flex-col gap-3 mx-auto w-full max-w-md">
        <Link to="/ACES-MHS/adhd">
          <li className="bg-gray-100 text-gray-700 py-3 rounded-md shadow hover:bg-gray-200 hover:scale-105 transition-transform duration-150 cursor-pointer">
            ADHD
          </li>
        </Link>
        <Link to="/ACES-MHS/anxiety">
          <li className="bg-gray-100 text-gray-700 py-3 rounded-md shadow hover:bg-gray-200 hover:scale-105 transition-transform duration-150 cursor-pointer">
            Anxiety
          </li>
        </Link>
        <Link to="/ACES-MHS/bipolar">
          <li className="bg-gray-100 text-gray-700 py-3 rounded-md shadow hover:bg-gray-200 hover:scale-105 transition-transform duration-150 cursor-pointer">
            Bipolar
          </li>
        </Link>
        <Link to="/ACES-MHS/depression">
          <li className="bg-gray-100 text-gray-700 py-3 rounded-md shadow hover:bg-gray-200 hover:scale-105 transition-transform duration-150 cursor-pointer">
            Depression
          </li>
        </Link>
        <Link to="/ACES-MHS/ptsd">
          <li className="bg-gray-100 text-gray-700 py-3 rounded-md shadow hover:bg-gray-200 hover:scale-105 transition-transform duration-150 cursor-pointer">
            PTSD
          </li>
        </Link>
      </ul>
    </section>
  );
}

export default TakeTest;
