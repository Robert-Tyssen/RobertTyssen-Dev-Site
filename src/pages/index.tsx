import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Main from '../components/Main';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Robert Tyssen | Software Developer</title>
      </Head>
      <Main />
    </div>
  )
}
