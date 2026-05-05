import axiosInstance from '../axiosInstance';
import { Pet, ApiPet } from '../../types';

const API_URL = 'https://eulerity-hackathon.appspot.com/pets';

export const petApi = {
  async getAll(): Promise<Pet[]> {
    const response = await axiosInstance.get<ApiPet[]>(API_URL);
    return response.data.map((pet, index) => ({
      ...pet,
      id: `pet-${index}-${encodeURIComponent(pet.url)}`,
    }));
  },

  async getById(id: string): Promise<Pet | null> {
    const pets = await this.getAll();
    return pets.find(p => p.id === id) || null;
  },
};

export default petApi;
