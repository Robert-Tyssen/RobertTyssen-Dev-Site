import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import { Box } from '@mui/material';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import Hero from '../components/sections/Hero';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Robert Tyssen | Software Developer</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      {/* Main container */}
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        bgcolor: 'background.default',
      }}>
        <Box sx={{ maxWidth: 'md', px: 4, pt: 8 }}>
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
