import React, { useState, useEffect } from "react";
import { BallTriangle } from "react-loader-spinner";
import { Vehicles } from "../../Components/VehicleCard/Vehicles";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Footer } from "../../Components/Footer/Footer";
import { Heroes } from "../../Components/Heroes/Heroes";
import { ScrollToTop } from "../../Components/ScrollToTop/ScrollToTop";
import { PageTabs } from "../../Components/PageTabs/PageTabs";
import { Box } from "@mui/material";
export const VehiclesModels = () => {
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
          {" "}
          <>
            <ScrollToTop />
            <Navbar />
            <Heroes heading="Vehicle Models" />
            <Vehicles />
            <Footer />
            <PageTabs />
          </>
        </>
      )}
    </>
  );
};
