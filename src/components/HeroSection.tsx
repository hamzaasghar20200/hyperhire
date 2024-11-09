"use client";
import Carousel from "./CardSlider";
import { Tooltip } from "./Tooltip";
import Slider from "./Slider/Slider";
import Image from "next/image";
const data = [
  {
    id: 1,
    heading: "평균 월 120만원",
    subHeading: "임금을 해당 국가를 기준으로 계산합니다.",
  },
  {
    id: 2,
    heading: "최대 3회 인력교체",
    subHeading: "막상 채용해보니 맞지 않아도 걱정하지 마세요.",
  },
  {
    id: 3,
    heading: "평균 3일, 최대 10일",
    subHeading: "급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.",
  },
];

const sliderData = [
  {
    id: 1,
    imgSrc: "/images/dashboard-icon.png",
    altText: "dashboard",
    name: "해외 마케팅",
  },
  {
    id: 2,
    imgSrc: "/images/image.png",
    altText: "gallery",
    name: "퍼블리셔",
  },
  {
    id: 3,
    imgSrc: "/images/box.png",
    altText: "BOX",
    name: "캐드원(제도사)",
  },
  {
    id: 4,
    imgSrc: "/images/box.png",
    altText: "BOX",
    name: "캐드원(제도사)",
  },
  {
    id: 5,
    imgSrc: "/images/box.png",
    altText: "BOX",
    name: "캐드원(제도사)",
  },
  {
    id: 6,
    imgSrc: "/images/box.png",
    altText: "BOX",
    name: "캐드원(제도사)",
  },
  {
    id: 7,
    imgSrc: "/images/box.png",
    altText: "BOX",
    name: "캐드원(제도사)",
  },
];
const informartion = [
  {
    id: 8297,
    src: "/images/checkbox-icon.svg",
    name: "한국어 능력",
  },
  {
    id: 78623,
    src: "/images/checkbox-icon.svg",
    name: "업무 수행 능력",
  },
  {
    id: 987,
    src: "/images/checkbox-icon.svg",
    name: "업무 수행 능력",
  },
  {
    id: 90843,
    src: "/images/checkbox-icon.svg",
    name: "평판 조회",
  },
];
const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 pe-0">
            <div>
              <Tooltip
                message="풀타임, 파트타임"
                color="#40E2E8"
                position={"top"}
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
              <p className="content md:block hidden mt-md-4 mb-md-5 my-3 animate-fadeInUp">
                개발자가 필요하신가요?
              </p>
              <ul className="list-unstyled md:flex hidden align-items-baseline gap-4 animate-fadeIn">
                {data?.map((item) => (
                  <li key={item?.id} className="list">
                    <p className="list-heading mb-0">{item?.heading}</p>
                    <p className="list-subheading me-2">{item?.subHeading}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <Slider />
          </div>
          <div className="md:hidden block">
            <ul className="list-unstyled information-list">
              {informartion?.map((item) => (
                <li key={item?.id} className="flex items-center gap-2 mb-2">
                  <Image src={item?.src} width={20} height={20} alt="checkbox" />
                  <span>{item?.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="content md:hidden block animate-fadeInUp">
            개발자가 필요하신가요?
          </p>
        </div>
      </div>
      <div className="slider-settings md:flex hidden w-full">
        <div className="slider-container">
          <Carousel items={sliderData} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
