import { StyleMenuItem, StyleMenuNavbar } from './style';
import { DarkModeButton } from '../DarkModeButton';

const MenuNavbar = () => (
  <StyleMenuNavbar>
    <StyleMenuItem color='transparent' labelColor='text' $type={'PageItem'}>
      Mondstadt
    </StyleMenuItem>
    <StyleMenuItem color='transparent' labelColor='text' $type={'PageItem'}>
      Liyue
    </StyleMenuItem>
    <StyleMenuItem
      color='transparent'
      labelColor='text'
      $type={'PageItem'}
    >
      Inazuma
    </StyleMenuItem>
    <DarkModeButton />
  </StyleMenuNavbar>
);

export default MenuNavbar;
