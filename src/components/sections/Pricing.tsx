import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';

const Pricing = () => {
  const plans = [
    {
      title: 'Basic Plan',
      price: '₹42,000/month',
      description: 'Best for small businesses and startups.',
      features: [
        'Website Maintenance (upto 5 pages)',
        'Basic Cloud Hosting (50GB storage)',
        'Email Support (Mon-Fri, 9am-5pm)',
        'Security Updates',
        'Monthly Performance Reports'
      ]
    },
    {
      title: 'Standard Plan',
      price: '₹84,000/month',
      description: 'Ideal for growing businesses.',
      features: [
        'Website Maintenance (upto 15 pages)',
        'Cloud Hosting (200GB storage)',
        'Email and Chat Support (7 days a week)',
        'Advanced Security Updates',
        'Bi-Weekly Performance Reports',
        'SEO Optimization'
      ]
    },
    {
      title: 'Premium Plan',
      price: '₹168,000/month',
      description: 'Perfect for enterprises.',
      features: [
        'Unlimited Website Maintenance',
        'Dedicated Cloud Hosting (1TB storage)',
        '24/7 Priority Support (Email, Chat, and Phone)',
        'Custom Security Solutions',
        'Weekly Performance Reports',
        'Full SEO & Marketing Integration',
        'Custom IT Consultation (4 hours/month)'
      ]
    },
    {
      title: 'Custom Plan',
      price: 'Starting Price: Contact Us',
      description: 'Tailored IT solutions for your unique needs.',
      features: [
        'Fully Customized Services',
        'Enterprise-Grade Solutions',
        'Dedicated IT Support Team',
        'Advanced Cloud Hosting Options',
        'Specialized Security & Compliance Solutions'
      ]
    }
  ];

  return (
    <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom>
          Our Pricing Plans
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" sx={{ mb: 6 }}>
          We offer flexible pricing tailored to your needs, ensuring you get the best value for our top-notch IT solutions.
        </Typography>
        <Grid container spacing={4}>
          {plans.map((plan) => (
            <Grid item xs={12} sm={6} md={3} key={plan.title}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-8px)'
                  }
                }}
              >
                <Typography variant="h5" component="h3" gutterBottom>
                  {plan.title}
                </Typography>
                <Typography variant="h4" color="primary" gutterBottom>
                  {plan.price}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {plan.description}
                </Typography>
                <Box component="ul" sx={{ mt: 2, mb: 3, pl: 2 }}>
                  {plan.features.map((feature) => (
                    <Typography
                      component="li"
                      variant="body2"
                      color="text.secondary"
                      key={feature}
                      sx={{ mb: 1 }}
                    >
                      {feature}
                    </Typography>
                  ))}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Pricing; 