import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import { motion } from 'framer-motion';

function About() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{ textAlign: 'center', mb: 6 }}
        >
          About EVAAO
        </Typography>

        <Typography variant="h5" paragraph sx={{ mb: 4 }}>
          We are a team of passionate technologists dedicated to transforming businesses through innovative digital solutions.
        </Typography>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography variant="h4" gutterBottom>
                Our Mission
              </Typography>
              <Typography paragraph>
                To empower businesses with innovative technology solutions that drive growth and success.
              </Typography>
            </motion.div>
          </Grid>
          <Grid xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography variant="h4" gutterBottom>
                Our Vision
              </Typography>
              <Typography paragraph>
                To be the leading provider of cutting-edge technology solutions that transform businesses.
              </Typography>
            </motion.div>
          </Grid>
        </Grid>

        <Typography variant="h4" gutterBottom align="center" sx={{ mb: 6 }}>
          Our Values
        </Typography>

        <Grid container spacing={4}>
          {[
            {
              title: 'Innovation',
              description: 'We constantly push boundaries to deliver innovative solutions.',
            },
            {
              title: 'Excellence',
              description: 'We strive for excellence in everything we do.',
            },
            {
              title: 'Collaboration',
              description: 'We believe in the power of teamwork and partnership.',
            },
            {
              title: 'Integrity',
              description: 'We conduct our business with honesty and transparency.',
            },
          ].map((value, index) => (
            <Grid xs={12} sm={6} md={3} key={value.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Typography variant="h6" gutterBottom>
                  {value.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {value.description}
                </Typography>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  );
}

export default About; 