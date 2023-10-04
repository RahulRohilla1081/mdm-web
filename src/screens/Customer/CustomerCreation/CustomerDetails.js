

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
import AppDrawer from "../../../components/AppDrawer/AppDrawer";
import MainScreen from "../../../components/AppDrawer/MainScreen";
import Header from "../../../components/AppDrawer/Header";
import { CUSTOMER, VENDOR, VENDOR_APPROVAL, VENDOR_DETAILS } from "../../../utils/Routes";
import { useLocation, useNavigate } from "react-router-dom";
import { COLORS } from "../../../utils/Theme";
import ICONS from "../../../utils/ICONS";
import axios from "axios";
import AXIOS from "../../../utils/AXIOS";
import cogoToast from "cogo-toast";

const drawerWidth = 280;
function CustomerDetails() {
  const location = useLocation();

  const [ApproveRejectButtonState, setApproveRejectButtonState] = useState({
    SHOW_APPROVE_BUTTON: false,
    SHOW_RETURN_BUTTON: false,
    SHOW_REJECT_BUTTON: false,
  });

  const [showApprovalRejectButton, setShowApprovalRejectButton] =
    useState(null);

  useEffect(() => {
    console.log("akhdjsajydbas", location.state.CUSTOMER_DATA);
    if (location.state?.CUSTOMER_DATA?.APPROVAL_FLAG == "2") {
      setShowApprovalRejectButton(false);
    } else if (location.state?.CUSTOMER_DATA?.APPROVAL_FLAG == "1") {
      setShowApprovalRejectButton(true);
    }
      // if (location.state.SCREEN_NAME == "APPROVAL") {
      //   setShowApprovalRejectButton(true);
      // } else {
      //   setShowApprovalRejectButton(false);
      // }
    // console.log(
    //   "location.state.CUSTOMER_DATA.APPROVER_NO",
    //   location.state.CUSTOMER_DATA.APPROVAL_FLAG == "5",
    //   location.state.CUSTOMER_DATA.APPROVAL_FLAG == "8"
    // );
    // if (location.state.APPROVER_NO == "1") {
    //   if (
    //     location.state.CUSTOMER_DATA.APPROVAL_FLAG == "4" ||
    //     location.state.CUSTOMER_DATA.APPROVAL_FLAG == "7"
    //   ) {
    //     setApproveRejectButtonState({
    //       SHOW_APPROVE_BUTTON: true,
    //       SHOW_RETURN_BUTTON: true,
    //       SHOW_REJECT_BUTTON: true,
    //     });
    //   }
    // } else if (location.state.APPROVER_NO == "2") {
    //   if (
    //     location.state.CUSTOMER_DATA.APPROVAL_FLAG == "5" ||
    //     location.state.CUSTOMER_DATA.APPROVAL_FLAG == "8"
    //   ) {
    //     setApproveRejectButtonState({
    //       SHOW_APPROVE_BUTTON: true,
    //       SHOW_RETURN_BUTTON: true,
    //       SHOW_REJECT_BUTTON: true,
    //     });
    //     console.log("inside uffff");
    //   }
    // } else {
    //   console.log("inside elseeeee");
    //   setApproveRejectButtonState({
    //     SHOW_APPROVE_BUTTON: false,
    //     SHOW_RETURN_BUTTON: false,
    //     SHOW_REJECT_BUTTON: false,
    //   });
    // }
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
    console.log("aksjbhsajdjhsabdhjsabdj", ClickedFlag);
    //     vendor master
    // through email, pending for submition 1
    // through email, pending for buyer approval 2 if approve 3 if reject 6

    // 2 level flow if status == 3.
    // approver_1 if approve 4 if rejected 7
    // approver_2 if approve 5 if rejected 8

    // approval master
    // schema
    // approver_1         approver_2        updated_on

    let tempActionName;
    if (ClickedFlag == "2") {
      tempActionName = "Customer Approved";
    } else if (ClickedFlag == "3") {
      tempActionName = "Customer Rejected";
    }

    const vendorPayload = [
      {
        CUSTOMER_ID: location.state.CUSTOMER_DATA.CUSTOMER_ID,
        APPROVAL_FLAG: ClickedFlag,
        TIMELINE: {
          ACTION_NAME: tempActionName,
          ACTION_TIME: new Date(),
        },
      },
    ];

    axios
      .post(AXIOS.axiosUrl + AXIOS.customer_approval_update, vendorPayload)
      .then((response) => {
        console.log(response.data);
        cogoToast.success("Action Completed");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [showDrawer, setShowDrawer] = useState(false);

  const PushDaTaInSAP = () => {
    console.log(
      "location.state.CUSTOMER_DATA.CUSTOMER_ID",
      location.state.CUSTOMER_DATA.CUSTOMER_ID
    );

    axios
      .post(AXIOS.axiosUrl + AXIOS.createVendorSAP, {
        CUSTOMER_ID: location.state.CUSTOMER_DATA.CUSTOMER_ID,
        TIMELINE: {
          ACTION_NAME: "Vendor Created Successfully",
          ACTION_TIME: new Date(),
        },
        // Srno1: "004",
        // Companycode:
        //   location.state.CUSTOMER_DATA?.COMPANY_DATA?.COMPANY_CODE != undefined
        //     ? location.state.CUSTOMER_DATA?.COMPANY_DATA?.COMPANY_CODE
        //     : "",
        // Purchasorgn:
        //   location.state.CUSTOMER_DATA?.COMPANY_DATA?.PROCUREMENT_PLANT !=
        //   undefined
        //     ? location.state.CUSTOMER_DATA?.COMPANY_DATA?.PROCUREMENT_PLANT
        //     : "",
        // Vendaccgrp: "",
        // Titlemedi: "",
        // Name1:
        //   location.state.CUSTOMER_DATA?.NAME != undefined
        //     ? location.state.CUSTOMER_DATA?.NAME
        //     : "",
        // Name2: "",
        // Name3: "",
        // Sort1:
        //   location.state.CUSTOMER_DATA?.BUSINESS_ROLE != undefined
        //     ? location.state.CUSTOMER_DATA?.BUSINESS_ROLE
        //     : "",
        // Street: "",
        // StrSuppl2: "",
        // StrSuppl3: "",
        // City2: "",
        // Postalcode:
        //   location.state.CUSTOMER_DATA?.PINCODE != undefined
        //     ? location.state.CUSTOMER_DATA?.PINCODE
        //     : "",
        // City1:
        //   location.state.CUSTOMER_DATA?.CITY != undefined
        //     ? location.state.CUSTOMER_DATA?.CITY
        //     : "",
        // Country:
        //   location.state.CUSTOMER_DATA?.COUNTRY != undefined
        //     ? location.state.CUSTOMER_DATA?.COUNTRY
        //     : "",
        // Region:
        //   location.state.CUSTOMER_DATA?.DISTRICT != undefined
        //     ? location.state.CUSTOMER_DATA?.DISTRICT
        //     : "",
        // Langu: "en",
        // Telnum:
        //   location.state.CUSTOMER_DATA?.CONTACT_PERSON?.VENDOR?.LANDLINE !=
        //   undefined
        //     ? location.state.CUSTOMER_DATA?.CONTACT_PERSON?.VENDOR?.LANDLINE
        //     : "",
        // Mobnum:
        //   location.state.CUSTOMER_DATA?.CONTACT_PERSON?.VENDOR?.MOBILE !=
        //   undefined
        //     ? location.state.CUSTOMER_DATA?.CONTACT_PERSON?.VENDOR?.MOBILE
        //     : "",
        // Faxnum:
        //   location.state.CUSTOMER_DATA?.FAX_DETAILS != undefined
        //     ? location.state.CUSTOMER_DATA?.FAX_DETAILS
        //     : "",
        // Emailid:
        //   location.state.CUSTOMER_DATA?.CONTACT_PERSON?.VENDOR?.EMAIL != undefined
        //     ? location.state.CUSTOMER_DATA?.CONTACT_PERSON?.VENDOR?.EMAIL
        //     : "",
        // Recoaccgl:
        //   location.state.CUSTOMER_DATA?.ADDITIONAL_DETAILS
        //     ?.RECONCILIATION_ACCOUNT != undefined
        //     ? location.state.CUSTOMER_DATA?.ADDITIONAL_DETAILS
        //         ?.RECONCILIATION_ACCOUNT
        //     : "",
        // Sortassign: "",
        // Paytermkey:
        //   location.state.CUSTOMER_DATA?.COMPANY_DATA?.PAYMENT_TERM != undefined
        //     ? location.state.CUSTOMER_DATA?.COMPANY_DATA?.PAYMENT_TERM
        //     : "",
        // Pan:
        //   location.state.CUSTOMER_DATA?.TAX_DATA?.PAN?.PAN_NUMBER != undefined
        //     ? location.state.CUSTOMER_DATA?.TAX_DATA?.PAN?.PAN_NUMBER
        //     : "",
        // Purchasecurr: "",
        // Grpcalcschem:
        //   location.state.CUSTOMER_DATA?.ADDITIONAL_DETAILS
        //     ?.GROUP_FOR_CALCULATION_SCHEMA != undefined
        //     ? location.state.CUSTOMER_DATA?.ADDITIONAL_DETAILS
        //         ?.GROUP_FOR_CALCULATION_SCHEMA
        //     : "",
        // Grbasedinv: "x",
        // Servbasdinv: "x",
        // Bahns:
        //   location.state.CUSTOMER_DATA?.ADDITIONAL_DETAILS?.TRAIN_STATION !=
        //   undefined
        //     ? location.state.CUSTOMER_DATA?.ADDITIONAL_DETAILS?.TRAIN_STATION
        //     : "",
        // Ssino: "",
        // Remarks: "",
        // Busab:
        //   location.state.CUSTOMER_DATA?.ADDITIONAL_DETAILS
        //     ?.ACCOUNTING_CLERK_ABBREVIATION != undefined
        //     ? location.state.CUSTOMER_DATA?.ADDITIONAL_DETAILS
        //         ?.ACCOUNTING_CLERK_ABBREVIATION
        //     : "",
        // Tradepartid:
        //   location.state.CUSTOMER_DATA?.COMPANY_DATA?.INCO_TERM_1 != undefined
        //     ? location.state.CUSTOMER_DATA?.COMPANY_DATA?.INCO_TERM_1
        //     : "",
        // Tradepartid1:
        //   location.state.CUSTOMER_DATA?.COMPANY_DATA?.INCO_TERM_2 != undefined
        //     ? location.state.CUSTOMER_DATA?.COMPANY_DATA?.INCO_TERM_2
        //     : "",
        // Tradepartid2:
        //   location.state.CUSTOMER_DATA?.COMPANY_DATA?.INCO_TERM_3 != undefined
        //     ? location.state.CUSTOMER_DATA?.COMPANY_DATA?.INCO_TERM_3
        //     : "",
        // Brsch: "",
        // Inco2:
        //   location.state.CUSTOMER_DATA?.COMPANY_DATA?.INCO_TERM_1 != undefined
        //     ? location.state.CUSTOMER_DATA?.COMPANY_DATA?.INCO_TERM_1
        //     : "",
        // Inco1:
        //   location.state.CUSTOMER_DATA?.COMPANY_DATA?.INCO_TERM_2 != undefined
        //     ? location.state.CUSTOMER_DATA?.COMPANY_DATA?.INCO_TERM_2
        //     : "",
        // GstRegNum:
        //   location.state.CUSTOMER_DATA?.TAX_DATA?.GST?.GST_NUMBER != undefined
        //     ? location.state.CUSTOMER_DATA?.TAX_DATA?.GST?.GST_NUMBER
        //     : "",
        // GstRegClas: "",
        // Zaadhar:
        //   location.state.CUSTOMER_DATA?.TAX_DATA?.AADHAR?.AADHAR_NUMBER !=
        //   undefined
        //     ? location.state.CUSTOMER_DATA?.TAX_DATA?.AADHAR?.AADHAR_NUMBER
        //     : "",
      })
      .then((response) => {
        console.log(response);
        cogoToast.success("vendor Created in SAP", response);
      })
      .catch((err) => {
        cogoToast.error("Something went wrong");
      });
  };

  console.log(
    "askdhbsad",
    location.state.CUSTOMER_DATA.APPROVAL_FLAG,
    location.state.APPROVAL_FLAG == "7",
    location.state.APPROVER_NO == "1"
  );

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
            ActiveKey={showApprovalRejectButton ? CUSTOMER : CUSTOMER}
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
            <h1>Customer Details</h1>

            {showApprovalRejectButton ? (
              <Box>
                <Button
                  color="success"
                  variant="contained"
                  disabled={ApproveRejectButtonState.SHOW_APPROVE_BUTTON}
                  sx={{
                    m: 2,
                  }}
                  onClick={() => {
                    // if (location.state.APPROVER_NO == "1") {
                    //   VendorApproveReject("4");
                    // } else if (location.state.APPROVER_NO == "2") {
                    //   VendorApproveReject("5");
                    //   PushDaTaInSAP();
                    // }
                    VendorApproveReject("2");
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
                  disabled={ApproveRejectButtonState.SHOW_REJECT_BUTTON}
                  onClick={() => {
                    VendorApproveReject("3");
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
          <h3>Customer ID: {location.state.CUSTOMER_DATA.CUSTOMER_ID}</h3>

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
                Name 1
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {location.state.CUSTOMER_DATA?.NAME_1}
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Name 2
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {location.state.CUSTOMER_DATA?.NAME_2}
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Country
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {location.state.CUSTOMER_DATA?.COUNTRY}
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Address Line 1
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {location.state.CUSTOMER_DATA?.ADDRESS_LINE_2}
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Address Line 2
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {location.state.CUSTOMER_DATA?.ADDRESS_LINE_1}
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Time Zone
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {location.state.CUSTOMER_DATA?.TIMEZONE}
              </Typography>
              <Divider />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
                >
                  Supporting Document
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
                          location.state.CUSTOMER_DATA?.SUPPORTING_DOC
                        );
                      }}
                    />
                  </Button>
                </Tooltip>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Email ID
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {location.state.CUSTOMER_DATA?.EMAIL}
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                City
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {location.state.CUSTOMER_DATA?.CITY}
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                District
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {location.state.CUSTOMER_DATA?.DISTRICT}
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                State
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {location.state.CUSTOMER_DATA?.STATE}
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Pin Code
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {location.state.CUSTOMER_DATA?.PINCODE}
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Fax Details
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {location.state.CUSTOMER_DATA?.FAX}
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
                Company Code
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {location.state.CUSTOMER_DATA?.COMPANY_DATA?.COMPANY_CODE}
              </Typography>
              {/* <Divider /> */}
            </Grid>
            <Grid item xs={6}>
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Reconciliation Account in General Ledger
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {
                  location.state.CUSTOMER_DATA?.COMPANY_DATA
                    ?.RECONCILIATION_ACCOUNT
                }
              </Typography>
              {/* <Divider /> */}
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
            Finance
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                ECC Number
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {location.state.CUSTOMER_DATA?.FINANCE?.ECC_NUMBER}
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Excise Registration Number
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {
                  location.state.CUSTOMER_DATA?.FINANCE
                    ?.EXCISE_REGISTRATION_NUMBER
                }
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Excise Range
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {location.state.CUSTOMER_DATA?.FINANCE?.EXCISE_RANGE}
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Excise Division
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {location.state.CUSTOMER_DATA?.FINANCE?.EXCISE_DIVISION}
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Service Tax Registration Number
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {
                  location.state.CUSTOMER_DATA?.FINANCE
                    ?.SERVICE_TAX_REGISTRATION_NUMBER
                }
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                PAN Number
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {location.state.CUSTOMER_DATA?.FINANCE?.PAN_NUMBER}
              </Typography>
              <Divider />
            </Grid>
            <Grid item xs={6}>
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Excise Commission
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {location.state.CUSTOMER_DATA?.FINANCE?.EXCISE_COMMISSION_RATE}
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Central Sales Tax Number
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {
                  location.state.CUSTOMER_DATA?.FINANCE
                    ?.CENTRAL_SALES_TAX_NUMBER
                }
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Local Sales Tax Number
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {location.state.CUSTOMER_DATA?.FINANCE?.LOCAL_SALES_TAX_NUMBER}
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                GST Number
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {location.state.CUSTOMER_DATA?.FINANCE?.GST_NUMBER}
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Customer classification for GST
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {
                  location.state.CUSTOMER_DATA?.FINANCE
                    ?.CUSTOMER_CLASSIFICATION_FOR_GST
                }
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
            Sales and distribution
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Customer Classification for PPD
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {
                  location.state.CUSTOMER_DATA?.SALES_DISTRIBUTION
                    ?.CUSTOMER_CLASSIFICATION_FOR_PPD
                }
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Order Combination Indicator
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {
                  location.state.CUSTOMER_DATA?.SALES_DISTRIBUTION
                    ?.ORDER_COMBINATION_INDICATOR
                }
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Shipping Conditions
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {
                  location.state.CUSTOMER_DATA?.SALES_DISTRIBUTION
                    ?.SHIPPING_CONDITION
                }
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Customer Group
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {
                  location.state.CUSTOMER_DATA?.SALES_DISTRIBUTION
                    ?.CUSTOMER_GROUP
                }
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Sales Group
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {location.state.CUSTOMER_DATA?.SALES_DISTRIBUTION?.SALES_GROUP}
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Delivery Plant
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {
                  location.state.CUSTOMER_DATA?.SALES_DISTRIBUTION
                    ?.DELIVERY_PLANT
                }
              </Typography>
              {/* <Divider /> */}
            </Grid>
            <Grid item xs={6}>
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Inco Term 1
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {location.state.CUSTOMER_DATA?.SALES_DISTRIBUTION?.INCO_TERM_1}
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Inco Term 2
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {location.state.CUSTOMER_DATA?.SALES_DISTRIBUTION?.INCO_TERM_2}{" "}
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Currency
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {location.state.CUSTOMER_DATA?.SALES_DISTRIBUTION?.CURRENCY}
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Distribution Channel
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {
                  location.state.CUSTOMER_DATA?.SALES_DISTRIBUTION
                    ?.DISTRIBUTION_CHANNEL
                }
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Division
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {location.state.CUSTOMER_DATA?.SALES_DISTRIBUTION?.DIVISION}{" "}
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Sales Office
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {location.state.CUSTOMER_DATA?.SALES_DISTRIBUTION?.SALES_OFFICE}
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
            Credit Segment
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Customer's credit limit
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {
                  location.state.CUSTOMER_DATA?.CREDIT_SEGMENT
                    ?.CUSTOMER_CREDIT_LIMIT
                }
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Risk Class Credit
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {
                  location.state.CUSTOMER_DATA?.CREDIT_SEGMENT
                    ?.RISK_CLASS_CREDIT
                }
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Credit Rules
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {location.state.CUSTOMER_DATA?.CREDIT_SEGMENT?.CREDIT_RULE}
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Credit control area
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {
                  location.state.CUSTOMER_DATA?.CREDIT_SEGMENT
                    ?.CREDIT_CONTROL_AREA
                }
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
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Name
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {location.state.CUSTOMER_DATA?.CONTACT_PERSON?.NAME}
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Email
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {location.state.CUSTOMER_DATA?.CONTACT_PERSON?.EMAIL}
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Address
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {location.state.CUSTOMER_DATA?.CONTACT_PERSON?.ADDRESS}
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Mobile
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {location.state.CUSTOMER_DATA?.CONTACT_PERSON?.MOBILE_NUMBER}
              </Typography>
              {/* <Divider /> */}

              {/* <Divider /> */}
            </Grid>
            <Grid item xs={6}>
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Gender
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {location.state.CUSTOMER_DATA?.CONTACT_PERSON?.GENDER}
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Birth Date
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {
                  location.state.CUSTOMER_DATA?.CONTACT_PERSON
                    ?.PERSON_BIRTH_DATE
                }
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Birth Month
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {
                  location.state.CUSTOMER_DATA?.CONTACT_PERSON
                    ?.PERSON_BIRTH_MONTH
                }
              </Typography>
              <Divider />
              <Typography
                sx={{ color: "#333", fontWeight: 600, fontSize: 18, p: 1 }}
              >
                Designation
              </Typography>
              <Typography sx={{ color: "#333", fontSize: 18, p: 1 }}>
                {location.state.CUSTOMER_DATA?.CONTACT_PERSON?.DESIGNATION}
              </Typography>
            </Grid>
          </Grid>
        </MainScreen>
      </Box>
    </>
  );
}

export default CustomerDetails;
