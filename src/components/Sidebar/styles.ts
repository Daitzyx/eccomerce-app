import styled from 'styled-components';

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  right: -100%;
  width: 500px;
  height: 100%;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: right 0.3s ease-in-out;
  padding: 10px 15px;
  z-index: 5;

  &.open {
    right: 0;
  }

  button {
    background-color: #cbffaa;
    border-radius: 5px;
    padding: 5px 10px;
    border: none;

    &:disabled {
      background-color: #ddd;
    }
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  span {
    font-weight: 600;
    font-size: 1.4rem;
  }
`;

export const CloseButton = styled.button`
  background-color: #cbffaa;
  border-radius: 5px;
  padding: 5px 10px;
  border: none;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
`;

export const QuantityActionsContainer = styled.div`
  height: 25px;
  display: flex;
  gap: 1px;
  border: 1px solid grey;
  border-radius: 25px;
  align-items: center;

  border: 1px solid #3a9500;
  border-radius: 25px;

  button {
    background-color: transparent;
    height: 22px;
  }

  button:first-child {
    svg {
      fill: #898989;
    }
  }

  button:last-child {
    svg {
      fill: #3a9500;
    }
  }
`;

export const CartList = styled.ul`
  list-style: none;
  padding: 20px 0;

  li {
    margin-bottom: 10px;
    padding: 10px 10px;
    border: 1px solid #cbffaa;

    display: grid;
    grid-template-columns: 60px 1fr 1fr;
    gap: 10px;

    input {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: none;
      background-color: #cbffaa;
      padding: 2px 2px;
      text-align: center;
    }

    div:nth-child(2) {
      grid-column: 2/3;
      grid-row: 1/3;
      display: flex;
      gap: 3px;
      align-items: start;
    }

    div:nth-child(3) {
      display: flex;
      gap: 3px;
      grid-column: 3/4;
      grid-row: 1/3;
      justify-self: end;
      align-self: center;
    }
  }

  @media (max-width: 767px) {
    li {
      div:nth-child(2) {
        grid-column: 2/4;
        grid-row: 1/3;
        display: flex;
        gap: 3px;
        align-items: start;
      }

      div:nth-child(3) {
        display: flex;
        gap: 3px;
        grid-column: 3/4;
        grid-row: 2/3;
        justify-self: end;
        align-self: center;
      }
    }
  }
`;

export const LinkButtons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;

  a {
    background-color: #fff;
    border-radius: 5px;
    padding: 5px 10px;
    border: 2px solid #cbffaa;
    cursor: pointer;

    text-decoration: none;
    font-weight: 500;
    color: #4b4b4b;
    text-align: center;
  }

  a:nth-child(2) {
    background-color: #cbffaa;
  }
`;

export const TotalPrice = styled.p`
  margin: 10px 0;
`;
