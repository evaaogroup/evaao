import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';

const WhyChooseUs = () => {
  const stats = [
    {
      title: 'Project Done',
      value: '1000+',
      image: '/images/chose1.png'
    },
    {
      title: 'Happy Clients',
      value: '900+',
      image: '/images/chose2.png'
    },
    {
      title: 'Awards',
      value: '100+',
      image: '/images/chose3.png'
    }
  ];

  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="left" gutterBottom>
          Why Choose Us
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {stats.map((stat) => (
            <Grid item xs={12} md={4} key={stat.title}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  textAlign: 'center',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-8px)'
                  }
                }}
              >
                <Box
                  component="img"
                  src={stat.image}
                  alt={stat.title}
                  sx={{ width: 80, height: 80, mb: 2 }}
                />
                <Typography variant="h5" component="h3" gutterBottom>
                  {stat.title}
                </Typography>
                <Typography variant="h3" color="primary" sx={{ fontWeight: 'bold', mb: 2 }}>
                  {stat.value}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChooseUs; 