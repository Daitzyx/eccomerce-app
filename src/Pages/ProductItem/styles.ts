import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  a {
    line-height: 1.3rem;
    align-self: center;
    background-color: #fff;
    border-radius: 5px;
    padding: 5px 10px;
    border: 2px solid #cbffaa;
    cursor: pointer;

    text-decoration: none;
    font-weight: 500;
    color: #4b4b4b;
    text-align: center;

    grid-column: 1/2;
    grid-row: 2/3;
  }

  button:last-child {
    height: 35px;
    grid-column: 2/3;
    grid-row: 2/3;
  }
`;

export const ProductDetailContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr min-content;
  gap: 20px;
`;

export const ProductImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 8px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    margin-bottom: 8px;
  }
`;
