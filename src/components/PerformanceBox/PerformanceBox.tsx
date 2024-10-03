import {
  Box,
  CircularProgress,
  ListItem,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import MailIcon from "@mui/icons-material/Mail";
export default function PerformanceBox() {
  return (
    <Box
      width="20%"
      display="flex"
      justifyContent="space-between"
      px={"1rem"}
      py="1.5rem"
      bgcolor={"background.paper"}
      minWidth={"100%"}
      height="100%"
      alignItems={"center"}
    >
      <Stack direction={"column"} color={"secondary.main"} spacing={1}>
        <MailIcon />
        <Typography color="text.primary">12361</Typography>
        <Typography>Email Sent</Typography>
      </Stack>

      <Box
        display={"flex"}
        flexDirection={"column"}
        height="100%"
        justifyContent="space-around"
        alignItems={"center"}
      >
        <CircularProgress
          variant="determinate"
          value={75}
          sx={{
            color: "info.main",
          }}
        />
        <Typography color="secondary.main" variant="subtitle2">
          +14%
        </Typography>
      </Box>
    </Box>
  );
}
