import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
} from '@mui/material';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      description:
        'Custom web applications built with modern technologies and best practices.',
      image: 'https://source.unsplash.com/random/400x300?web',
      features: [
        'Responsive Design',
        'Progressive Web Apps',
        'E-commerce Solutions',
        'Content Management Systems',
      ],
    },
    {
      title: 'Mobile Development',
      description:
        'Native and cross-platform mobile applications for iOS and Android.',
      image: 'https://source.unsplash.com/random/400x300?mobile',
      features: [
        'iOS Development',
        'Android Development',
        'Cross-platform Solutions',
        'App Store Optimization',
      ],
    },
    {
      title: 'Cloud Solutions',
      description:
        'Scalable cloud infrastructure and deployment solutions.',
      image: 'https://source.unsplash.com/random/400x300?cloud',
      features: [
        'Cloud Migration',
        'Serverless Architecture',
        'DevOps Automation',
        'Cloud Security',
      ],
    },
    {
      title: 'Digital Marketing',
      description:
        'Comprehensive digital marketing strategies to grow your business.',
      image: 'https://source.unsplash.com/random/400x300?marketing',
      features: [
        'SEO Optimization',
        'Social Media Marketing',
        'Content Marketing',
        'Analytics & Reporting',
      ],
    },
  ];

  return (
    <Box>
      {/* Header */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 8 }}>
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h2" component="h1" gutterBottom align="center">
              Our Services
            </Typography>
            <Typography variant="h6" paragraph align="center">
              Comprehensive Solutions for Your Business Needs
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Services Grid */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card sx={{ height: '100%' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={service.image}
                    alt={service.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h4" component="h2">
                      {service.title}
                    </Typography>
                    <Typography variant="body1" paragraph>
                      {service.description}
                    </Typography>
                    <Box sx={{ mt: 2 }}>
                      <Typography variant="h6" gutterBottom>
                        Key Features:
                      </Typography>
                      <ul>
                        {service.features.map((feature, idx) => (
                          <li key={idx}>
                            <Typography variant="body2">{feature}</Typography>
                          </li>
                        ))}
                      </ul>
                    </Box>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ mt: 2 }}
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Call to Action */}
      <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
        <Container maxWidth="md">
          <Typography variant="h4" align="center" gutterBottom>
            Ready to Get Started?
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            Contact us today to discuss how we can help you achieve your business goals.
          </Typography>
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button variant="contained" color="primary" size="large">
              Contact Us
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Services; 