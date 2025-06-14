import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) => theme.palette.grey[900],
        color: 'white'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              We are a team of passionate developers and designers dedicated to creating innovative digital solutions that help businesses grow and succeed in the digital world.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton
                component={Link}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'white' }}
              >
                <FaFacebookF />
              </IconButton>
              <IconButton
                component={Link}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'white' }}
              >
                <FaTwitter />
              </IconButton>
              <IconButton
                component={Link}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'white' }}
              >
                <FaLinkedinIn />
              </IconButton>
              <IconButton
                component={Link}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'white' }}
              >
                <FaInstagram />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="#" color="inherit" underline="hover">
                Home
              </Link>
              <Link href="#about" color="inherit" underline="hover">
                About Us
              </Link>
              <Link href="#services" color="inherit" underline="hover">
                Services
              </Link>
              <Link href="#portfolio" color="inherit" underline="hover">
                Portfolio
              </Link>
              <Link href="#contact" color="inherit" underline="hover">
                Contact
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contact Info
            </Typography>
            <Typography variant="body2" paragraph>
              123 Business Street
              <br />
              Suite 100
              <br />
              New York, NY 10001
            </Typography>
            <Typography variant="body2" paragraph>
              Phone: +1 (555) 123-4567
              <br />
              Email: info@example.com
            </Typography>
          </Grid>
        </Grid>
        <Box
          sx={{
            mt: 4,
            pt: 2,
            borderTop: 1,
            borderColor: 'rgba(255, 255, 255, 0.1)',
            textAlign: 'center'
          }}
        >
          <Typography variant="body2" color="inherit">
            © {new Date().getFullYear()} Your Company Name. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 