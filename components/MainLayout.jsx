"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import CardPicture from "./CardPicture";
import ArrowRight from "../public/imgs/ArrowRight";
import ArrowLeft from "../public/imgs/ArrowLeft";

const MainLayout = ({}) => {
  // Define the data of four cards
  const cards = [
    {
      id: 1,
      background: "bg-card1",
      backgroundImage:
        "linear-gradient(to right, rgba(56, 193, 165, 1),rgba(8, 145, 213, 1)",
      title: "Introduction to programming ",
      tagName: ["Beginner"],
      content:
        "This course converts the most basic concepts in programming using Solidity as an example.",
      time: "36 Hour",
      courses: "5 Course",
      process: true,
    },
    {
      id: 2,
      background: "bg-card2",
      title: "Moonshot 2023 Summer Hackathon ",
      tagName: ["AllTracks", "Solidity", "ZK"],
      table: {
        Signup: "4/15 - 6/15",
        Event: "6/15 - 7/15",
        Grant_size: "200k",
      },
    },
    {
      id: 3,
      background: "bg-card3",
      backgroundImage:
        "linear-gradient(to right, rgba(217, 227, 19, 1), rgba(60, 188, 52, 1))",
      title: "Web 3.0 Programming Basics",
      tagName: ["Beginner"],
      content:
        "Basic concepts in programming of Solidity. Topics include: variables, functions, flow control, error handling, data structure",
      time: "36 Hour",
      courses: "5 Course",
    },
    {
      id: 4,
      background: "bg-card4",
      backgroundImage:
        "linear-gradient(to right, rgba(224, 173, 56, 1), rgba(235, 62, 28, 1))",
      backgroundImageUrl: 'url("/imgs/bitcoin.svg")',
      title: "What is Bitcoin",
      time: "36 Hour",
    },
  ];

  const fourthCard = cards[3];
  //console.log(fourthCard, "check the fourth card");
  const slidesToShow = 2;

  const NextArrow = (props) => {
    const { className, onClick, currentSlide, slideCount } = props;
    return (
      <>
        {currentSlide !== slideCount - slidesToShow && (
          <div className="cover">
            <div className="right-cover"></div>
            <div className={className} onClick={onClick}>
              <ArrowRight />
            </div>
          </div>
        )}
      </>
    );
  };

  const PrevArrow = (props) => {
    const { className, onClick, currentSlide } = props;
    return (
      <>
        {currentSlide !== 0 && (
          <div className="cover">
            <div className="left-cover"></div>
            <div className={className} onClick={onClick}>
              <ArrowLeft />
            </div>
          </div>
        )}
      </>
    );
  };

  // setting the carousel slider
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-bkg min-h-screen p-[124px] ">
      <main className=" m-auto ">
        <Slider {...settings}>
          {cards.slice(0, 3).map((card) => (
            <div
              className={`${card.background} bg-no-repeat object-cover min-w-[416px] mr-20px`}
              key={card.id}
            >
              <Card card={card} />
            </div>
          ))}
          <div className={`${fourthCard.background} bg-no-repeat`}>
            <CardPicture card={fourthCard} />
          </div>
        </Slider>
      </main>
    </div>
  );
};

export default MainLayout;
