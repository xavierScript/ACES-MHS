// DepressionResult.js
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import PageNav from "../components/PageNav";
import Footer from "../components/Footer";
import { Depression_Assessment } from "../data/Depression";

const DepressionResult = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { score } = location.state || { score: 0 };

  // Interpret the score range for depression assessment

  return (
    <>
      <PageNav />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6 font-poppins">
        <h1 className="text-3xl font-bold mb-4">Mental Health Test</h1>
        <p className="text-lg mb-8 text-center">
          You have completed the depression self-assessment. 🎉
        </p>

        <p className="text-xl mb-2">Comment:</p>
        <div className="text-xl text-center font-bold mb-8">
          <p>{Depression_Assessment(score)}</p>
        </div>

        <div className="flex space-x-4">
          <Link to="/ACES-MHS/">
            <button
              onClick={() => navigate("/")}
              className="bg-gray-200 text-gray-700 py-2 px-6 rounded-md shadow hover:bg-gray-300 transition"
            >
              End
            </button>
          </Link>

          <Link to="/ACES-MHS/depression">
            <button
              onClick={() => navigate("/")}
              className="bg-blue-600 text-white py-2 px-6 rounded-md shadow hover:bg-blue-700 transition"
            >
              Retake test
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DepressionResult;
