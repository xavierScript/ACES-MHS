import React from 'react';
import NotFoundImage from '../assets/notfound.png'

export default function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 text-center">

<img
        src={NotFoundImage} 
        alt="Comforting illustration"
        className="w-3/4 md:w-1/2 lg:w-1/3 mb-6 rounded-lg"
      />
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Oops! Page Not Found 😢</h1>

      <p className="text-lg text-gray-600 mb-6 max-w-md">
        It seems the page you’re looking for doesn’t exist. Remember, it’s okay to feel lost sometimes. Here are some helpful resources to guide you.
      </p>

     

      <div className="space-y-4">
        <a
          href="/ACES-MHS/test"
          className="block bg-blue-500 text-white py-2 px-6 rounded-full shadow hover:bg-blue-600 transition"
        >
          Take a Mental Health Test
        </a>
      
        <a
          href="/ACES-MHS"
          className="block text-blue-500 underline hover:text-blue-700 transition"
        >
          Go Back to Home
        </a>
      </div>
    </div>
  );
}
