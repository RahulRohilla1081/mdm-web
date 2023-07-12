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
    console.log("akhdjsajydbas", location.state.VENDOR_DATA);
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

    const openURLInNewTab = (url) => {
      window.open(url, "_blank", "noreferrer");
    };

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

  const PushDaTaInSAP=()=>{
    axios
      .post(AXIOS.axiosUrl + AXIOS.createVendorSAP, {
        Srno1: "004",
        Companycode: location.state.VENDOR_DATA?.COMPANY_DATA?.COMPANY_CODE,
        Purchasorgn: "",
        Vendaccgrp: "",
        Titlemedi: "",
        Name1: "Ram",
        Name2: "Lax",
        Name3: "",
        Sort1: "",
        Street: "",
        StrSuppl2: "",
        StrSuppl3: "",
        City2: "",
        Postalcode: "",
        City1: "",
        Country: "",
        Region: "",
        Langu: "",
        Telnum: "",
        Mobnum: "",
        Faxnum: "",
        Emailid: "",
        Recoaccgl: "",
        Sortassign: "",
        Paytermkey: "",
        Pan: "",
        Purchasecurr: "",
        Grpcalcschem: "",
        Grbasedinv: "",
        Servbasdinv: "",
        Bahns: "",
        Ssino: "",
        Remarks: "",
        Busab: "",
        Tradepartid: "00000000",
        Tradepartid1: "00000000",
        Tradepartid2: "00000000",
        Brsch: "",
        Inco1: "",
        Inco2: "",
        GstRegNum: "",
        GstRegClas: "",
        Zaadhar: "000000000000",
      })
      .then((response) => {
        cogoToast.success("vendor Created in SAP");
      })
      .catch((err) => {
        cogoToast.error("Something went wrong");
      });
  }

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
                    if (location.state.APPROVER_NO == "1") {
                      VendorApproveReject("4");
                    } else if (location.state.APPROVER_NO == "2") {
                      VendorApproveReject("5");
                      PushDaTaInSAP()
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
                {location.state.VENDOR_DATA?.NAME}
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Country
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {location.state.VENDOR_DATA?.COUNTRY}
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Address
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {location.state.VENDOR_DATA?.ADDRESS}
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Time Zone
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                IST
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Business Role
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {location.state.VENDOR_DATA?.BUSINESS_ROLE}
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
                {location.state.VENDOR_DATA?.EMAIL}
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                City
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {location.state.VENDOR_DATA?.CITY}
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                State
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {location.state.VENDOR_DATA?.STATE}
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Pin Code
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {location.state.VENDOR_DATA?.PINCODE}
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Fax Details
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {location.state.VENDOR_DATA?.FAX_DETAILS}
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
                  {location.state.VENDOR_DATA?.TAX_DATA?.GST?.GST_NUMBER}
                </Typography>
                <Tooltip title={"View Document"}>
                  <Button variant="text" component={"label"}>
                    <img
                      src={ICONS.folder}
                      style={{
                        height: 30,
                        width: 30,
                      }}
                      onClick={() => {
                        openURLInNewTab(
                          location.state.VENDOR_DATA?.TAX_DATA?.GST?.GST_DOC_URL
                        );
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
                  {location.state.VENDOR_DATA?.TAX_DATA?.PAN?.PAN_NUMBER}
                </Typography>
                <Tooltip title={"View Document"}>
                  <Button variant="text" component={"label"}>
                    <img
                      src={ICONS.folder}
                      style={{
                        height: 30,
                        width: 30,
                      }}
                      onClick={() => {
                        openURLInNewTab(
                          location.state.VENDOR_DATA?.TAX_DATA?.PAN?.PAN_DOC_URL
                        );
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
                  {location.state.VENDOR_DATA?.TAX_DATA?.CIN?.CIN_NUMBER}
                </Typography>
                <Tooltip title={"View Document"}>
                  <Button variant="text" component={"label"}>
                    <img
                      src={ICONS.folder}
                      style={{
                        height: 30,
                        width: 30,
                      }}
                      onClick={() => {
                        openURLInNewTab(
                          location.state.VENDOR_DATA?.TAX_DATA?.CIN?.CIN_DOC_URL
                        );
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
                  {location.state.VENDOR_DATA?.TAX_DATA?.MSME?.MSME_NUMBER}
                </Typography>
                <Tooltip title={"View Document"}>
                  <Button variant="text" component={"label"}>
                    <img
                      src={ICONS.folder}
                      style={{
                        height: 30,
                        width: 30,
                      }}
                      onClick={() => {
                        openURLInNewTab(
                          location.state.VENDOR_DATA?.TAX_DATA?.MSME
                            ?.MSME_DOC_URL
                        );
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
                  {/* {location.state.VENDOR_DATA?.AADHAR?.AADHAR_NUMBER} */}
                  {location.state.VENDOR_DATA?.TAX_DATA?.AADHAR?.AADHAR_NUMBER}
                </Typography>
                <Tooltip title={"View Document"}>
                  <Button variant="text" component={"label"}>
                    <img
                      src={ICONS.folder}
                      style={{
                        height: 30,
                        width: 30,
                      }}
                      onClick={() => {
                        openURLInNewTab(
                          location.state.VENDOR_DATA?.TAX_DATA?.AADHAR
                            ?.AADHAR_DOC_URL
                        );
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
                {location.state.VENDOR_DATA?.BANK_DETAILS?.BANK_KEY}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Bank Account
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {location.state.VENDOR_DATA?.BANK_DETAILS?.BANK_ACCOUNT}
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Account Holder
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {location.state.VENDOR_DATA?.BANK_DETAILS?.ACCOUNT_HOLDER}
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Bank Name
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {location.state.VENDOR_DATA?.BANK_DETAILS?.ACCOUNT_HOLDER}
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Bank City
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {location.state.VENDOR_DATA?.BANK_DETAILS?.BANK_CITY}
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Mode Of Payment
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {location.state.VENDOR_DATA?.BANK_DETAILS?.MODE_OF_PAYMENT}
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
                {location.state.VENDOR_DATA?.COMPANY_DATA?.BANK_KEY}
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Turn Over
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {location.state.VENDOR_DATA?.COMPANY_DATA?.TURNOVER}
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Company Code
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {location.state.VENDOR_DATA?.COMPANY_DATA?.COMPANY_CODE}
              </Typography>
              <Divider />
            </Grid>
            <Grid item xs={6}>
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Inco Term 1
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {location.state.VENDOR_DATA?.COMPANY_DATA?.INCO_TERM_1}
              </Typography>
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Inco Term 2
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {location.state.VENDOR_DATA?.COMPANY_DATA?.INCO_TERM_2}
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Procurement Plant
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {location.state.VENDOR_DATA?.COMPANY_DATA?.PROCUREMENT_PLANT}
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
            Additional Info
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Reconciliation Account in General Ledger
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {
                  location.state.VENDOR_DATA?.ADDITIONAL_DETAILS
                    ?.RECONCILIATION_ACCOUNT
                }
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Group for Calculation Schema (Supplier)
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {
                  location.state.VENDOR_DATA?.ADDITIONAL_DETAILS
                    ?.GROUP_FOR_CALCULATION_SCHEMA
                }
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Train Station
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {location.state.VENDOR_DATA?.ADDITIONAL_DETAILS?.TRAIN_STATION}
              </Typography>
              <Divider />
            </Grid>
            <Grid item xs={6}>
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Accounting Clerk Abbreviation
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {
                  location.state.VENDOR_DATA?.ADDITIONAL_DETAILS
                    ?.ACCOUNTING_CLERK_ABBREVIATION
                }
              </Typography>
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Trade Partner ID 1
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {location.state.VENDOR_DATA?.COMPANY_DATA?.INCO_TERM_2}{" "}
                {
                  location.state.VENDOR_DATA?.ADDITIONAL_DETAILS
                    ?.TRADE_PARTNER_ID_1
                }{" "}
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Trade Partner ID 2
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {location.state.VENDOR_DATA?.COMPANY_DATA?.TRADE_PARTNER_ID_2}
              </Typography>
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Trade Partner ID 3
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {location.state.VENDOR_DATA?.COMPANY_DATA?.INCO_TERM_2}{" "}
                {
                  location.state.VENDOR_DATA?.ADDITIONAL_DETAILS
                    ?.TRADE_PARTNER_ID_3
                }{" "}
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
            Contact Person
          </Typography>
          <Typography
            sx={{
              color: "#333",
              fontWeight: 600,
              fontSize: 18,
              p: 1,
              backgroundColor: "#e5e2f4",
            }}
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
                {
                  location.state.VENDOR_DATA?.CONTACT_PERSON?.DETAILS_OF_USER
                    ?.NAME
                }
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Address
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {
                  location.state.VENDOR_DATA?.CONTACT_PERSON?.DETAILS_OF_USER
                    ?.ADDRESS
                }
              </Typography>

              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Mobile
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {
                  location.state.VENDOR_DATA?.CONTACT_PERSON?.DETAILS_OF_USER
                    ?.MOBILE
                }
              </Typography>

              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Gender
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {
                  location.state.VENDOR_DATA?.CONTACT_PERSON?.DETAILS_OF_USER
                    ?.GENDER?.value
                }
              </Typography>

              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Bithday Date
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {
                  location.state.VENDOR_DATA?.CONTACT_PERSON?.DETAILS_OF_USER
                    ?.BIRTH_DATE?.value
                }
              </Typography>

              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Bithday Month
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {
                  location.state.VENDOR_DATA?.CONTACT_PERSON?.DETAILS_OF_USER
                    ?.BIRTH_MONTH?.value
                }
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
                {
                  location.state.VENDOR_DATA?.CONTACT_PERSON?.DETAILS_OF_USER
                    ?.EMAIL
                }
              </Typography>

              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Landline
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {
                  location.state.VENDOR_DATA?.CONTACT_PERSON?.DETAILS_OF_USER
                    ?.LANDLINE
                }
              </Typography>

              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Designation
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {
                  location.state.VENDOR_DATA?.CONTACT_PERSON?.DETAILS_OF_USER
                    ?.DESIGNATION
                }
              </Typography>

              <Divider />
            </Grid>
          </Grid>
          <Typography
            sx={{
              color: "#333",
              fontWeight: 600,
              fontSize: 18,
              p: 1,
              backgroundColor: "#e5e2f4",
            }}
          >
            Vendor Contact Person
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Name
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {
                  location.state.VENDOR_DATA?.CONTACT_PERSON
                    ?.VENDOR_CONTACT_PERSON?.NAME
                }
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Address
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {
                  location.state.VENDOR_DATA?.CONTACT_PERSON
                    ?.VENDOR_CONTACT_PERSON?.ADDRESS
                }
              </Typography>

              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Mobile
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {
                  location.state.VENDOR_DATA?.CONTACT_PERSON
                    ?.VENDOR_CONTACT_PERSON?.MOBILE
                }
              </Typography>

              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Gender
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {
                  location.state.VENDOR_DATA?.CONTACT_PERSON
                    ?.VENDOR_CONTACT_PERSON?.GENDER?.value
                }
              </Typography>

              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Bithday Date
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {
                  location.state.VENDOR_DATA?.CONTACT_PERSON
                    ?.VENDOR_CONTACT_PERSON?.BIRTH_DATE?.value
                }
              </Typography>

              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Bithday Month
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {
                  location.state.VENDOR_DATA?.CONTACT_PERSON
                    ?.VENDOR_CONTACT_PERSON?.BIRTH_MONTH?.value
                }
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
                {
                  location.state.VENDOR_DATA?.CONTACT_PERSON
                    ?.VENDOR_CONTACT_PERSON?.EMAIL
                }
              </Typography>

              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Landline
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {
                  location.state.VENDOR_DATA?.CONTACT_PERSON
                    ?.VENDOR_CONTACT_PERSON?.LANDLINE
                }
              </Typography>

              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Designation
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {
                  location.state.VENDOR_DATA?.CONTACT_PERSON
                    ?.VENDOR_CONTACT_PERSON?.DESIGNATION
                }
              </Typography>

              <Divider />
            </Grid>
          </Grid>
          <Typography
            sx={{
              color: "#333",
              fontWeight: 600,
              fontSize: 18,
              p: 1,
              backgroundColor: "#e5e2f4",
            }}
          >
            Promoter
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Name
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {location.state.VENDOR_DATA?.CONTACT_PERSON?.PROMOTER?.NAME}
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Address
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {location.state.VENDOR_DATA?.CONTACT_PERSON?.PROMOTER?.ADDRESS}
              </Typography>

              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Mobile
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {location.state.VENDOR_DATA?.CONTACT_PERSON?.PROMOTER?.MOBILE}
              </Typography>

              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Gender
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {
                  location.state.VENDOR_DATA?.CONTACT_PERSON?.PROMOTER?.GENDER
                    ?.value
                }
              </Typography>

              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Bithday Date
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {
                  location.state.VENDOR_DATA?.CONTACT_PERSON?.PROMOTER
                    ?.BIRTH_DATE?.value
                }
              </Typography>

              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Bithday Month
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {
                  location.state.VENDOR_DATA?.CONTACT_PERSON?.PROMOTER
                    ?.BIRTH_MONTH?.value
                }
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
                {
                  location.state.VENDOR_DATA?.CONTACT_PERSON?.DETAILS_OF_USER
                    ?.EMAIL
                }
              </Typography>

              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Landline
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {
                  location.state.VENDOR_DATA?.CONTACT_PERSON?.DETAILS_OF_USER
                    ?.LANDLINE
                }
              </Typography>

              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Designation
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {
                  location.state.VENDOR_DATA?.CONTACT_PERSON?.DETAILS_OF_USER
                    ?.DESIGNATION
                }
              </Typography>

              <Divider />
            </Grid>
          </Grid>
          <Typography
            sx={{
              color: "#333",
              fontWeight: 600,
              fontSize: 18,
              p: 1,
              backgroundColor: "#e5e2f4",
            }}
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
                {
                  location.state.VENDOR_DATA?.CONTACT_PERSON
                    ?.DIRECTOR_PARTNER_PROPRIETOR?.NAME
                }
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Address
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {
                  location.state.VENDOR_DATA?.CONTACT_PERSON
                    ?.DIRECTOR_PARTNER_PROPRIETOR?.ADDRESS
                }
              </Typography>

              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Mobile
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {
                  location.state.VENDOR_DATA?.CONTACT_PERSON
                    ?.DIRECTOR_PARTNER_PROPRIETOR?.MOBILE
                }
              </Typography>

              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Gender
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {
                  location.state.VENDOR_DATA?.CONTACT_PERSON
                    ?.DIRECTOR_PARTNER_PROPRIETOR?.GENDER?.value
                }
              </Typography>

              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Bithday Date
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {
                  location.state.VENDOR_DATA?.CONTACT_PERSON
                    ?.DIRECTOR_PARTNER_PROPRIETOR?.BIRTH_DATE?.value
                }
              </Typography>

              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Bithday Month
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {
                  location.state.VENDOR_DATA?.CONTACT_PERSON
                    ?.DIRECTOR_PARTNER_PROPRIETOR?.BIRTH_MONTH?.value
                }
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
                {
                  location.state.VENDOR_DATA?.DIRECTOR_PARTNER_PROPRIETOR
                    ?.DETAILS_OF_USER?.EMAIL
                }
              </Typography>

              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Landline
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {
                  location.state.VENDOR_DATA?.DIRECTOR_PARTNER_PROPRIETOR
                    ?.DETAILS_OF_USER?.LANDLINE
                }
              </Typography>

              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Designation
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {
                  location.state.VENDOR_DATA?.DIRECTOR_PARTNER_PROPRIETOR
                    ?.DETAILS_OF_USER?.DESIGNATION
                }
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
