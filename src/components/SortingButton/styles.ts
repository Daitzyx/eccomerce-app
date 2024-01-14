import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 5px;
  width: 30%;
  justify-content: center;

  border: none;
  position: relative;

  select {
    height: 40px;
    border-radius: 20px;
    border: 1px solid #ccc;
    padding: 10px 5px;
    color: #333;
    background-color: #fff;
  }
`;
