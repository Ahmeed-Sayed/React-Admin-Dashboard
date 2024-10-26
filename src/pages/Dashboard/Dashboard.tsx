import {
  Box,
  Button,
  colors,
  Grid2,
  IconButton,
  Typography,
} from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import PerformanceBox from "../../components/PerformanceBox/PerformanceBox";
import transportationData from "../../data/mockDataLine.tsx";
import LineChart from "../../components/LineChart/LineChart.tsx";
import transactionData from "../../data/mockDataTransactions.tsx";
import DashboardChart from "../../components/DashboardChart/DashboardChart.tsx";
import ProgressCircle from "../../components/ProgressCircle/ProgressCircle.tsx";
import BarChart from "../../components/BarChart/BarChart.tsx";
import BarData from "../../data/mockDataBar.tsx";
import GeoChart from "../../components/GeoChart/GeoChart.tsx";
import GeoData from "../../data/mockDataGeo.tsx";

export default function Dashboard() {
  return (
    <Box display="flex" flexDirection="column" gap="1rem" my="2rem" pr={2} >
      <Box display="flex" justifyContent="space-between" alignItems={"center"}>
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
            color: "text.primary",
          }}
        >
          <Typography variant="button" component="span">
            DOWNLOAD REPORTS
          </Typography>
        </Button>
      </Box>

      <Grid2 container spacing={2}>
        <Grid2 size={3}>
          <PerformanceBox
            title="12,361"
            subTitle="Emails Sent"
            progress="0.75"
            increase="+14%"
            icon={
              <EmailIcon
                sx={{ color: colors.green["A400"], fontSize: "26px" }}
              />
            }
          />
        </Grid2>
        <Grid2 size={3}>
          <PerformanceBox
            title="431,225"
            subTitle="Sales Obtained"
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.green["A400"], fontSize: "26px" }}
              />
            }
          />
        </Grid2>
        <Grid2 size={3}>
          <PerformanceBox
            title="32,441"
            subTitle="New Clients"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.green["A400"], fontSize: "26px" }}
              />
            }
          />
        </Grid2>
        {/* Row 2 */}
        <Grid2 size={3}>
          <PerformanceBox
            title="1,325,134"
            subTitle="Traffic Received"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.green["A400"], fontSize: "26px" }}
              />
            }
          />
        </Grid2>
        <Grid2
          gridTemplateRows={2}
          bgcolor="background.paper"
          size={8}
          height={300}
          display="flex"
          flexDirection="column"
          p={2}
        >
          <Box display="flex" justifyContent="space-between">
            <Box>
              <Typography variant="h5" component="p">
                Transportation Revenue
              </Typography>
              <Typography color="secondary.main" variant="h5" fontWeight="bold">
                $59.641.256
              </Typography>
            </Box>
            <IconButton>
              <FileDownloadIcon
                sx={{ fontSize: "1.7rem", color: colors.green["A400"] }}
              />
            </IconButton>
          </Box>
          <Box height="85%">
            <LineChart data={transportationData} isDashboard={true} />
          </Box>
        </Grid2>
        <Grid2
          size={4}
          display="flex"
          flexDirection="column"
          gap={0.5}
          overflow="auto"
          height={300}
        >
          {transactionData &&
            transactionData.map((transaction, index) => {
              return (
                <Box
                  display="flex"
                  justifyContent="space-around"
                  p="5px"
                  key={index}
                  alignItems="center"
                  bgcolor="background.paper"
                >
                  <Box width="30%">
                    <Typography variant="h6">{transaction.txId}</Typography>
                    <Typography variant="h6" color="secondary.main">
                      {transaction.user}
                    </Typography>
                  </Box>
                  <Box width="30%">
                    <Typography variant="h6">{transaction.date}</Typography>
                  </Box>
                  <Box p={0.8} bgcolor="secondary.main" borderRadius="5px">
                    <Typography variant="h6" fontWeight="bold">
                      ${transaction.cost}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
        </Grid2>
        {/* Row 3 */}
        <Grid2 bgcolor="background.paper" size={4} height={300} p={2}>
          <DashboardChart title="Campaign">
            <ProgressCircle size="140" progress=".75" />
            <Typography
              variant="h6"
              textAlign="center"
              sx={{ mt: "15px" }}
              color="secondary.main"
            >
              $48,352 revenue generated
            </Typography>
            <Typography variant="h6" textAlign="center">
              Includes extra misc expenditures and costs
            </Typography>
          </DashboardChart>
        </Grid2>
        <Grid2 bgcolor="background.paper" size={4} height={300} p={1}>
          <DashboardChart title="Sale Quantity">
            <BarChart barData={BarData} isDashboard={true} />
          </DashboardChart>
        </Grid2>
        <Grid2 bgcolor="background.paper" size={4} height={300} p={2}>
          <DashboardChart title="Geography Based Traffic">
            <GeoChart geoData={GeoData} isDashboard={true} />
          </DashboardChart>
        </Grid2>
      </Grid2>
    </Box>
  );
}
