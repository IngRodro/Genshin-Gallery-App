import styled, { keyframes } from 'styled-components';

const rotateAnimation = keyframes`
  to {
    transform: rotate(0deg);
  }
  from {
    transform: rotate(360deg);
  }
`;


const Spinner = styled.span<{ size: string }>`
  display: inline-block;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border: 2px solid #fff;
  border-top-color: #000;
  border-radius: 50%;
  animation: ${rotateAnimation} 0.6s linear infinite;
`;

export default Spinner;
