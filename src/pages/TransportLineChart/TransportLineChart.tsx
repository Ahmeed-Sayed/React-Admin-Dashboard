import { Box } from "@mui/material";
import PageHeader from "../../components/PageHeader/PageHeader";
import LineChart from "../../components/LineChart/LineChart";
import transportationData from "../../data/mockDataLine.tsx";
const TransportLineChart:React.FC<{isDashboard:Boolean}> = () => {
  return (
    <>
      <PageHeader
        title="Transporation Line Chart"
        subTitle="Simple Line Chart"
      />
      <Box height="75vh">
        <LineChart data={transportationData} isDashboard={false} />
      </Box>
    </>
  );
};

export default TransportLineChart;
