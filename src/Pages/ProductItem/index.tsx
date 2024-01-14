import { Link, useParams } from 'react-router-dom';

import { products } from '../../util/mock';

import { AddToCartButton } from '../../components/AddToCartButton';
import { Container, Info, ProductDetailContainer, ProductImage } from './styles';

export const ProductItem = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    return <div>Produto não encontrado.</div>;
  }

  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(product.price);

  return (
    <Container>
      <ProductImage src={product.image} alt={product.name} />

      <ProductDetailContainer>
        <Info>
          <h2>{product.name}</h2>
          <p>{formattedPrice}</p>
          <p>Data de inclusão: {new Date(product.date).toLocaleDateString()}</p>
        </Info>

        <Link to="/">Voltar</Link>
        <AddToCartButton product={product} />
      </ProductDetailContainer>
    </Container>
  );
};
