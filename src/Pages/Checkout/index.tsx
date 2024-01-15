import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

import { Toast, LoadingSpin } from '../../components';
import { Container, CheckoutSummary, CheckoutItem, TotalAmount, BuyCart } from './styles';
import { IoTrash } from 'react-icons/io5';

import { calculateTotal } from '../../util/helper';

export const Checkout = () => {
  const { cart, dispatch } = useCart();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleBuyCart = () => {
    setIsLoading(true);
    setTimeout(() => {
      dispatch({
        type: 'CLEAR_CART'
      });
      setIsLoading(false);
      setShowToast(true);

      setTimeout(() => {
        navigate('/');
      }, 1000);
    }, 1500);
  };

  const handleRemoveItem = (id: number) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: { id }
    });
  };

  return (
    <Container>
      <h2>Checkout</h2>
      <CheckoutSummary>
        {cart.length > 0 ? (
          cart.map((item) => (
            <CheckoutItem key={item.id}>
              <img src={item.image} width={50} alt="Imagem do produto" />
              <span>{item.name}</span>
              <span>R${item.price.toFixed(2)}</span>
              <span>Quantidade: {item.quantity}</span>
              <button onClick={() => handleRemoveItem(item.id)}>
                <IoTrash />
              </button>
            </CheckoutItem>
          ))
        ) : (
          <p>Carrinho vazio...</p>
        )}
      </CheckoutSummary>
      <TotalAmount>Total: {calculateTotal(cart)}</TotalAmount>

      <BuyCart onClick={handleBuyCart}>{isLoading ? <LoadingSpin /> : 'Finalizar compra'}</BuyCart>

      {showToast && <Toast>Compra finalizada com sucesso!</Toast>}
    </Container>
  );
};
