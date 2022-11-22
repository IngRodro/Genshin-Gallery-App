import styled from 'styled-components';
import { ITheme } from '../../../Styles/theme';


const StyleTitle = styled.h2<{
  $color: keyof ITheme['colors'];
  $size: string;
  $lineHeight: string;
  $fontFamily: string;
  theme: ITheme;
  $button: boolean;
}>`
  font-size: ${({ $size }) => $size};
  line-height: ${({ $lineHeight }) => $lineHeight};
  color: ${({ $color, theme }) => theme.colors[$color]};
  font-family:  ${({ $fontFamily }) => $fontFamily};


  ${({ $button }) =>
    $button &&
    `
    cursor: pointer;
  `}
`;


export default StyleTitle;

