import React, { useState } from 'react';
import { IconButton, InputContainer, StyledInput } from './styles';

import { IoClose } from 'react-icons/io5';
import { FaSearch } from 'react-icons/fa';

interface FilterInputProps {
  onFilterChange: (filter: string) => void;
}

export const FilterInput = ({ onFilterChange }: FilterInputProps) => {
  const [filter, setFilter] = useState<string>('');

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFilter = e.target.value;
    setFilter(newFilter);
    onFilterChange(newFilter);
  };

  const handleClearFilter = () => {
    setFilter('');
    onFilterChange('');
  };

  return (
    <InputContainer>
      <StyledInput
        type="text"
        placeholder="Filtrar por nome, preço ou data (12/09/2023)"
        value={filter}
        onChange={handleFilterChange}
      />
      <IconButton>
        {filter !== '' ? (
          <button onClick={handleClearFilter} type="button">
            <IoClose size={16} />
          </button>
        ) : (
          <FaSearch />
        )}
      </IconButton>
    </InputContainer>
  );
};
