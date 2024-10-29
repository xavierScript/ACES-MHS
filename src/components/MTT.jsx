import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Team from "../assets/team1.png";

function MTT() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const teamMembers = [
    { name: "John Doe", position: "Software Engineer", image: Team },
    { name: "Jane Smith", position: "Product Designer", image: Team },
    { name: "Alice Johnson", position: "Project Manager", image: Team },
    { name: "Bob Brown", position: "Data Scientist", image: Team },
  ];

  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={false}
      responsive={responsive}
      ssr={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      customTransition="transform 500ms ease-in-out"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["desktop","tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-10-px" // reduced padding
    >
      {teamMembers.map((member, index) => (
        <div key={index} className="mx-2 p-0 text-center"> 
          <img
            src={member.image}
            alt={member.name}
            className="mx-auto rounded-sm w-[180px] h-[280px] md:w-40 md:h-40 object-cover shadow-lg"
          />
          <h3 className="mt-2 text-lg font-semibold text-gray-800">{member.name}</h3>
          <p className="text-sm text-gray-500">{member.position}</p>
        </div>
      ))}
    </Carousel>
  );
}

export default MTT;