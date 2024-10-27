import { Box } from "@mui/material";
import BarChart from "../../components/BarChart/BarChart";
import barData from "../../data/mockDataBar.tsx";
import PageHeader from "../../components/PageHeader/PageHeader.tsx";
import { useTheme } from "@emotion/react";
import { tokens } from "../../utils/theme.tsx";
export default function FoodBarChart() {
  const theme = useTheme();
  const colors =tokens(theme.palette.mode)
  return (
    <Box bgcolor={colors.primary[400]} p={2} borderRadius={1}>

      <PageHeader title="Food Bar Chart" subTitle="Simple Bar Chart" />
      <Box height="75vh" >
        <BarChart barData={barData} isDashboard={false} />
      </Box>
    </Box>
  );
}
