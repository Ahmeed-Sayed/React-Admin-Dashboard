import PageHeader from "../../components/PageHeader/PageHeader";
import { Box, useTheme } from "@mui/material";
import pieData from "../../data/mockDataPie.tsx";
import PieChart from "../../components/PieChart/PieChart.tsx";
import { tokens } from "../../utils/theme.tsx";
const ProgPieChart = () => {
  const theme = useTheme();
  const colors =tokens(theme.palette.mode)
  return (
    <Box bgcolor={colors.primary[400]} p={2} borderRadius={1}>
      <PageHeader
        title="Programming Languages Pie Chart"
        subTitle="Simple Pie Chart"
      />
      <Box height="75vh" >
        <PieChart pieData={pieData} isDashboard={false} />
      </Box>
    </Box>
  );
};
export default ProgPieChart;
