import React from "react";

import { ResponsiveChoropleth } from "@nivo/geo";
import features from "../../data/geoChartFeatures";
import { GeoChartType } from "../../utils/interfaces";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../utils/theme";
interface Props {
  isDashboard: boolean;
  geoData: GeoChartType[];
}
const GeoChart: React.FC<Props> = ({ isDashboard, geoData }: Props) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <ResponsiveChoropleth
      data={geoData}
      features={features.features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      domain={[0, 1000000]}
      unknownColor="#666666"
      label="properties.name"
      valueFormat=".2s"
      colors="nivo"
      projectionTranslation={isDashboard ? [0.49, 0.6] : [0.5, 0.5]}
      projectionRotation={[0, 0, 0]}
      borderWidth={0.5}
      projectionScale={isDashboard ? 40 : 150}
      borderColor="white"
      theme={{
        axis: {
          domain: {
            line: {
              stroke: "white",
            },
          },
          legend: {
            text: {
              fill: theme.palette.mode === "dark" ? "white" : "black",
            },
          },
          ticks: {
            line: {
              stroke: "white",
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
      legends={
        isDashboard
          ? undefined
          : [
              {
                anchor: "bottom-left",
                direction: "column",
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: "left-to-right",
                itemTextColor:
                  theme.palette.mode === "dark" ? "white" : "black",
                itemOpacity: 0.85,
                symbolSize: 18,
                symbolBorderColor: "black",
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: colors.secondary[500],
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]
      }
      tooltip={({ feature }) => {
        // Check if feature exists and has a defined value
        if (feature && feature.value !== undefined) {
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
                bgcolor={feature.color}
                mr="5px"
              />
              {/* // @ts-ignore */}
              {feature.id}:<strong>{feature.value}</strong>
            </Box>
          );
        }
      }}
    />
  );
};

export default GeoChart;
