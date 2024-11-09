"use client";
import React, { useState, useEffect } from "react";
import "./Slider.css";
import CandidateCard from "../CandidateCard";
import Button from "../Button";

interface SliderProps {
  totalSlides?: number;
  autoSlideInterval?: number;
}

const Slider: React.FC<SliderProps> = ({
  totalSlides = 8,
  // autoSlideInterval = 3000,
}) => {
  const isMobile = window.innerWidth <= 768;
  const isTablet =  window.innerWidth < 1080;
  const [active, setActive] = useState(1);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  useEffect(() => {
    loadShow();
  }, [active]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     nextSlide();
  //   }, autoSlideInterval);

  //   return () => clearInterval(interval);
  // }, [active, autoSlideInterval]);

  const loadShow = () => {
    const items = document.querySelectorAll(".slider .item");

    items.forEach((item) => {
      const element = item as HTMLElement;
      element.style.transform = "";
      element.style.zIndex = "";
      element.style.backgroundColor = "#EDFCFF";
      element.style.opacity = "";
      element.classList.remove("active");
    });

    const activeElement = items[active] as HTMLElement;
    activeElement.style.transform = "hidden";
    activeElement.style.zIndex = "1";
    activeElement.style.backgroundColor = "#EDFCFF";
    activeElement.classList.add("active");
    activeElement.style.opacity = "1";

    Array.from(items)
      .slice(active + 1)
      .map((item, index) => {
        const element = item as HTMLElement;
        const stt = index + 1;
        switch (true) {
          case isMobile:
            element.style.transform = `translateX(${30 * stt}px) scale(${
              1 - 0.09 * stt
            })`;
            break;
          case isTablet:
            element.style.transform = `translateX(${50 * stt}px) scale(${
              1 - 0.09 * stt
            })`;
            break;
          default:
            element.style.transform = `translateX(${120 * stt}px) scale(${
              1 - 0.09 * stt
            })`;
            break;
        }

        element.style.background = "#EDFCFF";
        element.style.zIndex = "0";
        element.style.backgroundColor = "#EDFCFF";
        element.style.opacity = stt > 1 ? "0" : "1";
      });

    Array.from(items)
      .slice(0, active)
      .reverse()
      .map((item, index) => {
        const element = item as HTMLElement;
        const stt = index + 1;
        switch (true) {
          case isMobile:
            element.style.transform = `translateX(${-30 * stt}px) scale(${
              1 - 0.09 * stt
            })`;
            break;
          case isTablet:
            element.style.transform = `translateX(${-50 * stt}px) scale(${
              1 - 0.09 * stt
            })`;
            break;
          default:
            element.style.transform = `translateX(${-120 * stt}px) scale(${
              1 - 0.09 * stt
            })`;
            break;
        }

        element.style.background = "#EDFCFF";
        element.style.zIndex = "0";
        element.style.backgroundColor = "#EDFCFF";
        element.style.opacity = stt > 1 ? "0" : "1";
      });
  };

  const nextSlide = () => {
    setActive((prevActive) =>
      prevActive + 1 < totalSlides ? prevActive + 1 : prevActive
    );
  };

  const prevSlide = () => {
    setActive((prevActive) =>
      prevActive - 1 >= 0 ? prevActive - 1 : prevActive
    );
  };

  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (window.innerWidth > 768 || !touchStart) return;
    const touchEnd = e.touches[0].clientX;
    const touchDiff = touchStart - touchEnd;

    // If swipe distance is more than 50px, navigate slides
    if (touchDiff > 50) {
      nextSlide();
      setTouchStart(null);
    } else if (touchDiff < -50) {
      prevSlide();
      setTouchStart(null);
    }
  };

  return (
    <>
      <div
        className="slider"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {Array.from({ length: totalSlides }).map((_, i) => (
          <div key={i} className="item">
            <CandidateCard
              tooltip={active === i ? `Tooltip for slide ${i + 1}` : ""}
              src="/images/profile-1.png"
              name="Abhishek Gupta"
              title="마케팅"
              experience="2년"
              skills={[
                "마케팅 콘텐츠 제작",
                "인스타그램 관리",
                "트위터 관리",
                "블로그 글 작성",
              ]}
            />
          </div>
        ))}
        <Button id="next" classnames="md:block hidden" onClick={nextSlide}>
          <svg fill="#ffffff" height="32px" width="32px" viewBox="0 0 330 330">
            <path
              d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 
               c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 
               C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 
               C255,161.018,253.42,157.202,250.606,154.389z"
            />
          </svg>
        </Button>
        <Button id="prev" classnames="md:block hidden" onClick={prevSlide}>
          <svg
            fill="#ffffff"
            height="32px"
            width="32px"
            viewBox="0 0 330.002 330.002"
          >
            <path
              d="M233.25,306.001L127.5,165.005L233.25,24.001c4.971-6.628,3.627-16.03-3-21c-6.627-4.971-16.03-3.626-21,3 
               L96.75,156.005c-4,5.333-4,12.667,0,18l112.5,149.996c2.947,3.93,7.451,6.001,12.012,6.001c3.131,0,6.29-0.978,8.988-3.001 
               C236.878,322.03,238.221,312.628,233.25,306.001z"
            />
          </svg>
        </Button>
      </div>
    </>
  );
};

export default Slider;
