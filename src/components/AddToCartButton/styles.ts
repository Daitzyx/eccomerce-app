import styled from 'styled-components';

export const Button = styled.button`
  background-color: #cbffaa;
  padding: 0 15px;
  border-radius: 8px;
  transition: 0.3s linear;
  animation-duration: 700ms;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  color: #333;

  &:hover {
    background-color: #abef7f;
  }
`;
