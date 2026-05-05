import React, { useCallback, useMemo, useState, useEffect, useRef } from 'react';
import { SortOption, SORT_OPTIONS } from '../../types';
import { usePets, useSelection } from '../../state-management';
import { PetCard } from '../PetCard';
import {
  Container,
  Main,
  PageTitle,
  PageSubtitle,
  Grid,
  Toolbar,
  ToolbarSection,
  SearchWrapper,
  SearchInput,
  Select,
  Button,
  ButtonGroup,
  LoadingWrapper,
  Spinner,
  EmptyState,
  EmptyStateIcon,
  ErrorState,
  PaginationWrapper,
  PaginationButton,
  SelectionBar,
  SelectionInfo,
  SelectionCount,
  SelectionSize,
} from '../../styles';

function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
}

export function PetGallery() {
  const {
    pets,
    paginatedPets,
    sortedPets,
    isLoading,
    error,
    isEmpty,
    currentPage,
    totalPages,
    totalItems,
    searchQuery,
    sortOption,
    setSearchQuery,
    setSortOption,
    setCurrentPage,
    refetch,
  } = usePets();

  const {
    selectedCount,
    formattedTotalSize,
    selectAll,
    clearSelection,
    downloadSelected,
  } = useSelection();

  const [localSearch, setLocalSearch] = useState(searchQuery);
  const debouncedSearch = useDebounce(localSearch, 300);

  useEffect(() => {
    setSearchQuery(debouncedSearch);
  }, [debouncedSearch, setSearchQuery]);

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setLocalSearch(e.target.value);
    },
    []
  );

  const handleSortChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSortOption(e.target.value as SortOption);
    },
    [setSortOption]
  );

  const goToPage = useCallback(
    (page: number) => {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [setCurrentPage]
  );

  const handleSelectAll = useCallback(() => {
    selectAll(sortedPets);
  }, [selectAll, sortedPets]);

  const handleDownload = useCallback(() => {
    downloadSelected(pets);
  }, [downloadSelected, pets]);

  const getPageNumbers = (): (number | string)[] => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push('...');
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push('...');
        pages.push(totalPages);
      }
    }

    return pages;
  };

  if (isLoading) {
    return (
      <Main>
        <Container>
          <LoadingWrapper>
            <Spinner />
            <p>Loading pets...</p>
          </LoadingWrapper>
        </Container>
      </Main>
    );
  }

  if (error) {
    return (
      <Main>
        <Container>
          <ErrorState>
            <h2>Oops! Something went wrong</h2>
            <p>{error}</p>
            <Button onClick={refetch} style={{ marginTop: '16px' }}>
              Try Again
            </Button>
          </ErrorState>
        </Container>
      </Main>
    );
  }

  if (isEmpty) {
    return (
      <Main>
        <Container>
          <EmptyState>
            <EmptyStateIcon>🐾</EmptyStateIcon>
            <h2>No pets found</h2>
            <p>There are no pets available at the moment.</p>
          </EmptyState>
        </Container>
      </Main>
    );
  }

  return (
    <Main>
      <Container>
        <PageTitle>Pet Gallery</PageTitle>
        <PageSubtitle>
          Browse our adorable collection of {pets.length} pets
        </PageSubtitle>

        <Toolbar>
          <ToolbarSection>
            <SearchWrapper>
              <SearchInput
                type="text"
                placeholder="Search by title or description..."
                value={localSearch}
                onChange={handleSearchChange}
                aria-label="Search pets"
              />
            </SearchWrapper>
            <Select
              value={sortOption}
              onChange={handleSortChange}
              aria-label="Sort pets"
            >
              {SORT_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
          </ToolbarSection>

          <ToolbarSection>
            <ButtonGroup>
              <Button $variant="outline" onClick={handleSelectAll}>
                Select All ({totalItems})
              </Button>
              <Button $variant="outline" onClick={clearSelection}>
                Clear Selection
              </Button>
            </ButtonGroup>
          </ToolbarSection>
        </Toolbar>

        {totalItems === 0 ? (
          <EmptyState>
            <EmptyStateIcon>🔍</EmptyStateIcon>
            <h2>No matching pets</h2>
            <p>Try adjusting your search query.</p>
            <Button
              $variant="outline"
              onClick={() => { setLocalSearch(''); setSearchQuery(''); }}
              style={{ marginTop: '16px' }}
            >
              Clear Search
            </Button>
          </EmptyState>
        ) : (
          <>
            <Grid>
              {paginatedPets.map((pet) => (
                <PetCard key={pet.id} pet={pet} />
              ))}
            </Grid>

            {totalPages > 1 && (
              <PaginationWrapper>
                <PaginationButton
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  aria-label="Previous page"
                >
                  ‹
                </PaginationButton>

                {getPageNumbers().map((page, index) =>
                  typeof page === 'number' ? (
                    <PaginationButton
                      key={index}
                      $active={page === currentPage}
                      onClick={() => goToPage(page)}
                      aria-label={`Page ${page}`}
                      aria-current={page === currentPage ? 'page' : undefined}
                    >
                      {page}
                    </PaginationButton>
                  ) : (
                    <span key={index} style={{ padding: '0 8px' }}>
                      {page}
                    </span>
                  )
                )}

                <PaginationButton
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  aria-label="Next page"
                >
                  ›
                </PaginationButton>
              </PaginationWrapper>
            )}

            <p
              style={{ textAlign: 'center', color: '#64748b', marginTop: '16px' }}
            >
              Showing {(currentPage - 1) * 12 + 1} -{' '}
              {Math.min(currentPage * 12, totalItems)} of {totalItems} pets
            </p>
          </>
        )}

        <SelectionBar $visible={selectedCount > 0}>
          <SelectionInfo>
            <SelectionCount>{selectedCount} selected</SelectionCount>
            <SelectionSize>Est. size: {formattedTotalSize}</SelectionSize>
          </SelectionInfo>
          <ButtonGroup>
            <Button onClick={handleDownload}>Download Selected</Button>
            <Button $variant="secondary" onClick={clearSelection}>
              Clear
            </Button>
          </ButtonGroup>
        </SelectionBar>
      </Container>
    </Main>
  );
}
