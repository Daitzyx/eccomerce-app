import { ChangeEvent } from 'react';

import { Container } from './styles';

interface SortingControlsProps {
  onSortChange: (sortOption: string, sortOrder: 'asc' | 'desc') => void;
}

export const SortingControls = ({ onSortChange }: SortingControlsProps) => {
  const handleSortChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;

    if (selectedValue === 'priceAsc' || selectedValue === 'priceDesc') {
      const sortOption = 'price';
      const sortOrder = selectedValue === 'priceAsc' ? 'asc' : 'desc';
      onSortChange(sortOption, sortOrder);
    } else if (selectedValue === 'dateAsc' || selectedValue === 'dateDesc') {
      const sortOption = 'date';
      const sortOrder = selectedValue === 'dateAsc' ? 'asc' : 'desc';
      onSortChange(sortOption, sortOrder);
    }
  };

  return (
    <Container>
      <select onChange={handleSortChange}>
        <option value="">Ordenar por</option>
        <option value="priceAsc">Preço - Crescente</option>
        <option value="priceDesc">Preço - Decrescente</option>
        <option value="dateAsc">Data de inclusão - Crescente</option>
        <option value="dateDesc">Data de inclusão - Decrescente</option>
      </select>
    </Container>
  );
};
