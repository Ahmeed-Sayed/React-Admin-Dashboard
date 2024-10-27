import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import faqData from "../../data/mockDataFAQ.tsx";
import PageHeader from "../../components/PageHeader/PageHeader.tsx";
import { tokens } from "../../utils/theme.tsx";
// Business-oriented FAQ data

export default function FAQ() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box bgcolor={colors.primary[400]} p={2} borderRadius={1}>

      <PageHeader title="FAQ" subTitle="Frequently Asked Questions Page" />

      {faqData.map((faq, index) => (
        <Accordion
          key={index}
          sx={{
            borderRadius: "8px",
            marginBottom: "16px",
            backgroundColor: theme.palette.mode==="light"?colors.grey[400]:colors.secondary[600],
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index + 1}-content`}
            id={`panel${index + 1}-header`}
          >
            <Typography 
            color="white"
            >{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
            color="white"
            >{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
