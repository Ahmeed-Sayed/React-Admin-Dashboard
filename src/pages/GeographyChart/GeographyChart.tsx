import PageHeader from "../../components/PageHeader/PageHeader";
import { Box, useTheme } from "@mui/material";
import GeoChart from "../../components/GeoChart/GeoChart";
import geoData from "../../data/mockDataGeo";
import { tokens } from "../../utils/theme";
export default function GeographyChart() {
  const theme = useTheme();
  const colors =tokens(theme.palette.mode)
  return (
    <Box bgcolor={colors.primary[400]} p={2} borderRadius={1}>
      <PageHeader
        title="Geography"
        subTitle="Simple Geography Chart"
      />
      <Box height="75vh" border={1}>
        <GeoChart geoData={geoData} isDashboard={false} />
      </Box>
    </Box>
  );
}
