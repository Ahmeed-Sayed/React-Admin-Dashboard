import {
  createTheme,
  CssBaseline,
  PaletteMode,
  ThemeProvider,
} from "@mui/material";
import "./App.scss";
import Dashboard from "./pages/Dashboard/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import ManageTeam from "./pages/ManageTeam/ManageTeam";
import Contacts from "./pages/Contacts/Contacts";
import Invoices from "./pages/Invoices/Invoices";
import Calendar from "./pages/Calendar/Calendar";
import ProfileForm from "./pages/ProfileForm/ProfileForm";
import FAQ from "./pages/FAQ/FAQ";
import GeographyChart from "./pages/GeographyChart/GeographyChart";
import Layout from "./Layout";
import FoodBarChart from "./pages/FoodBarChart/FoodBarChart";
import TransportLineChart from "./pages/TransportLineChart/TransportLineChart";
import ProgPieChart from "./pages/ProgPieChart/ProgPieChart";
// import { darkTheme, lightTheme } from "./utils/theme";

function App() {
  const [mode, setMode] = useState<PaletteMode>(() => {
    const savedMode = localStorage.getItem("siteMode") as PaletteMode;
    return savedMode || "light";
  });

  const theme = createTheme({
   
    typography: {
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
  });
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout setMode={setMode} />,
      children: [
        { path: "/", element: <Dashboard /> },
        { path: "/team", element: <ManageTeam /> },
        { path: "/contacts", element: <Contacts /> },
        { path: "/invoices", element: <Invoices /> },
        { path: "/form", element: <ProfileForm /> },
        { path: "/calendar", element: <Calendar /> },
        { path: "/faq", element: <FAQ /> },
        { path: "/bar", element: <FoodBarChart /> },
        { path: "/pie", element: <ProgPieChart /> },
        { path: "/line", element: <TransportLineChart /> },
        { path: "/geography", element: <GeographyChart /> },
      ],
    },
  ]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
