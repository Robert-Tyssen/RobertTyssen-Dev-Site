import { Box, IconButton, Stack, Typography } from '@mui/material';
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Contact = () => {
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant='h4' paragraph>Contact</Typography>
      <Typography paragraph>
        Thanks for checking out my site! Feel free to reach out
        if you're interested in learning more about me
        or the work that I do. You can find me at:
      </Typography>

      {/* Contact info button stack */}
      <Stack direction='row' spacing={6} flexWrap={'wrap'} useFlexGap justifyContent={'center'}>

        {/* LinkedIn button */}
        <IconButton
          edge={'start'}
          color='primary'
          size='large'
          href='https://www.linkedin.com/in/robert-tyssen/'
          target='_blank'
        >
          <FiLinkedin />
        </IconButton>

        {/* Github button */}
        <IconButton
          edge={'start'}
          color='primary'
          size='large'
          href='https://github.com/Robert-Tyssen'
          target='_blank'
        >
          <FiGithub />
        </IconButton>

        {/* Email button */}
        <IconButton
          edge={'start'}
          color='primary'
          size='large'
          href='mailto: rob.tyssen@gmail.com'
          target='_blank'
        >
          <FiMail />
        </IconButton>
      </Stack>

      {/* Copywrite footer */}
      <Typography variant='body2' sx={{ py: 4 }} align='center'>
        © 2024 Robert Tyssen
      </Typography>
    </Box>
  );
}

export default Contact;