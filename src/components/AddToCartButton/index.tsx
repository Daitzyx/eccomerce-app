import { useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

import { Product } from '../../types';

import { Button } from './styles';
import { TiShoppingCart } from 'react-icons/ti';

interface AddCartButtonProps {
  product: Product;
}

export const AddToCartButton = ({ product, ...rest }: AddCartButtonProps) => {
  const { dispatch } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { id: product.id, name: product.name, price: product.price, image: product.image, quantity: 1 }
    });

    if (location.pathname.split('/')[1] === 'product') {
      navigate('/');
    }
  };

  return (
    <Button onClick={handleAddToCart} {...rest} aria-label="Add product to cart">
      Adicionar <TiShoppingCart size={20} />
    </Button>
  );
};
