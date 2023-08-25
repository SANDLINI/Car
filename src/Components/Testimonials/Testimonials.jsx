import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./Testimonials.module.css";
import image1 from "../../Images/testimonials/pfp1.jpg";
import image2 from "../../Images/testimonials/pfp2.jpg";

export const Testimonials = () => {
  return (
    <>
      <Box sx={{ width: "80%", mx: "auto", mt: 15 }}>
        <Box sx={{ textAlign: "center", mb: 5 }}>
          <Typography variant="h6" sx={{ fontWeight: "700" }}>
            Reviewed by People
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: "700", mb: 4 }}>
            Client's Testimonials
          </Typography>
          <Typography
            sx={{ textAlign: "center", color: "gray", width: "60%", m: "auto", mb:7 }}
          >
            Discover the positive impact we've made on the our clients by
            reading through their testimonials. Our clients have experienced our
            service and results, and they're eager to share their positive
            experiences with you.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 4,
          }}
        >
          <Box
            sx={{
              p: 3,
              width: { xs: "100%", sm: "80%", md:'40%' },
              bgcolor: "whitesmoke",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "500" }}>
              "We rented a car from this website and had an amazing experience!
              The booking was easy and the rental rates were affordable. "
            </Typography>
            <Box>
              <img src={image1} alt="" className={styles.img} />
              <Typography sx={{ fontWeight: "600" }}>Parry Potter</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              p: 3,
              width: { xs: "100%", sm: "80%", md: '40%' },
              bgcolor: "whitesmoke",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "500" }}>
              "The car was in great condition and made our trip even better.
              Highly recommend for this car rental website!"
            </Typography>
            <Box sx={{ width: "100%" }}>
              <img src={image2} alt="" className={styles.img} />
              <Typography sx={{ fontWeight: "600" }}>Hon Zilly</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
