import {
  Box,
  Button,
  CssBaseline,
  Divider,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import AppDrawer from "../../components/AppDrawer/AppDrawer";
import MainScreen from "../../components/AppDrawer/MainScreen";
import Header from "../../components/AppDrawer/Header";
import { VENDOR, VENDOR_APPROVAL, VENDOR_DETAILS } from "../../utils/Routes";
import { useLocation, useNavigate } from "react-router-dom";
import { COLORS } from "../../utils/Theme";
import ICONS from "../../utils/ICONS";
import axios from "axios";
import AXIOS from "../../utils/AXIOS";
import cogoToast from "cogo-toast";

const drawerWidth = 280;
function VendorDetails() {
  const location = useLocation();

  const [showApprovalRejectButton, setShowApprovalRejectButton] =
    useState(null);

  useEffect(() => {
    console.log("akhdjsajydbas", location.state.APPROVER_NO);
    if (location.state.SCREEN_NAME == "APPROVAL") {
      setShowApprovalRejectButton(true);
    } else {
      setShowApprovalRejectButton(false);
    }
  }, []);
  const [Tbody, setTbody] = useState([
    {
      VENDOR_NAME: "Abcd",
    },
  ]);

  const VendorApproveReject = (ClickedFlag) => {

//     vendor master
// through email, pending for submition 1 
// through email, pending for buyer approval 2 if approve 3 if reject 6

 

// 2 level flow if status == 3.
// approver_1 if approve 4 if rejected 7
// approver_2 if approve 5 if rejected 8

 

// approval master
// schema
// approver_1         approver_2        updated_on

    const vendorPayload = [
      {
        APPLICATION_ID: location.state.VENDOR_DATA.APPLICATION_ID,
        APPROVAL_FLAG: ClickedFlag,
      },
    ];

    axios
      .post(AXIOS.axiosUrl + AXIOS.vendor_approve_reject, vendorPayload)
      .then((response) => {
        console.log(response.data);
        cogoToast.success("Action Completed")
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <>
      <Box sx={{ display: "flex", backgroundColor: "#fff", height: "100vh" }}>
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
            ActiveKey={showApprovalRejectButton ? VENDOR_APPROVAL : VENDOR}
          />
        </Box>
        <MainScreen drawerWidth={drawerWidth}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h1>Vendors Details</h1>
            {showApprovalRejectButton ? (
              <Box>
                <Button
                  color="success"
                  variant="outlined"
                  sx={{
                    m: 2,
                  }}
                  onClick={() => {
                     
                    if (location.state.APPROVER_NO == "1"){
                      VendorApproveReject("4");
                    }
                    else if(location.state.APPROVER_NO == "2"){
                      
                      VendorApproveReject("5");
                    }
                  }}
                >
                  Approve
                </Button>
                <Button
                  color="error"
                  variant="outlined"
                  sx={{
                    m: 2,
                  }}
                  onClick={() => {
                  
                        if (location.state.APPROVER_NO == "1") {
                          VendorApproveReject("7");
                        } else if (location.state.APPROVER_NO == "2") {
                          VendorApproveReject("8");
                        }
                  }}
                >
                  Reject
                </Button>
              </Box>
            ) : (
              <Box>
                <Button
                  color="error"
                  variant="outlined"
                  sx={{
                    m: 2,
                  }}
                >
                  Block
                </Button>
              </Box>
            )}
          </Box>

          {/* <Typography
            sx={{ color: "#333", fontWeight: 700, fontSize: 20, p: 1 }}
          >
            General
          </Typography> */}
          <Typography
            sx={{
              color: COLORS.white,
              fontWeight: 700,
              fontSize: 20,
              p: 1,
              backgroundColor: COLORS.primary,
            }}
          >
            General
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Name
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {location.state.VENDOR_DATA.NAME}
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Country
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {location.state.VENDOR_DATA.COUNTRY}
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Address
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {location.state.VENDOR_DATA.ADDRESS}
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Time Zone
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                ISO
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Business Role
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {location.state.VENDOR_DATA.BUSINESS_ROLE}
              </Typography>
              <Divider />
            </Grid>
            <Grid item xs={6}>
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Email ID
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {location.state.VENDOR_DATA.EMAIL}
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                City
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {location.state.VENDOR_DATA.CITY}
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                State
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {location.state.VENDOR_DATA.STATE}
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Pin Code
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {location.state.VENDOR_DATA.PINCODE}
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Fax Details
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {location.state.VENDOR_DATA.FAX_DETAILS}
              </Typography>
              <Divider />
            </Grid>
          </Grid>
          <Typography
            sx={{
              color: COLORS.white,
              fontWeight: 700,
              fontSize: 20,
              p: 1,
              backgroundColor: COLORS.primary,
            }}
          >
            Tax Data
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                GST Number
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                  {location.state.VENDOR_DATA?.GST?.GST_NUMBER}
                </Typography>
                <Tooltip title={"View Document"}>
                  <Button variant="text" component={"label"}>
                    <img
                      src={ICONS.folder}
                      style={{
                        height: 30,
                        width: 30,
                      }}
                    />
                  </Button>
                </Tooltip>
              </Box>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Pan Number
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                  {location.state.VENDOR_DATA?.PAN?.PAN_NUMBER}
                </Typography>
                <Tooltip title={"View Document"}>
                  <Button variant="text" component={"label"}>
                    <img
                      src={ICONS.folder}
                      style={{
                        height: 30,
                        width: 30,
                      }}
                    />
                  </Button>
                </Tooltip>
              </Box>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                CIN Number
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                  {location.state.VENDOR_DATA?.CIN?.CIN_NUMBER}
                </Typography>
                <Tooltip title={"View Document"}>
                  <Button variant="text" component={"label"}>
                    <img
                      src={ICONS.folder}
                      style={{
                        height: 30,
                        width: 30,
                      }}
                    />
                  </Button>
                </Tooltip>
              </Box>
              <Divider />
            </Grid>
            <Grid item xs={6}>
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                MSME Number
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                  {location.state.VENDOR_DATA?.MSME?.MSME_NUMBER}
                </Typography>
                <Tooltip title={"View Document"}>
                  <Button variant="text" component={"label"}>
                    <img
                      src={ICONS.folder}
                      style={{
                        height: 30,
                        width: 30,
                      }}
                    />
                  </Button>
                </Tooltip>
              </Box>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Aadhar Card
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                  {location.state.VENDOR_DATA?.AADHAR?.AADHAR_NUMBER}
                </Typography>
                <Tooltip title={"View Document"}>
                  <Button variant="text" component={"label"}>
                    <img
                      src={ICONS.folder}
                      style={{
                        height: 30,
                        width: 30,
                      }}
                    />
                  </Button>
                </Tooltip>
              </Box>
              <Divider />
            </Grid>
          </Grid>
          <Typography
            sx={{
              color: COLORS.white,
              fontWeight: 700,
              fontSize: 20,
              p: 1,
              backgroundColor: COLORS.primary,
            }}
          >
            Bank Details
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Bank serial number
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {location.state.VENDOR_DATA?.BANK_DETAILS?.BANK_SERIAL_NUMBER}
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Account Type
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {location.state.VENDOR_DATA?.BANK_DETAILS?.ACCOUNT_TYPE}
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Bank Country
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {location.state.VENDOR_DATA?.BANK_DETAILS?.BANK_COUNTRY}
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Bank key (IFSC)
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                DMS
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Bank Account
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                Test@gmail.com
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Account Holder
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                Noida
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Bank Name
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                UP
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Bank City
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                220223
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Mode Of Payment
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                No
              </Typography>
              <Divider />
            </Grid>
          </Grid>
          <Typography
            sx={{
              color: COLORS.white,
              fontWeight: 700,
              fontSize: 20,
              p: 1,
              backgroundColor: COLORS.primary,
            }}
          >
            Company Data
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Currency
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                Test Vendor
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Turn Over
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                India
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Company Code
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                Noida
              </Typography>
              <Divider />
            </Grid>
            <Grid item xs={6}>
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Inco Term
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                Test@gmail.com
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Procurement Plant
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                Noida
              </Typography>
            </Grid>
          </Grid>
          <Typography
            sx={{
              color: COLORS.white,
              fontWeight: 700,
              fontSize: 20,
              p: 1,
              backgroundColor: COLORS.primary,
            }}
          >
            Contact Person
          </Typography>
          <Typography
            sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
          >
            Details Of The User/Concern Person
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Name
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                Noida
              </Typography>

              <Divider />
            </Grid>
            <Grid item xs={6}>
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Employee Code
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                Noida
              </Typography>

              <Divider />
            </Grid>
          </Grid>
          <Typography
            sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
          >
            Vendor
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Telephone/Fax
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                Noida
              </Typography>

              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Phone local
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                Noida
              </Typography>

              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Cellular
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                Noida
              </Typography>

              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Bithday Date
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                Noida
              </Typography>

              <Divider />
            </Grid>
            <Grid item xs={6}>
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Email
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                Noida
              </Typography>

              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Owner Gender
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                Noida
              </Typography>

              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Whatsapp Number
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                Noida
              </Typography>

              <Divider />
            </Grid>
          </Grid>
          <Typography
            sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
          >
            Vendor Contact Person
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Name With Post
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                Noida
              </Typography>

              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Mobile Number
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                Noida
              </Typography>

              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Cellular
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                Noida
              </Typography>

              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Bithday Date
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                Noida
              </Typography>

              <Divider />
            </Grid>
            <Grid item xs={6}>
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Email
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                Noida
              </Typography>

              <Divider />
            </Grid>
          </Grid>
          <Typography
            sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
          >
            Promoter
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Promoter Name
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                Noida
              </Typography>

              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Mobile Number
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                Noida
              </Typography>

              <Divider />
            </Grid>
            <Grid item xs={6}>
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Email
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                Noida
              </Typography>

              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Address
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                Noida
              </Typography>

              <Divider />
            </Grid>
          </Grid>
          <Typography
            sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
          >
            Director/Partenr/Proprietor'S Name
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Name
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                Noida
              </Typography>

              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Mobile Number
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                Noida
              </Typography>

              <Divider />
            </Grid>
            <Grid item xs={6}>
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Email
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                Noida
              </Typography>

              <Divider />
            </Grid>
          </Grid>
        </MainScreen>
      </Box>
    </>
  );
}

export default VendorDetails;
