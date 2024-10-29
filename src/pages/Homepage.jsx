import Footer from "../components/Footer";
import PageNav from "../components/PageNav";
import MTT from "../components/MTT";
import { NavLink } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <PageNav />
      <section className="px-6 py-16 text-center mx-auto bg-white md:px-12 lg:px-24">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
          Empowering <span className="text-[#272EE5]">Minds</span> in Tech:{" "}
          <br className="hidden md:block" />
          Supporting <span className="text-[#272EE5]">
            Mental Health
          </span> in <br /> Computer Engineering
        </h1>

        <p className="text-gray-600 text-center text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Connecting students and professionals with resources, counseling, and
          a community that understands the unique pressures of the tech
          industry.
        </p>

        <a
          href="#"
          className="inline-block px-6 py-3 bg-[#272EE5] text-white font-medium text-lg rounded-lg shadow-md hover:bg-[#1e22b5] transition-colors duration-200"
        >
          Let’s Talk
        </a>
      </section>
      <section className="py-10 bg-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          Take a trivia quiz
        </h2>
        <ul className="flex flex-col lg:flex-row lg:flex-wrap justify-center gap-4 mx-auto w-3/4 max-w-2xl">
          <li className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg shadow-sm hover:bg-gray-300 hover:scale-105 transition-transform duration-200 cursor-pointer text-center">
            ADHD
          </li>
          <li className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg shadow-sm hover:bg-gray-300 hover:scale-105 transition-transform duration-200 cursor-pointer text-center">
            Anxiety
          </li>
          <li className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg shadow-sm hover:bg-gray-300 hover:scale-105 transition-transform duration-200 cursor-pointer text-center">
            Bipolar
          </li>
          <li className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg shadow-sm hover:bg-gray-300 hover:scale-105 transition-transform duration-200 cursor-pointer text-center">
            Depression
          </li>
          <li className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg shadow-sm hover:bg-gray-300 hover:scale-105 transition-transform duration-200 cursor-pointer text-center">
            PTSD
          </li>
        </ul>
      </section>

      <section className="px-6 py-12 mt-24 flex flex-col justify-between items-center bg-white text-center md:text-left md:px-12 lg:px-24">
        <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 leading-tight">
          ACES Mental Health Club
        </h2>
        <p className="mt-6 text-gray-600 text-md md:text-lg max-w-3xl mx-auto md:mx-0">
          At ACES Mental Health Club, we believe that mental wellness is an
          essential part of academic and personal success, especially in the
          demanding field of Computer Engineering. Our mission is to provide
          resources, peer support, and professional counseling that help
          students navigate the unique challenges of tech-related careers and
          studies. We foster an inclusive environment where every member feels
          heard, valued, and encouraged to prioritize their mental health.
          Through workshops, wellness sessions, and community gatherings, we aim
          to build resilience, promote balance, and inspire students to achieve
          their goals without compromising well-being. Together, we strive to
          create a culture that acknowledges both the achievements and the
          struggles, reminding each individual that they are never alone on
          their journey.
        </p>
      </section>

      <section className="w-3/4 flex flex-col mx-auto justify-between gap-2">
        <h2 className="mt-4 text-center text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 leading-tight">
          Meet The Team
        </h2>

        <MTT />
      </section>

      <section className="py-16 bg-white text-center">
        <p className="text-lg md:text-md font-normal text-gray-800 mb-6">
          Be brave enough to start a conversation that matters.
        </p>

        <NavLink
          to="/register"
          className="bg-black text-white px-6 py-3 rounded-md text-lg font-medium shadow-lg hover:bg-[#1f23c4] transition-colors duration-300"
        >
          Talk to Us
        </NavLink>
      </section>

      <Footer />
    </div>
  );
}

export default Homepage;
