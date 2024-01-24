import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';

const About = () => {
  return (
    <Box sx={{ py: '80px' }} id='about'>
      <Typography variant='h2'>About Me</Typography>
      <Grid container spacing={2}>

        <Grid item xs={12} md={8}>
          <Typography>
            TO BE COMPLETED
          </Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box sx={{display: 'flex', justifyContent: 'center'}}>
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
    </Box>
  );
}

export default About;