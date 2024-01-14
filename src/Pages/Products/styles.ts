import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  padding: 30px 0;
`;

export const FilterSortContent = styled.div`
  display: flex;
  gap: 10px;

  padding: 0 20px;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  justify-content: center;
  justify-items: center;

  grid-template-columns: repeat(1, 1fr);

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 924px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Button = styled.button`
  background-color: #333;
  color: white;
  padding: 8px;
  border: none;
  border-radius: 4px;
  margin-top: 8px;

  &:hover {
    background-color: #555;
  }
`;
