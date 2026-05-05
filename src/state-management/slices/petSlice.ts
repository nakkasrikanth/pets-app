import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Pet, SortOption } from '../../types';
import { petApi } from '../../repository';

interface PetState {
  pets: Pet[];
  selectedPet: Pet | null;
  isLoading: boolean;
  isLoadingDetail: boolean;
  error: string | null;
  searchQuery: string;
  sortOption: SortOption;
  currentPage: number;
  pageSize: number;
}

const initialState: PetState = {
  pets: [],
  selectedPet: null,
  isLoading: false,
  isLoadingDetail: false,
  error: null,
  searchQuery: '',
  sortOption: 'date-newest',
  currentPage: 1,
  pageSize: 12,
};

export const fetchPets = createAsyncThunk<Pet[], void, { rejectValue: string }>(
  'pets/fetchPets',
  async (_, { rejectWithValue }) => {
    try {
      const pets = await petApi.getAll();
      return pets;
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to fetch pets';
      return rejectWithValue(message);
    }
  }
);

export const fetchPetById = createAsyncThunk<Pet, string, { rejectValue: string }>(
  'pets/fetchPetById',
  async (id, { rejectWithValue, getState }) => {
    try {
      const state = getState() as { pets: PetState };
      const existingPet = state.pets.pets.find(p => p.id === id);
      if (existingPet) {
        return existingPet;
      }
      const pet = await petApi.getById(id);
      if (!pet) {
        return rejectWithValue('Pet not found');
      }
      return pet;
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to fetch pet';
      return rejectWithValue(message);
    }
  }
);

const petSlice = createSlice({
  name: 'pets',
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
      state.currentPage = 1;
    },
    setSortOption: (state, action: PayloadAction<SortOption>) => {
      state.sortOption = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    clearSelectedPet: (state) => {
      state.selectedPet = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPets.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPets.fulfilled, (state, action) => {
        state.isLoading = false;
        state.pets = action.payload;
      })
      .addCase(fetchPets.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Failed to fetch pets';
      })
      .addCase(fetchPetById.pending, (state) => {
        state.isLoadingDetail = true;
        state.error = null;
      })
      .addCase(fetchPetById.fulfilled, (state, action) => {
        state.isLoadingDetail = false;
        state.selectedPet = action.payload;
      })
      .addCase(fetchPetById.rejected, (state, action) => {
        state.isLoadingDetail = false;
        state.error = action.payload ?? 'Failed to fetch pet';
      });
  },
});

export const {
  setSearchQuery,
  setSortOption,
  setCurrentPage,
  clearSelectedPet,
  clearError,
} = petSlice.actions;

export default petSlice.reducer;
