// components/Carousel.tsx
"use client";

import React from "react";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css"; // Import Flickity styles
import Image from "next/image";
import Button from "./Button";

const flickityOptions = {
  cellAlign: "left",
  contain: true,
  autoPlay: true,
  prevNextButtons: false,
  pageDots: false,
};

interface CarouselProps {
    items: Array<{ id: number; imgSrc: string; altText: string; name: string }>; // Define a better structure for items
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  return (
    <Flickity options={flickityOptions} className="button-slider carousel">
      {items.map(({ id, imgSrc, altText, name }) => (
        <div className="carousel-cell" key={id}>
          <Button classnames="slider-btn">
            <Image src={imgSrc} width={56} height={56} alt={altText} />
            <span>{name}</span>
          </Button>
        </div>
      ))}
    </Flickity>
  );
};

export default Carousel;
