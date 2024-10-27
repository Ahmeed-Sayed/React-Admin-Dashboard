export const tokens = (mode: string) => ({
  ...(mode === "light"
    ? {
        secondary: {
          100: "#fbdbdf",
          200: "#f8b7bf",
          300: "#f4939e",
          400: "#f16f7e",
          500: "#ed4b5e",
          600: "#be3c4b",
          700: "#8e2d38",
          800: "#5f1e26",
          900: "#2f0f13",
        },
        yellowAccent: {
          100: "#fff7cc",
          200: "#ffef99",
          300: "#ffe766",
          400: "#ffdf33",
          500: "#ffd700",
          600: "#ccac00",
          700: "#998100",
          800: "#665600",
          900: "#332b00",
        },
        primary: {
          100: "#fdfdfd",
          200: "#fbfbfb",
          300: "#f9f9f9",
          400: "#f7f7f7",
          500: "#dedede",
          600: "#c4c4c4",
          700: "#939393",
          800: "#626262",
          900: "#313131",
        },
        grey: {
          100: "#e0e0e0",
          200: "#c2c2c2",
          300: "#a3a3a3",
          400: "#858585",
          500: "#666666",
          600: "#525252",
          700: "#3d3d3d",
          800: "#292929",
          900: "#141414",
        },
        blueAccent: {
          100: "#d6d8f1",
          200: "#aeb1e3",
          300: "#858bd6",
          400: "#5d64c8",
          500: "#343dba",
          600: "#2a3195",
          700: "#1f2570",
          800: "#15184a",
          900: "#0a0c25"
},
      }
    : {
        grey: {
          100: "#e0e0e0",
          200: "#c2c2c2",
          300: "#a3a3a3",
          400: "#858585",
          500: "#666666",
          600: "#525252",
          700: "#3d3d3d",
          800: "#292929",
          900: "#141414",
        },
        primary: {
          100: "#d0d1d5",
          200: "#a1a4ab",
          300: "#727681",
          400: "#1F2A40",
          500: "#141b2d",
          600: "#101624",
          700: "#0c101b",
          800: "#080b12",
          900: "#040509",
        },
        secondary: {
          100: "#dbf5ee",
          200: "#b7ebde",
          300: "#94e2cd",
          400: "#70d8bd",
          500: "#4cceac",
          600: "#3da58a",
          700: "#2e7c67",
          800: "#1e5245",
          900: "#0f2922",
        },
        redAccent: {
          100: "#f8dcdb",
          200: "#f1b9b7",
          300: "#e99592",
          400: "#e2726e",
          500: "#db4f4a",
          600: "#af3f3b",
          700: "#832f2c",
          800: "#58201e",
          900: "#2c100f",
        },
        blueAccent: {
          100: "#d6d8f1",
          200: "#aeb1e3",
          300: "#858bd6",
          400: "#5d64c8",
          500: "#343dba",
          600: "#2a3195",
          700: "#1f2570",
          800: "#15184a",
          900: "#0a0c25"
},
      }),
});

export const themeSettings = (mode: string) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.secondary[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.secondary[500],
            },
            background: {
              default: colors.primary[500],
            },
          }),
    },
    typography: {
      color: mode === "dark?" ? "white" : "black",
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};
// export const theme= createTheme()
