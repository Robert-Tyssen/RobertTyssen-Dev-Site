import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Hero from '../components/sections/Hero';
import MyAppBar from '../components/nav/MyAppBar';
import { Box } from '@mui/material';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Robert Tyssen | Software Developer</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      {/* Main container */}
      <Box sx={{ display: 'flex', justifyContent: 'center', bgcolor: 'background.default', }}>
        <Box sx={{ maxWidth: 'md', px: 4, }}>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </Box>
      </Box>

    </div>
  )
}
