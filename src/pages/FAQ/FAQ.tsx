import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import faqData from "../../data/mockDataFAQ.tsx";
import PageHeader from "../../components/PageHeader/PageHeader.tsx";
// Business-oriented FAQ data

export default function FAQ() {
  return (
    <Box minWidth="100%">

      <PageHeader title="FAQ" subTitle="Frequently Asked Questions Page" />

      {faqData.map((faq, index) => (
        <Accordion
          key={index}
          sx={{ borderRadius: "8px", marginBottom: "16px" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index + 1}-content`}
            id={`panel${index + 1}-header`}
          >
            <Typography>{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
