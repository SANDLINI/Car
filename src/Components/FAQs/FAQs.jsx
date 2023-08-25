import { FAQ } from "./FAQ";
import { faqs } from "../../cardata";
import { Box, Typography } from "@mui/material";

export const FAQs = () => {
  return (
    <>
      <Box sx={{ textAlign: "center", mt: 15 }}>
        <Typography variant="h6" sx={{ fontWeight: "600", letterSpacing: 2 }}>
          FAQ
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: "600" }}>
          Frequently Asked Questions
        </Typography>
        <Typography
          variant="h6"
          sx={{ color: "gray", m: "auto", width: "60%", mt: 2 }}
        >
          Frequently Asked Questions About the Car Rental Booking Process on Our
          Website: Answers to Common Concerns and Inquiries.
        </Typography>
      </Box>
      <Box sx={{ mt: 6 }}>
        {faqs.map(({ id, Question, Answer }) => {
          return <FAQ key={id} Question={Question} Answer={Answer} />;
        })}
      </Box>
    </>
  );
};
