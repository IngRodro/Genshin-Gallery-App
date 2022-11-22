import StyleTitle from './style';
import { ITheme } from '../../../Styles/theme';

interface ITitle {
  children: React.ReactNode;
  color:  keyof ITheme['colors'];
  size: string;
  lineHeight: string;
  button: boolean;
  fontFamily: string;
}

const Title  = ({
  children ,
  color,
  size,
  lineHeight,
  button,
  fontFamily,
}: ITitle) => (
    <StyleTitle $color={color} $size={size} $lineHeight={lineHeight} $button={button} $fontFamily={fontFamily}>
      {children}
    </StyleTitle>
  );


export default Title;
