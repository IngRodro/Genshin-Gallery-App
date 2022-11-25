import styled from 'styled-components';
import { Button } from '../../Atoms/Button';

export const StyleMenuNavbar = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const StyleMenuItem = styled(Button)<{$type: string}>`
  padding: ${({ $type }) => ($type === 'PageItem' ? '0 20px' : '0')};
  margin-right: 10px;
  min-width: auto;
  transition: color 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  font-weight: 700;
  border-radius: ${({ $type }) => ($type === 'PageItem' ? '0' : '50')}%;
  background: transparent;
  &:hover {
    opacity: 1;
    color: ${({ theme }) => theme.colors.primary};
    border-bottom-color: ${({ theme, $type }) =>
      $type === 'PageItem' ? theme.colors.primary : 'primary'};
  }
`;
