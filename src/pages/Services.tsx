import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';

function Services() {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices.',
      image: '/images/web-development.jpg',
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      image: '/images/mobile-development.jpg',
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment solutions.',
      image: '/images/cloud-solutions.jpg',
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design solutions that enhance user experience.',
      image: '/images/ui-ux-design.jpg',
    },
    {
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to grow your business.',
      image: '/images/digital-marketing.jpg',
    },
    {
      title: 'IT Consulting',
      description: 'Expert technology consulting to optimize your business processes.',
      image: '/images/it-consulting.jpg',
    },
  ];

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
          Our Services
        </Typography>

        <Typography variant="h5" paragraph sx={{ textAlign: 'center', mb: 8 }}>
          We offer a comprehensive range of digital services to help your business thrive in the digital age.
        </Typography>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid xs={12} sm={6} md={4} key={service.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={service.image}
                    alt={service.title}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {service.title}
                    </Typography>
                    <Typography>
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom>
            Ready to Get Started?
          </Typography>
          <Typography variant="body1" paragraph>
            Contact us today to discuss how we can help transform your business with our services.
          </Typography>
        </Box>
      </motion.div>
    </Container>
  );
}

export default Services; 