import { Box, Typography } from "@mui/material";
import React from "react";

type Props = { title: string; children: React.ReactNode };

const DashboardChart: React.FC<Props> = ({ title, children }) => {
  return (
    <Box display="flex" flexDirection="column" gap={1} height="100%">
      <Box>
        <Typography variant="h5">{title}</Typography>
      </Box>
      <Box height="90%">{children}</Box>
    </Box>
  );
};

export default DashboardChart;
