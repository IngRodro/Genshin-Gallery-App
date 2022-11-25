import { createContext, useContext, useEffect, useState } from 'react';
import storage from '../Utils/storage';

const KEY_THEME_NAME = 'theme';

export enum Theme {
  Dark = 'Dark',
  Light = 'Light',
}

export type ThemeContextType = {
  theme: Theme;
  themeToggle: () => void;
}

interface Children {
  children: React.ReactNode;
}

const AppThemeContext = createContext<ThemeContextType>({
  theme: Theme.Light,
  themeToggle: () => {},
});

export const AppThemeProvider = ({ children } : Children ) => {
  const [theme, setTheme] = useState(Theme.Light);

  const setMode = (mode: Theme) => {
    storage.setItem(KEY_THEME_NAME, mode);
    setTheme(mode);
  };

  const themeToggle = () => {
    setMode(theme === Theme.Light ? Theme.Dark : Theme.Light);
  };

  useEffect(() => {
    const deviceTheme =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    const localTheme = storage.getItem(KEY_THEME_NAME);
    if (localTheme) {
      setMode(localTheme);
    } else {
      setMode(deviceTheme ? Theme.Dark : Theme.Light);
    }
  }, []);

  return (
    <AppThemeContext.Provider
      value={{
        theme,
        themeToggle,
      }}
    >
      {children}
    </AppThemeContext.Provider>
  );
};

export const useAppTheme = () => useContext(AppThemeContext);
