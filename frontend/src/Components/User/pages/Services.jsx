import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Modal,
  Typography,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { getservice } from "../slices/getService";
import Loading from "../Loading";
import Image from "mui-image";

const ServiceItem = ({ image, title, description, features }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card onClick={handleOpen} sx={{
        height:"400px"
      }}>
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
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",

            p: 4,
          }}
        >
          <Image src={image} />
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
        </Box>
      </Modal>
    </>
  );
};

const OurServicesPage = () => {
  const dispatch = useDispatch();
  const datas = useSelector((state) => state.service);
  const { service, isLoading, error } = datas;

  useEffect(() => {
    dispatch(getservice());
  }, [dispatch]);

  return (
    <>
      <Loading isloading={isLoading} />
      <Box py={4}>
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" gutterBottom>
            Our Services
          </Typography>

          <Grid container spacing={4}>
            {service?.user_service?.map((service, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
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
    </>
  );
};

export default OurServicesPage;
