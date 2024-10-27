import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { PieChartType } from "../../utils/interfaces";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../utils/theme";

const PieChart: React.FC<{
  pieData: PieChartType[];
}> = ({ pieData }) => {
  const theme = useTheme();
  const colors =tokens(theme.palette.mode)
  return (
    <ResponsivePie
      data={pieData}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      colors={{ scheme: "set3" }}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: "white",
            },
          },
          legend: {
            text: {
              fill: theme.palette.mode ==="dark"?"white": "black",
            },
          },
          ticks: {
            line: {
              stroke: "white",
              strokeWidth: 1,
            },
            text: {
              fill: theme.palette.mode ==="dark"?"white": "black",
            },
          },
        },
        legends: {
          text: {
            fill: theme.palette.mode ==="dark"?"white": "black",
          },
        },
      }}
      arcLinkLabel={(e) => e.id + " (" + e.value + ")"}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor={theme.palette.mode ==="dark"?"white": "black"}
      arcLinkLabelsThickness={3}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      tooltip={({ datum }) => (
        <Box
          display="flex"
          alignItems="center"
          bgcolor="white"
          color="black"
          p={1}
        >
          <Box
            width="10px"
            height="10px"
            borderRadius="50%"
            bgcolor={datum.color}
            mr="5px"
          />
          {datum.id}: <strong>{datum.value}</strong>
        </Box>
      )}
      legends={[
        {
          anchor: "bottom",
          direction: "row",
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: "#999",
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: colors.secondary[500],
              },
            },
          ],
        },
      ]}
    />
  );
};

export default PieChart;
