import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useSidebar } from '../../context/SidebarContext';

import {
  SidebarContainer,
  CloseButton,
  CartList,
  TotalPrice,
  Header,
  Description,
  QuantityActionsContainer,
  LinkButtons
} from './styles';
import { IoTrash } from 'react-icons/io5';
import { IoClose } from 'react-icons/io5';
import { FaPlus } from 'react-icons/fa6';
import { FaMinus } from 'react-icons/fa6';

import { calculateTotal, formatCurrency } from '../../util/helper';

export const Sidebar = () => {
  const { cart, dispatch } = useCart();
  const { isSidebarOpen, closeSidebar } = useSidebar();

  const handleRemoveItem = (id: number) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: { id }
    });
  };

  const handleQuantityChange = (itemId: number, action: 'decrease' | 'increase') => {
    if (action === 'decrease') {
      const newQuantity = cart.find((item) => item.id === itemId)!.quantity - 1;
      if (newQuantity <= 0) {
        handleRemoveItem(itemId);
        return;
      }
    }

    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { itemId, action }
    });
  };

  const isCartNull = cart.length > 0;

  return (
    <SidebarContainer className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <Header>
        <span>Carrinho</span>
        <CloseButton onClick={closeSidebar}>
          <IoClose />
        </CloseButton>
      </Header>
      <CartList>
        {isCartNull ? (
          cart.map((item) => (
            <li key={item.id}>
              <img src={item.image} width={50} alt="" />
              <Description>
                <span>{item.name}</span>
                <span>{formatCurrency(item.price)}</span>
              </Description>

              <div>
                <QuantityActionsContainer>
                  <button onClick={() => handleQuantityChange(item.id, 'decrease')}>
                    <FaMinus />
                  </button>
                  <input type="text" value={item.quantity!} readOnly />
                  <button onClick={() => handleQuantityChange(item.id, 'increase')}>
                    <FaPlus />
                  </button>
                </QuantityActionsContainer>
                <button key={item.id} onClick={() => handleRemoveItem(item.id)}>
                  <IoTrash size={15} />
                </button>
              </div>
            </li>
          ))
        ) : (
          <span>seu carrinho está vazio</span>
        )}
      </CartList>

      {isCartNull && <TotalPrice>Valor total: {calculateTotal(cart)}</TotalPrice>}
      <LinkButtons>
        <Link to="/" onClick={closeSidebar}>
          Continuar comprando
        </Link>
        {isCartNull && (
          <Link to="/checkout" onClick={closeSidebar}>
            Comprar
          </Link>
        )}
      </LinkButtons>
    </SidebarContainer>
  );
};
