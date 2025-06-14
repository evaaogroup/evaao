import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';

const About = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h2" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body1" paragraph>
              We are a team of passionate developers, designers, and technology enthusiasts dedicated to creating innovative digital solutions. With years of experience in the industry, we have successfully delivered numerous projects across various domains.
            </Typography>
            <Typography variant="body1" paragraph>
              Our mission is to help businesses transform their ideas into reality through cutting-edge technology and creative solutions. We believe in building long-term relationships with our clients and providing them with the best possible service.
            </Typography>
            <Paper elevation={3} sx={{ p: 3, mt: 4 }}>
              <Typography variant="h6" gutterBottom>
                Why Choose Us?
              </Typography>
              <Typography variant="body2" paragraph>
                • Experienced team of professionals
              </Typography>
              <Typography variant="body2" paragraph>
                • Cutting-edge technology stack
              </Typography>
              <Typography variant="body2" paragraph>
                • Customized solutions for every client
              </Typography>
              <Typography variant="body2" paragraph>
                • 24/7 support and maintenance
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/images/about-us.jpg"
              alt="About Us"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                boxShadow: 3
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About; 