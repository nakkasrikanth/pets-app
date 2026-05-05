import axiosInstance from '../axiosInstance';
import { Pet, ApiPet } from '../../types';

const API_URL = 'https://eulerity-hackathon.appspot.com/pets';

const generateId = (url: string, index: number): string => {
  let hash = 0;
  for (let i = 0; i < url.length; i++) {
    const char = url.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return `pet-${index}-${Math.abs(hash)}`;
};

export const petApi = {
  async getAll(): Promise<Pet[]> {
    const response = await axiosInstance.get<ApiPet[]>(API_URL);
    return response.data.map((pet, index) => ({
      ...pet,
      id: generateId(pet.url, index),
    }));
  },

  async getById(id: string): Promise<Pet | null> {
    const pets = await this.getAll();
    return pets.find(p => p.id === id) || null;
  },
};

export default petApi;
