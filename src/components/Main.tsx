import { Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import Person2RoundedIcon from '@mui/icons-material/Person2Rounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';

const Main = () => {

  return (
    <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
      <Box sx={{ py: 16, px: 4, display: 'inline-flex', flexWrap: 'wrap', alignItems: 'center', alignContent: 'center', justifyContent: 'center', maxWidth: '1240px' }}>
        <Image
          className='rounded-full p-8 width-full max-w-[400px]'
          src='/assets/robert-headshot.jpg'
          width={350}
          height={350}
          alt='Robert Tyssen Photo'
        />
        <Box sx={{ maxWidth: 720 }}>
          <Typography variant='h2'>Robert Tyssen</Typography>
          <Typography variant='h3' py={1}>Software Developer</Typography>
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
              variant='contained'
              startIcon={<Person2RoundedIcon />}
            >
              About Me
            </Button>
            <Box sx={{ m: 1, display: 'inline' }} />
            <Button
              variant='outlined'
              startIcon={<DownloadRoundedIcon />}
            >
              Resume
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
    </Box>
  );
}

export default Main;