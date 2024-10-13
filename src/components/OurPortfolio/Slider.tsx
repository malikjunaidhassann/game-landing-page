"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dragon from "../../app/assest/dragon.png";
import SliderCard from "./SliderCard";

const data = [
  {
    name: "Sandbox",
    description:
      "A Professional NBA player partnered with us on the creation of 3D basketball courts, coolmetaverse avatars, and NFTs. We helped in brainstorming ideas and handled all the engineeringand artwork for this basketball mini-game.",
    image: dragon,
  },
  {
    name: "Sandbox",
    description:
      "A Professional NBA player partnered with us on the creation of 3D basketball courts, coolmetaverse avatars, and NFTs. We helped in brainstorming ideas and handled all the engineeringand artwork for this basketball mini-game.",
    image: dragon,
  },
  ,
  {
    name: "Sandbox",
    description:
      "A Professional NBA player partnered with us on the creation of 3D basketball courts, coolmetaverse avatars, and NFTs. We helped in brainstorming ideas and handled all the engineeringand artwork for this basketball mini-game.",
    image: dragon,
  },
  {
    name: "Sandbox",
    description:
      "A Professional NBA player partnered with us on the creation of 3D basketball courts, coolmetaverse avatars, and NFTs. We helped in brainstorming ideas and handled all the engineeringand artwork for this basketball mini-game.",
    image: dragon,
  },
  {
    name: "Sandbox",
    description:
      "A Professional NBA player partnered with us on the creation of 3D basketball courts, coolmetaverse avatars, and NFTs. We helped in brainstorming ideas and handled all the engineeringand artwork for this basketball mini-game.",
    image: dragon,
  },
  {
    name: "Sandbox",
    description:
      "A Professional NBA player partnered with us on the creation of 3D basketball courts, coolmetaverse avatars, and NFTs. We helped in brainstorming ideas and handled all the engineeringand artwork for this basketball mini-game.",
    image: dragon,
  },
];

function CustomSlider() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
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
    <div className="slider-container">
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index}>
            <SliderCard data={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CustomSlider;
