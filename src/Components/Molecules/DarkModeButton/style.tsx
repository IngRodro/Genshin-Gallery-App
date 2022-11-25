import styled from 'styled-components';
import Button from '../../Atoms/Button/style';

// Button With Move Animation
const StyleDarkModeButton = styled(Button)<{ $theme: string }>`
  background: ${({ theme }) => theme.colors.themeButton};
  width: 80px;
  color: ${({ theme }) => theme.colors.text};
  height: 40px;
  border-radius: 1000px;
  border: none;
  align-items: center;
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  outline: none;
  padding: 0 10px;
  transition: all 0.3s ease-in-out;

  &::after {
    content: '';
    display: block;
    width: 40px;
    height: 40px;
    position: absolute;
    background: #fff;
    top: 0;
    right: ${({ $theme }) => ($theme === 'Light' ? '0' : 'unset')};
    left: ${({ $theme }) => ($theme === 'Light' ? 'unset' : '0')};
    border-radius: 100px;
    transition: 0.3s;
    box-shadow: 0 0 7px ${({ theme }) => theme.colors.text};
  }
`
export default StyleDarkModeButton;
