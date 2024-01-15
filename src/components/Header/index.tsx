import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useSidebar } from '../../context/SidebarContext';

import { CartIcon, HeaderContainer, Nav } from './styles';
import { TiShoppingCart } from 'react-icons/ti';

export const Header = () => {
  const { cart } = useCart();
  const { openSidebar } = useSidebar();

  return (
    <>
      <HeaderContainer>
        <h1>E-Sell</h1>
        <Nav>
          <Link to="/">Produtos</Link>
        </Nav>

        <button onClick={openSidebar}>
          <CartIcon>
            <TiShoppingCart />
            {cart.length > 0 && <span>{cart.length}</span>}
          </CartIcon>
        </button>
      </HeaderContainer>
    </>
  );
};
