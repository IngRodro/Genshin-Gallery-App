import styled from 'styled-components';
import { ITheme } from '../../../Styles/theme';

const StyleButton = styled.button<{
  $color: keyof ITheme['colors'];
  $labelColor: keyof ITheme['colors'];
}>`
  border: 1px solid transparent;
  height: 45px;
  min-width: 125px;
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
