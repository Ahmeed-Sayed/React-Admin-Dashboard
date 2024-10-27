import React from "react";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import styles from "./header.module.scss";
import { Box, useTheme } from "@mui/material";
import { HeaderProps } from "../../utils/interfaces";
import { tokens } from "../../utils/theme";

const Header: React.FC<HeaderProps> = ({ setMode }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const toggleMode = () => {
    setMode((prevState) => {
      const newMode = prevState === "light" ? "dark" : "light";
      localStorage.setItem("siteMode", newMode);
      return newMode;
    });
  };

  return (
    <section className={styles.header_container}>
      <Box
        className={styles.header_container__search}
        bgcolor={colors.primary[400]}
      >
        <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Box>
      <Box
        display="flex"
        justifyContent={"space-between"}
        gap={".5rem"}
        color={"text.primary"}
      >
        <IconButton
          onClick={toggleMode}
          sx={{
            color: "text.main",
            "&:hover": {
              backgroundColor: "secondary.main",
              color: "white",
            },
          }}
        >
          <DarkModeOutlinedIcon />
        </IconButton>
        <IconButton
          sx={{
            color: "text.main",
            "&:hover": {
              backgroundColor: "secondary.main",
              color: "white",
            },
          }}
        >
          <NotificationsNoneIcon />
        </IconButton>
        <IconButton
          sx={{
            color: "text.main",
            "&:hover": {
              backgroundColor: "secondary.main",
              color: "white",
            },
          }}
        >
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton
          sx={{
            color: "text.main",
            "&:hover": {
              backgroundColor: "secondary.main",
              color: "white",
            },
          }}
        >
          <PersonOutlineOutlinedIcon />
        </IconButton>
      </Box>
    </section>
  );
};

export default Header;
