import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

interface employer {
  name: string,
  jobs: job[],
}

interface job {
  title: string,
  timespan: string,
  description: string,
}

const myEmployers: employer[] = [
  {
    name: 'Accenture',
    jobs: [
      {
        title: 'Business Architecture Specialist',
        timespan: 'since 2021',
        description: `
          I am currently a backend developer and build business-critical services for a
          large SAP S/4 HANA implementation. I lead teams through feature development, issue 
          resolution, and code deployment to QA and production systems. I routinely work with
          debugging, testing and performance tracing tools to identify issues and optimize services.
          As an expert of our codebase I frequently support cross-functional discussions between
          project teams and stakeholders to plan new development work. I spearhead performance
          optimization work to ensure our services are reliable, highly available and provide an
          excellent user experience.
        `,
      },
      {
        title: 'Business Architecture Senior Analyst',
        timespan: '2019 - 2021',
        description: `
          As a senior analyst, I used BRF+ and ABAP programming languages to build 
          calculation, validation and analytical services for SAP S/4 HANA systems.
          I designed SQL queries for complex and high-volume relational data to 
          build a risk assessment engine for financial transactions. I also authored
          comprehensive functional specifications to translate complex business requirements
          into actionable development tasks.
        `,
      }
    ]
  },
  {
    name: 'SanEcoTec Ltd.',
    jobs: [
      {
        title: 'Engineering Project Manager',
        timespan: '2016 - 2019',
        description: `
          As engineering project manager, I led a small team of engineers and scientists 
          to design water treatment systems for various applications, including  municipal 
          drinking water and greenhouse irrigation. I performed engineering design and 
          cost estimation, and coordinated implementations with clients to ensure on-time 
          project delivery. While this was not a software development role, I had the opportunity 
          to work with many innovative technologies such as IoT devices and process instrumentation,
          programmable logic controllers, and cloud-based data collection platforms.
        `,
      },
      {
        title: 'Technology Coordinator',
        timespan: '2015 - 2016',
        description: `
          As my first experience after completing undergrad, this role provided me the opportunity
          to work closely with clients and senior leadership to design and develop water treatment
          projects through their entire lifecycles. I conducted lab-scale experiments and tests, 
          collected data, and supported engineering and technical design efforts.
        `,
      }
    ]
  }
];

const Experience = () => {
  return (
    <Box sx={{ py: 4 }} id='experience'>
      <Typography variant='h2' gutterBottom>Work Experience</Typography>

      <Typography paragraph>
        Here's a timeline of my professional experience and accomplishments.
      </Typography>

      <Box paddingTop={2}>
        {myEmployers.map((e) => (
          <Grid container spacing={2} paddingBottom={4}>

            <Grid item xs={12} md={3}>
              <Typography variant='h5'>{e.name}</Typography>
            </Grid>

            <Grid item xs={12} md={9}>
              <Paper variant='outlined' sx={{ p: 4, borderRadius: 8 }}>
                {e.jobs.map((j) => (
                  <Box>
                    <Typography variant='h5'>{j.title}</Typography>
                    <Typography fontWeight='600'>{j.timespan}</Typography>
                    <Typography paragraph>{j.description}</Typography>
                  </Box>
                ))}
              </Paper>
            </Grid>
          </Grid>
        ))}
      </Box>

    </Box>
  )
}

export default Experience;