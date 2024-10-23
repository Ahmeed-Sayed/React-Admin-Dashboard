import {
  Box,
  createTheme,
  CssBaseline,
  PaletteMode,
  ThemeProvider,
} from "@mui/material";
import "./App.scss";
import Header from "./components/Header/Header";
import SidebarComponent from "./components/Sidebar/Sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useState } from "react";
import ManageTeam from "./pages/ManageTeam/ManageTeam";
import Contacts from "./pages/Contacts/Contacts";
import Invoices from "./pages/Invoices/Invoices";
import Calendar from "./pages/Calendar/Calendar";
import ProfileForm from "./pages/ProfileForm/ProfileForm";
import FAQ from "./pages/FAQ/FAQ";
import PieChart from "./pages/PieChart/PieChart";
import GeographyChart from "./pages/GeographyChart/GeographyChart";
import LineChart from "./pages/LineChart/LineChart";
import Layout from "./Layout";
import FoodBarChart from "./pages/FoodBarChart/FoodBarChart";
// import { darkTheme, lightTheme } from "./utils/theme";

function App() {
  const [mode, setMode] = useState<PaletteMode>(() => {
    const savedMode = localStorage.getItem("siteMode") as PaletteMode;
    return savedMode || "light";
  });

  const theme = createTheme({
    palette: {
      mode: mode,
      secondary: { main: "#11ca9c" },
      background: { default: "#071941", paper: "#2d3649" },
    },
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
        { path: "/pie", element: <PieChart /> },
        { path: "/line", element: <LineChart /> },
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
