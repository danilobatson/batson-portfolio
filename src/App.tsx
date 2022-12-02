import React from 'react';
import { Link } from '@mui/material';

// import ExamplesNavbar from './components/ExamplesNavbar.js';
import Stack from '@mui/material/Stack';
import { Container } from '@mui/material/';
import Blog from './components/Blog';
import Typography from '@mui/material/Typography';

export default function ProfilePage(): JSX.Element {
  return (
    <Container maxWidth='xl'>
      <Blog />
      <Typography
        variant='h2'
        id='#work'
        color='white'
        sx={{ fontWeight: 900 }}
      >
        Work
      </Typography>
      <hr />

      <Stack
        sx={{ marginLeft: '10%', marginBottom: '3%', marginTop: '3%' }}
        direction='row'
        spacing={10}
      >
        <Link
          target='_blank'
          rel='noreferrer'
          href='https://www.spicygreenbook.org'
        >
          <Typography
            variant='h4'
            id='#work'
            className='text-blue'
            gutterBottom
          >
            Spicy Green Book
          </Typography>
            <img
              height={200}
              width={'90%'}
              alt='External website link'
              className='img-fluid'
              src={require('./assets/img/spicygreenbook.png')}
            />
        </Link>
        <Link
          target='_blank'
          rel='noreferrer'
          href='https://netflix-twin.vercel.app/login'
        >
          <div>
            <Typography
              variant='h4'
              id='#work'
              className='text-yellow'
              gutterBottom
            >
              Netflix With YouTube{' '}
            </Typography>{' '}
            <img
              height={200}
              width={'90%'}
              alt='External website link'
              className='img-fluid'
              src={require('./assets/img/netflix.png')}
            />
          </div>
        </Link>
      </Stack>
      <Stack direction='row' spacing={8}>
        <Link
          target='_blank'
          rel='noreferrer'
          href='https://xcellence-clothing-176xawzgs-danilobatson.vercel.app/'
        >
          <div>
            <Typography
              variant='h4'
              id='#work'
              className='text-orange'
              gutterBottom
            >
              Excellence Clothing{' '}
            </Typography>{' '}
            <img
              height={200}
              width={'90%'}
              alt='External website link'
              className='img-fluid'
              src={require('./assets/img/excellence.png')}
            />
          </div>
        </Link>
        <Link
          target='_blank'
          rel='noreferrer'
          href='https://expo.dev/@dbatson09/uber-eats?serviceType=classic&distribution=expo-go'
        >
          <div>
            <Typography
              variant='h4'
              id='#work'
              className='text-yellow'
              gutterBottom
            >
              Uber Eats{' '}
            </Typography>{' '}
            <img
              height={200}
              width={'90%'}
              alt='External website link'
              className='img-fluid'
              src={require('./assets/img/uber.jpeg')}
            />
          </div>
        </Link>
        <Link
          target='_blank'
          rel='noreferrer'
          href='https://expo.dev/@dbatson09/food'
        >
          <div>
            <Typography
              variant='h4'
              id='#work'
              className='text-orange'
              gutterBottom
            >
              Restaurant Search Miami{' '}
            </Typography>
            <img
              height={200}
              width={'90%'}
              alt='External website link'
              className='img-fluid'
              src={require('./assets/img/miami.png')}
            />
          </div>
        </Link>
      </Stack>

      <Typography
        sx={{ marginTop: '5%', fontWeight: 900 }}
        id='#work'
        variant='h2'
        color='white'
      >
        Skills
      </Typography>
      <hr />

      <Stack direction='row' spacing={16} sx={{ marginBottom: '3%' }}>
        <Typography variant='h4' className='text-blue'>
          TypeScript
        </Typography>
        <Typography variant='h4' className='text-blue'>
          React
        </Typography>
        <Typography variant='h4' className='text-blue'>
          Node
        </Typography>
        <Typography variant='h4' className='text-blue'>
          Express
        </Typography>
        <Typography variant='h4' className='text-blue'>
          Javascript
        </Typography>
      </Stack>
      <Stack direction='row' spacing={16} sx={{ marginBottom: '3%' }}>
        <Typography variant='h4' className='text-yellow'>
          React Native
        </Typography>
        <Typography variant='h4' className='text-yellow'>
          SQL
        </Typography>
        <Typography variant='h4' className='text-yellow'>
          Postman
        </Typography>
        <Typography variant='h4' className='text-yellow'>
          NextJS
        </Typography>
        <Typography variant='h4' className='text-yellow'>
          Vue
        </Typography>
      </Stack>
      <Stack direction='row' spacing={16} sx={{ marginBottom: '20%' }}>
        <Typography variant='h4' className='text-orange'>
          Mongo DB
        </Typography>
        <Typography variant='h4' className='text-orange'>
          Python
        </Typography>
        <Typography variant='h4' className='text-orange'>
          Redux
        </Typography>
        <Typography variant='h4' className='text-orange'>
          Axios
        </Typography>
        <Typography variant='h4' className='text-orange'>
          Etc...
        </Typography>
      </Stack>
    </Container>
  );
}
