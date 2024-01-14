// styles.js
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

export const CheckoutSummary = styled.div`
  margin-top: 20px;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 8px;
`;

export const CheckoutItem = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr 1fr 20px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  padding: 10px 0;
  column-gap: 10px;

  &:last-child {
    border-bottom: none;
  }

  img {
    grid-row: 1/4;
  }

  span {
    text-align: left;
    margin-right: 10px;
    grid-column: 2/4;
  }

  span:nth-child(2) {
    font-weight: 600;
  }

  button {
    grid-column: 4/5;
    grid-row: 1/4;
  }
`;

export const TotalAmount = styled.div`
  margin-top: 20px;
  font-weight: bold;
  font-size: 22px;
  text-align: right;
`;

export const BuyCart = styled.button`
  height: 40px;
  width: fit-content;
  background-color: #cbffaa;
  color: #333;
  font-weight: 600;
  /* font-size: 1rem; */
  padding: 0 15px;
  border-radius: 8px;
  transition: 0.3s linear;
  animation-duration: 700ms;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  &:hover {
    background-color: #abef7f;
  }
`;
