import React, { useState } from "react";

import { Box } from "@mui/system";

// import Header from "../components/header/Header";
// import AppDrawer from "../components/AppDrawer";
import { CssBaseline } from "@mui/material";
import AppDrawer from "../../components/AppDrawer/AppDrawer";
import MainScreen from "../../components/AppDrawer/MainScreen";
import Header from "../../components/AppDrawer/Header";
import { DASHBOARD } from "../../utils/Routes";
const drawerWidth = 280;

function Dashboard() {
       const [showDrawer, setShowDrawer] = useState(false);
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header
        drawerWidth={drawerWidth}
        toggleDrawer={setShowDrawer}
        showDrawer={showDrawer}
      />
      <Box component="nav">
        <AppDrawer
          drawerWidth={drawerWidth}
          toggleDrawer={setShowDrawer}
          showDrawer={showDrawer}
          ActiveKey={DASHBOARD}
        />
      </Box>
      <MainScreen drawerWidth={drawerWidth}>
        {/* <Component {...props} /> */}
        <h1>Dashboard</h1>
      </MainScreen>
    </Box>
    // <AppDrawer/>
  );
}

export default Dashboard;
