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
      sx={{ borderBottom: 1, borderColor: 'divider', marginBottom: '5%' }}
    >
      <Typography
        component='h2'
        variant='h3'
        color='inherit'
        align='center'
        noWrap
        sx={{ flex: 1 }}
      >
        {title}
      </Typography>
      <IconButton>
        <Typography variant='body1' color='inherit' align='inherit'>
          <Link
            sx={{
              color: '#46cca0',
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
              color: '#46cca0',
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
            color: '#e91e63',
          }}
          href='mailto:djbatson19@gmail.com'
        >
          <EmailIcon />
        </Link>
      </IconButton>
      <IconButton>
        <Link
          sx={{
            color: '#e91e63',
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
            color: '#e91e63',
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
