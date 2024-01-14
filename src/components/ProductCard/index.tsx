import { Link } from 'react-router-dom';

import { Product } from '../../types';

import { ButtonsContainer, CardContainer, ProductImage, ProductInfo } from './styles';
import { AddToCartButton } from '../AddToCartButton';
import { formatCurrency } from '../../util/helper';

type ProductCardProps = {
  products: Product[];
};

export const ProductCard = ({ products }: ProductCardProps) => {
  return (
    <>
      {products ? (
        products.map((product: Product) => (
          <CardContainer key={product.id}>
            <ProductImage src={product.image} alt={product.name} />
            <ProductInfo>
              <h3>{product.name}</h3>
              <p>{formatCurrency(product.price)}</p>
              <p>Date: {new Date(product.date as Date).toLocaleDateString()}</p>
            </ProductInfo>

            <ButtonsContainer>
              <Link to={`/product/${product.id}`}>Ver mais</Link>
              <AddToCartButton product={product} />
            </ButtonsContainer>
          </CardContainer>
        ))
      ) : (
        <p>Limpe o filtro</p>
      )}
    </>
  );
};
