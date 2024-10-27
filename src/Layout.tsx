import { Box } from "@mui/material";
import SidebarComponent from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import React from "react";
import { HeaderProps } from "./utils/interfaces";
const Layout: React.FC<HeaderProps> = ({ setMode }) => {
  return (
    <Box display={"flex"} gap={3} minWidth="1280px" minHeight="768px">
      <SidebarComponent />
      <Box width={"100%"}>
        <Header setMode={setMode} />
        <Box mt={"3rem"} mr={".5rem"}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
