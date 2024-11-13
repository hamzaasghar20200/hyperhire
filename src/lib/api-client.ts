import axios from 'axios';  

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '/api';  

export class ApiClient {  
  private static instance: ApiClient;  
  private axiosInstance;  

  private constructor() {  
    this.axiosInstance = axios.create({  
      baseURL: API_BASE_URL,  
      timeout: 10000,  
      headers: {  
        'Content-Type': 'application/json',  
      },  
    });  

    this.setupInterceptors();  
  }  

  public static getInstance(): ApiClient {  
    if (!ApiClient.instance) {  
      ApiClient.instance = new ApiClient();  
    }  
    return ApiClient.instance;  
  }  

  private setupInterceptors() {  
    this.axiosInstance.interceptors.response.use(  
      (response) => response,  
      (error) => {  
        console.error('API Error:', error);  
        return Promise.reject(error);  
      }  
    );  
  }  

  public async fetchData<T>(endpoint: string): Promise<T> {  
    try {  
      const response = await this.axiosInstance.get<T>(endpoint);  
      return response.data;  
    } catch (error) {  
      console.error(`Error fetching ${endpoint}:`, error);  
      throw error;  
    }  
  }  
}  

export const apiClient = ApiClient.getInstance();