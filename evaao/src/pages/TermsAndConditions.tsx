import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

function TermsAndConditions() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-900 text-white py-16"
    >
      <Container>
        <Typography variant="h2" className="text-4xl font-bold mb-8 text-center">
          Terms and Conditions
        </Typography>
        
        <Box className="space-y-8">
          <section>
            <Typography variant="h4" className="text-2xl font-semibold mb-4">
              1. Acceptance of Terms
            </Typography>
            <Typography variant="body1" className="text-gray-300">
              By accessing and using EVAAO's services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
            </Typography>
          </section>

          <section>
            <Typography variant="h4" className="text-2xl font-semibold mb-4">
              2. Use of Services
            </Typography>
            <Typography variant="body1" className="text-gray-300">
              You agree to use our services only for lawful purposes and in accordance with these Terms. You shall not:
            </Typography>
            <ul className="list-disc ml-8 mt-4 text-gray-300">
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon the rights of others</li>
              <li>Interfere with the proper functioning of our services</li>
              <li>Attempt to gain unauthorized access to our systems</li>
            </ul>
          </section>

          <section>
            <Typography variant="h4" className="text-2xl font-semibold mb-4">
              3. Intellectual Property
            </Typography>
            <Typography variant="body1" className="text-gray-300">
              All content, features, and functionality of our services are owned by EVAAO and are protected by international copyright, trademark, and other intellectual property laws.
            </Typography>
          </section>

          <section>
            <Typography variant="h4" className="text-2xl font-semibold mb-4">
              4. User Accounts
            </Typography>
            <Typography variant="body1" className="text-gray-300">
              When you create an account with us, you must provide accurate and complete information. You are responsible for:
            </Typography>
            <ul className="list-disc ml-8 mt-4 text-gray-300">
              <li>Maintaining the confidentiality of your account</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us of any unauthorized use</li>
            </ul>
          </section>

          <section>
            <Typography variant="h4" className="text-2xl font-semibold mb-4">
              5. Limitation of Liability
            </Typography>
            <Typography variant="body1" className="text-gray-300">
              EVAAO shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.
            </Typography>
          </section>

          <section>
            <Typography variant="h4" className="text-2xl font-semibold mb-4">
              6. Changes to Terms
            </Typography>
            <Typography variant="body1" className="text-gray-300">
              We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new Terms on our website.
            </Typography>
          </section>

          <section>
            <Typography variant="h4" className="text-2xl font-semibold mb-4">
              7. Contact Information
            </Typography>
            <Typography variant="body1" className="text-gray-300">
              For any questions about these Terms and Conditions, please contact us at:
            </Typography>
            <Typography variant="body1" className="text-gray-300 mt-2">
              Email: legal@evaao.com
            </Typography>
          </section>
        </Box>
      </Container>
    </motion.div>
  );
}

export default TermsAndConditions; 