import StyleTitle from './style';
import { ITheme } from '../../../Styles/theme';

interface ITitle {
  children?: string;
  color?:  keyof ITheme['colors'];
  size?: string;
  lineHeight?: string;
  button?: boolean;
  fontFamily?: string;
}

const Title  = ({
  children = '',
  color = 'text',
  size = '24px',
  lineHeight = '36px',
  button = false,
  fontFamily = 'Roboto',
}: ITitle) => (
    <StyleTitle $color={color} $size={size} $lineHeight={lineHeight} $button={button} $fontFamily={fontFamily}>
      {children}
    </StyleTitle>
  );


export default Title;
