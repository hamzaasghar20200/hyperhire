import { apiClient } from '@/lib/api-client';  
import {   
  DataItem,   
  SliderItem,   
  InformationItem   
} from '@/types';  

export class DataService {  
  static async getAllData() {  
    try {  
      const [data, sliderData, information] = await Promise.all([  
        apiClient.fetchData<DataItem[]>('/data'),  
        apiClient.fetchData<SliderItem[]>('/slider'),  
        apiClient.fetchData<InformationItem[]>('/information')  
      ]);  

      return {  
        data,  
        sliderData,  
        information  
      };  
    } catch (error) {  
      console.error('Failed to fetch data:', error);  
      throw error;  
    }  
  }  
}