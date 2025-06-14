import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

const Services = () => {
  const services = [
    [
      {
        title: 'Web Application Development',
        description: 'We specialize in building robust and scalable web applications tailored to your business needs. From e-commerce platforms to custom enterprise solutions, our team ensures that each application is user-friendly, secure, and optimized for performance.',
        image: '/images/we1.png'
      },
      {
        title: 'Mobile Application Development',
        description: 'Our mobile app development services offer seamless, intuitive apps for iOS and Android. Whether it\'s a simple utility app or a complex multi-platform solution, we focus on delivering high-performance apps with exceptional user experience.',
        image: '/images/we1.png'
      },
      {
        title: 'Website Development',
        description: 'We specialize in website development, offering responsive designs, e-commerce solutions, CMS, and custom web services. Our websites are visually appealing, mobile-friendly, and optimized for SEO and conversions.',
        image: '/images/we1.png'
      }
    ],
    [
      {
        title: 'ERP Software Development',
        description: 'We offer custom ERP solutions that streamline business operations, from inventory management to financial reporting. Our ERP software is designed to improve efficiency and integrate all aspects of your business into a unified system.',
        image: '/images/we1.png'
      },
      {
        title: 'E-commerce Applications',
        description: 'We focus on building high-performance, secure e-commerce platforms that offer seamless user experiences. From product listings to payment gateways, our solutions are designed to boost sales and enhance customer satisfaction.',
        image: '/images/we1.png'
      },
      {
        title: 'Custom Software Development',
        description: 'Our custom software development services deliver tailored solutions to meet the unique needs of your business. Whether you need mobile apps, enterprise solutions, or bespoke systems, we create software that helps you achieve your goals.',
        image: '/images/we1.png'
      }
    ],
    [
      {
        title: 'UX/UI Design',
        description: 'We create exceptional user experiences with intuitive UX/UI design. Our team ensures your product not only looks stunning but also offers seamless usability, making it easier for your customers to interact and engage.',
        image: '/images/we1.png'
      },
      {
        title: 'Cloud Solutions',
        description: 'We provide scalable cloud solutions that enhance your business\'s flexibility, security, and accessibility. Our services include cloud migration, management, and optimization, ensuring seamless operations in the cloud environment.',
        image: '/images/we2.png'
      },
      {
        title: 'AI & Machine Learning',
        description: 'Our AI and machine learning solutions help businesses unlock the power of data. From predictive analytics to automation, we create intelligent systems that enable smarter decision-making and drive innovation.',
        image: '/images/we3.png'
      }
    ]
  ];

  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" gutterBottom>
          What we do
        </Typography>
        <Carousel
          animation="fade"
          interval={5000}
          indicators={true}
          navButtonsAlwaysVisible={true}
        >
          {services.map((serviceGroup, groupIndex) => (
            <Box key={groupIndex}>
              <Grid container spacing={4}>
                {serviceGroup.map((service, index) => (
                  <Grid item xs={12} md={4} key={index}>
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
                        height="140"
                        image={service.image}
                        alt={service.title}
                        sx={{ objectFit: 'contain', p: 2 }}
                      />
                      <CardContent>
                        <Typography variant="h5" component="h3" gutterBottom>
                          {service.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {service.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          ))}
        </Carousel>
      </Container>
    </Box>
  );
};

export default Services; 