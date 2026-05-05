export interface Pet {
  id: string;
  title: string;
  description: string;
  url: string;
  created: string;
}

export interface ApiPet {
  title: string;
  description: string;
  url: string;
  created: string;
}

export type SortOption = 
  | 'name-asc' 
  | 'name-desc' 
  | 'date-newest' 
  | 'date-oldest';

export interface SortConfig {
  value: SortOption;
  label: string;
}

export const SORT_OPTIONS: SortConfig[] = [
  { value: 'name-asc', label: 'Name A-Z' },
  { value: 'name-desc', label: 'Name Z-A' },
  { value: 'date-newest', label: 'Date (Newest First)' },
  { value: 'date-oldest', label: 'Date (Oldest First)' },
];

export interface PaginationConfig {
  currentPage: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
}

export interface DataState<T> {
  data: T | null;
  isLoading: boolean;
  error: string | null;
  isEmpty: boolean;
}
