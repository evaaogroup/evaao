import React from 'react';
import { Container, Grid, Typography, Link, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <Box
      component="footer"
      className="bg-gray-900 text-white py-12 mt-auto"
      sx={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}
    >
      <Container>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 4 }}>
          <Box>
            <Typography variant="h6" className="text-xl font-bold mb-4">
              EVAAO
            </Typography>
            <Typography variant="body2" className="text-gray-400">
              Empowering digital innovation through cutting-edge technology solutions.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" className="text-xl font-bold mb-4">
              Quick Links
            </Typography>
            <Box className="space-y-2">
              <Link
                component={RouterLink}
                to="/about"
                className="text-gray-400 hover:text-white block"
              >
                About Us
              </Link>
              <Link
                component={RouterLink}
                to="/services"
                className="text-gray-400 hover:text-white block"
              >
                Services
              </Link>
              <Link
                component={RouterLink}
                to="/contact"
                className="text-gray-400 hover:text-white block"
              >
                Contact
              </Link>
            </Box>
          </Box>

          <Box>
            <Typography variant="h6" className="text-xl font-bold mb-4">
              Legal
            </Typography>
            <Box className="space-y-2">
              <Link
                component={RouterLink}
                to="/privacy-policy"
                className="text-gray-400 hover:text-white block"
              >
                Privacy Policy
              </Link>
              <Link
                component={RouterLink}
                to="/terms-and-conditions"
                className="text-gray-400 hover:text-white block"
              >
                Terms & Conditions
              </Link>
            </Box>
          </Box>
        </Box>

        <Box className="mt-8 pt-8 border-t border-gray-800">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2, alignItems: 'center' }}>
            <Box>
              <Typography variant="body2" className="text-gray-400">
                © {new Date().getFullYear()} EVAAO. All rights reserved.
              </Typography>
            </Box>
            <Box className="flex justify-end space-x-4">
              <Link
                href="https://github.com/evaao"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaGithub className="w-6 h-6" />
              </Link>
              <Link
                href="https://linkedin.com/company/evaao"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaLinkedin className="w-6 h-6" />
              </Link>
              <Link
                href="https://twitter.com/evaao"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaTwitter className="w-6 h-6" />
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer; 