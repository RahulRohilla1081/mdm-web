import React from "react";
import { Box, Toolbar, useTheme, useMediaQuery } from "@mui/material";

export default function MainScreen(props) {
  return (
    <Box
      className="main-screen"
      component={"main"}
      sx={{
        p: 4,
        width: { lg: `calc(100% - ${props.drawerWidth}px)` },
        ml: useMediaQuery(useTheme().breakpoints.up("lg"))
          ? `${props.drawerWidth}px`
          : 0,
        flexGrow: 1,
      }}
    >
      <Toolbar />
      {props.children}
    </Box>
  );
}
