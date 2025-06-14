import React, { useState } from 'react';
import { Container, Typography, Box, Grid, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import './Home.css';

function Home() {
  const [videoError, setVideoError] = useState(false);

  return (
    <div className="home-page">
      {!videoError ? (
        <video
          autoPlay
          muted
          loop
          className="background-video"
          poster="/images/fallback-image.jpg"
          onError={() => setVideoError(true)}
        >
          <source src="/videos/background.mp4" type="video/mp4" />
        </video>
      ) : (
        <div className="background-fallback" />
      )}

      <Container maxWidth="lg" className="content-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h1"
            component="h1"
            className="main-title"
            sx={{
              fontSize: { xs: '2.5rem', md: '4rem' },
              fontWeight: 'bold',
              textAlign: 'center',
              mb: 4,
            }}
          >
            Welcome to EVAAO
          </Typography>
          <Typography
            variant="h5"
            component="p"
            className="subtitle"
            sx={{
              textAlign: 'center',
              mb: 6,
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            Empowering digital innovation through cutting-edge technology solutions
          </Typography>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Button
              component={RouterLink}
              to="/contact"
              variant="contained"
              size="large"
              sx={{ mr: 2 }}
            >
              Get Started
            </Button>
            <Button
              component={RouterLink}
              to="/services"
              variant="outlined"
              size="large"
            >
              Our Services
            </Button>
          </Box>
        </motion.div>

        <Grid container spacing={4} className="features-section">
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="feature-card">
                <h3>Innovative Solutions</h3>
                <p>Cutting-edge technology solutions tailored to your needs.</p>
              </div>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="feature-card">
                <h3>Expert Team</h3>
                <p>Skilled professionals dedicated to your success.</p>
              </div>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="feature-card">
                <h3>24/7 Support</h3>
                <p>Round-the-clock assistance for all your needs.</p>
              </div>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Home; 