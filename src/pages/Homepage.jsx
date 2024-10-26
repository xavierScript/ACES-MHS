import Footer from "../components/Footer";
import PageNav from "../components/PageNav";

function Homepage() {
  return (
    <div>
      <PageNav />
      <section className="px-6 py-16 text-center  bg-white md:px-12 lg:px-24">
  <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
    Empowering <span className="text-[#272EE5]">Minds</span> in Tech: <br className="hidden md:block" />
    Supporting <span className="text-[#272EE5]">Mental Health</span> in <br /> Computer Engineering
  </h1>

  <p className="text-gray-600 text-center text-lg md:text-xl max-w-2xl mx-auto md:mx-0 mb-8">
    Connecting students and professionals with resources, counseling, and a community that understands the unique pressures of the tech industry.
  </p>

  <a
    href="#"
    className="inline-block px-6 py-3 bg-[#272EE5] text-white font-medium text-lg rounded-lg shadow-md hover:bg-[#1e22b5] transition-colors duration-200"
  >
    Let’s Talk
  </a>
</section>
<section>
<ul className="flex flex-col lg:flex-row lg:flex-wrap gap-3 mx-auto mt-8 max-w-xl">
  <li className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-300 transition-colors duration-200 cursor-pointer text-center">
    ADHD
  </li>
  <li className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-300 transition-colors duration-200 cursor-pointer text-center">
    Anxiety
  </li>
  <li className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-300 transition-colors duration-200 cursor-pointer text-center">
    Bipolar
  </li>
  <li className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-300 transition-colors duration-200 cursor-pointer text-center">
    Depression
  </li>
  <li className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-300 transition-colors duration-200 cursor-pointer text-center">
    PTSD
  </li>
</ul>

</section>


     
      <Footer />
    </div>
  );
}

export default Homepage;
