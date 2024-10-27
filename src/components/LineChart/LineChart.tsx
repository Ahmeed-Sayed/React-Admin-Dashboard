import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { LineChartType } from "../../utils/interfaces.tsx";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../utils/theme.tsx";

const LineChart: React.FC<{
  isDashboard: Boolean;
  data: LineChartType[];
}> = ({ isDashboard = false, data }) => {
  const theme = useTheme();
  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      colors={isDashboard ? { datum: "color" } : { scheme: "nivo" }}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: theme.palette.mode === "dark" ? "white" : "black",
            },
          },
          legend: {
            text: {
              fill: theme.palette.mode === "dark" ? "white" : "black",
            },
          },
          ticks: {
            line: {
              stroke: theme.palette.mode === "dark" ? "white" : "black",
              strokeWidth: 1,
            },
            text: {
              fill: theme.palette.mode === "dark" ? "white" : "black",
            },
          },
        },
        legends: {
          text: {
            fill: theme.palette.mode === "dark" ? "white" : "black",
          },
        },
      }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "transportation",
        legendOffset: 36,
        legendPosition: "middle",
        truncateTickAt: 0,
      }}
      axisLeft={{
        tickValues: 5,
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "count",
        legendOffset: -40,
        legendPosition: "middle",
        truncateTickAt: 0,
      }}
      pointSize={10}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabel="data.yFormatted"
      pointLabelYOffset={-12}
      enableTouchCrosshair={true}
      useMesh={true}
      tooltip={({ point }) => {
        return (
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
              bgcolor={point.serieColor}
              mr="5px"
            />
            x: <strong>{point.data.x}</strong>, y:
            <strong>{point.data.yStacked}</strong>
          </Box>
        );
      }}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default LineChart;
