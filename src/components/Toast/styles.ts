import styled from 'styled-components';

export const ToastContainer = styled.div`
  position: fixed;
  top: 35px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  color: #4ebf06;
  padding: 10px 20px;
  border-radius: 4px;
  border: 1px solid #4ebf06;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  text-align: center;

  span {
    color: #333;
    font-weight: 700;
  }
`;
