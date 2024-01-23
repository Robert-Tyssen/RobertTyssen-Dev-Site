import '@/styles/globals.css'
import type { AppProps } from 'next/app';
import ResponsiveNavBar from '../components/ResponsiveAppBar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ResponsiveNavBar />
      <Component {...pageProps} />
    </>
  );
}
