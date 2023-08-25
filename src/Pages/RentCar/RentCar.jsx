import React from "react";
import { BookCarForm } from "../../Components/BookCarForm/BookCarForm";
import { Typography, Box } from "@mui/material";
import {ScrollToTop} from '../../Components/ScrollToTop/ScrollToTop'
import { Heroes } from "../../Components/Heroes/Heroes";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Footer } from "../../Components/Footer/Footer";
import { PageTabs } from "../../Components/PageTabs/PageTabs";
export const RentCar = () => {
  return (
    <>
    <ScrollToTop />
      <Navbar />
      <Heroes heading="Rent A Car" />
      <Box sx={{ textAlign: "center" }}>
        <Typography
          variant="h5"
          sx={{ width: { xs: "100%", md: "70%" }, m: "auto" }}
        >
          Fill out the form below for your booking. After the booking is
          successful our executives will call you for further assistance. Happy
          Travelling.
        </Typography>
      </Box>
      <BookCarForm />
      <Footer />
      <PageTabs/>
    </>
  );
};
