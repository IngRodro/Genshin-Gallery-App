import { Moon } from '../../Atoms/Icons/Moon';
import { Sun } from '../../Atoms/Icons/Sun';
import StyleDarkModeButton from './style';
import { useAppTheme } from '../../../Context/themeContext';

const DarkModeButton = () => {
  const { themeToggle, theme } = useAppTheme();
  return (
    <StyleDarkModeButton
      onClick={() => {
        themeToggle();
      }}
      $color={'transparent'}
      $labelColor={'text'}
      $theme={theme}
    >
      <Sun />
      <Moon />
    </StyleDarkModeButton>
  );
};

export default DarkModeButton;
