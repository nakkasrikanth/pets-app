import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Pet } from '../../types';

const ESTIMATED_IMAGE_SIZE = 500000;

function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
}

interface SelectionState {
  selectedPets: Record<string, number>;
  selectedCount: number;
  estimatedTotalSize: number;
  formattedTotalSize: string;
}

const initialState: SelectionState = {
  selectedPets: {},
  selectedCount: 0,
  estimatedTotalSize: 0,
  formattedTotalSize: '0 Bytes',
};

function recalculateTotals(selectedPets: Record<string, number>): Pick<SelectionState, 'selectedCount' | 'estimatedTotalSize' | 'formattedTotalSize'> {
  const ids = Object.keys(selectedPets);
  const totalSize = Object.values(selectedPets).reduce((sum, size) => sum + size, 0);
  
  return {
    selectedCount: ids.length,
    estimatedTotalSize: totalSize,
    formattedTotalSize: formatBytes(totalSize),
  };
}

const selectionSlice = createSlice({
  name: 'selection',
  initialState,
  reducers: {
    toggleSelection: (state, action: PayloadAction<Pet>) => {
      const pet = action.payload;
      
      if (state.selectedPets[pet.id] !== undefined) {
        delete state.selectedPets[pet.id];
      } else {
        state.selectedPets[pet.id] = ESTIMATED_IMAGE_SIZE;
      }
      
      const totals = recalculateTotals(state.selectedPets);
      state.selectedCount = totals.selectedCount;
      state.estimatedTotalSize = totals.estimatedTotalSize;
      state.formattedTotalSize = totals.formattedTotalSize;
    },
    
    selectAll: (state, action: PayloadAction<Pet[]>) => {
      const pets = action.payload;
      state.selectedPets = {};
      
      pets.forEach(pet => {
        state.selectedPets[pet.id] = ESTIMATED_IMAGE_SIZE;
      });
      
      const totals = recalculateTotals(state.selectedPets);
      state.selectedCount = totals.selectedCount;
      state.estimatedTotalSize = totals.estimatedTotalSize;
      state.formattedTotalSize = totals.formattedTotalSize;
    },
    
    clearSelection: (state) => {
      state.selectedPets = {};
      state.selectedCount = 0;
      state.estimatedTotalSize = 0;
      state.formattedTotalSize = '0 Bytes';
    },
  },
});

export const {
  toggleSelection,
  selectAll,
  clearSelection,
} = selectionSlice.actions;

export default selectionSlice.reducer;
