import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { usePetById, useSelection } from '../../state-management';
import {
  Container,
  Main,
  DetailContainer,
  DetailImage,
  DetailTitle,
  DetailDescription,
  DetailMeta,
  DetailMetaItem,
  DetailMetaLabel,
  DetailMetaValue,
  BackLink,
  Button,
  ButtonGroup,
  LoadingWrapper,
  Spinner,
  EmptyState,
  EmptyStateIcon,
  ErrorState,
} from '../../styles';

export function PetDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: pet, isLoading, error, isEmpty } = usePetById(id);
  const { isSelected, toggleSelection } = useSelection();

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const handleBack = () => {
    navigate('/');
  };

  const handleDownload = () => {
    if (pet) {
      const link = document.createElement('a');
      link.href = pet.url;
      link.download = `${pet.title || 'pet-image'}.jpg`;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleToggleSelection = () => {
    if (pet) {
      toggleSelection(pet);
    }
  };

  if (isLoading) {
    return (
      <Main>
        <Container>
          <LoadingWrapper>
            <Spinner />
            <p>Loading pet details...</p>
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
            <Button onClick={handleBack} style={{ marginTop: '16px' }}>
              Back to Gallery
            </Button>
          </ErrorState>
        </Container>
      </Main>
    );
  }

  if (isEmpty || !pet) {
    return (
      <Main>
        <Container>
          <EmptyState>
            <EmptyStateIcon>🔍</EmptyStateIcon>
            <h2>Pet not found</h2>
            <p>The pet you're looking for doesn't exist or has been removed.</p>
            <Button onClick={handleBack} style={{ marginTop: '16px' }}>
              Back to Gallery
            </Button>
          </EmptyState>
        </Container>
      </Main>
    );
  }

  const selected = isSelected(pet.id);

  return (
    <Main>
      <Container>
        <DetailContainer>
          <BackLink onClick={handleBack}>
            ← Back to Gallery
          </BackLink>

          <DetailImage>
            <img src={pet.url} alt={pet.title} />
          </DetailImage>

          <DetailTitle>{pet.title}</DetailTitle>

          <DetailMeta>
            <DetailMetaItem>
              <DetailMetaLabel>Added</DetailMetaLabel>
              <DetailMetaValue>{formatDate(pet.created)}</DetailMetaValue>
            </DetailMetaItem>
          </DetailMeta>

          <DetailDescription>{pet.description}</DetailDescription>

          <ButtonGroup>
            <Button onClick={handleDownload}>
              Download Image
            </Button>
            <Button
              $variant={selected ? 'danger' : 'outline'}
              onClick={handleToggleSelection}
            >
              {selected ? 'Remove from Selection' : 'Add to Selection'}
            </Button>
          </ButtonGroup>
        </DetailContainer>
      </Container>
    </Main>
  );
}
