import React, { useEffect, useState } from "react";

import { Box } from "@mui/system";

// import Header from "../components/header/Header";
// import AppDrawer from "../components/AppDrawer";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CssBaseline,
  Grid,
  Typography,
} from "@mui/material";
import AppDrawer from "../../components/AppDrawer/AppDrawer";
import MainScreen from "../../components/AppDrawer/MainScreen";
import Header from "../../components/AppDrawer/Header";
import { DASHBOARD } from "../../utils/Routes";
import "./style.css";
import AXIOS from "../../utils/AXIOS";
import axios from "axios";
const drawerWidth = 280;

function Dashboard() {
  const [showDrawer, setShowDrawer] = useState(false);

  const [CardDetailsArr, setCardDetailsArr] = useState([
    {
      TITLE: "Pending for submission",
      Value: 0,
      color: "orange",
    },
    {
      TITLE: "Pending For Buyer Approval",
      Value: 0,
      color: "orange",
    },
    {
      TITLE: "Buyer approved",
      Value: 0,
      color: "green",
    },
    {
      TITLE: "Buyer Rejected",
      Value: 0,
      color: "red",
    },
    {
      TITLE: "Approved from approver 1",
      Value: 0,
      color: "green",
    },
    {
      TITLE: "Rejected from approver 1",
      Value: 0,
      color: "red",
    },
    {
      TITLE: "Approved from approver 2",
      Value: 0,
      color: "green",
    },
    {
      TITLE: "Rejected from approver 2",
      Value: 0,
      color: "red",
    },
  ]);

  

  useEffect(() => {
    getVendorsData();
  }, []);


  const getVendorsData = () => {
    axios.get(AXIOS.axiosUrl + AXIOS.vendorGet).then((response) => {
      console.log(response.data);
      let pendingForSubmission = 0;
      let PendingForBuyerApproval = 0;
      let BuyerApproved = 0;
      let BuyerRejected = 0;
      let ApprovedApprover1 = 0;
      let RejectedApprover1 = 0;
      let ApprovedApprover2 = 0;
      let RejectedApprover2 = 0;

      {
        /* // vendor master // through email, pending for submition 1
                      // through email, pending for buyer approval 2 if approve
                      3 if reject 6 // 2 level flow if status == 3. //
                      approver_1 if approve 4 if rejected 7 // approver_2 if
                      approve 5 if rejected 8 // approval master // schema //
                      approver_1 approver_2 updated_on */
      }
      response.data.map((val) => {
        if (val.APPROVAL_FLAG == "1") {
          pendingForSubmission += 1;
        } else if (val.APPROVAL_FLAG == "2") {
          PendingForBuyerApproval += 1;
        } else if (val.APPROVAL_FLAG == "3") {
          BuyerApproved += 1;
        } else if (val.APPROVAL_FLAG == "6") {
          BuyerRejected += 1;
        } else if (val.APPROVAL_FLAG == "4") {
          ApprovedApprover1 += 1;
        } else if (val.APPROVAL_FLAG == "7") {
          RejectedApprover1 += 1;
        } else if (val.APPROVAL_FLAG == "5") {
          ApprovedApprover2 += 1;
        } else if (val.APPROVAL_FLAG == "8") {
          RejectedApprover2 += 1;
        }
      });

      let tempCardDetailsArr = [...CardDetailsArr];
      tempCardDetailsArr[0].Value = pendingForSubmission;
      tempCardDetailsArr[1].Value = PendingForBuyerApproval;
      tempCardDetailsArr[2].Value = BuyerApproved;
      tempCardDetailsArr[3].Value = BuyerRejected;
      tempCardDetailsArr[4].Value = ApprovedApprover1;
      tempCardDetailsArr[5].Value = RejectedApprover1;
      tempCardDetailsArr[6].Value = ApprovedApprover2;
      tempCardDetailsArr[7].Value = RejectedApprover2;
      setCardDetailsArr(tempCardDetailsArr);

    
    });
  };

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
                      {val.Value}
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
