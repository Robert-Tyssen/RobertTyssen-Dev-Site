import '@/styles/globals.css'
import type { AppProps } from 'next/app';
import ResponsiveNavBar from '../components/nav/MyAppBar'
import appTheme from '@/styles/theme';
import { ThemeProvider } from '@mui/material';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={appTheme}>
      <ResponsiveNavBar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
