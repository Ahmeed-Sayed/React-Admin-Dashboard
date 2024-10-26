import { Box } from "@mui/material";
import BarChart from "../../components/BarChart/BarChart";
import barData from "../../data/mockDataBar.tsx";
import PageHeader from "../../components/PageHeader/PageHeader.tsx";
export default function FoodBarChart() {
  return (
    <>
      <PageHeader title="Food Bar Chart" subTitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarChart barData={barData} isDashboard={false} />
      </Box>
    </>
  );
}
