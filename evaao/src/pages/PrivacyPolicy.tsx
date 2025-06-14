import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

function PrivacyPolicy() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-900 text-white py-16"
    >
      <Container>
        <Typography variant="h2" className="text-4xl font-bold mb-8 text-center">
          Privacy Policy
        </Typography>
        
        <Box className="space-y-8">
          <section>
            <Typography variant="h4" className="text-2xl font-semibold mb-4">
              1. Information We Collect
            </Typography>
            <Typography variant="body1" className="text-gray-300">
              We collect information that you provide directly to us, including but not limited to:
            </Typography>
            <ul className="list-disc ml-8 mt-4 text-gray-300">
              <li>Name and contact information</li>
              <li>Account credentials</li>
              <li>Payment information</li>
              <li>Communication preferences</li>
            </ul>
          </section>

          <section>
            <Typography variant="h4" className="text-2xl font-semibold mb-4">
              2. How We Use Your Information
            </Typography>
            <Typography variant="body1" className="text-gray-300">
              We use the information we collect to:
            </Typography>
            <ul className="list-disc ml-8 mt-4 text-gray-300">
              <li>Provide and maintain our services</li>
              <li>Process your transactions</li>
              <li>Send you technical notices and support messages</li>
              <li>Communicate with you about products, services, and events</li>
            </ul>
          </section>

          <section>
            <Typography variant="h4" className="text-2xl font-semibold mb-4">
              3. Information Sharing
            </Typography>
            <Typography variant="body1" className="text-gray-300">
              We do not sell or rent your personal information to third parties. We may share your information with:
            </Typography>
            <ul className="list-disc ml-8 mt-4 text-gray-300">
              <li>Service providers who assist in our operations</li>
              <li>Business partners with your consent</li>
              <li>Legal authorities when required by law</li>
            </ul>
          </section>

          <section>
            <Typography variant="h4" className="text-2xl font-semibold mb-4">
              4. Data Security
            </Typography>
            <Typography variant="body1" className="text-gray-300">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </Typography>
          </section>

          <section>
            <Typography variant="h4" className="text-2xl font-semibold mb-4">
              5. Your Rights
            </Typography>
            <Typography variant="body1" className="text-gray-300">
              You have the right to:
            </Typography>
            <ul className="list-disc ml-8 mt-4 text-gray-300">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Data portability</li>
            </ul>
          </section>

          <section>
            <Typography variant="h4" className="text-2xl font-semibold mb-4">
              6. Contact Us
            </Typography>
            <Typography variant="body1" className="text-gray-300">
              If you have any questions about this Privacy Policy, please contact us at:
            </Typography>
            <Typography variant="body1" className="text-gray-300 mt-2">
              Email: privacy@evaao.com
            </Typography>
          </section>
        </Box>
      </Container>
    </motion.div>
  );
}

export default PrivacyPolicy; 