import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createTheme, NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
const lightTheme = createTheme({
  type: 'light',
})

const darkTheme = createTheme({
  type: 'dark',
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <NextThemesProvider
    defaultTheme="dark"
    attribute="class"
    value={{
      light: lightTheme.className,
      dark: darkTheme.className
    }}
  >
    <NextUIProvider>
      <App />
    </NextUIProvider>
  </NextThemesProvider>
);
