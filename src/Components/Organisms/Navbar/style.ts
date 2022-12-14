import styled from 'styled-components';

export const StyleNavbar = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  margin: 20px;
  right: 0;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 80px;
  backdrop-filter: saturate(180%) blur(10px);
  box-shadow: rgb(2 1 1 / 10%) 0 5px 20px -5px;
  background: ${({ theme }) => theme.colors.nav};
  z-index: ${({ theme }) => theme.zIndex.nav};
`;
