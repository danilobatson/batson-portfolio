import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

interface Photo {
  photo?: string;
}

export default function MainFeaturedPost({ photo }: Photo) {
  const toggle = photo ? true : false;
  return (
    <Paper
    elevation={10}
      sx={{
        position: 'relative',
        backgroundColor: 'inherit',
        color: '#fff',
        mb: 4,
        maxWidth: '100%',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.1)',
        }}
      />
      {}

      {toggle && <img  width={'100%'} height={'30%'} src={require('../assets/img/Danilo.jpeg')} />}

      {!toggle && (
        <Grid sx={{ px: 3 }} container>
          <Typography variant='h5' color='inherit' gutterBottom>
            About Me
          </Typography>
          <Typography variant='body1' color='inherit' paragraph>
            I'm Danilo Batson and I am a full stack web developer. I'm currently
            working on my portfolio and learning new skills everyday. I'm looking 
            for my next position that will continue to allow me to grow as a web 
            developer to boost the foundation I have in place
          </Typography>
          <Typography variant='body1' color='inherit' paragraph>
            I currently work full-time at a startup called Mongoose Research as
            a Software Engineer where I work on our platform's integrations and
            chat platform. Before working at Mongoose Research, I worked at
            Credit Key as a Frontend Developer.
          </Typography>
          <Typography variant='body1' color='inherit' paragraph>
            Prior to starting my coding career, I launched a nonprofit right
            after the start of COVID-19 called Spicy Green Bookto help empower
            Black-owned businesses. In creating and running this nonprofit I
            quickly learned the various aspects of running a tech startup.
          </Typography>
          <Typography variant='h5' color='inherit' gutterBottom>
            Spicy Green Book
          </Typography>
          <Typography variant='body1' color='inherit' paragraph>
            Spicy Green Book is a completely volunteer based native mobile app
            and web app that helps people discover Black-owned restaurants near
            them. I worked with various volunteer product/project managers,
            designers, photographers, marketers, videographers, and programmers
            all collaborating to help bring a software product to market.
          </Typography>
          <Typography variant='body1' color='inherit' paragraph>
            We were constantly onboarding new people and quickly integrating
            them into our workflow. We could always use more programmers so I
            decided to learn how to code so I could help.
          </Typography>
          <Typography variant='h5' color='inherit' gutterBottom>
            Developer Beginnings
          </Typography>
          <Typography variant='body1' color='inherit' paragraph>
            I did a lot of self-teaching as well as enrolling myself in a coding
            camp! I have several certifications from Full Stack Open,
            ZeroToMastery, Codecademy, Udemy, The Odin Project, Free Code Camp.
          </Typography>
          <Typography variant='body1' color='inherit' paragraph>
            I have quickly learned that I really enjoy programming and have
            continued to contribute to Spicy Green Book as well as other various
            projects.
          </Typography>
          <Typography variant='body1' color='inherit' paragraph>
            I definitely have a passion for programming and would like to make
            it into a career. Please consider bringing me into your
            organization. I learn fast and am looking forward to being a
            value-added employee as fast as possible!
          </Typography>
        </Grid>
      )}
    </Paper>
  );
}
