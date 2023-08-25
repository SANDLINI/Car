import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./FeaturesBanner.module.css";
import icon1 from "../../Images/plan/icon1.png";
import icon2 from "../../Images/plan/icon2.png";
import icon3 from "../../Images/plan/icon3.png";

export const FeaturesBanner = () => {
  return (
    <>
      <Box className={styles.main} sx={{ mt: 12, mb: 12 }}>
        <Typography variant="h5">Plan your trip now</Typography>
        <Typography variant="h3" sx={{ fontWeight: 700, mt: 3, mb: 5 }}>
          Quick & easy car rental
        </Typography>
        <Box className={styles.featuresContainer}>
          <Box className={styles.features}>
            <img src={icon1} alt="" />
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              Select Car
            </Typography>
            <Typography sx={{ color: "gray" }}>
              We offers a big range of vehicles for all your driving needs. We
              have the perfect car to meet your needs
            </Typography>
          </Box>

          <Box className={styles.features}>
            <img src={icon2} alt="" />
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              Contact Operator
            </Typography>
            <Typography sx={{ color: "gray" }}>
              Our knowledgeable and friendly operators are always ready to help
              with any questions or concerns
            </Typography>
          </Box>
          <Box className={styles.features}>
            <img src={icon3} alt="" />
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              Let's Drive
            </Typography>
            <Typography sx={{ color: "gray" }}>
              Whether you're hitting the open road, we've got you covered with
              our wide range of cars
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
