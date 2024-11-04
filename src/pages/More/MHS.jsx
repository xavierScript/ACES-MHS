import React from 'react';
import MTT from '../../components/MTT';
import { NavLink } from 'react-router-dom';

function MHS() {
  return (
    <div>
      <section className="px-4 py-10 mt-20 flex flex-col items-center bg-white text-center">
        <h2 className="text-xl font-semibold text-gray-800 leading-tight">
          ACES Mental Health Club
        </h2>
        <p className="mt-4 text-gray-600 text-sm max-w-lg">
          At ACES Mental Health Club, we believe that mental wellness is an essential part of academic and personal success. Our mission is to provide resources, peer support, and professional counseling to help students navigate the unique challenges of tech-related careers and studies.
          <br/><br/>
          We foster an inclusive environment where every member feels heard, valued, and encouraged to prioritize their mental health. Through workshops, wellness sessions, and community gatherings, we aim to build resilience, promote balance, and inspire students to achieve their goals without compromising well-being.
          <br/><br/>
          Together, we strive to create a culture that acknowledges both achievements and struggles, reminding each individual that they are never alone on their journey.
        </p>
      </section>

      <section className="w-11/12 flex flex-col mx-auto gap-4 mt-8">
        <h2 className="text-xl font-semibold text-center text-gray-800 leading-tight">
          Meet The Team
        </h2>
        <MTT />
      </section>

      <section className="py-8 bg-white text-center">
        <p className="text-base font-normal text-gray-800 mb-4">
          Be brave enough to start a conversation that matters.
        </p>
        <NavLink
          to="/register"
          className="bg-black text-white px-5 py-2 rounded-md text-base font-medium shadow hover:bg-[#1f23c4] transition-colors duration-200"
        >
          Talk to Us
        </NavLink>
      </section>
    </div>
  );
}

export default MHS;
