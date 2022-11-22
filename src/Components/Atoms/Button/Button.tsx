// Button
import StyleButton from './style';
import { Loading } from '../Loading';
import { ITheme } from '../../../Styles/theme';

interface IButton {
  onClick: () => void;
  color: keyof ITheme['colors'];
  labelColor: keyof ITheme['colors'];
  loading: boolean;
  disabled: boolean;
  children: React.ReactNode;
  className: string;
}

const Button = ({
  onClick,
  color = 'primary',
  labelColor = 'secondary',
  loading = false,
  disabled = false,
  children,
}: IButton) => (
    <StyleButton
      $color={color}
      $labelColor={labelColor}
      onClick={onClick}
      disabled={loading || disabled}
    >
      {loading && <Loading size='2em'/>}
      {children}
    </StyleButton>
  );

export default Button;
