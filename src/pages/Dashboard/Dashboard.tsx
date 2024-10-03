import { Box, Button, Grid2, Typography } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { useTheme } from "@emotion/react";
import PerformanceBox from "../../components/PerformanceBox/PerformanceBox";
export default function Dashboard() {
  return (
    <Box display="flex" flexDirection="column" gap="1rem" mt="2rem" pr={2}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems={"center"}
      >
        <Box display="flex" flexDirection="column">
          <Typography variant="h2" component="p">
            Dashboard
          </Typography>
          <Typography color={"secondary.main"}>
            Welcome to your dashboard
          </Typography>
        </Box>
        <Button
          
          startIcon={<FileDownloadIcon />}
          sx={{
            px: "1rem",
            py: ".5rem",
            backgroundColor: "info.dark",
            color:"text.primary"
          }}
        >
          <Typography variant="button" component="span">DOWNLOAD REPORTS</Typography>
        </Button>
      </Box>

      <Grid2 container spacing={2}>
        <Grid2  size={3}><PerformanceBox /></Grid2>
        <Grid2  size={3}><PerformanceBox /></Grid2>
        <Grid2  size={3}><PerformanceBox /></Grid2>
        <Grid2  size={3}><PerformanceBox /></Grid2>
        <Grid2 bgcolor={"yellow"} size={8}>asdasd</Grid2>
        <Grid2 bgcolor={"yellow"} size={4}>asdasd</Grid2>
        <Grid2 bgcolor={"red"} size={4}>asdasd</Grid2>
        <Grid2 bgcolor={"red"} size={4}>asdasd</Grid2>
        <Grid2 bgcolor={"red"} size={4}>asdasd</Grid2>
      </Grid2>
    </Box>
  );
}
