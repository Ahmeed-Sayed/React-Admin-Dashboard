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
} from "@mui/material";
import { Sidebar } from "react-pro-sidebar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import sidebarItems from "../../data/sidebarData";

export default function SidebarComponent() {
  const [isSidebarClosed, setisSidebarClosed] = useState(false);

  const toggleSidebar = () => {
    setisSidebarClosed((prevState) => !prevState);
  };
  return (
    <Box width={"max-content"} bgcolor={"background.paper"}>
      <Sidebar
        collapsed={isSidebarClosed}
        backgroundColor="background.paper"
        style={{ height: "100vh", borderRight: "none" }}
      >
        <Stack
          direction={"row"}
          justifyContent={!isSidebarClosed ? "space-between" : "center"}
          alignItems={"center"}
          pb={"2rem"}
          pr={isSidebarClosed ? undefined : ".5rem"}
          p={isSidebarClosed ? undefined : "1rem"}
        >
          {!isSidebarClosed && <Typography>ADMINIS</Typography>}
          <IconButton onClick={toggleSidebar}>
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
              Ed Roh
            </Typography>
            <Typography color="secondary.main">VP Fancy Admin</Typography>
          </Stack>
        )}
        <List disablePadding>
          {sidebarItems.map((categoryItem, index) => (
            <React.Fragment key={index}>
              <ListItem disablePadding sx={{ paddingTop: "1rem" }}>
                <Typography
                  variant="subtitle2"
                  pl={"10%"}
                  color="text.secondary"
                >
                  {categoryItem.category}
                </Typography>
              </ListItem>
              {categoryItem.items.map((item, itemIndex) => (
                <NavLink
                  to={item.to}
                  key={itemIndex}
                  style={{ textDecoration: "none" }}
                >
                  {({ isActive }) => (
                    <ListItem disablePadding>
                      <ListItemButton
                        sx={{
                          justifyContent: !isSidebarClosed
                            ? undefined
                            : "center",
                          color: isActive ? "#7a14ee" : "",
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            justifyContent: "center",
                            color: isActive ? "#7a14ee" : "",
                          }}
                        >
                          {item.icon}
                        </ListItemIcon>
                        {!isSidebarClosed && (
                          <ListItemText>
                            <Typography
                              variant="subtitle2"
                              color={isActive ? "#7a14ee" : "text.secondary"}
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
