import React from "react";
import { Button, Typography, Box } from "@mui/material";
import icon1 from "../../Images/chooseUs/icon1.png";
import icon2 from "../../Images/chooseUs/icon2.png";
import icon3 from "../../Images/chooseUs/icon3.png";

export const ChooseUs = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 10,
          width: "80%",
          margin: "auto",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 15,
        }}
      >
        <Box sx={{ width: { xs: "100%", md: "40%" } }}>
          <Typography variant="h6" sx={{ fontWeight: "700" }}>
            Why Choose Us
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: "800" }}>
            Best valued deals you will ever find
          </Typography>
          <Typography sx={{ color: "gray", py: 3 }}>
            Discover the best deals you'll ever find with our unbeatable offers.
            We're dedicated to providing you with the best value for your money,
            so you can enjoy top-quality services and products without breaking
            the bank. Our deals are designed to give you the ultimate renting
            experience, so don't miss out on your chance to save big.
          </Typography>
        </Box>
        <Box sx={{ width: { xs: "100%", md: "40%" } }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "center", md: "center" },
              textAlign: { xs: "center", md: "start" },
              gap: "15px",
              pb: 3,
            }}
          >
            <Box>
              <img src={icon1} alt="" />
            </Box>
            <Box>
              <Typography variant="h5" sx={{ fontWeight: "600" }}>
                Cross Country Drive
              </Typography>
              <Typography color={"gray"}>
                Take your driving experience to the next level with our
                top-notch vehicles for your cross-country adventures.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "center", md: "center" },
              textAlign: { xs: "center", md: "start" },
              gap: "15px",
              pb: 3,
            }}
          >
            <Box>
              <img src={icon2} alt="" />
            </Box>
            <Box>
              <Typography variant="h5" sx={{ fontWeight: "600" }}>
                All Inclusive Pricing
              </Typography>
              <Typography color={"gray"}>
                Get everything you need in one convenient, transparent price
                with our all-inclusive pricing policy.
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "center", md: "center" },
              textAlign: { xs: "center", md: "start" },
              gap: "15px",
              pb: 3,
            }}
          >
            <Box>
              <img src={icon3} alt="" />
            </Box>
            <Box>
              <Typography variant="h5" sx={{ fontWeight: "600" }}>
                No Hidden Charges
              </Typography>
              <Typography color={"gray"}>
                Enjoy peace of mind with our no hidden charges policy. We
                believe in transparent and honest pricing.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
