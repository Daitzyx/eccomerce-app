import styled from 'styled-components';

export const InputContainer = styled.div`
  width: 100%;
  height: 50px;
  position: relative;
  display: flex;
  justify-content: center;
  border: none;
`;

export const IconButton = styled.div`
  height: 50px;
  position: absolute;
  right: 24px;
  top: 17px;

  svg {
    fill: #abef7f;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 8px 50px 8px 15px;
  border: 1px solid #ccc;
  border-radius: 25px;
`;
