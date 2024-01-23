import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Main from '../components/Main';
import ResponsiveAppBar from '../components/ResponsiveAppBar';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Robert Tyssen | Software Developer</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Main />
    </div>
  )
}
