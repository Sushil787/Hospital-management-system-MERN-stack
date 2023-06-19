import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Modal,
} from '@mui/material';
import { Image } from 'mui-image'

const ServiceItem = ({ image, title, description, features, price }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card onClick={handleOpen}>
        <CardMedia component="img" height="200" image={image} alt={title} />
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
           
            
            p: 4,
          }}
        >
          <Image src="my-image.png" />
          <Typography variant="h6" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body1">{description}</Typography>
          <Typography variant="h6" gutterBottom>
            Features:
          </Typography>
          <ul>
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <Typography variant="body1">Price: {price}</Typography>
        </Box>
      </Modal>
    </>
  );
};



const services= [
  {
    title: 'Medical Consultation',
    description: 'Expert doctors available for consultations and medical advice. We have a team of experienced physicians specializing in various medical fields who provide personalized care and treatment plans.',
    image: 'service1.jpg',
    features: ['24/7 availability', 'Multi-specialty consultations'],
    
  },
  {
    title: 'Diagnostic Services',
    description: 'State-of-the-art diagnostic facilities for accurate and timely results. Our advanced diagnostic center is equipped with cutting-edge technology, including MRI, CT scan, X-ray, and laboratory testing.',
    image: 'service2.jpg',
    features: ['Advanced imaging technology', 'Fast turnaround time'],
   
  },
  {
    title: 'Surgical Procedures',
    description: 'Advanced surgical treatments performed by skilled surgeons. Our surgical team consists of highly trained specialists who utilize the latest techniques and technology to ensure successful procedures and patient safety.',
    image: 'service3.jpg',
    features: ['Minimally invasive surgeries', 'Dedicated operating theaters'],
    
  },
  {
    title: 'Emergency Care',
    description: 'Round-the-clock emergency medical services. Our dedicated emergency department is staffed by a team of emergency physicians and nurses who are trained to handle critical situations and provide immediate care.',
    image: 'service4.jpg',
    features: ['Trauma care', 'Life-saving interventions'],
    
  },
  {
    title: 'Maternity Care',
    description: 'Comprehensive maternity care for expectant mothers. Our maternity unit offers prenatal care, labor and delivery services, postnatal care, and breastfeeding support, ensuring the well-being of both mother and baby.',
    image: 'service5.jpg',
    features: ['Antenatal classes', 'Lactation consultations'],
    
  },
  {
    title: 'Pediatric Care',
    description: 'Specialized care for infants, children, and adolescents. Our pediatric department focuses on the unique healthcare needs of young patients, providing preventive care, vaccinations, and treatment for common childhood illnesses.',
    image: 'service6.jpg',
    features: ['Immunizations', 'Developmental assessments'],
    
  },
  {
    title: 'Cardiology Services',
    description: 'Comprehensive heart care for patients with cardiovascular conditions. Our cardiology department offers diagnostic tests, heart monitoring, and treatment options, including interventional procedures and cardiac rehabilitation.',
    image: 'service7.jpg',
    features: ['Echocardiography', 'Coronary angiography'],
    
  },
  {
    title: 'Orthopedic Care',
    description: 'Specialized care for musculoskeletal conditions and injuries. Our orthopedic department provides evaluation, diagnosis, and treatment for bone, joint, and muscle problems, including surgical interventions and rehabilitation.',
    image: 'service8.jpg',
    features: ['Joint replacement surgeries', 'Sports medicine'],
    
  },
  {
    title: 'Ophthalmology Services',
    description: 'Comprehensive eye care for patients of all ages. Our ophthalmology department offers eye examinations, vision correction procedures, and treatment for eye diseases and conditions, including cataract surgery and laser refractive surgery.',
    image: 'service9.jpg',
    features: ['Retina specialists', 'Glaucoma management'],
    
  },
  {
    title: 'Dental Services',
    description: 'Complete oral health care and dental treatments. Our dental department provides preventive services, restorative procedures, and cosmetic dentistry, ensuring optimal dental hygiene and beautiful smiles.',
    image: 'service10.jpg',
    features: ['Teeth whitening', 'Root canal therapy'],
   
  },
  
];

const OurServicesPage = () => {
 

  return (
    <Box py={4}>
      <Container maxWidth="md">
        <Typography variant="h4" align="center" gutterBottom>
          Our Services
        </Typography>

        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ServiceItem
                image={service.image}
                title={service.title}
                description={service.description}
                features={service.features}
                price={service.price}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default OurServicesPage;

