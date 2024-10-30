// Result.js
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import PageNav from "../components/PageNav";
import Footer from "../components/Footer";

const MhtResult = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { score } = location.state || { score: 0 };

  // Interpret the score range for ADHD assessment
  const getResultMessage = () => {
    if (score <= 5) {
      return "Your responses suggest that ADHD symptoms are rarely present.";
    } else if (score <= 10) {
      return "You may occasionally experience symptoms associated with ADHD.";
    } else if (score <= 15) {
      return "Your responses indicate that you sometimes experience symptoms of ADHD. It may be worth exploring further.";
    } else if (score <= 20) {
      return "Your responses suggest that you often experience ADHD-related symptoms. Consider discussing this with a professional.";
    } else {
      return "You may frequently experience symptoms associated with ADHD. Professional assessment may be beneficial.";
    }
  };

  return (
    <>
      <PageNav />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6 font-poppins">
        <h1 className="text-3xl font-bold mb-4">Mental Health Test</h1>
        <p className="text-lg mb-8 text-center">
          Congratulations! You have completed the ADHD assessment. 🎉
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

          <Link to="/ACES-MHS/adhd">
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

export default MhtResult;
