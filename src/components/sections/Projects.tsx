import { Box, Link, Typography } from '@mui/material'

const Projects = () => {
  return (
    <Box sx={{ py: 4 }} id='projects'>
      <Typography variant='h2' gutterBottom>My Projects</Typography>
      <Typography>
        This section is currently under construction - check back later to see more of
        what I'm working on. In the meantime, feel free to browse my 
        public repos on <Link href='https://github.com/Robert-Tyssen'>Github</Link>!
        I also have some private repos that I'd be happy to discuss.
      </Typography>
    </Box>
  )
}

export default Projects;