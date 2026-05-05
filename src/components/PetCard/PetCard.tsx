import React, { memo, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Pet } from '../../types';
import { useAppDispatch, useAppSelector } from '../../state-management/hooks/useAppStore';
import { toggleSelection } from '../../state-management/slices';
import {
  Card,
  CardImage,
  CardCheckbox,
  CardContent,
  CardTitle,
  CardDescription,
  CardMeta,
} from '../../styles';

interface PetCardProps {
  pet: Pet;
}

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

export const PetCard = memo(function PetCard({ pet }: PetCardProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const selected = useAppSelector(
    (state) => state.selection.selectedPets[pet.id] !== undefined
  );

  const formattedDate = useMemo(() => formatDate(pet.created), [pet.created]);

  const handleCardClick = useCallback(() => {
    navigate(`/pets/${pet.id}`);
  }, [navigate, pet.id]);

  const handleCheckboxClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      dispatch(toggleSelection(pet));
    },
    [dispatch, pet]
  );

  return (
    <Card $selected={selected} onClick={handleCardClick}>
      <CardImage>
        <img 
          src={pet.url} 
          alt={pet.title} 
          loading="lazy"
          decoding="async"
        />
        <CardCheckbox $checked={selected} onClick={handleCheckboxClick}>
          {selected && '✓'}
        </CardCheckbox>
      </CardImage>
      <CardContent>
        <CardTitle>{pet.title}</CardTitle>
        <CardDescription>{pet.description}</CardDescription>
        <CardMeta>{formattedDate}</CardMeta>
      </CardContent>
    </Card>
  );
}, (prevProps, nextProps) => prevProps.pet.id === nextProps.pet.id);
