import React from "react";
import { useState, useEffect } from "react";
import { BallTriangle } from "react-loader-spinner";

import { ScrollToTop } from "../../Components/ScrollToTop/ScrollToTop";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Heroes } from "../../Components/Heroes/Heroes";
import { AboutCompany } from "../../Components/AboutCompany/AboutCompany";
import { FeaturesBanner } from "../../Components/FeaturesBanner/FeaturesBanner";
import { Footer } from "../../Components/Footer/Footer";
import { PageTabs } from "../../Components/PageTabs/PageTabs";
import { Box } from "@mui/material";
export const About = () => {
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
          <Heroes heading="About Us" />
          <AboutCompany />
          <FeaturesBanner />
          <Footer />
          <PageTabs />
        </>
      )}
    </>
  );
};
