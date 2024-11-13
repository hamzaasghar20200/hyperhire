import { NextApiRequest, NextApiResponse } from 'next';  
import { DataItem, InformationItem, SliderItem } from '@/types';  

const mockData: DataItem[] = [  
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
const sliderData: SliderItem[] = [
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

const information: InformationItem[] = [
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

interface ApiResponse {
  mockData: DataItem[];
  sliderData: SliderItem[];
  information: InformationItem[];
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  if (req.method === 'GET') {
    res.status(200).json({
      mockData,
      sliderData,
      information,
    });
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}