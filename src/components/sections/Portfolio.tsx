import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-featured e-commerce platform with advanced product management, secure payment processing, and real-time inventory tracking.',
      image: '/images/portfolio1.jpg',
      link: '#'
    },
    {
      title: 'Mobile Banking App',
      description: 'A secure and user-friendly mobile banking application with features like fund transfer, bill payments, and transaction history.',
      image: '/images/portfolio2.jpg',
      link: '#'
    },
    {
      title: 'Healthcare Management System',
      description: 'An integrated healthcare management system for patient records, appointment scheduling, and medical inventory management.',
      image: '/images/portfolio3.jpg',
      link: '#'
    },
    {
      title: 'Educational Platform',
      description: 'An interactive learning platform with video courses, quizzes, and progress tracking for students and educators.',
      image: '/images/portfolio4.jpg',
      link: '#'
    },
    {
      title: 'Real Estate Portal',
      description: 'A comprehensive real estate portal with property listings, virtual tours, and advanced search capabilities.',
      image: '/images/portfolio5.jpg',
      link: '#'
    },
    {
      title: 'Food Delivery App',
      description: 'A feature-rich food delivery application with real-time order tracking, restaurant ratings, and secure payment options.',
      image: '/images/portfolio6.jpg',
      link: '#'
    }
  ];

  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom>
          Our Work
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" sx={{ mb: 6 }}>
          Check out some of our recent projects
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-8px)'
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {project.description}
                  </Typography>
                  <Button
                    variant="outlined"
                    endIcon={<FaExternalLinkAlt />}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Portfolio; 