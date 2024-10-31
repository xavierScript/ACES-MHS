import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Github, Linkedin, Twitter } from "lucide-react";
import Team from "../assets/team1.png";
import Sandra from "../assets/sandra.png";
import Peter from "../assets/peter.png";
import Catherine from "../assets/catherine.png";
import Inuifak from "../assets/inuifak.png";
import Eva from "../assets/eva.png";

const TeamMember = ({ name, position, image, social = {} }) => (
  <div className="mx-2 group">
    <div className="relative overflow-hidden rounded-xl transition-transform duration-300 group-hover:-translate-y-2">
      <div className="relative h-[280px] w-full overflow-hidden items-center justify-center flex">
        <img
          src={image}
          alt={name}
          className="h-[300px] w-[200px] justify-center items-center object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
        <div className="flex justify-center space-x-3">
          {social.linkedin && (
            <a href={social.linkedin} className="text-white hover:text-blue-400 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          )}
          {social.twitter && (
            <a href={social.twitter} className="text-white hover:text-blue-400 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          )}
          {social.github && (
            <a href={social.github} className="text-white hover:text-blue-400 transition-colors">
              <Github className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
    
    <div className="mt-4 text-center">
      <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover:text-blue-600">
        {name}
      </h3>
      <p className="text-sm font-medium text-gray-500">{position}</p>
    </div>
  </div>
);

function MTT() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const teamMembers = [
    {
      name: "Catherine",
      position: "MHS Writer",
      image: Catherine,
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "John Deo",
      position: "MHS Designer",
      image: Team,
      social: {
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Peter",
      position: "MHS Designer",
      image: Peter,
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Eva",
      position: "ACES Vice President",
      image: Eva,
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Sandra",
      position: "ACES Asst. SEC GEN",
      image: Sandra,
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Inuifak",
      position: "ACES Director of Welfare",
      image: Inuifak,
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          customTransition="all 500ms ease"
          transitionDuration={1000}
          containerClass="pb-12"
          dotListClass="custom-dot-list-style bottom-0"
          itemClass="px-3"
          arrows={false}
        >
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default MTT;