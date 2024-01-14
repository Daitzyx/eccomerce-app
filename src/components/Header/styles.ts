import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  height: 80px;
  top: 0;
  left: 0;
  background-color: #333;

  color: white;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 10px;
  z-index: 1;
  h1 {
    font-size: 1.2rem;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;

  a {
    color: white;
    text-decoration: none;
    font-size: 18px;
  }
`;

export const CartIcon = styled.div`
  position: relative;

  svg {
    width: 24px;
    height: 24px;
    fill: white;
  }

  span {
    position: absolute;
    width: 20px;
    height: 20px;
    top: -8px;
    right: -8px;
    background-color: red;
    color: white;
    border-radius: 50%;
    padding: 4px;
    font-size: 12px;
    line-height: 100%;
    text-align: center;
  }
`;
