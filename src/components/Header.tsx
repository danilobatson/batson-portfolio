import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <Toolbar
      sx={{ borderBottom: 1, borderColor: 'divider', margin: '5% auto',}}
    >
      <Typography
        component='h2'
        variant='h3'
        align='center'
        color='inherit'
        noWrap
        sx={{ flex: 1, fontWeight: 'bold' }}
      >
        {title} 
      </Typography>
      <IconButton>
        <Typography variant='body1' color='inherit' align='inherit'>
          <Link
            sx={{
              color: '#ffffff',
              fontWeight: 700,
            }}
            href='#work'
          >
            <u>Work</u>
          </Link>
        </Typography>
      </IconButton>
      <IconButton>
        <Typography variant='body1' color='inherit' align='inherit'>
          <Link
            sx={{
              color: '#ffffff',
              fontWeight: 700,
            }}
            href='#skills'
          >
            <u>Skills</u>
          </Link>
        </Typography>
      </IconButton>
      <IconButton>
        <Link
          sx={{
            color: '#0ca2ce',
          }}
          href='mailto:djbatson19@gmail.com'
        >
          <EmailIcon />
        </Link>
      </IconButton>
      <IconButton>
        <Link
          sx={{
            color: '#f79234',
          }}
          href='https://github.com/danilobatson'
          target='_blank'
        >
          <GitHubIcon />
        </Link>
      </IconButton>
      <IconButton>
        <Link
          sx={{
            color: '#fef07a',
          }}
          href='https://www.linkedin.com/in/danilo-batson/'
          target='blank'
        >
          <LinkedInIcon />
        </Link>
      </IconButton>
    </Toolbar>
  );
}
