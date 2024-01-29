import { Box, IconButton, Stack, Typography } from '@mui/material';
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Contact = () => {
  return (
    <Box sx={{ py: 4 }}>
      <Typography variant='h4' paragraph>Contact</Typography>
      <Typography paragraph>
        {`Thanks for checking out my site! I am always updating content, so feel free to visit again later for updates.
        If you'd like to learn more about me or the work that I do, I'd love to chat more!`}
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