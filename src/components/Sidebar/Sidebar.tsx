import React from "react";
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { Sidebar } from "react-pro-sidebar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import sidebarItems from "../../data/sidebarData";
import { tokens } from "../../utils/theme";

export default function SidebarComponent() {
  const [isSidebarClosed, setisSidebarClosed] = useState(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const toggleSidebar = () => {
    setisSidebarClosed((prevState) => !prevState);
  };
  return (
    <Box width="max-content" sx={{ minHeight: "100vh" }}>
      <Sidebar
        collapsed={isSidebarClosed}
        backgroundColor={colors.primary[400]}
        style={{ height: "100%", borderRight: "none" }}
      >
        <Stack
          direction={"row"}
          justifyContent={!isSidebarClosed ? "space-between" : "center"}
          alignItems={"center"}
          py={"2rem"}
          pr={isSidebarClosed ? undefined : ".5rem"}
          p={isSidebarClosed ? undefined : "1rem"}
        >
          {!isSidebarClosed && <Typography>ADMIN</Typography>}
          <IconButton
            onClick={toggleSidebar}
            sx={{
              "&:hover": {
                backgroundColor: "secondary.main",
                color: "white",
              },
            }}
          >
            <MenuOutlinedIcon />
          </IconButton>
        </Stack>

        {!isSidebarClosed && (
          <Stack direction={"column"} alignItems={"center"} mb="1.5rem">
            <img
              src="user.jpg"
              width={100}
              height={100}
              style={{ borderRadius: "50%", marginBottom: "1rem" }}
            />
            <Typography variant="h4" paddingBottom={0.5}>
              Ahmed Sayed
            </Typography>
            <Typography color="secondary.main">VP Fancy Admin</Typography>
          </Stack>
        )}
        <List disablePadding>
          {sidebarItems.map((categoryItem, index) => (
            <React.Fragment key={index}>
              <ListItem disablePadding sx={{ paddingTop: "1rem" }}>
                <Typography variant="subtitle2" pl={"10%"}>
                  {categoryItem.category}
                </Typography>
              </ListItem>
              {categoryItem.items.map((item, itemIndex) => (
                <NavLink
                  to={item.to}
                  key={itemIndex}
                  style={{
                    textDecoration: "none",
                  }}
                >
                  {({ isActive }) => (
                    <ListItem disablePadding>
                      <ListItemButton
                        color="sucess"
                        sx={{
                          justifyContent: !isSidebarClosed
                            ? undefined
                            : "center",
                          "& .MuiTouchRipple-root": {
                            color: "secondary.main", // Set your custom ripple color here
                          },
                          // "&:active": {
                          //   backgroundColor: colors.secondary[500], // Change this to your desired click effect color
                          // },
                          // "&:focus": {
                          //   outline: "none", // Remove default focus outline
                          //   backgroundColor: colors.secondary[500], // Optional: Set focus color
                          // },
                          // "&:focus-visible": {
                          //   outline: "none", // Remove default focus outline
                          // },
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            justifyContent: "center",
                          }}
                        >
                          {item.icon}
                        </ListItemIcon>
                        {!isSidebarClosed && (
                          <ListItemText>
                            <Typography
                              variant="subtitle2"
                              color={
                                isActive ? "secondary.main" : "text.secondary"
                              }
                            >
                              {item.title}
                            </Typography>
                          </ListItemText>
                        )}
                      </ListItemButton>
                    </ListItem>
                  )}
                </NavLink>
              ))}
            </React.Fragment>
          ))}
        </List>
      </Sidebar>
    </Box>
  );
}
