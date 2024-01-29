import { Box, Grid, Link, Typography } from '@mui/material';
import Image from 'next/image';
import Skills from './Skills';

const About = () => {

  const actionScriptLink = (
    <Link href='https://en.wikipedia.org/wiki/ActionScript#' target='_blank'>ActionScript</Link>
  );

  return (
    <Box sx={{ py: 4 }} id='about'>
      <Typography variant='h2' gutterBottom>About Me</Typography>
      <Grid container spacing={4}>

        <Grid item xs={12} md={8}>

          <Typography paragraph>
            Hi, I'm Rob - thanks for visiting my website!
          </Typography>

          <Typography paragraph>
            I love building cool things out of code. I got my start in
            programming in 2008, building and modding Flash games using <>{actionScriptLink}</>.
            I learned a lot of lessons the hard way, but had tons of fun solving problems and
            finding ways to continuously improve my projects.
          </Typography>

          <Typography paragraph>
            In 2010 I went to school at the University of Ottawa to earn bachelors degrees
            in Chemical Engineering and Computing Technology. This combination of studies
            gave me the unique opportunity to solve complex problems with code.
          </Typography>

        </Grid>

        <Grid item xs={12} md={4}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Image
              className='rounded-full'
              src='/assets/robert-headshot.jpg'
              width={300}
              height={300}
              alt='Robert Tyssen Photo'
            />
          </Box>
        </Grid>

      </Grid>
      <Box sx={{ py: 4 }}>
        <Skills />
      </Box>
    </Box>
  );
}

export default About;