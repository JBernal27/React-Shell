import { Container, Typography, Box,  Grid } from '@mui/material';
import HomeCard from './components/home-card.component';

const features = [
  {
    title: 'Theme',
    description: 'Customize your theme with Material UI'
  },
  {
    title: 'Axios',
    description: 'Use Axios to make HTTP requests'
  },
];

const HomePage = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          minHeight: '100vh',
          py: 8,
          display: 'flex',
          flexDirection: 'column',
          gap: 8
        }}
      >
        <Box
          component="section"
          sx={{
            textAlign: 'center',
            py: 8
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              mb: 2,
              color: 'primary.main',
              fontWeight: 'bold'
            }}
          >
            Welcome to Our React Project Template
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
          >
            You can use this template to start your next React project.
          </Typography>
        </Box>

        <Grid container spacing={4} component="section">
          {features.map((feature, index) => (
            <Grid item xs={12} md={6} key={index}>
              <HomeCard feature={feature} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default HomePage;