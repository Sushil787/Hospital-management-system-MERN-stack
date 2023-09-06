import React from "react";
import { Typography, Container, Grid } from "@mui/material";
import { styled } from "@mui/system";
import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';

const images = [img1, img2, img3];

const StyledSliderArea = styled("div")`
  margin: 0;
  position: relative;
  background-image: ${({ currentIndex }) => `url(${images[currentIndex]})`};
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  opacity: 0.9;
  height: 75vh;
  

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  
`;

const StyledHeroCaption = styled("div")`
  text-align: left;
`;

const AboutImage = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <StyledSliderArea currentIndex={currentIndex}>
      <Container>
        <Grid container>
          <Grid item xs={12} sm={9} md={8} lg={9} xl={7}>
            <StyledHeroCaption>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "black",
                  fontSize: "40px",
                  fontWeight: "bold",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
                }}
              >
                About Us
              </Typography>

              <Typography
                variant="body1"
                data-animation="fadeInLeft"
                data-delay="0.1s"
                fontSize={20}
              >
                Efficient hospital management system streamlining
                operations, enhancing patient care, and optimizing resource
                allocation
              </Typography>
            </StyledHeroCaption>
          </Grid>
        </Grid>
      </Container>
    </StyledSliderArea>
  );
};

export default AboutImage;
