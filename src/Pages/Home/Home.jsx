import React, { useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";
import { Box } from "@mui/material";
import { ScrollToTop } from "../../Components/ScrollToTop/ScrollToTop";
import { Navbar } from "../../Components/Navbar/Navbar";
import { HomeHero } from "../../Components/HomeHero/HomeHero";
import { BookCarForm } from "../../Components/BookCarForm/BookCarForm";
import { FeaturesBanner } from "../../Components/FeaturesBanner/FeaturesBanner";
import { ChooseCar } from "../../Components/ChooseCar/ChooseCar";
import { ChooseUs } from "../../Components/ChooseUs/ChooseUs";
import { Testimonials } from "../../Components/Testimonials/Testimonials";
import { FAQs } from "../../Components/FAQs/FAQs";
import { Footer } from "../../Components/Footer/Footer";
import { PageTabs } from "../../Components/PageTabs/PageTabs";
export const Home = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transform: "translateY(-5%)",
            height: "100vh",
          }}
        >
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#ff4d2f"
            ariaLabel="ball-triangle-loading"
            wrapperClass={{}}
            wrapperStyle=""
            visible={true}
          />
        </Box>
      ) : (
        <>
          <ScrollToTop />
          <Navbar />
          <HomeHero />
          <BookCarForm />
          <FeaturesBanner />
          <ChooseCar />
          <ChooseUs />
          <Testimonials />
          <FAQs />
          <Footer />
          <PageTabs />
        </>
      )}
    </>
  );
};
