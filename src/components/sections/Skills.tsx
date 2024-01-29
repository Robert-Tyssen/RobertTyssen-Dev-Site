import { Box, Chip, Paper, Stack, Typography } from '@mui/material';

interface Skill {
  title: string,
}

const skillList: Skill[] = [
  { title: 'Firebase' },
  { title: 'Supabase' },
  { title: 'Java' },
  { title: 'PostgreSQL' },
  { title: 'JavaScript / TypeScript' },
  { title: 'SQL' },
  { title: 'Flutter' },
  { title: 'Git' },
  { title: 'React' },
  { title: 'Node.js' },
  { title: 'Cloud (AWS, GCP)' },
  { title: 'REST APIs' },
  { title: 'NoSQL' },
  { title: 'Data Modelling' },
  { title: 'Performance Tuning' },
  { title: 'Jira' },
]

const Skills = () => {
  return (
    <Paper variant='outlined' sx={{ p: 4, borderRadius: 8 }}>
      <Box>
        <Typography variant='h4' paragraph>Technical Skills</Typography>
        <Stack spacing={2} direction='row' flexWrap='wrap' useFlexGap >
          {skillList.map((e, index) => (
            <Chip
              key={index}
              label={e.title}
            />
          ))}
        </Stack>
        <Typography sx={{ pt: 4 }}>
          These are just some of the skills and technologies {"I've"} been into recently!
          I am continuously learning, and always looking for new growth opportunities.
        </Typography>
      </Box>
    </Paper>
  );
}

export default Skills;