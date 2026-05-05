import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from './useAppStore';
import { toggleSelection, selectAll, clearSelection } from '../slices';
import { Pet } from '../../types';

export function useSelection() {
  const dispatch = useAppDispatch();
  const {
    selectedPets,
    selectedCount,
    estimatedTotalSize,
    formattedTotalSize,
  } = useAppSelector((state) => state.selection);

  const isSelected = useCallback(
    (id: string) => {
      return selectedPets[id] !== undefined;
    },
    [selectedPets]
  );

  const handleToggleSelection = useCallback(
    (pet: Pet) => {
      dispatch(toggleSelection(pet));
    },
    [dispatch]
  );

  const handleSelectAll = useCallback(
    (pets: Pet[]) => {
      dispatch(selectAll(pets));
    },
    [dispatch]
  );

  const handleClearSelection = useCallback(() => {
    dispatch(clearSelection());
  }, [dispatch]);

  const getSelectedPets = useCallback(
    (allPets: Pet[]) => {
      return allPets.filter((pet) => selectedPets[pet.id] !== undefined);
    },
    [selectedPets]
  );

  const downloadSelected = useCallback(
    (allPets: Pet[]) => {
      const selected = allPets.filter((pet) => selectedPets[pet.id] !== undefined);

      selected.forEach((pet) => {
        const link = document.createElement('a');
        link.href = pet.url;
        link.download = `${pet.title || pet.id}.jpg`;
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    },
    [selectedPets]
  );

  return {
    selectedIds: Object.keys(selectedPets),
    selectedCount,
    estimatedTotalSize,
    formattedTotalSize,
    isSelected,
    toggleSelection: handleToggleSelection,
    selectAll: handleSelectAll,
    clearSelection: handleClearSelection,
    getSelectedPets,
    downloadSelected,
  };
}
