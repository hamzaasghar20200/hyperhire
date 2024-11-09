// components/Footer.jsx
import Image from "next/image";
import React from "react";
import Button from "./Button";
const data = [
  {
    id: 129081,
    src: "/images/code-icon.png",
    name: "해외 개발자 원격 채용",
    action: "바로가기",
  },
  {
    id: 6526735,
    src: "/images/person-icon.png",
    name: "외국인 원격 채용 (비개발)",
    action: "바로가기",
  },
  {
    id: 878927,
    src: "/images/kor-icon.png",
    name: "한국어 가능 외국인 채용",
    action: "바로가기",
  },
  {
    id: 29380,
    src: "/images/setting-icon.png",
    name: "해외 개발자 활용 서비스",
    action: "바로가기",
  },
];
const Footer = () => {
  return (
    <footer className="bg-light text-dark mt-5 md:p-4">
      <div className="container">
        <div className="row text-start">
          <div className="col-12 col-md-4 mb-3 mt-4">
            <Image
              src={"/images/logo-colored.svg"}
              width={187}
              height={34}
              alt="logo"
            />
            <p className="mt-3 footer-heading font-14 me-xl-5">
              우리는 국가의 장벽을 넘어 최고의 인재를 매칭해 드립니다.
            </p>
            <p className="footer-card-desc mt-4 font-13">010-0000-0000</p>
            <p className="footer-card-desc mt-2 font-13">aaaaa@naver.com</p>
          </div>

          <div className="col-12 col-md-8 p-0">
            <div className="row mt-3 footer-info mx-0 px-0">
              {data?.map((item) => (
                <div className="col-lg-3 col-6 px-2 mb-3" key={item?.id}>
                  <div className="card border-0">
                    <div className="card-body footer-info-card pe-1">
                      <Image
                        src={item?.src}
                        width={40}
                        height={40}
                        alt="icon"
                      />
                      <h5 className="info-title mb-0">{item?.name}</h5>
                      <Button classnames="flex align-items-center gap-1">
                        {item?.action}{" "}
                        <Image
                          src={"/images/arrow-right.svg"}
                          width={16}
                          height={16}
                          alt="icon"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-4 col-xl-4 mb-3">
              <div className="d-flex gap-3">
                <div>
                  <h5 className="footer-heading font-12">상호명</h5>
                  <p className="footer-card-desc mt-3 font-13">하이퍼하이어</p>
                  <h6 className="footer-card-desc mt-3 font-13">
                    Hyperhire India Private Limited
                  </h6>
                </div>
                <div>
                  <h5 className="footer-heading font-12">대표 CEO</h5>
                  <p className="footer-card-desc mt-3 font-13">김주현</p>
                  <h6 className="footer-card-desc mt-3 font-13">Juhyun Kim</h6>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-xl-3 col-xxl-2 mb-3">
              <h5 className="footer-heading font-13 md:mt-0 mt-3">
                사업자 등록번호 <span>CIN</span>
              </h5>
              <p className="footer-card-desc mt-3 font-13">427-86-01187</p>
              <p className="footer-card-desc mt-2 font-13">
                U74110DL2016PTC290812
              </p>
            </div>

            <div className="col-md-4 col-xl-5 mb-3">
              <div className="ps-xxl-3">
                <h5 className="footer-heading font-12 md:mt-0 mt-3">주소 ADDRESS</h5>
                <p className="footer-card-desc mt-3 font-13">
                  서울특별시 강남대로 479, 지하 1층 238호
                </p>
                <p className="footer-card-desc mt-2 font-13">
                  D-138, Street number 11, Jagjeet Nagar, North East Delhi, New
                  Delhi, 110053 India
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-start product-by mt-3">
          <p>© 2023 Hyperhire</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
