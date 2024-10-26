import PageHeader from "../../components/PageHeader/PageHeader";
import { Box } from "@mui/material";
import pieData from "../../data/mockDataPie.tsx";
import PieChart from "../../components/PieChart/PieChart.tsx";
const ProgPieChart = () => {
  return (
    <>
      <PageHeader
        title="Programming Languages Pie Chart"
        subTitle="Simple Pie Chart"
      />
      <Box height="75vh">
        <PieChart pieData={pieData} isDashboard={false} />
      </Box>
    </>
  );
};
export default ProgPieChart;
