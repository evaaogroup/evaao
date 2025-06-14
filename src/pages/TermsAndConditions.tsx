import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

const TermsAndConditions = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Terms and Conditions
        </Typography>
        <Typography variant="h6" gutterBottom>
          Last Updated: {new Date().toLocaleDateString()}
        </Typography>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            1. Acceptance of Terms
          </Typography>
          <Typography paragraph>
            By accessing and using EVAAO's services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
          </Typography>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            2. Use of Services
          </Typography>
          <Typography paragraph>
            You agree to use our services only for lawful purposes and in accordance with these Terms. You shall not:
          </Typography>
          <ul>
            <li>Violate any applicable laws or regulations</li>
            <li>Infringe upon the rights of others</li>
            <li>Interfere with the proper functioning of our services</li>
            <li>Attempt to gain unauthorized access to our systems</li>
          </ul>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            3. Intellectual Property
          </Typography>
          <Typography paragraph>
            All content, features, and functionality of our services are owned by EVAAO and are protected by international copyright, trademark, and other intellectual property laws.
          </Typography>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            4. User Accounts
          </Typography>
          <Typography paragraph>
            When you create an account with us, you must provide accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
          </Typography>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            5. Limitation of Liability
          </Typography>
          <Typography paragraph>
            EVAAO shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.
          </Typography>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            6. Changes to Terms
          </Typography>
          <Typography paragraph>
            We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the new Terms on our website. Your continued use of our services after such modifications constitutes your acceptance of the new Terms.
          </Typography>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            7. Contact Information
          </Typography>
          <Typography paragraph>
            If you have any questions about these Terms, please contact us at:
          </Typography>
          <Typography>
            Email: legal@evaao.com
          </Typography>
        </Box>
      </motion.div>
    </Container>
  );
};

export default TermsAndConditions; 