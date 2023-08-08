import React, { useState } from "react";
import MainScreen from "../../../components/AppDrawer/MainScreen";
import AppDrawer from "../../../components/AppDrawer/AppDrawer";
import { Box, CssBaseline, Tab, Tabs } from "@mui/material";
import Header from "../../../components/AppDrawer/Header";
import { CUSTOMER_CREATION } from "../../../utils/Routes";
import BackButtonImage from "../../../assets/images/back.png";
import { useLocation, useNavigate } from "react-router-dom";
import "./customerStyle.css";
import CustomerGeneralTab from "./CustomerTabs/CustomerGeneralTab";
import CustomerCompanyTab from "./CustomerTabs/CustomerCompanyTab";
import CustomerFinanceTab from "./CustomerTabs/CustomerFinanceTab";
import CustomerSalesDistributionTab from "./CustomerTabs/CustomerSalesDistributionTab";
import CustomerCreditSegment from "./CustomerTabs/CustomerCreditSegment";

const drawerWidth = 280;

function CustomerCreation() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showDrawer, setShowDrawer] = useState(false);
  const [VendorTab, setVendorTab] = useState(1);
  const [showDrawerAppBar, setShowDrawerAppBar] = useState(null);
  const [RoutedFromApprovalScreen, setRoutedFromApprovalScreen] =
    useState(false);
  const handleSelectedLoginTab = (event, newValue) => {
    setVendorTab(newValue);
  };

  return (
    <>
      <Box sx={{ display: "flex" }} className="back-ground">
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
            ActiveKey={CUSTOMER_CREATION}
          />
        </Box>
        <MainScreen drawerWidth={drawerWidth}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {showDrawerAppBar && (
              <img
                src={BackButtonImage}
                style={{
                  width: 35,
                  height: 20,
                  marginRight: 15,
                  marginBottom: 7,
                  cursor: "pointer",
                }}
                onClick={() => navigate(-1)}
                className="icon-image"
              />
            )}

            <h1
              style={{
                color: "white",
              }}
            >
              {RoutedFromApprovalScreen
                ? location.state?.VENDOR_DATA?.APPLICATION_ID
                : "Customer Creation"}
            </h1>
          </Box>
          <Tabs
            value={VendorTab}
            onChange={handleSelectedLoginTab}
            textColor="#fff"
            indicatorColor="primary"
            aria-label="primary"
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            sx={{
              "& .MuiTabs-indicatorSpan": {
                maxWidth: 40,
                width: "100%",
                backgroundColor: "#fff",
              },
              color: "#fff",
            }}
          >
            <Tab
              value={1}
              label="General"
              sx={{
                fontSize: { xs: 14, md: 18 },
                fontWeight: 600,
                textTransform: "none",
              }}
            />
            <Tab
              value={2}
              label="Company Data"
              sx={{
                fontSize: { xs: 14, md: 18 },
                fontWeight: 600,
                textTransform: "none",
              }}
            />
            <Tab
              value={3}
              label="Finance"
              sx={{
                fontSize: { xs: 14, md: 18 },
                fontWeight: 600,
                textTransform: "none",
              }}
            />
            <Tab
              value={4}
              label="Sale & Distribution"
              sx={{
                fontSize: { xs: 14, md: 18 },
                fontWeight: 600,
                textTransform: "none",
              }}
            />

            <Tab
              value={5}
              label="Credit Segment"
              sx={{
                fontSize: { xs: 14, md: 18 },
                fontWeight: 600,
                textTransform: "none",
              }}
            />
          </Tabs>
          {VendorTab == 1 && <CustomerGeneralTab />}
          {VendorTab == 2 && <CustomerCompanyTab />}
          {VendorTab == 3 && <CustomerFinanceTab />}
          {VendorTab == 4 && <CustomerSalesDistributionTab />}
          {VendorTab == 5 && <CustomerCreditSegment />}
          {/* {VendorTab == 2 && <TaxData />}
            {VendorTab == 3 && <BankDetails />}
            {VendorTab == 4 && <CompanyData />}
            {showDrawerAppBar && VendorTab == 5 && (
              <FinalVendorDetails showDrawerAppBar={showDrawerAppBar} />
            )}

            {VendorTab == 6 && (
              <ContactPerson showDrawerAppBar={showDrawerAppBar} />
            )} */}
        </MainScreen>
      </Box>
    </>
  );
}

export default CustomerCreation;
