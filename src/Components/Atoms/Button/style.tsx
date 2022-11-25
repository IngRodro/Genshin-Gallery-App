import styled from 'styled-components';
import { ITheme } from '../../../Styles/theme';

interface IButton{
  $color: keyof ITheme['colors'];
  $labelColor: keyof ITheme['colors'];
}

const StyleButton = styled.button<IButton>`
  border: 1px solid transparent;
  height: 25px;
  width: Auto;
  border-radius: 12px;
  padding: 0 20px;
  cursor: pointer;
  background: ${({ theme, $color }) => theme.colors[$color]};
  color: ${({ theme, $labelColor }) => theme.colors[$labelColor]};

  &:hover {
    opacity: 0.8;
  }
`;

export default StyleButton;
