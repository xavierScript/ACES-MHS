// DepressionResult.js
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import PageNav from "../components/PageNav";
import Footer from "../components/Footer";

const DepressionResult = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { score } = location.state || { score: 0 };

  // Interpret the score range for depression assessment
  const getResultMessage = () => {
    if (score <= 4) {
      return "Your responses suggest minimal signs of depression. However, if you have any concerns, consider speaking with a healthcare provider.";
    } else if (score <= 9) {
      return "Your responses indicate mild symptoms of depression. Monitoring your mood and possibly consulting a professional might be beneficial.";
    } else if (score <= 14) {
      return "You may be experiencing moderate symptoms associated with depression. Consider reaching out to a healthcare provider for further evaluation.";
    } else if (score <= 19) {
      return "Your responses suggest moderately severe symptoms of depression. It's recommended to consult a mental health professional.";
    } else {
      return "Your responses indicate severe symptoms of depression. Seeking immediate help from a mental health professional is strongly advised.";
    }
  };

  return (
    <>
      <PageNav />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6 font-poppins">
        <h1 className="text-3xl font-bold mb-4">Depression Self-Assessment</h1>
        <p className="text-lg mb-8 text-center">
          You have completed the depression self-assessment. 🎉
        </p>

        <p className="text-xl mb-2">Comment:</p>
        <div className="text-xl text-center font-bold mb-8">
          <p>{getResultMessage()}</p>
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
