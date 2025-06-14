import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Avatar,
} from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  const team = [
    {
      name: 'John Doe',
      position: 'CEO & Founder',
      image: 'https://source.unsplash.com/random/400x400?portrait=1',
    },
    {
      name: 'Jane Smith',
      position: 'CTO',
      image: 'https://source.unsplash.com/random/400x400?portrait=2',
    },
    {
      name: 'Mike Johnson',
      position: 'Lead Developer',
      image: 'https://source.unsplash.com/random/400x400?portrait=3',
    },
  ];

  return (
    <Box>
      {/* Company Overview */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 8 }}>
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h2" component="h1" gutterBottom align="center">
              About EVAAO
            </Typography>
            <Typography variant="h6" paragraph align="center">
              Empowering Innovation, Driving Success
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Mission and Vision */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography variant="h4" gutterBottom>
                Our Mission
              </Typography>
              <Typography variant="body1" paragraph>
                At EVAAO, we are committed to delivering innovative solutions that
                transform businesses and drive growth. Our mission is to empower
                organizations with cutting-edge technology and exceptional service.
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography variant="h4" gutterBottom>
                Our Vision
              </Typography>
              <Typography variant="body1" paragraph>
                We envision a future where technology seamlessly integrates with
                business operations, creating efficient, sustainable, and
                innovative solutions for our clients worldwide.
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Team Section */}
      <Box sx={{ bgcolor: 'grey.100', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" align="center" gutterBottom>
            Our Team
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {team.map((member, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Card sx={{ height: '100%' }}>
                    <CardMedia
                      component="img"
                      height="300"
                      image={member.image}
                      alt={member.name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h3">
                        {member.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {member.position}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default About; 