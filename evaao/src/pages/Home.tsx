import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Container, Typography, Grid, Box } from '@mui/material';
import './Home.css';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

function Section({ id, title, children }: SectionProps) {
  return (
    <motion.section
      id={id}
      className="relative z-10 max-w-screen-xl mx-auto py-16 px-4 sm:px-8 scroll-mt-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <Typography variant="h2" className="text-4xl font-bold text-gray-800 dark:text-white mb-8 border-b-4 border-blue-500 inline-block">
        {title}
      </Typography>
      <div>
        {children}
      </div>
    </motion.section>
  );
}

function HeaderParallax() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  return (
    <>
      <video
        ref={videoRef}
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src="/videos/background.mp4" type="video/mp4" />
      </video>
      <div className="fixed inset-0 z-0" style={{ background: "linear-gradient(90deg, rgba(0,0,0,0.6), rgba(40,40,60,0.6))" }}></div>
    </>
  );
}

function Home() {
  return (
    <div className="home-page">
      <HeaderParallax />
      <div className="relative z-10">
        <Section id="home" title="Home">
          <Container>
            <Box textAlign="center" color="white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography variant="h1" className="text-4xl sm:text-5xl font-bold mt-6">
                  EVAAO
                </Typography>
                <Typography variant="h2" className="text-lg sm:text-xl mt-3 max-w-2xl mx-auto">
                  Empowering Digital Innovation
                </Typography>
              </motion.div>
            </Box>
          </Container>
        </Section>

        <Section id="about" title="About">
          <Container>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Typography variant="h3" color="white" gutterBottom>
                    About Us
                  </Typography>
                  <Typography variant="body1" color="white" paragraph>
                    EVAAO is a forward-thinking technology company dedicated to creating innovative digital solutions that empower businesses and individuals to thrive in the digital age.
                  </Typography>
                </motion.div>
              </Grid>
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Typography variant="h3" color="white" gutterBottom>
                    Our Mission
                  </Typography>
                  <Typography variant="body1" color="white" paragraph>
                    We strive to deliver cutting-edge technology solutions that drive growth, enhance efficiency, and create lasting value for our clients.
                  </Typography>
                </motion.div>
              </Grid>
            </Grid>
          </Container>
        </Section>

        <Section id="services" title="Services">
          <Container>
            <Typography variant="h3" color="white" gutterBottom>
              Our Services
            </Typography>
            <Grid container spacing={4}>
              {['Web Development', 'Mobile Apps', 'Cloud Solutions', 'Digital Marketing'].map((service, index) => (
                <Grid item xs={12} sm={6} md={3} key={service}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="service-card"
                  >
                    <Typography variant="h6" color="white" gutterBottom>
                      {service}
                    </Typography>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Section>
      </div>
    </div>
  );
}

export default Home; 