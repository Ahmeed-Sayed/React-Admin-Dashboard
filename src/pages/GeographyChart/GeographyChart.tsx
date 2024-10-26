import PageHeader from "../../components/PageHeader/PageHeader";
import { Box } from "@mui/material";
import GeoChart from "../../components/GeoChart/GeoChart";
import geoData from "../../data/mockDataGeo";
export default function GeographyChart() {
  return (
    <>
      <PageHeader
        title="Geography"
        subTitle="Simple Geography Chart"
      />
      <Box height="75vh" border={1}>
        <GeoChart geoData={geoData} isDashboard={false} />
      </Box>
    </>
  );
}
