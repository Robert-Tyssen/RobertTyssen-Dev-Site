import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import { Box, Button, Paper, Typography } from '@mui/material';

const Hero = () => {

  return (
    <Box id='hero' sx={{ py: 4, }} >
      <Paper variant='outlined' sx={{ p: 4, borderRadius: 8 }} >
        <Box>
          <Typography variant='h4' color={'primary'} gutterBottom>Hi, my name is</Typography>
          <Typography variant='h1'>Robert Tyssen</Typography>
          <Typography variant='h3' py={1}>I'm a software developer</Typography>
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
              startIcon={<DownloadRoundedIcon />}
              href='/robert-tyssen-resume.pdf'
              download={'Robert-Tyssen-Resume'}
            >
              Download Resume
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}

export default Hero;