import React from "react";
import { ScrollToTop } from "../../Components/ScrollToTop/ScrollToTop";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Heroes } from "../../Components/Heroes/Heroes";
import { Contactus } from "../../Components/ContactUs/Contactus";
import { Footer } from "../../Components/Footer/Footer";
import { PageTabs } from "../../Components/PageTabs/PageTabs";
export const Contact = () => {
  return (
    <>
      <ScrollToTop/>
      <Navbar />
      <Heroes heading="Contact Us" />
      <Contactus />
      <Footer />
      <PageTabs/>
    </>
  );
};
