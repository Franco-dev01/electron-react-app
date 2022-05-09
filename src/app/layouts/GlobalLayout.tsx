import React from "react";
import CssBaseline from "@mui/material/CssBaseline";

import Header from "./header";
import { SideBar } from "./sideBar";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";
import { Outlet } from "react-router-dom";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar
}));

export type GlobalDashboadProps = {
  children: React.ReactChild;
};
const GlobalLayout: React.FC<GlobalDashboadProps> = () => {
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ display: "flex", backgroundColor: "#F3F7F9", width:"100%" }}>
      <CssBaseline />
      <Header open={open} handleDrawerOpen={handleDrawerOpen} />
      <SideBar
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
      />

      <Box
        component="main"
        padding={2}
        minHeight="100vh"
        width="100%">
        <DrawerHeader />
        <Outlet />
      </Box>
    </Box>
  );
};
export default GlobalLayout;
