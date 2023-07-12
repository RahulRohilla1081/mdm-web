import React, { useState } from "react";

import { Box } from "@mui/system";

// import Header from "../components/header/Header";
// import AppDrawer from "../components/AppDrawer";
import { Button, Card, CardActions, CardContent, CssBaseline, Grid, Typography } from "@mui/material";
import AppDrawer from "../../components/AppDrawer/AppDrawer";
import MainScreen from "../../components/AppDrawer/MainScreen";
import Header from "../../components/AppDrawer/Header";
import { DASHBOARD } from "../../utils/Routes";
import "./style.css"
const drawerWidth = 280;


function Dashboard() {
       const [showDrawer, setShowDrawer] = useState(false);

       const CardDetailsArr = [
         {
           TITLE: "Pending for submission",
           Value: "20",
           color: "orange",
         },
         {
           TITLE: "Approval",
           Value: "20",
           color: "green",
         },
         {
           TITLE: "Pending Buyer approval",
           Value: "20",
           color: "orange",
         },
       ];

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

        <Box className="grid-container">
          {CardDetailsArr.map((val) => {
            return (
              <Box className="grid-item">
                <Card
                  sx={{
                    backgroundColor: "#E9FFFF",
                  }}
                >
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 18, color: "black" }}
                      color="text.secondary"
                      gutterBottom
                    >
                      {val.TITLE}
                    </Typography>
                    <Typography
                      variant="h3"
                      component="div"
                      sx={{ color: val.color }}
                    >
                      80
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            );
          })}
        </Box>

        <Grid
          container
          p={4}
          spacing={2}
          my={1}
          sx={{
            boxShadow: "0 0 4px rgba(0,0,0,0.1)",
            borderRadius: 3,
            marginLeft: 0,
            width: "100%",
          }}
        >
          <Grid xs={2} md={0} item sx={{}}></Grid>
          <Grid xs={6} md={0} item></Grid>
        </Grid>
      </MainScreen>
    </Box>
    // <AppDrawer/>
  );
}

export default Dashboard;
