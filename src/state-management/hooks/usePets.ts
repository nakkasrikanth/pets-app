import { useEffect, useMemo, useCallback } from 'react';
import { useAppDispatch, useAppSelector } from './useAppStore';
import {
  fetchPets,
  fetchPetById,
  setSearchQuery,
  setSortOption,
  setCurrentPage,
  clearSelectedPet,
} from '../slices';
import { Pet, SortOption } from '../../types';

export function usePets() {
  const dispatch = useAppDispatch();
  const {
    pets,
    isLoading,
    error,
    searchQuery,
    sortOption,
    currentPage,
    pageSize,
  } = useAppSelector((state) => state.pets);

  useEffect(() => {
    if (pets.length === 0 && !isLoading) {
      dispatch(fetchPets());
    }
  }, [dispatch, pets.length, isLoading]);

  const filteredPets = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return pets;

    return pets.filter(
      (pet) =>
        pet.title.toLowerCase().includes(query) ||
        pet.description.toLowerCase().includes(query)
    );
  }, [pets, searchQuery]);

  const sortedPets = useMemo(() => {
    const sorted = [...filteredPets];

    switch (sortOption) {
      case 'name-asc':
        return sorted.sort((a, b) => a.title.localeCompare(b.title));
      case 'name-desc':
        return sorted.sort((a, b) => b.title.localeCompare(a.title));
      case 'date-newest':
        return sorted.sort(
          (a, b) => new Date(b.created).getTime() - new Date(a.created).getTime()
        );
      case 'date-oldest':
        return sorted.sort(
          (a, b) => new Date(a.created).getTime() - new Date(b.created).getTime()
        );
      default:
        return sorted;
    }
  }, [filteredPets, sortOption]);

  const totalPages = Math.ceil(sortedPets.length / pageSize);
  const paginatedPets = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return sortedPets.slice(start, start + pageSize);
  }, [sortedPets, currentPage, pageSize]);

  const handleSearch = useCallback(
    (query: string) => {
      dispatch(setSearchQuery(query));
    },
    [dispatch]
  );

  const handleSort = useCallback(
    (option: SortOption) => {
      dispatch(setSortOption(option));
    },
    [dispatch]
  );

  const handlePageChange = useCallback(
    (page: number) => {
      dispatch(setCurrentPage(page));
    },
    [dispatch]
  );

  const refetch = useCallback(() => {
    dispatch(fetchPets());
  }, [dispatch]);

  return {
    pets,
    filteredPets,
    sortedPets,
    paginatedPets,
    isLoading,
    error,
    isEmpty: pets.length === 0 && !isLoading && !error,
    currentPage,
    pageSize,
    totalPages,
    totalItems: sortedPets.length,
    searchQuery,
    sortOption,
    setSearchQuery: handleSearch,
    setSortOption: handleSort,
    setCurrentPage: handlePageChange,
    refetch,
  };
}

export function usePetById(id: string | undefined) {
  const dispatch = useAppDispatch();
  const { selectedPet, isLoadingDetail, error, pets } = useAppSelector(
    (state) => state.pets
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchPetById(id));
    }
    return () => {
      dispatch(clearSelectedPet());
    };
  }, [dispatch, id]);

  const pet = useMemo(() => {
    if (selectedPet) return selectedPet;
    if (id && pets.length > 0) {
      return pets.find((p) => p.id === id) || null;
    }
    return null;
  }, [selectedPet, pets, id]);

  return {
    data: pet,
    isLoading: isLoadingDetail,
    error,
    isEmpty: !pet && !isLoadingDetail && !error,
  };
}
