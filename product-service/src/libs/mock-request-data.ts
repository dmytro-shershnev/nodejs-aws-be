import mockData from '../mock/products.json';

// API requests with mock data
export const getMockData = (): Promise<Product[]> => {
    return new Promise(resolve => resolve(mockData));
}