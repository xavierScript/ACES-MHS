import React from "react";
import Facebook from "../assets/facebook_icon.png";
import Instagram from "../assets/instagram_icon.png";
import Twitter from "../assets/twitter_icon.png";
import Logo from "../assets/logo.png";
import LocationLogo from "../assets/location_icon.png";
import PhoneLogo from "../assets/phone_icon.png";
import GmailLogo from "../assets/gmail_icon.png";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and About Section */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2 mb-4">
            <img src={Logo} alt="ACES MHS Logo" className="w-10 h-10" />
            <h4 className="text-xl font-bold">ACES MHS</h4>
          </div>
          <p className="text-sm font-light leading-5 text-center md:text-left">
            ACES MHS is here to be your ally on the journey. Whether you need
            someone to talk to, resources to manage stress, or guidance on
            building a healthy life-work balance, we’re here for you. Because
            here, <span className="font-bold">"Engineering Minds Find Support."</span>
          </p>
          <div className="flex gap-4 mt-4">
            <img src={Twitter} alt="Twitter" className="w-6 h-6" />
            <img src={Instagram} alt="Instagram" className="w-6 h-6" />
            <img src={Facebook} alt="Facebook" className="w-6 h-6" />
          </div>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h4 className="text-xl font-bold text-turquoiseBlue mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm font-light">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#contact" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="text-center md:text-left">
          <h4 className="text-xl font-bold text-turquoiseBlue mb-4">Get In Touch</h4>
          <div className="space-y-3 text-sm font-light">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <img src={LocationLogo} alt="Location Icon" className="w-5 h-5" />
              <p>Department of Computer Engineering, University of Benin, Edo State Nigeria.</p>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <img src={GmailLogo} alt="Gmail Icon" className="w-5 h-5" />
              <p>Email: info@acesmhs.com</p>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <img src={PhoneLogo} alt="Phone Icon" className="w-5 h-5" />
              <p>+234 901 234 5678</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto mt-10 text-center">
        <p className="text-lightGray text-sm font-normal">© ACES MHS 2024</p>
      </div>
    </footer>
  );
}

export default Footer;
