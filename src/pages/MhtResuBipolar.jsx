// BipolarResult.js
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import PageNav from "../components/PageNav";
import Footer from "../components/Footer";

const BipolarResult = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { score } = location.state || { score: 0 };

  // Interpret the score range for bipolar assessment
  const getResultMessage = () => {
    if (score <= 3) {
      return "Your responses suggest minimal symptoms of bipolar disorder. However, if you have concerns, consider consulting a healthcare provider.";
    } else if (score <= 6) {
      return "Your responses indicate mild symptoms that may be associated with bipolar disorder. Monitoring symptoms and consulting a professional could be beneficial.";
    } else if (score <= 9) {
      return "You may be experiencing moderate symptoms associated with bipolar disorder. Consider reaching out to a healthcare professional for further evaluation.";
    } else {
      return "Your responses suggest symptoms that may be associated with bipolar disorder. It is recommended to consult a mental health professional for assessment.";
    }
  };

  return (
    <>
      <PageNav />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6 font-poppins">
        <h1 className="text-3xl font-bold mb-4">Bipolar Self-Assessment</h1>
        <p className="text-lg mb-8 text-center">
          You have completed the bipolar self-assessment. 🎉
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

          <Link to="/ACES-MHS/bipolar">
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

export default BipolarResult;
