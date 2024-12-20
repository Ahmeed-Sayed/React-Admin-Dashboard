import { ThemeOptions, PaletteMode } from "@mui/material/styles";

export interface HeaderProps {
  setMode: React.Dispatch<React.SetStateAction<PaletteMode>>;
}

interface CustomPalette {
  primaryColor: {
    main: string;
    light: string;
  };
  secondaryColor: {
    main: string;
    light: string;
  };
  backgroundColor: {
    default: string;
    paper: string;
  };
  buttonColor: {
    main: string;
    hover: string;
  };
  iconColor: {
    main: string;
    hover: string;
  };
}

interface CustomThemeOptions extends ThemeOptions {
  palette: CustomPalette & {
    mode: "light" | "dark";
  };
}

export const lightTheme: CustomThemeOptions = {
  palette: {
    mode: "light",
    primaryColor: {
      main: "#06122b",
      light: "#113c99",
    },
    secondaryColor: {
      main: "#28334d",
      light: "#556ba0",
    },
    backgroundColor: {
      default: "#ffffff",
      paper: "#f0f0f0",
    },
    buttonColor: {
      main: "#113c99",
      hover: "#0d2a70",
    },
    iconColor: {
      main: "#000000",
      hover: "#e9c00c",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
};

export const darkTheme: CustomThemeOptions = {
  palette: {
    mode: "dark",
    primaryColor: {
      main: "#06122b",
      light: "#113c99",
    },
    secondaryColor: {
      main: "#28334d",
      light: "#556ba0",
    },
    backgroundColor: {
      default: "#1a1a1a",
      paper: "#2e2e2e",
    },
    buttonColor: {
      main: "#113c99",
      hover: "#0d2a70",
    },
    iconColor: {
      main: "#ffffff",
      hover: "#e9c00c",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
};

export interface EventType {
  id: string;
  title: string;
  start: string;
  end: string;
  allDay: boolean;
}

interface FoodData {
  [key: string]: string | number;
}
export interface BarChartType {
  keys: string[];
  data: FoodData[];
  indexBy: string;
  axisLeftLegend: string;
  axisBottomLegend: string;
}

export interface PageHeaderType {
  title: string;
  subTitle: string;
}

interface LineChartData {
  x: string;
  y: number;
}

export interface LineChartType {
  id: string;
  color: string;
  data: LineChartData[];
}

export interface PieChartType {
  id: string;
  color: string;
  value: number;
  label: string;
}

export interface GeoChartType {
  id: string;
  value: number;
}

export interface PerformanceBoxType {
  title: string;
  subTitle: string;
  progress: string;
  increase: string;
  icon: React.ReactNode;
}
