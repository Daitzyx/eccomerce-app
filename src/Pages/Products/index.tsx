import { useState } from 'react';

import { products } from '../../util/mock';
import { Product } from '../../types';

import { ProductCard, SortingControls, FilterInput } from '../../components';
import { Container, FilterSortContent, ProductGrid } from './styles';

export const Products = () => {
  const [filteredProducts, setFilteredProducts] = useState<Product[] | null>(null);

  const removeAccents = (str: string) => {
    return str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  };

  const handleFilterChange = (filter: string) => {
    if (!filter) {
      setFilteredProducts(products as Product[]);
    } else {
      const normalizedFilter = removeAccents(filter);

      const filtered = products.filter(
        (product) =>
          removeAccents(product.name).includes(normalizedFilter) ||
          product.price.toString().includes(filter) ||
          (product.date && new Date(product.date).toLocaleDateString().includes(filter)) ||
          false
      );

      setFilteredProducts(filtered);
    }
  };

  const handleSortChange = (sortOption: string, sortOrder: 'asc' | 'desc') => {
    const sorted = [...(filteredProducts || products)].sort((a, b) => {
      if (sortOption === 'price') {
        return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
      } else if (sortOption === 'date') {
        const productDateA = new Date(a.date as Date);
        const productDateB = new Date(b.date as Date);
        return sortOrder === 'asc'
          ? productDateA.getTime() - productDateB.getTime()
          : productDateB.getTime() - productDateA.getTime();
      }
      return 0;
    });

    setFilteredProducts(sorted);
  };
  return (
    <Container>
      <FilterSortContent>
        <FilterInput onFilterChange={handleFilterChange} />
        <SortingControls onSortChange={handleSortChange} />
      </FilterSortContent>

      <ProductGrid>
        <ProductCard products={filteredProducts || products} />
      </ProductGrid>
    </Container>
  );
};
