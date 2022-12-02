import * as React from 'react';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';



const theme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='lg'>
        <Header title="Danilo Batson's Portfolio" />
        <main>
          <Grid2 container spacing={4}>
            <Grid2 xs={8}>
              <MainFeaturedPost />
            </Grid2>
            <Grid2 xs={4}>
              <MainFeaturedPost photo={'../assets/img/Danilo.jpeg'} />
            </Grid2>
          </Grid2>

        </main>
      </Container>
    </ThemeProvider>
  );
}
