"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { DataItem, SliderItem, InformationItem } from "@/types";
import Carousel from "./CardSlider";
import Slider from "./Slider/Slider";
import { Tooltip } from "./Tooltip";

interface HeroSectionProps {
  data?: DataItem[];
  sliderData?: SliderItem[];
  information?: InformationItem[];
}

const HeroSection: React.FC<HeroSectionProps> = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [sliderData, setSliderData] = useState<SliderItem[]>([]);
  const [information, setInformation] = useState<InformationItem[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/data");
        if (!res.ok) throw new Error(`Error: ${res.status}`);
        const { mockData, sliderData, information } = await res.json();
        setData(mockData);
        setSliderData(sliderData);
        setInformation(information);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="hero-section relative">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 pe-0">
            <div className="hero-content">
              <Tooltip
                message="풀타임, 파트타임"
                color="#40E2E8"
                position="top"
                icon=""
                bgColor="bg-light-blue"
              />

              <h1 className="hero-title animate-fadeInUp">
                최고의 실력을 가진
                <span className="inline md:block">
                  외국인 인재를 찾고 계신가요?
                </span>
              </h1>

              <p className="hero-subtitle animate-fadeInUp">
                법률 및 인사관리 부담없이{" "}
                <span className="inline md:block">
                  1주일 이내에 원격으로 채용해보세요.{" "}
                </span>
              </p>
              <DesktopInfoList data={data} />
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-6 p-md-0">
            <Slider />
          </div>

          {/* Mobile Information List */}
          <MobileInfoList information={information} />
        </div>
      </div>

      {/* Slider Settings */}
      <DesktopCarousel sliderData={sliderData} />
    </section>
  );
};

// Desktop Information List Component
const DesktopInfoList: React.FC<{ data?: DataItem[] }> = ({ data = [] }) => (
  <div className="md:block hidden">
    <p className="content mt-md-4 mb-md-5 my-3 animate-fadeInUp">
      개발자가 필요하신가요?
    </p>
    <ul className="list-unstyled md:flex align-items-baseline gap-4 animate-fadeIn">
      {data.map((item) => (
        <li key={item.id} className="list">
          <p className="list-heading mb-0">{item.heading}</p>
          <p className="list-subheading me-2">{item.subHeading}</p>
        </li>
      ))}
    </ul>
  </div>
);

// Mobile Information List Component
const MobileInfoList: React.FC<{ information?: InformationItem[] }> = ({
  information = [],
}) => (
  <div className="md:hidden block">
    <ul className="list-unstyled information-list">
      {information.map((item) => (
        <li key={item.id} className="flex items-center gap-2 mb-2">
          <Image src={item.src} width={20} height={20} alt={item.name} />
          <span>{item.name}</span>
        </li>
      ))}
    </ul>
    <p className="content animate-fadeInUp">개발자가 필요하신가요?</p>
  </div>
);

// Desktop Carousel Component
const DesktopCarousel: React.FC<{ sliderData?: SliderItem[] }> = ({
  sliderData = [],
}) => (
  <div className="slider-settings md:flex hidden w-full">
    <div className="slider-container">
      <Carousel items={sliderData} />
    </div>
  </div>
);

export default HeroSection;
