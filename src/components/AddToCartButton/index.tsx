import { useCart } from '../../context/CartContext';

import { Product } from '../../types';

import { Button } from './styles';
import { TiShoppingCart } from 'react-icons/ti';
import { useState } from 'react';
import { Toast } from '..';

interface AddCartButtonProps {
  product: Product;
}

export const AddToCartButton = ({ product, ...rest }: AddCartButtonProps) => {
  const { dispatch } = useCart();

  const [isToastVisible, setIsToastVisible] = useState(false);

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { id: product.id, name: product.name, price: product.price, image: product.image, quantity: 1 }
    });

    setIsToastVisible(true);

    setTimeout(() => {
      setIsToastVisible(false);
    }, 3000);
  };

  return (
    <>
      <Button onClick={handleAddToCart} {...rest} aria-label="Adicionar produto ao carrinho">
        Adicionar <TiShoppingCart size={20} />
      </Button>
      {isToastVisible && (
        <Toast>
          <span>{product.name}</span> foi adicionado ao carrinho
        </Toast>
      )}
    </>
  );
};
