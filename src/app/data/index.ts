import { NextApiRequest, NextApiResponse } from 'next';  
import { DataItem } from '@/types';  

const mockData: DataItem[] = [  
  {  
    id: 1,  
    heading: "평균 월 120만원",  
    subHeading: "임금을 해당 국가를 기준으로 계산합니다.",  
  },  
  // ... other items  
];  

export default function handler(  
  req: NextApiRequest,   
  res: NextApiResponse<DataItem[]>  
) {  
  if (req.method === 'GET') {  
    res.status(200).json(mockData);  
  } else {  
    res.setHeader('Allow', ['GET']);  
    res.status(405).end(`Method ${req.method} Not Allowed`);  
  }  
}