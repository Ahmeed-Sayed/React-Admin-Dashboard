import React from "react";

import { ResponsiveBar } from "@nivo/bar";
import { BarChartType } from "../../utils/interfaces";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../utils/theme";

const BarChart: React.FC<{ isDashboard: Boolean; barData: BarChartType }> = ({
  isDashboard = false,
  barData,
}) => {
  const theme = useTheme();
  const { keys, data, indexBy, axisLeftLegend, axisBottomLegend } = barData;
  return (
    <>
      <ResponsiveBar
        data={data}
        keys={keys}
        indexBy={indexBy}
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        maxValue={700}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        valueFormat=" >-"
        colors={{ scheme: "set3" }}
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
        borderColor={{ theme: "background" }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashboard ? undefined : axisBottomLegend,
          legendPosition: "middle",
          legendOffset: 32,
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 3,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashboard ? undefined : axisLeftLegend,
          legendPosition: "middle",
          legendOffset: -40,
          truncateTickAt: 0,
        }}
        enableLabel={isDashboard ? false : true}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 121,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 18,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={(e) =>
          e.id + ": " + e.formattedValue + " in sds: " + e.indexValue
        }
        tooltip={({ id, value, color, indexValue }) => (
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
              bgcolor={color}
              mr="5px"
            />
            <strong>{id}</strong>: {value} in {axisBottomLegend}: {indexValue}
          </Box>
        )}
      />
    </>
  );
};

export default BarChart;
