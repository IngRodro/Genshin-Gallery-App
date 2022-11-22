import React, { memo } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './Styles/global';
import { themeLight, themeDark } from './Styles/theme';
import { useAppTheme, AppThemeProvider } from './Context/themeContext';
import Home from './Home';

const AppRenderTheme = memo(() => {
  const { theme } = useAppTheme();
  return (
    <ThemeProvider theme={theme === 'Light' ? themeLight : themeDark}>
      <GlobalStyle/>
      <Home/>
    </ThemeProvider >
  );
});

const App = () => (
    <AppThemeProvider>
      <AppRenderTheme />
    </AppThemeProvider>
);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
	<React.StrictMode>
		<App/>
	</React.StrictMode>,
);
