import { Box, useTheme } from "@mui/material";
import PageHeader from "../../components/PageHeader/PageHeader";
import LineChart from "../../components/LineChart/LineChart";
import transportationData from "../../data/mockDataLine.tsx";
import { tokens } from "../../utils/theme.tsx";
const TransportLineChart:React.FC<{isDashboard:Boolean}> = () => {
  const theme = useTheme();
  const colors =tokens(theme.palette.mode)
  return (
    <Box bgcolor={colors.primary[400]} p={2} borderRadius={1}>
      <PageHeader
        title="Transporation Line Chart"
        subTitle="Simple Line Chart"
      />
      <Box height="75vh">
        <LineChart data={transportationData} isDashboard={false} />
      </Box>
    </Box>
  );
};

export default TransportLineChart;
