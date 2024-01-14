import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  margin: 16px;
  text-align: center;

  border: none;
  border-radius: 15px;
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.1);
`;

export const ProductInfo = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p:last-child {
    font-weight: 300;
    color: #8e8e8e;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 8px;
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

export const ButtonsContainer = styled.div`
  width: 100%;
  margin-top: 25px;
  display: flex;
  justify-content: space-between;

  a {
    background-color: #fff;
    border-radius: 8px;
    padding: 5px 10px;
    border: 2px solid #cbffaa;

    text-decoration: none;
    font-weight: 400;
    color: #4b4b4b;

    align-self: center;
  }
`;
