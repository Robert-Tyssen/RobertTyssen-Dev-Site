import { Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';

const Hero = () => {

  return (
    <Box sx={{ display: 'inline-flex', flexWrap: 'wrap', alignItems: 'center', alignContent: 'center', justifyContent: 'center', minHeight: '100vh', height: '100vh'}}>
      
      <Box>
        <Typography variant='h3'>Hi, my name is</Typography>
        <Typography variant='h1'>Robert Tyssen</Typography>
        <Typography variant='h2' py={1}>I'm a software developer</Typography>
        <Typography>
          I am a dedicated developer and tech enthusiast with over 8 years
          of experience in engineering, software development, and
          consulting. I have a strong passion for learning and staying
          up-to-date with emerging technologies and industry trends. My
          objective is to contribute my expertise to develop high-quality,
          innovative products and services, collaborating with a motivated
          and diverse team.
        </Typography>
        <Box sx={{ py: 2 }}>
          <Button
            variant='outlined'
            startIcon={<DownloadRoundedIcon />}
            href='/robert-tyssen-resume.pdf'
            download={'Robert-Tyssen-Resume'}
          >
            Download Resume
          </Button>
        </Box>
        <Box>
          <IconButton edge={'start'} color='primary' size='large'><FaLinkedin /></IconButton>
          <Box sx={{ m: 1, display: 'inline' }} />
          <IconButton edge={'start'} color='primary' size='large'><FaGithub /></IconButton>
          <Box sx={{ m: 1, display: 'inline' }} />
          <IconButton edge={'start'} color='primary' size='large'><EmailRoundedIcon /></IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default Hero;