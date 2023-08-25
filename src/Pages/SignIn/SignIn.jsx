import React from "react";
import { SignInForm } from "../../Components/SignInForm/SignInForm";
import { Navbar } from "../../Components/Navbar/Navbar";
import { ScrollToTop } from "../../Components/ScrollToTop/ScrollToTop";
import { PageTabs } from "../../Components/PageTabs/PageTabs";
export const SignIn = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <SignInForm />
      <PageTabs/>
    </>
  );
};
