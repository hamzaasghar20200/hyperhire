import Image from "next/image";
import React from "react";
import { Tooltip } from "./Tooltip";
import Button from "./Button";

interface CandidateCardProps {
  src: string;
  name: string;
  title: string;
  experience: string;
  skills: string[];
  tooltip: string;
}

const CandidateCard: React.FC<CandidateCardProps> = ({
  src,
  name,
  title,
  experience,
  skills,
  tooltip,
}) => {
  return (
    <div className="card candidate-card shadow-sm text-center">
      {tooltip && (
        <div className="relative inline-block">
          <Tooltip
            message="월 100만원"
            color="#00C696"
            position="top" // Position tooltip at the top of each slide
            icon="/images/dollar-icon.svg"
            customClass="slider-tooltip"
            animation="fadeIn"
             bgColor="bg-light-green"
          />
        </div>
      )}
      <div className="card-body center py-4">
        <Image
          className="m-auto"
          src={src}
          alt="Profile"
          width={120}
          height={120}
        />
        <h5 className="card-title mt-2 mb-0">{name}</h5>
        <h6 className="card-subtitle md:mb-5 mb-2">
          {title} <span className="fw-bold">{experience}</span>
        </h6>
        {skills.map((skill, index) => (
          <Button key={index} classnames={`btn-tags ${index === 0 ? 'mx-1': 'me-1'}`}>
            {skill}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CandidateCard;
