// import React, { useEffect, useState } from "react";

// import { Box } from "@mui/system";

// // import Header from "../components/header/Header";
// // import AppDrawer from "../components/AppDrawer";
// import {
//   Button,
//   CssBaseline,
//   Divider,
//   Modal,
//   Stack,
//   TextField,
//   Typography,
// } from "@mui/material";
// import AppDrawer from "../../components/AppDrawer/AppDrawer";
// import MainScreen from "../../components/AppDrawer/MainScreen";
// import Header from "../../components/AppDrawer/Header";
// import {
//   DASHBOARD,
//   VENDOR_APPROVAL,
//   VENDOR_CREATION,
// } from "../../utils/Routes";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import General from "./VendorsTabs/General";
// import TaxData from "./VendorsTabs/TaxData";
// import BankDetails from "./VendorsTabs/BankDetails";
// import CompanyData from "./VendorsTabs/CompanyData";
// import ContactPerson from "./VendorsTabs/ContactPerson";
// import { Countertops, Height } from "@mui/icons-material";
// import AXIOS from "../../utils/AXIOS";
// import axios from "axios";
// import { useLocation, useNavigate } from "react-router-dom";
// import { RxCross1 } from "react-icons/rx";
// import { connect } from "react-redux";
// import BackButtonImage from "../../assets/images/back.png";
// import {
//   setGeneralDataAction,
//   setCompanyDataAction,
//   setContactPersonAction,
//   setBankDetailsAction,
//   setAdditionalInformationAction,
//   setTaxDataAction,
// } from "../../redux/action/vendorAction";
// import cogoToast from "cogo-toast";

// import "./style.css";
// import AdditionalInformation from "./VendorsTabs/AdditionalInformation";

// const drawerWidth = 280;

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: "70%",
//   height: "70vh",
//   bgcolor: "background.paper",
//   // border: "0px solid gray",
//   boxShadow: 24,
//   p: 4,
//   bgcolor: "white",
// };
// function VendorCreation(props) {

//   const navigate=useNavigate();

//   const [showDrawerAppBar, setShowDrawerAppBar] = useState(null);

//   const [sendOTPTimer, setSendOTPTimer] = useState(null);

//   const [vendorOTPModalFlag, setVendorOTPModalFlag] = useState(null);
//   const [vendorVerificationOTP, setVendorVerificationOTP] = useState("");
//   const [CountryList, setCountryList] = useState([]);

//   const [RoutedFromApprovalScreen, setRoutedFromApprovalScreen] =
//     useState(false);

//   const location = useLocation();

//   useEffect(() => {
//     getCountryData();
//   }, []);

//   useEffect(() => {
//     console.log(props.GENERAL_DATA);
//     if (location.state == null) {
//       setShowDrawerAppBar(false);
//       setVendorOTPModalFlag(true);

//       // sendOTPtoReceiverMail();
//     } else {
//       if (location?.state?.SCREEN_NAME == "APPROVAL") {
//         setRoutedFromApprovalScreen(true);
//       } else {
//         props.setGeneralDataAction([]);
//         props.setTaxDataAction([]);
//         props.setContactPersonAction([]);
//         props.setCompanyDataAction([]);
//         props.setBankDetailsAction([]);
//         props.setAdditionalInformationAction([]);
//         setRoutedFromApprovalScreen(false);
//       }
//       setShowDrawerAppBar(true);
//       setVendorOTPModalFlag(false);
//     }

//     if (location.state?.SCREEN_NAME == "APPROVAL") {
//       console.log("response.data.vendor_data[0]?", location.state?.VENDOR_DATA);
//       setDataInRedux();
//     } else {
//       console.log(
//         "response.data.vendor_data[0]? inside else",
//         location.state?.VENDOR_DATA
//       );
//     }
//     var SecuredOTP = localStorage.getItem("MDM_MasterOTPToken");
// console.log("a,jbhjadbhjesb f", SecuredOTP);
//     console.log("s", AXIOS.axiosUrl + AXIOS.verifySessionToken + SecuredOTP);
//     if (SecuredOTP != null) {
//       VerifyOTP(SecuredOTP);
//     }
//   }, [CountryList]);

//   const setDataInRedux = () => {
//     console.log("CountryList", CountryList);
//     const countryIndex = CountryList.findIndex(
//       (val) => val.value == location.state?.VENDOR_DATA?.COUNTRY
//     );

//     console.log(
//       "location.state?.VENDOR_DATA?.APPLICATION_ID",
//       location.state?.VENDOR_DATA?.APPLICATION_ID
//     );
//     let tempGeneralData = {
//       APPLICATION_ID: location.state?.VENDOR_DATA?.APPLICATION_ID,
//       NAME: location.state?.VENDOR_DATA?.NAME,
//       EMAIL: location.state?.VENDOR_DATA?.EMAIL,
//       COUNTRY: CountryList[countryIndex],
//       STATE: {
//         label: location.state?.VENDOR_DATA?.STATE,
//         value: location.state?.VENDOR_DATA?.STATE,
//       },
//       CITY:
//         location.state?.VENDOR_DATA?.CITY != "undefined"
//           ? location.state?.VENDOR_DATA?.CITY
//           : "",
//       ADDRESS_LINE_1: location.state?.VENDOR_DATA?.ADDRESS_LINE_1,
//       ADDRESS_LINE_2: location.state?.VENDOR_DATA?.ADDRESS_LINE_2,
//       ADDRESS_LINE_3: location.state?.VENDOR_DATA?.ADDRESS_LINE_3,
//       PINCODE: location.state?.VENDOR_DATA?.PINCODE,
//       FAX:
//         location.state?.VENDOR_DATA?.FAX_DETAILS != "undefined"
//           ? location.state?.VENDOR_DATA?.FAX_DETAILS
//           : "",
//       TIME_ZONE: location.state?.VENDOR_DATA?.TIME_ZONE_MOBILE,
//       COMPANY_CODE: location.state?.VENDOR_DATA?.COMPANY_DATA.COMPANY_CODE,
//       BUSINESS_ROLE: {
//         label: location.state?.VENDOR_DATA?.BUSINESS_ROLE,
//         value: location.state?.VENDOR_DATA?.BUSINESS_ROLE,
//       },
//     };

//     //             GST: { GST_NUMBER: props.TAX_DATA.GST_NUMBER },
//     // PAN: { PAN_NUMBER: props.TAX_DATA.PAN_NUMBER },
//     // CIN: { CIN_NUMBER: props.TAX_DATA.CIN_NUMBER },
//     // MSME: { MSME_NUMBER: props.TAX_DATA.MSME_NUMBER },
//     // AADHAR: { AADHAR_NUMBER: props.TAX_DATA.AADHAR_NUMBER },
//     let tempTaxData = {
//       GST_NUMBER: location.state?.VENDOR_DATA?.TAX_DATA.GST?.GST_NUMBER,
//       PAN_NUMBER: location.state?.VENDOR_DATA?.TAX_DATA.PAN?.PAN_NUMBER,
//       CIN_NUMBER: location.state?.VENDOR_DATA?.TAX_DATA.CIN?.CIN_NUMBER,
//       MSME_NUMBER: location.state?.VENDOR_DATA?.TAX_DATA.MSME?.MSME_NUMBER,
//       AADHAR_NUMBER:location.state?.VENDOR_DATA?.TAX_DATA.AADHAR?.AADHAR_NUMBER,
//       MSME_DOC_URL: location.state?.VENDOR_DATA?.TAX_DATA.GST?.MSME_DOC_URL,
//       CIN_DOC_URL: location.state?.VENDOR_DATA?.TAX_DATA.GST?.CIN_DOC_URL,
//       PAN_DOC_URL: location.state?.VENDOR_DATA?.TAX_DATA.GST?.PAN_DOC_URL,
//       GST_DOC_URL: location.state?.VENDOR_DATA?.TAX_DATA.GST?.GST_DOC_URL,
//       AADHAR_DOC_URL:location.state?.VENDOR_DATA?.TAX_DATA.AADHAR?.AADHAR_DOC_URL,
//     };

//     let tempCompanyData = {
//       CURRENCY: {
//         label: location.state?.VENDOR_DATA?.COMPANY_DATA?.CURRENCY,
//         value: location.state?.VENDOR_DATA?.COMPANY_DATA?.CURRENCY,
//       },
//       INCO_TERM_1: {
//         label: location.state?.VENDOR_DATA?.COMPANY_DATA?.INCO_TERM_1,
//         value: location.state?.VENDOR_DATA?.COMPANY_DATA?.INCO_TERM_1,
//       },
//       INCO_TERM_2: {
//         label: location.state?.VENDOR_DATA?.COMPANY_DATA?.INCO_TERM_2,
//         value: location.state?.VENDOR_DATA?.COMPANY_DATA?.INCO_TERM_2,
//       },

//       PAYMENT_TERM: location.state?.VENDOR_DATA?.COMPANY_DATA?.PAYMENT_TERM,
//       PROCUREMENT_PLANT:
//         location.state?.VENDOR_DATA?.COMPANY_DATA?.PROCUREMENT_PLANT,
//       TURNOVER: location.state?.VENDOR_DATA?.COMPANY_DATA?.TURNOVER,
//     };

//     props.setGeneralDataAction(tempGeneralData);
//     props.setTaxDataAction(tempTaxData);
//     props.setCompanyDataAction(tempCompanyData);
//     props.setCompanyDataAction(location.state?.VENDOR_DATA?.ADDITIONAL_DETAILS);
//     props.setContactPersonAction(location.state?.VENDOR_DATA?.CONTACT_PERSON);

//     props.setBankDetailsAction(location.state?.VENDOR_DATA?.BANK_DETAILS);
//   };
//   useEffect(() => {
//     console.log("sendOTPTimer", sendOTPTimer);
//     if (sendOTPTimer != null && sendOTPTimer >= 30) {
//       console.log("inside if");

//       let tempSendOTPTimer = 0;
//       tempSendOTPTimer = sendOTPTimer;
//       setSendOTPTimer(tempSendOTPTimer + 1);
//     } else {
//       console.log("inside else");
//     }

//     console.log("sendOTPTimer", sendOTPTimer);
//   }, [sendOTPTimer]);

//   const [showDrawer, setShowDrawer] = useState(false);
//   const [VendorTab, setVendorTab] = useState(1);

//   const [receiverVendorEmail, setReceiverVendorEmail] = useState({
//     RECEIVER_EMAIL_ID: "",
//     ERROR_FLAG: false,
//   });

//   const handleSelectedLoginTab = (event, newValue) => {
//     setVendorTab(newValue);
//   };

//   const sendOTPtoReceiverMail = (Token) => {
//     var url = window.location.href;
//     // console.log("URL", url);
//     url = url.split("=");
//     var final_url = url[1];
//     console.log("Latest url", final_url);
//     if (final_url.length > 0) {
//       axios
//         .post(AXIOS.axiosUrl + AXIOS.vendor_create_otp_send, {
//           VENDOR_CREATE_TOKEN: final_url,
//         })
//         .then((response) => {
//           if (response.data.daysLimitError == true) {
//             cogoToast.error("Application expired, Please contact buyer");
//           }
//           else{
//             cogoToast.success("OTP sent to Email ID")
//           }

//           console.log("valid token", response.data);
//         });
//     } else {
//       alert("No data");
//     }
//   };

//   const getCountryData = () => {
//     axios.get(AXIOS.axiosUrl + AXIOS.country_master).then((response) => {
//       let tempCountryList = [];
//       console.log(response.data.length);
//       response.data.map((val) => {
//         let stateArray = [];

//         // console.log(StateArray);
//         // val.STATE.map((innerVal) => {
//         //   StateArray.push({ label: innerVal, value: innerVal })
//         // });
//         if (val.STATE.length > 0) {
//           val.STATE.map((item) => {
//             if (item != "") {
//               stateArray.push({ label: item, value: item });
//             }
//             // console.log("item", { label: item, value: item });
//           });
//         }

//         // console.log("stateArray", stateArray);

//         tempCountryList.push({
//           label: val.COUNTRY_NAME,
//           value: val.COUNTRY_KEY,
//           state_array: stateArray,
//           timezone: val.TIME_ZONE,
//           postal_code_length: val.POSTAL_CODE_LENGTH,
//         });
//       });

//       console.log("tempCountryList", tempCountryList);
//       setCountryList(tempCountryList);
//     });
//   };

//   const VerifyOTP = (OTP) => {
//     var url = window.location.href;
//     // console.log("URL", url);
//     url = url.split("=");

//     var final_url = url[1];
//     console.log("Latest url", final_url);

//     console.log("vendorVerificationOTP", {
//       VENDOR_CREATE_TOKEN: final_url,
//       VENDOR_CREATE_INVITEE_OTP:
//         OTP == undefined ? parseInt(vendorVerificationOTP) : parseInt(OTP),
//     });
//     if (OTP == undefined) {
//       if (vendorVerificationOTP.length == 6) {
//         axios
//           .post(AXIOS.axiosUrl + AXIOS.vendor_create_otp_verification, {
//             VENDOR_CREATE_TOKEN: final_url,
//             VENDOR_CREATE_INVITEE_OTP:
//               OTP == undefined
//                 ? parseInt(vendorVerificationOTP)
//                 : parseInt(OTP),
//           })
//           .then((response) => {
//             console.log("sldfjhdsbfhjds",response.data);
//             if (response.data.OTP_verified == true) {
//               localStorage.setItem("MDM_MasterOTPToken", vendorVerificationOTP);
//               const countryIndex = CountryList.findIndex(
//                 (val) => val.value == response.data.vendor_data[0].COUNTRY
//               );

//               let tempGeneralData = {
//                 APPLICATION_ID: response.data.vendor_data[0]?.APPLICATION_ID,
//                 NAME: response.data.vendor_data[0]?.NAME,
//                 EMAIL: response.data.vendor_data[0]?.EMAIL,
//                 COUNTRY: CountryList[countryIndex],
//                 STATE: {
//                   label: response.data.vendor_data[0]?.STATE,
//                   value: response.data.vendor_data[0]?.STATE,
//                 },
//                 CITY:
//                   response.data.vendor_data[0]?.CITY != "undefined"
//                     ? response.data.vendor_data[0].CITY
//                     : "",
//                 ADDRESS_LINE_1: response.data.vendor_data[0]?.ADDRESS_LINE_1,
//                 ADDRESS_LINE_2: response.data.vendor_data[0]?.ADDRESS_LINE_2,
//                 ADDRESS_LINE_3: response.data.vendor_data[0]?.ADDRESS_LINE_3,
//                 PINCODE: response.data.vendor_data[0]?.PINCODE,
//                 FAX:
//                   response.data.vendor_data[0]?.FAX_DETAILS != "undefined"
//                     ? response.data.vendor_data[0]?.FAX_DETAILS
//                     : "",
//                 TIME_ZONE: response.data.vendor_data[0]?.TIME_ZONE_MOBILE,
//                 COMPANY_CODE:
//                   response.data.vendor_data[0]?.COMPANY_DATA.COMPANY_CODE,
//                 BUSINESS_ROLE: {
//                   label: response.data.vendor_data[0]?.BUSINESS_ROLE,
//                   value: response.data.vendor_data[0]?.BUSINESS_ROLE,
//                 },
//               };

//               //             GST: { GST_NUMBER: props.TAX_DATA.GST_NUMBER },
//               // PAN: { PAN_NUMBER: props.TAX_DATA.PAN_NUMBER },
//               // CIN: { CIN_NUMBER: props.TAX_DATA.CIN_NUMBER },
//               // MSME: { MSME_NUMBER: props.TAX_DATA.MSME_NUMBER },
//               // AADHAR: { AADHAR_NUMBER: props.TAX_DATA.AADHAR_NUMBER },
//               // let tempTaxData = {
//               //   GST_NUMBER: response.data.vendor_data[0].TAX_DATA.GST,
//               //   PAN_NUMBER: response.data.vendor_data[0].TAX_DATA.PAN,
//               //   CIN_NUMBER: response.data.vendor_data[0].TAX_DATA.CIN,
//               //   MSME_NUMBER: response.data.vendor_data[0].TAX_DATA.MSMSE,
//               //   AADHAR_NUMBER: response.data.vendor_data[0].TAX_DATA.AADHAR,
//               // };
//               let tempTaxData = {
//                 GST_NUMBER:
//                   response.data.vendor_data[0]?.TAX_DATA?.GST?.GST_NUMBER,
//                 PAN_NUMBER:
//                   response.data.vendor_data[0]?.TAX_DATA?.PAN?.PAN_NUMBER,
//                 CIN_NUMBER:
//                   response.data.vendor_data[0]?.TAX_DATA?.CIN?.CIN_NUMBER,
//                 MSME_NUMBER:
//                   response.data.vendor_data[0]?.TAX_DATA?.MSME?.MSME_NUMBER,
//                 AADHAR_NUMBER:
//                   response.data.vendor_data[0]?.TAX_DATA?.AADHAR?.AADHAR_NUMBER,
//                 MSME_DOC_URL:
//                   response.data.vendor_data[0]?.TAX_DATA?.GST?.MSME_DOC_URL,
//                 CIN_DOC_URL:
//                   response.data.vendor_data[0]?.TAX_DATA?.GST?.CIN_DOC_URL,
//                 PAN_DOC_URL:
//                   response.data.vendor_data[0]?.TAX_DATA?.GST?.PAN_DOC_URL,
//                 GST_DOC_URL:
//                   response.data.vendor_data[0]?.TAX_DATA?.GST?.GST_DOC_URL,
//                 AADHAR_DOC_URL:
//                   response.data.vendor_data[0]?.TAX_DATA?.AADHAR
//                     ?.AADHAR_DOC_URL,
//               };
//               let tempCompanyData = {
//                 CURRENCY: {
//                   label: response.data.vendor_data[0]?.COMPANY_DATA?.CURRENCY,
//                   value: response.data.vendor_data[0]?.COMPANY_DATA?.CURRENCY,
//                 },
//                 INCO_TERM_1: {
//                   label:
//                     response.data.vendor_data[0]?.COMPANY_DATA?.INCO_TERM_1,
//                   value:
//                     response.data.vendor_data[0]?.COMPANY_DATA?.INCO_TERM_1,
//                 },
//                 INCO_TERM_2: {
//                   label:
//                     response.data.vendor_data[0]?.COMPANY_DATA?.INCO_TERM_2,
//                   value:
//                     response.data.vendor_data[0]?.COMPANY_DATA?.INCO_TERM_2,
//                 },

//                 PAYMENT_TERM:
//                   response.data.vendor_data[0]?.COMPANY_DATA?.PAYMENT_TERM,
//                 PROCUREMENT_PLANT:
//                   response.data.vendor_data[0]?.COMPANY_DATA?.PROCUREMENT_PLANT,
//                 TURNOVER: response.data.vendor_data[0]?.COMPANY_DATA?.TURNOVER,
//               };

//               props.setGeneralDataAction(tempGeneralData);
//               props.setTaxDataAction(tempTaxData);
//               props.setCompanyDataAction(tempCompanyData);
//               props.setContactPersonAction(
//                 response.data.vendor_data[0].CONTACT_PERSON
//               );

//               props.setBankDetailsAction(
//                 response.data.vendor_data[0].BANK_DETAILS
//               );
//               props.setAdditionalInformationAction(
//                 response.data.vendor_data[0].ADDITIONAL_DETAILS
//               );
//               setVendorOTPModalFlag(false);
//             } else {
//               cogoToast.error("OTP does not matched")
//               setVendorOTPModalFlag(true);
//               localStorage.removeItem(
//                 "MDM_MasterOTPToken",
//                 vendorVerificationOTP
//               );
//             }
//           })
//           .catch((err) => {
//             console.log(err);
//             console.log("kjsndhjdsbfhjdsbfhjdsb");
//           });
//       } else {
//         cogoToast.error("Please enter OTP");
//       }
//     }
//   };

//   const sendURLtoVendor = () => {
//     console.log(receiverVendorEmail?.RECEIVER_EMAIL_ID);
//     if (receiverVendorEmail?.RECEIVER_EMAIL_ID == "") {
//       cogoToast.warn("Please enter email ID");
//     } else if (
//       props.GENERAL_DATA?.COMPANY_CODE == "" ||
//       props.GENERAL_DATA?.COMPANY_CODE == undefined
//     ) {
//       cogoToast.warn("Please enter Company code");
//     } else {
//       let VendorFormData = new FormData();

//       // VendorFormData.append("NAME", props.GENERAL_DATA.NAME);
//       VendorFormData.set("NAME", props.GENERAL_DATA?.NAME!=undefined ? props.GENERAL_DATA?.NAME :"");
//       VendorFormData.set("APPROVAL_FLAG", "1");
//       VendorFormData.set("EMAIL", props.GENERAL_DATA?.EMAIL!=undefined ?props.GENERAL_DATA?.EMAIL:"");
//       VendorFormData.set(
//         "VENDOR_GROUP",
//         props.GENERAL_DATA?.VENDOR_GROUP != undefined
//           ? props.GENERAL_DATA?.VENDOR_GROUP
//           : ""
//       );
//       VendorFormData.set("COUNTRY", props.GENERAL_DATA?.COUNTRY?.value!=undefined?props.GENERAL_DATA?.COUNTRY?.value:"");
//       VendorFormData.set("CITY", props.GENERAL_DATA?.CITY!=undefined ? props.GENERAL_DATA?.CITY:"");
//       VendorFormData.set("STATE", props.GENERAL_DATA?.STATE?.value!=undefined ? props.GENERAL_DATA?.STATE?.value :"");
//       VendorFormData.set("ADDRESS_LINE_1", props.GENERAL_DATA?.ADDRESS_LINE_1!=undefined ? props.GENERAL_DATA?.ADDRESS_LINE_1 :"");
//       VendorFormData.set("ADDRESS_LINE_2", props.GENERAL_DATA?.ADDRESS_LINE_2!=undefined ?props.GENERAL_DATA?.ADDRESS_LINE_2 :"");
//       VendorFormData.set("ADDRESS_LINE_3", props.GENERAL_DATA?.ADDRESS_LINE_3!=undefined ?props.GENERAL_DATA?.ADDRESS_LINE_3 :"");
//       VendorFormData.set("PINCODE", props.GENERAL_DATA?.PINCODE!=undefined ? props.GENERAL_DATA?.PINCODE :"");
//       VendorFormData.set("DISTRICT", props.GENERAL_DATA?.DISTRICT!=undefined ?props.GENERAL_DATA?.DISTRICT :"");
//           VendorFormData.set(
//             "SCH_GRP_VEND",
//             props.GENERAL_DATA?.SCH_GRP_VEND?.value != undefined
//               ? props.GENERAL_DATA?.SCH_GRP_VEND?.value
//               : ""
//           );
//      VendorFormData.set(
//        "TIMELINE",
//        JSON.stringify({
//          ACTION_NAME:
//            props.showDrawerAppBar == true
//              ? "Request Generated by Buyer"
//              : "Request Submitted by Vendor",
//          ACTION_TIME: new Date(),
//        })
//      );

//       VendorFormData.set(
//         "TIME_ZONE_MOBILE",
//         props.GENERAL_DATA.COUNTRY?.timezone!=undefined ?  props.GENERAL_DATA.COUNTRY?.timezone :""
//       );
//       VendorFormData.set("FAX_DETAILS", props.GENERAL_DATA?.FAX!=undefined ?props.GENERAL_DATA?.FAX :"");

//       VendorFormData.set(
//         "BUSINESS_ROLE",
//         props.GENERAL_DATA?.BUSINESS_ROLE?.value!=undefined?   props.GENERAL_DATA?.BUSINESS_ROLE?.value:""
//       );
//       VendorFormData.set(
//         "TAX_DATA",
//         JSON.stringify({
//           GST: { GST_NUMBER: props.TAX_DATA?.GST_NUMBER },
//           PAN: { PAN_NUMBER: props.TAX_DATA?.PAN_NUMBER },
//           CIN: { CIN_NUMBER: props.TAX_DATA?.CIN_NUMBER },
//           MSME: { MSME_NUMBER: props.TAX_DATA?.MSME_NUMBER },
//           AADHAR: { AADHAR_NUMBER: props.TAX_DATA?.AADHAR_NUMBER },
//         })
//       );
//       VendorFormData.append("GST_DOC", props.TAX_DATA?.GST_NUMBER_FILE);
//       VendorFormData.append("PAN_DOC", props.TAX_DATA?.PAN_NUMBER_FILE);
//       VendorFormData.append("CIN_DOC", props.TAX_DATA?.CIN_NUMBER_FILE);
//       VendorFormData.append("MSME_DOC", props.TAX_DATA?.MSME_NUMBER_FILE);
//       VendorFormData.append("AADHAR_DOC", props.TAX_DATA?.AADHAR_NUMBER_FILE);
//       VendorFormData.set(
//         "BANK_DETAILS",
//         JSON.stringify({
//           ACCOUNT_TYPE:
//             props.BANK_DETAILS_DATA?.ACCOUNT_TYPE != undefined
//               ? props.BANK_DETAILS_DATA?.ACCOUNT_TYPE
//               : "",
//           BANK_ACCOUNT:
//             props.BANK_DETAILS_DATA?.BANK_ACCOUNT != undefined
//               ? props.BANK_DETAILS_DATA?.BANK_ACCOUNT
//               : "",
//           ACCOUNT_HOLDER:
//             props.BANK_DETAILS_DATA?.ACCOUNT_HOLDER != undefined
//               ? props.BANK_DETAILS_DATA?.ACCOUNT_HOLDER
//               : "",
//           BANK_COUNTRY:
//             props.BANK_DETAILS_DATA?.BANK_COUNTRY != undefined
//               ? props.BANK_DETAILS_DATA?.BANK_COUNTRY
//               : "",
//           BANK_NAME:
//             props.BANK_DETAILS_DATA?.BANK_NAME != undefined
//               ? props.BANK_DETAILS_DATA?.BANK_NAME
//               : "",
//           BANK_KEY:
//             props.BANK_DETAILS_DATA?.BANK_KEY != undefined
//               ? props.BANK_DETAILS_DATA?.BANK_KEY
//               : "",
//           BANK_CITY:
//             props.BANK_DETAILS_DATA?.BANK_CITY != undefined
//               ? props.BANK_DETAILS_DATA?.BANK_CITY
//               : "",
//           MODE_OF_PAYMENT:
//             props.BANK_DETAILS_DATA?.MODE_OF_PAYMENT?.value != undefined
//               ? props.BANK_DETAILS_DATA?.MODE_OF_PAYMENT?.value
//               : "",
//         })
//       );
//       VendorFormData.set(
//         "COMPANY_DATA",
//         JSON.stringify({
//           CURRENCY:
//             props.COMPANY_DATA?.CURRENCY?.value != undefined
//               ? props.COMPANY_DATA?.CURRENCY?.value
//               : "",
//           TURNOVER:
//             props.COMPANY_DATA?.TURNOVER != undefined
//               ? props.COMPANY_DATA?.TURNOVER
//               : "",
//           COMPANY_CODE:
//             props.GENERAL_DATA?.COMPANY_CODE != undefined
//               ? props.GENERAL_DATA?.COMPANY_CODE
//               : "",
//           PAYMENT_TERM:
//             props.COMPANY_DATA?.PAYMENT_TERM != undefined
//               ? props.COMPANY_DATA?.PAYMENT_TERM
//               : "",
//           INCO_TERM_1:
//             props.COMPANY_DATA?.INCO_TERM_1?.value != undefined
//               ? props.COMPANY_DATA?.INCO_TERM_1?.value
//               : "",
//           INCO_TERM_2:
//             props.COMPANY_DATA?.INCO_TERM_2?.value != undefined
//               ? props.COMPANY_DATA?.INCO_TERM_2?.value
//               : "",
//           PROCUREMENT_PLANT:
//             props.COMPANY_DATA?.PROCUREMENT_PLANT != undefined
//               ? props.COMPANY_DATA?.PROCUREMENT_PLANT
//               : "",
//         })
//       );

//       VendorFormData.set(
//         "ADDITIONAL_DETAILS",
//         JSON.stringify({
//           ACCOUNTING_CLERK_ABBREVIATION:
//             props.ADDITIONAL_DETAILS?.ACCOUNTING_CLERK_ABBREVIATION != undefined
//               ? props.ADDITIONAL_DETAILS?.ACCOUNTING_CLERK_ABBREVIATION
//               : "",
//           RECONCILIATION_ACCOUNT:
//             props.ADDITIONAL_DETAILS?.RECONCILIATION_ACCOUNT != undefined
//               ? props.ADDITIONAL_DETAILS?.RECONCILIATION_ACCOUNT
//               : "",
//           GROUP_FOR_CALCULATION_SCHEMA:
//             props.ADDITIONAL_DETAILS?.GROUP_FOR_CALCULATION_SCHEMA != undefined
//               ? props.ADDITIONAL_DETAILS?.GROUP_FOR_CALCULATION_SCHEMA
//               : "",
//           TRAIN_STATION:
//             props.ADDITIONAL_DETAILS?.TRAIN_STATION != undefined
//               ? props.ADDITIONAL_DETAILS?.TRAIN_STATION
//               : "",
//           TRADE_PARTNER_ID_1:
//             props.ADDITIONAL_DETAILS?.TRADE_PARTNER_ID_1 != undefined
//               ? props.ADDITIONAL_DETAILS?.TRADE_PARTNER_ID_1
//               : "",
//           TRADE_PARTNER_ID_2:
//             props.ADDITIONAL_DETAILS?.TRADE_PARTNER_ID_2 != undefined
//               ? props.ADDITIONAL_DETAILS?.TRADE_PARTNER_ID_2
//               : "",
//           TRADE_PARTNER_ID_3:
//             props.ADDITIONAL_DETAILS?.TRADE_PARTNER_ID_3 != undefined
//               ? props.ADDITIONAL_DETAILS?.TRADE_PARTNER_ID_3
//               : "",
//         })
//       );
//       VendorFormData.set(
//         "CONTACT_PERSON",
//         JSON.stringify({
//           DETAILS_OF_USER: {
//             NAME: props.CONTACT_PERSON?.NAME,
//             ADDRESS: props.CONTACT_PERSON?.ADDRESS,
//             GENDER: props.CONTACT_PERSON?.GENDER,
//             BIRTH_DATE: props.CONTACT_PERSON?.BIRTH_DATE,
//             BIRTH_MONTH: props.CONTACT_PERSON?.BIRTH_MONTH,
//             EMAIL: props.CONTACT_PERSON?.EMAIL,
//             MOBILE: props.CONTACT_PERSON?.MOBILE,
//             LANDLINE: props.CONTACT_PERSON?.LANDLINE,
//             DESIGNATION: props.CONTACT_PERSON?.DESIGNATION,
//           },
//           VENDOR: {
//             NAME: props.CONTACT_PERSON?.NAME,
//             ADDRESS: props.CONTACT_PERSON?.ADDRESS,
//             GENDER: props.CONTACT_PERSON?.GENDER,
//             BIRTH_DATE: props.CONTACT_PERSON?.BIRTH_DATE,
//             BIRTH_MONTH: props.CONTACT_PERSON?.BIRTH_MONTH,
//             EMAIL: props.CONTACT_PERSON?.EMAIL,
//             MOBILE: props.CONTACT_PERSON?.MOBILE,
//             LANDLINE: props.CONTACT_PERSON?.LANDLINE,
//             DESIGNATION: props.CONTACT_PERSON?.DESIGNATION,
//           },
//           VENDOR_CONTACT_PERSON: {
//             NAME: props.CONTACT_PERSON?.NAME,
//             ADDRESS: props.CONTACT_PERSON?.ADDRESS,
//             GENDER: props.CONTACT_PERSON?.GENDER,
//             BIRTH_DATE: props.CONTACT_PERSON?.BIRTH_DATE,
//             BIRTH_MONTH: props.CONTACT_PERSON?.BIRTH_MONTH,
//             EMAIL: props.CONTACT_PERSON?.EMAIL,
//             MOBILE: props.CONTACT_PERSON?.MOBILE,
//             LANDLINE: props.CONTACT_PERSON?.LANDLINE,
//             DESIGNATION: props.CONTACT_PERSON?.DESIGNATION,
//           },
//           PROMOTER: {
//             NAME: props.CONTACT_PERSON?.NAME,
//             ADDRESS: props.CONTACT_PERSON?.ADDRESS,
//             GENDER: props.CONTACT_PERSON?.GENDER,
//             BIRTH_DATE: props.CONTACT_PERSON?.BIRTH_DATE,
//             BIRTH_MONTH: props.CONTACT_PERSON?.BIRTH_MONTH,
//             EMAIL: props.CONTACT_PERSON?.EMAIL,
//             MOBILE: props.CONTACT_PERSON?.MOBILE,
//             LANDLINE: props.CONTACT_PERSON?.LANDLINE,
//             DESIGNATION: props.CONTACT_PERSON?.DESIGNATION,
//           },
//           DIRECTOR_PARTNER_PROPRIETOR: {
//             NAME: props.CONTACT_PERSON?.NAME,
//             ADDRESS: props.CONTACT_PERSON?.ADDRESS,
//             GENDER: props.CONTACT_PERSON?.GENDER,
//             BIRTH_DATE: props.CONTACT_PERSON?.BIRTH_DATE,
//             BIRTH_MONTH: props.CONTACT_PERSON?.BIRTH_MONTH,
//             EMAIL: props.CONTACT_PERSON?.EMAIL,
//             MOBILE: props.CONTACT_PERSON?.MOBILE,
//             LANDLINE: props.CONTACT_PERSON?.LANDLINE,
//             DESIGNATION: props.CONTACT_PERSON?.DESIGNATION,
//           },
//         })
//       );
//       VendorFormData.set("SUBMITTED_FLAG", false);

//       console.log("Submitting");
//       axios
//         .post(AXIOS.axiosUrl + AXIOS.vendorCreate, VendorFormData)
//         .then((response) => {
//           console.log("response.dataasasddads", response.data);
//           axios
//             .post(AXIOS.axiosUrl + AXIOS.vendorFormCreationURLEmail, {
//               APPLICATION_ID: response.data.APPLICATION_ID,
//               EMAIL: receiverVendorEmail?.RECEIVER_EMAIL_ID,
//               MAILING_TIME: new Date(),
//             })
//             .then((response) => {
//               console.log(response);
//               alert("URL sent");
//             })
//             .catch((err) => {
//               console.log(err);
//             });
//         })
//         .catch((err) => {
//           console.log(err);
//         });

//       //URL SENT TO EMAIL
//     }
//   };

//   const VendorApproveReject = (ClickedFlag) => {
//     //     vendor master
//     // through email, pending for submition 1
//     // through email, pending for buyer approval 2 if approve 3 if reject 6

//     // 2 level flow if status == 3.
//     // approver_1 if approve 4 if rejected 7
//     // approver_2 if approve 5 if rejected 8

//     // approval master
//     // schema
//     // approver_1         approver_2        updated_on

//     const vendorPayload = [
//       {
//         APPLICATION_ID: location.state?.VENDOR_DATA?.APPLICATION_ID,
//         APPROVAL_FLAG: ClickedFlag,
//       },
//     ];

//     axios
//       .post(AXIOS.axiosUrl + AXIOS.vendor_approve_reject, vendorPayload)
//       .then((response) => {
//         console.log(response.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   window.onbeforeunload = function () {
//     return "Data will be lost if you leave the page, are you sure?";
//   };
//   return (
//     <Box sx={{ display: "flex" }} className="back-ground">
//       <CssBaseline />
//       {showDrawerAppBar && (
//         <>
//           <Header
//             drawerWidth={drawerWidth}
//             toggleDrawer={setShowDrawer}
//             showDrawer={showDrawer}
//           />
//           <Box component="nav">
//             <AppDrawer
//               drawerWidth={drawerWidth}
//               toggleDrawer={setShowDrawer}
//               showDrawer={showDrawer}
//               ActiveKey={
//                 RoutedFromApprovalScreen ? VENDOR_APPROVAL : VENDOR_CREATION
//               }
//             />
//           </Box>
//         </>
//       )}

//       <MainScreen drawerWidth={showDrawerAppBar ? 280 : 0}>
//         {/* <Box className="wave-background"/> */}
//         {/* <Component {...props} /> */}
//         <Box
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//           }}
//         >
//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//             }}
//           >
//             {showDrawerAppBar && (
//               <img
//                 src={BackButtonImage}
//                 style={{
//                   width: 35,
//                   height: 20,
//                   marginRight: 15,
//                   marginBottom: 7,
//                   cursor: "pointer",
//                 }}
//                 onClick={() => navigate(-1)}
//                 className="icon-image"
//               />
//             )}

//             <h1
//               style={{
//                 color: "white",
//               }}
//             >
//               {RoutedFromApprovalScreen
//                 ? location.state?.VENDOR_DATA?.APPLICATION_ID
//                 : "Vendor Creation"}
//             </h1>
//           </Box>

//           {/* <Box></Box> */}
//           {showDrawerAppBar &&
//             (RoutedFromApprovalScreen ? (
//               <Box>
//                 <Button
//                   color="success"
//                   variant="outlined"
//                   sx={{
//                     m: 2,
//                   }}
//                   onClick={() => {
//                     VendorApproveReject("3");
//                   }}
//                 >
//                   Approve
//                 </Button>
//                 <Button
//                   color="error"
//                   variant="outlined"
//                   sx={{
//                     m: 2,
//                   }}
//                   onClick={() => {
//                     VendorApproveReject("6");
//                   }}
//                 >
//                   Reject
//                 </Button>
//               </Box>
//             ) : (
//               <Box
//                 sx={{
//                   display: "flex",
//                   alignItems: "center",
//                   alignContent: "center",
//                 }}
//               >
//                 <TextField
//                   placeholder="Email ID"
//                   onBlur={(e) => {
//                     console.log(e.target.value);
//                     if (e.target.value != "") {
//                       if (
//                         e.target.value.includes("@") &&
//                         e.target.value.includes(".com")
//                       ) {
//                         console.log("not incldeed");
//                       } else {
//                         setReceiverVendorEmail((prev) => ({
//                           ...prev,
//                           ERROR_FLAG: true,
//                         }));
//                         console.log("yes");
//                       }
//                     }
//                   }}
//                   helperText={
//                     receiverVendorEmail?.ERROR_FLAG
//                       ? "Please enter a valid email ID"
//                       : ""
//                   }
//                   error={receiverVendorEmail?.ERROR_FLAG}
//                   value={receiverVendorEmail?.RECEIVER_EMAIL_ID}
//                   onFocus={() => {}}
//                   onChange={(e) => {
//                     setReceiverVendorEmail((prev) => ({
//                       ...prev,
//                       RECEIVER_EMAIL_ID: e.target.value.toLowerCase(),
//                       ERROR_FLAG: false,
//                     }));
//                   }}
//                   style={{
//                     backgroundColor: "#fff",
//                   }}
//                 />
//                 <Button
//                   color="success"
//                   variant="contained"
//                   sx={{
//                     ml: 2,
//                   }}
//                   onClick={() => {
//                     sendURLtoVendor();
//                   }}
//                 >
//                   Send URL
//                 </Button>
//               </Box>
//             ))}
//         </Box>

//         <Tabs
//           value={VendorTab}
//           onChange={handleSelectedLoginTab}
//           textColor="#fff"
//           indicatorColor="primary"
//           aria-label="primary"
//           variant="scrollable"
//           scrollButtons
//           allowScrollButtonsMobile
//           sx={{

//             "& .MuiTabs-indicatorSpan": {
//               maxWidth: 40,
//               width: "100%",
//               backgroundColor: "#fff",
//             },
//             color: "#fff",
//           }}
//         >
//           <Tab
//             value={1}
//             label="General"
//             sx={{
//               fontSize: { xs: 14, md: 18 },
//               fontWeight: 600,
//               textTransform: "none",
//             }}
//           />
//           <Tab
//             value={2}
//             label="Tax Data"
//             sx={{
//               fontSize: { xs: 14, md: 18 },
//               fontWeight: 600,
//               textTransform: "none",
//             }}
//           />
//           <Tab
//             value={3}
//             label="Bank Details"
//             sx={{
//               fontSize: { xs: 14, md: 18 },
//               fontWeight: 600,
//               textTransform: "none",
//             }}
//           />
//           <Tab
//             value={4}
//             label="Company Data"
//             sx={{
//               fontSize: { xs: 14, md: 18 },
//               fontWeight: 600,
//               textTransform: "none",
//             }}
//           />
//           {showDrawerAppBar && (
//             <Tab
//               value={5}
//               label="Additional information"
//               sx={{
//                 fontSize: { xs: 14, md: 18 },
//                 fontWeight: 600,
//                 textTransform: "none",
//               }}
//             />
//           )}

//           <Tab
//             value={6}
//             label="Contact Person"
//             sx={{
//               fontSize: { xs: 14, md: 18 },
//               fontWeight: 600,
//               textTransform: "none",
//             }}
//           />
//         </Tabs>
//         {VendorTab == 1 && <General />}
//         {VendorTab == 2 && <TaxData />}
//         {VendorTab == 3 && <BankDetails />}
//         {VendorTab == 4 && <CompanyData />}
//         {showDrawerAppBar && VendorTab == 5 && (
//           <AdditionalInformation showDrawerAppBar={showDrawerAppBar} />
//         )}

//         {VendorTab == 6 && (
//           <ContactPerson showDrawerAppBar={showDrawerAppBar} />
//         )}
//         <Modal
//           open={vendorOTPModalFlag}
//           // onClose={()=>{
//           //   setVendorOTPModalFlag(false)
//           // }}
//           aria-labelledby="modal-modal-title"
//           aria-describedby="modal-modal-description"
//         >
//           <div className="design-container">
//             <div className="design-wrapper">
//               <div className="form-card">
//                 <p className="form-card-title">Please Enter OTP</p>
//                 <p className="form-card-prompt">
//                   Please check your email ID if OTP not received click on Resend
//                   Button
//                 </p>
//                 <div className="form-card-input-wrapper">
//                   <input
//                     type="tel"
//                     maxLength={6}
//                     placeholder="______"
//                     className="form-card-input"
//                     value={vendorVerificationOTP}
//                     onChange={(e) => {
//                       setVendorVerificationOTP(e.target.value);
//                     }}
//                   />
//                   <div className="form-card-input-bg" />
//                 </div>
//                 <Typography
//                   className="call-again"
//                   onClick={() => {
//                     sendOTPtoReceiverMail();
//                     setSendOTPTimer(1);
//                   }}
//                 >
//                   Resend OTP
//                 </Typography>

//                 <button
//                   className="form-card-submit"
//                   onClick={() => {
//                     VerifyOTP();
//                   }}
//                 >
//                   submit
//                 </button>
//               </div>
//             </div>
//             <svg
//               id="uuid-d8a0d861-3741-4013"
//               xmlns="http://www.w3.org/2000/svg"
//               width="186.5491027832"
//               height="376.9284057617"
//               xmlnsXlink="http://www.w3.org/1999/xlink"
//               viewBox="0 0 186.5491027832 376.9284057617"
//             ></svg>
//           </div>

//           {/* <Box sx={style}>

//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//               }}
//             >
//               <Typography
//                 id="modal-modal-title"
//                 variant="h6"
//                 component="h2"
//                 style={{
//                   fontWeight: "bold",
//                 }}
//               >
//                 OTP Verification
//               </Typography>
//             </div>
//             <Divider />
//             <Box
//               sx={{
//                 // padding: 3,
//                 marginTop: 3,
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//             >
//               <TextField
//                 placeholder="OTP"
//                 value={vendorVerificationOTP}
//                 onChange={(e) => {
//                   setVendorVerificationOTP(e.target.value);
//                 }}
//               />
//             </Box>
//             <Box
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//             >
//               <Typography
//                 sx={{
//                   color: "blue",
//                   cursor: "pointer",
//                   margin: 1,
//                 }}
//                 onClick={() => {
//                   sendOTPtoReceiverMail();
//                 }}
//               >
//                 Resend
//               </Typography>
//             </Box>
//             <Box
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 marginTop: 3,
//               }}
//             >
//               <Button
//                 variant="contained"
//                 onClick={() => {
//                   VerifyOTP();
//                   // setVendorOTPModalFlag(false)
//                 }}
//               >
//                 Verify
//               </Button>
//             </Box>
//           </Box> */}
//         </Modal>
//       </MainScreen>
//     </Box>
//     // <AppDrawer/>
//   );
// }

// const mapStateToProps = (state) => ({
//   CONTACT_PERSON: state.vendor.contact_person,
//   BANK_DETAILS_DATA: state.vendor.bank_details_data,
//   COMPANY_DATA: state.vendor.company_data,
//   TAX_DATA: state.vendor.tax_data,
//   GENERAL_DATA: state.vendor.general_data,
//   ADDITIONAL_DETAILS: state.vendor.additional_info,
// });

// export default connect(mapStateToProps, {
//   setGeneralDataAction,
//   setCompanyDataAction,
//   setContactPersonAction,
//   setBankDetailsAction,
//   setTaxDataAction,
//   setAdditionalInformationAction,
// })(VendorCreation);

import React, { useEffect, useState } from "react";

import { Box } from "@mui/system";

// import Header from "../components/header/Header";
// import AppDrawer from "../components/AppDrawer";
import {
  Button,
  CssBaseline,
  Divider,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AppDrawer from "../../components/AppDrawer/AppDrawer";
import MainScreen from "../../components/AppDrawer/MainScreen";
import Header from "../../components/AppDrawer/Header";
import {
  DASHBOARD,
  VENDOR_APPROVAL,
  VENDOR_CREATION,
} from "../../utils/Routes";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import General from "./VendorsTabs/General";
import TaxData from "./VendorsTabs/TaxData";
import BankDetails from "./VendorsTabs/BankDetails";
import CompanyData from "./VendorsTabs/CompanyData";
import ContactPerson from "./VendorsTabs/ContactPerson";
import { Countertops, Height } from "@mui/icons-material";
import AXIOS from "../../utils/AXIOS";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { connect } from "react-redux";
import BackButtonImage from "../../assets/images/back.png";
import {
  setGeneralDataAction,
  setCompanyDataAction,
  setContactPersonAction,
  setBankDetailsAction,
  setAdditionalInformationAction,
  setTaxDataAction,
} from "../../redux/action/vendorAction";
import cogoToast from "cogo-toast";

import "./style.css";
import AdditionalInformation from "./VendorsTabs/AdditionalInformation";

const drawerWidth = 280;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  height: "70vh",
  bgcolor: "background.paper",
  // border: "0px solid gray",
  boxShadow: 24,
  p: 4,
  bgcolor: "white",
};
function VendorCreation(props) {
  const navigate = useNavigate();

  const [showDrawerAppBar, setShowDrawerAppBar] = useState(null);

  const [sendOTPTimer, setSendOTPTimer] = useState(null);

  const [vendorOTPModalFlag, setVendorOTPModalFlag] = useState(null);
  const [vendorVerificationOTP, setVendorVerificationOTP] = useState("");
  const [CountryList, setCountryList] = useState([]);

  const [RoutedFromApprovalScreen, setRoutedFromApprovalScreen] =
    useState(false);

  const location = useLocation();

  useEffect(() => {
    getCountryData();
  }, []);

  let tempGeneralFields = [
    {
      TITLE: "Name*",
      VALUE: "",
      IS_DISABLED: false,
      DROPDOWN: false,
      KEY: "NAME",
      REQUIRED: true,
      ERROR_FLAG: false,
      DROPDOWN_OPTIONS: [],
    },
    {
      TITLE: "Email*",
      IS_DISABLED: false,
      DROPDOWN: false,
      KEY: "EMAIL",
      REQUIRED: true,
      ERROR_FLAG: false,
      VALUE: "",
      DROPDOWN_OPTIONS: [],
    },
    {
      TITLE: "Address Line 1*",
      IS_DISABLED: false,
      DROPDOWN: false,
      KEY: "ADDRESS_LINE_1",
      REQUIRED: true,
      MAX_WORDS_LIMIT: 40,
      ERROR_FLAG: false,
      VALUE: "",
      DROPDOWN_OPTIONS: [],
    },
    {
      TITLE: "Country*",
      IS_DISABLED: false,
      DROPDOWN: true,
      KEY: "COUNTRY",
      REQUIRED: true,
      ERROR_FLAG: false,
      VALUE: "",
      DROPDOWN_OPTIONS: CountryList,
    },
    {
      TITLE: "Address Line 2*",
      VALUE: "",
      IS_DISABLED: false,
      DROPDOWN: false,
      KEY: "DISTRICT",
      REQUIRED: true,
      ERROR_FLAG: false,
      DROPDOWN_OPTIONS: [],
    },
    {
      TITLE: "State*",
      IS_DISABLED: false,
      DROPDOWN: true,
      KEY: "STATE",
      REQUIRED: true,
      ERROR_FLAG: false,
      VALUE: "",
      DROPDOWN_OPTIONS: [],
    },
    {
      TITLE: "Address Line 3*",
      IS_DISABLED: false,
      DROPDOWN: false,
      KEY: "CITY",
      REQUIRED: true,
      ERROR_FLAG: false,
      VALUE: "",
      DROPDOWN_OPTIONS: [],
    },
    {
      TITLE: "Postal Code*",
      IS_DISABLED: false,
      DROPDOWN: false,
      KEY: "PINCODE",
      MAX_WORDS_LIMIT: 10,
      REQUIRED: true,
      VALUE: "",
      ERROR_FLAG: false,
      DROPDOWN_OPTIONS: [],
    },
    {
      TITLE: "District*",
      IS_DISABLED: false,
      DROPDOWN: false,
      KEY: "DISTRICT",
      REQUIRED: false,
      ERROR_FLAG: false,
      VALUE: "",
      DROPDOWN_OPTIONS: [],
    },
    {
      TITLE: "Timezone",
      IS_DISABLED: true,
      DROPDOWN: false,
      KEY: "TIMEZONE",
      REQUIRED: true,
      ERROR_FLAG: false,
      VALUE: "",
      DROPDOWN_OPTIONS: [],
    },
    {
      TITLE: "Business Role*",
      IS_DISABLED: false,
      DROPDOWN: true,
      KEY: "BUSINESS_ROLE",
      REQUIRED: true,
      VALUE: "",
      ERROR_FLAG: false,
      DROPDOWN_OPTIONS: [],
    },
    {
      TITLE: "Vendor Group*",
      VALUE: "",
      IS_DISABLED: false,
      DROPDOWN: false,
      KEY: "VENDOR_GROUP",
      REQUIRED: true,
      ERROR_FLAG: false,
      DROPDOWN_OPTIONS: [],
    },
    {
      TITLE: "Fax",
      IS_DISABLED: false,
      DROPDOWN: false,
      KEY: "FAX",
      REQUIRED: false,
      ERROR_FLAG: false,
      VALUE: "",
      DROPDOWN_OPTIONS: [],
    },
    {
      TITLE: "Company Code*",
      IS_DISABLED: false,
      DROPDOWN: false,
      KEY: "COMPANY_CODE",
      REQUIRED: true,
      ERROR_FLAG: false,
      VALUE: "",
      DROPDOWN_OPTIONS: [],
    },
    {
      TITLE: "SCH GRP VEND",
      IS_DISABLED: false,
      DROPDOWN: false,
      KEY: "SCH_GRP_VEND",
      REQUIRED: false,
      ERROR_FLAG: false,
      VALUE: "",
      DROPDOWN_OPTIONS: [],
    },
  ];

  useEffect(() => {
    console.log(props.GENERAL_DATA);
    if (location.state == null) {
      setShowDrawerAppBar(false);
      setVendorOTPModalFlag(true);

      // sendOTPtoReceiverMail();
    } else {
      if (location?.state?.SCREEN_NAME == "APPROVAL") {
        console.log(
          "location.state.VENDOR_DATAasdkn",
          location.state.VENDOR_DATA
        );
        // props.setGeneralDataAction([]);

        // console.log("sadhsadasdasd", tempGeneralData);
        //      props.setGeneralDataAction([tempGeneralData]);

        setDataInRedux();
        setRoutedFromApprovalScreen(true);
      } else {
        console.log("inside elsesdkjfbsdhkfbsdhfb");
        props.setGeneralDataAction([]);
        props.setTaxDataAction([]);
        props.setContactPersonAction([]);
        props.setCompanyDataAction([]);
        props.setBankDetailsAction([]);
        props.setAdditionalInformationAction([]);
        setRoutedFromApprovalScreen(false);
      }
      setShowDrawerAppBar(true);
      setVendorOTPModalFlag(false);
    }

    if (location.state?.SCREEN_NAME == "APPROVAL") {
      console.log("location.state.VENDOR_DATA", location.state?.VENDOR_DATA);
      setDataInRedux();
    } else {
      console.log(
        "location.state.VENDOR_DATA inside else",
        location.state?.VENDOR_DATA
      );
    }
    var SecuredOTP = localStorage.getItem("MDM_MasterOTPToken");
    console.log("a,jbhjadbhjesb f", SecuredOTP);
    console.log("s", AXIOS.axiosUrl + AXIOS.verifySessionToken + SecuredOTP);
    if (SecuredOTP != null) {
      VerifyOTP(SecuredOTP);
    }
  }, [CountryList]);

  const setDataInRedux = () => {
    console.log("CountryList", CountryList);
    const countryIndex = CountryList.findIndex(
      (val) => val.value == location.state?.VENDOR_DATA?.COUNTRY
    );

    console.log(
      "location.state?.VENDOR_DATA?.APPLICATION_ID",
      location.state?.VENDOR_DATA
    );
    let tempGeneralData = [
      {
        KEY: "NAME",
        VALUE: location.state.VENDOR_DATA.NAME,
      },
      {
        KEY: "EMAIL",
        VALUE: location.state.VENDOR_DATA.EMAIL,
      },
      {
        KEY: "ADDRESS_LINE_1",
        VALUE: location.state.VENDOR_DATA.ADDRESS_LINE_1,
      },
      {
        KEY: "COUNTRY",
        VALUE: {
          label: location.state.VENDOR_DATA.COUNTRY,
          value: location.state.VENDOR_DATA.COUNTRY,
        },
      },
      {
        KEY: "ADDRESS_LINE_1",
        VALUE: location.state.VENDOR_DATA.ADDRESS_LINE_1,
      },
      {
        KEY: "ADDRESS_LINE_2",
        VALUE: location.state.VENDOR_DATA.ADDRESS_LINE_2,
      },
      {
        KEY: "STATE",
        VALUE: {
          label: location.state.VENDOR_DATA.STATE,
          value: location.state.VENDOR_DATA.STATE,
        },
      },
      {
        KEY: "ADDRESS_LINE_3",
        VALUE: location.state.VENDOR_DATA.ADDRESS_LINE_3,
      },
      {
        KEY: "PINCODE",
        VALUE: location.state.VENDOR_DATA.PINCODE,
      },
      {
        KEY: "DISTRICT",
        VALUE: location.state.VENDOR_DATA.DISTRICT,
      },
      {
        KEY: "TIMEZONE",
        VALUE: location.state.VENDOR_DATA.TIMEZONE,
      },
      {
        KEY: "BUSINESS_ROLE",
        VALUE: {
          label: location.state.VENDOR_DATA.BUSINESS_ROLE,
          value: location.state.VENDOR_DATA.BUSINESS_ROLE,
        },
      },
      {
        KEY: "VENDOR_GROUP",
        VALUE: location.state.VENDOR_DATA.VENDOR_GROUP,
      },
      {
        KEY: "FAX",
        VALUE: location.state.VENDOR_DATA.FAX,
      },

      {
        KEY: "SCH_GRP_VEND",
        VALUE: location.state.VENDOR_DATA.SCH_GRP_VEND,
      },
      {
        KEY: "APPLICATION_ID",
        VALUE: location.state.VENDOR_DATA.APPLICATION_ID,
      },
    ];

    let tempTaxData = [
      {
        KEY: "PAN_NUMBER",
        VALUE: location.state?.VENDOR_DATA?.TAX_DATA.PAN?.PAN_NUMBER,
        FILE_NAME: location.state?.VENDOR_DATA?.TAX_DATA.PAN?.PAN_DOC_URL,
      },
      {
        KEY: "GST_NUMBER",
        VALUE: location.state?.VENDOR_DATA?.TAX_DATA.GST?.GST_NUMBER,
        FILE_NAME: location.state?.VENDOR_DATA?.TAX_DATA.GST?.GST_DOC_URL,
      },
      {
        KEY: "CIN_NUMBER",
        VALUE: location.state?.VENDOR_DATA?.TAX_DATA.CIN?.CIN_NUMBER,
        FILE_NAME: location.state?.VENDOR_DATA?.TAX_DATA.CIN?.PAN_DOC_URL,
      },
      {
        KEY: "MSME_NUMBER",
        VALUE: location.state?.VENDOR_DATA?.TAX_DATA.MSME?.MSME_NUMBER,
        FILE_NAME: location.state?.VENDOR_DATA?.TAX_DATA.MSME?.MSME_DOC_URL,
      },
      {
        KEY: "AADHAR_NUMBER",
        VALUE: location.state?.VENDOR_DATA?.TAX_DATA.AADHAR?.AADHAR_NUMBER,
        FILE_NAME: location.state?.VENDOR_DATA?.TAX_DATA.AADHAR?.AADHAR_DOC_URL,
      },
    ];

    let tempCompanyData = [
      {
        KEY: "CURRENCY",
        VALUE: {
          label: location.state?.VENDOR_DATA?.COMPANY_DATA?.CURRENCY,
          value: location.state?.VENDOR_DATA?.COMPANY_DATA?.CURRENCY,
        },
      },
      {
        KEY: "INCO_TERM_1",
        VALUE: {
          label: location.state?.VENDOR_DATA?.COMPANY_DATA?.INCO_TERM_1,
          value: location.state?.VENDOR_DATA?.COMPANY_DATA?.INCO_TERM_1,
        },
      },
      {
        KEY: "INCO_TERM_2",
        VALUE: {
          label: location.state?.VENDOR_DATA?.COMPANY_DATA?.INCO_TERM_2,
          value: location.state?.VENDOR_DATA?.COMPANY_DATA?.INCO_TERM_2,
        },
      },
      {
        KEY: "TURNOVER",
        VALUE: location.state?.VENDOR_DATA?.COMPANY_DATA?.TURNOVER,
      },
      {
        KEY: "PAYMENT_TERM",
        VALUE: location.state?.VENDOR_DATA?.COMPANY_DATA?.PAYMENT_TERM,
      },
      {
        KEY: "PROCUREMENT_PLANT",
        VALUE: location.state?.VENDOR_DATA?.COMPANY_DATA?.PROCUREMENT_PLANT,
      },
    ];

    let tempBankDetails = [
      {
        KEY: "ACCOUNT_TYPE",
        VALUE: location.state?.VENDOR_DATA?.BANK_DETAILS?.ACCOUNT_TYPE,
      },
      {
        KEY: "BANK_ACCOUNT",
        VALUE: location.state?.VENDOR_DATA?.BANK_DETAILS?.BANK_ACCOUNT,
      },
      {
        KEY: "BANK_COUNTRY",
        VALUE: location.state?.VENDOR_DATA?.BANK_DETAILS?.BANK_COUNTRY,
      },
      {
        KEY: "ACCOUNT_HOLDER",
        VALUE: location.state?.VENDOR_DATA?.BANK_DETAILS?.ACCOUNT_HOLDER,
      },
      {
        KEY: "BANK_KEY",
        VALUE: location.state?.VENDOR_DATA?.BANK_DETAILS?.BANK_KEY,
      },
      {
        KEY: "BANK_NAME",
        VALUE: location.state?.VENDOR_DATA?.BANK_DETAILS?.BANK_NAME,
      },
      {
        KEY: "SUPPORTING_DOCUMENT",
        VALUE: location.state?.VENDOR_DATA?.BANK_DETAILS?.SUPPORTING_DOCUMENT,
      },
      {
        KEY: "BANK_CITY",
        VALUE: location.state?.VENDOR_DATA?.BANK_DETAILS?.BANK_CITY,
      },
      {
        KEY: "MODE_OF_PAYMENT",
        VALUE: location.state?.VENDOR_DATA?.BANK_DETAILS?.MODE_OF_PAYMENT,
      },
    ];

    let tempAdditionalDetails = [
      {
        KEY: "RECONCILIATION_ACCOUNT",
        VALUE:
          location.state?.VENDOR_DATA?.ADDITIONAL_DETAILS
            .RECONCILIATION_ACCOUNT,
      },
      {
        KEY: "ACCOUNTING_CLERK_ABBREVIATION",
        VALUE:
          location.state?.VENDOR_DATA?.ADDITIONAL_DETAILS
            .ACCOUNTING_CLERK_ABBREVIATION,
      },
      {
        KEY: "TRADE_PARTNER_ID_1",
        VALUE:
          location.state?.VENDOR_DATA?.ADDITIONAL_DETAILS.TRADE_PARTNER_ID_1,
      },
      {
        KEY: "GROUP_FOR_CALCULATION_SCHEMA",
        VALUE:
          location.state?.VENDOR_DATA?.ADDITIONAL_DETAILS
            .GROUP_FOR_CALCULATION_SCHEMA,
      },
      {
        KEY: "TRAIN_STATION",
        VALUE: location.state?.VENDOR_DATA?.ADDITIONAL_DETAILS.TRAIN_STATION,
      },
      {
        KEY: "TRADE_PARTNER_ID_2",
        VALUE:
          location.state?.VENDOR_DATA?.ADDITIONAL_DETAILS.TRADE_PARTNER_ID_2,
      },
      {
        KEY: "TRADE_PARTNER_ID_3",
        VALUE:
          location.state?.VENDOR_DATA?.ADDITIONAL_DETAILS.TRADE_PARTNER_ID_3,
      },
    ];

    let tempContactPerson = [
      {
        KEY: "DETAILS_OF_USER-NAME",
        VALUE:
          location.state?.VENDOR_DATA?.CONTACT_PERSON.DETAILS_OF_USER?.NAME,
      },
      {
        KEY: "DETAILS_OF_USER-EMAIL",
        VALUE:
          location.state?.VENDOR_DATA?.CONTACT_PERSON.DETAILS_OF_USER?.EMAIL,
      },
      {
        KEY: "DETAILS_OF_USER-ADDRESS",
        VALUE:
          location.state?.VENDOR_DATA?.CONTACT_PERSON.DETAILS_OF_USER?.ADDRESS,
      },
      {
        KEY: "DETAILS_OF_USER-MOBILE_NUMBER",
        VALUE:
          location.state?.VENDOR_DATA?.CONTACT_PERSON.DETAILS_OF_USER
            ?.MOBILE_NUMBER,
      },
      {
        KEY: "DETAILS_OF_USER-GENDER",
        VALUE:
          location.state?.VENDOR_DATA?.CONTACT_PERSON.DETAILS_OF_USER?.GENDER,
      },
      {
        KEY: "DETAILS_OF_USER-LANDLINE",
        VALUE:
          location.state?.VENDOR_DATA?.CONTACT_PERSON.DETAILS_OF_USER?.LANDLINE,
      },
      {
        KEY: "DETAILS_OF_USER-DESIGNATION",
        VALUE:
          location.state?.VENDOR_DATA?.CONTACT_PERSON.DETAILS_OF_USER
            ?.DESIGNATION,
      },
      {
        KEY: "DETAILS_OF_USER-PERSON_BIRTH_DATE",
        VALUE: {
          label:
            location.state?.VENDOR_DATA?.CONTACT_PERSON.DETAILS_OF_USER
              ?.PERSON_BIRTH_DATE,
          value:
            location.state?.VENDOR_DATA?.CONTACT_PERSON.DETAILS_OF_USER
              ?.PERSON_BIRTH_DATE,
        },
      },
      {
        KEY: "DETAILS_OF_USER-PERSON_BIRTH_MONTH",
        VALUE: {
          label:
            location.state?.VENDOR_DATA?.CONTACT_PERSON.DETAILS_OF_USER
              ?.PERSON_BIRTH_MONTH,
          value:
            location.state?.VENDOR_DATA?.CONTACT_PERSON.DETAILS_OF_USER
              ?.PERSON_BIRTH_MONTH,
        },
      },
      {
        KEY: "VENDOR-NAME",
        VALUE: location.state?.VENDOR_DATA?.CONTACT_PERSON.VENDOR?.NAME,
      },
      {
        KEY: "VENDOR-EMAIL",
        VALUE: location.state?.VENDOR_DATA?.CONTACT_PERSON.VENDOR?.EMAIL,
      },
      {
        KEY: "VENDOR-ADDRESS",
        VALUE: location.state?.VENDOR_DATA?.CONTACT_PERSON.VENDOR?.ADDRESS,
      },
      {
        KEY: "VENDOR-MOBILE_NUMBER",
        VALUE:
          location.state?.VENDOR_DATA?.CONTACT_PERSON.VENDOR?.MOBILE_NUMBER,
      },
      {
        KEY: "VENDOR-GENDER",
        VALUE: location.state?.VENDOR_DATA?.CONTACT_PERSON.VENDOR?.GENDER,
      },
      {
        KEY: "VENDOR-LANDLINE",
        VALUE: location.state?.VENDOR_DATA?.CONTACT_PERSON.VENDOR?.LANDLINE,
      },
      {
        KEY: "VENDOR-DESIGNATION",
        VALUE: location.state?.VENDOR_DATA?.CONTACT_PERSON.VENDOR?.DESIGNATION,
      },
      {
        KEY: "VENDOR-PERSON_BIRTH_DATE",
        VALUE: {
          label:
            location.state?.VENDOR_DATA?.CONTACT_PERSON.VENDOR
              ?.PERSON_BIRTH_DATE,
          value:
            location.state?.VENDOR_DATA?.CONTACT_PERSON.VENDOR
              ?.PERSON_BIRTH_DATE,
        },
      },
      {
        KEY: "VENDOR-PERSON_BIRTH_MONTH",
        VALUE: {
          label:
            location.state?.VENDOR_DATA?.CONTACT_PERSON.DETAILS_OF_USER
              ?.PERSON_BIRTH_MONTH,
          value:
            location.state?.VENDOR_DATA?.CONTACT_PERSON.DETAILS_OF_USER
              ?.PERSON_BIRTH_MONTH,
        },
      },
      {
        KEY: "VENDOR_CONTACT_PERSON-NAME",
        VALUE:
          location.state?.VENDOR_DATA?.CONTACT_PERSON.VENDOR_CONTACT_PERSON
            ?.NAME,
      },
      {
        KEY: "VENDOR_CONTACT_PERSON-EMAIL",
        VALUE:
          location.state?.VENDOR_DATA?.CONTACT_PERSON.VENDOR_CONTACT_PERSON
            ?.EMAIL,
      },
      {
        KEY: "VENDOR_CONTACT_PERSON-ADDRESS",
        VALUE:
          location.state?.VENDOR_DATA?.CONTACT_PERSON.VENDOR_CONTACT_PERSON
            ?.ADDRESS,
      },
      {
        KEY: "VENDOR_CONTACT_PERSON-MOBILE_NUMBER",
        VALUE:
          location.state?.VENDOR_DATA?.CONTACT_PERSON.VENDOR_CONTACT_PERSON
            ?.MOBILE_NUMBER,
      },
      {
        KEY: "VENDOR_CONTACT_PERSON-GENDER",
        VALUE:
          location.state?.VENDOR_DATA?.CONTACT_PERSON.VENDOR_CONTACT_PERSON
            ?.GENDER,
      },
      {
        KEY: "VENDOR_CONTACT_PERSON-LANDLINE",
        VALUE:
          location.state?.VENDOR_DATA?.CONTACT_PERSON.VENDOR_CONTACT_PERSON
            ?.LANDLINE,
      },
      {
        KEY: "VENDOR_CONTACT_PERSON-DESIGNATION",
        VALUE:
          location.state?.VENDOR_DATA?.CONTACT_PERSON.VENDOR_CONTACT_PERSON
            ?.DESIGNATION,
      },
      {
        KEY: "VENDOR_CONTACT_PERSON-PERSON_BIRTH_DATE",
        VALUE: {
          label:
            location.state?.VENDOR_DATA?.CONTACT_PERSON.VENDOR_CONTACT_PERSON
              ?.PERSON_BIRTH_DATE,
          value:
            location.state?.VENDOR_DATA?.CONTACT_PERSON.VENDOR_CONTACT_PERSON
              ?.PERSON_BIRTH_DATE,
        },
      },
      {
        KEY: "VENDOR_CONTACT_PERSON-PERSON_BIRTH_MONTH",
        VALUE: {
          label:
            location.state?.VENDOR_DATA?.CONTACT_PERSON.VENDOR_CONTACT_PERSON
              ?.PERSON_BIRTH_MONTH,
          value:
            location.state?.VENDOR_DATA?.CONTACT_PERSON.VENDOR_CONTACT_PERSON
              ?.PERSON_BIRTH_MONTH,
        },
      },
      {
        KEY: "PROMOTER-NAME",
        VALUE: location.state?.VENDOR_DATA?.CONTACT_PERSON.PROMOTER?.NAME,
      },
      {
        KEY: "PROMOTER-EMAIL",
        VALUE: location.state?.VENDOR_DATA?.CONTACT_PERSON.PROMOTER?.EMAIL,
      },
      {
        KEY: "PROMOTER-ADDRESS",
        VALUE: location.state?.VENDOR_DATA?.CONTACT_PERSON.PROMOTER?.ADDRESS,
      },
      {
        KEY: "PROMOTER-MOBILE_NUMBER",
        VALUE:
          location.state?.VENDOR_DATA?.CONTACT_PERSON.PROMOTER?.MOBILE_NUMBER,
      },
      {
        KEY: "PROMOTER-GENDER",
        VALUE: location.state?.VENDOR_DATA?.CONTACT_PERSON.PROMOTER?.GENDER,
      },
      {
        KEY: "PROMOTER-LANDLINE",
        VALUE: location.state?.VENDOR_DATA?.CONTACT_PERSON.PROMOTER?.LANDLINE,
      },
      {
        KEY: "PROMOTER-DESIGNATION",
        VALUE:
          location.state?.VENDOR_DATA?.CONTACT_PERSON.PROMOTER?.DESIGNATION,
      },
      {
        KEY: "PROMOTER-PERSON_BIRTH_DATE",
        VALUE: {
          label:
            location.state?.VENDOR_DATA?.CONTACT_PERSON.PROMOTER
              ?.PERSON_BIRTH_DATE,
          value:
            location.state?.VENDOR_DATA?.CONTACT_PERSON.PROMOTER
              ?.PERSON_BIRTH_DATE,
        },
      },
      {
        KEY: "PROMOTER-PERSON_BIRTH_MONTH",
        VALUE: {
          label:
            location.state?.VENDOR_DATA?.CONTACT_PERSON.PROMOTER
              ?.PERSON_BIRTH_MONTH,
          value:
            location.state?.VENDOR_DATA?.CONTACT_PERSON.PROMOTER
              ?.PERSON_BIRTH_MONTH,
        },
      },
      {
        KEY: "DIRECTOR_PARTNER_PROPRIETOR-NAME",
        VALUE:
          location.state?.VENDOR_DATA?.CONTACT_PERSON
            .DIRECTOR_PARTNER_PROPRIETOR?.NAME,
      },
      {
        KEY: "DIRECTOR_PARTNER_PROPRIETOR-EMAIL",
        VALUE:
          location.state?.VENDOR_DATA?.CONTACT_PERSON
            .DIRECTOR_PARTNER_PROPRIETOR?.EMAIL,
      },
      {
        KEY: "DIRECTOR_PARTNER_PROPRIETOR-ADDRESS",
        VALUE:
          location.state?.VENDOR_DATA?.CONTACT_PERSON
            .DIRECTOR_PARTNER_PROPRIETOR?.ADDRESS,
      },
      {
        KEY: "DIRECTOR_PARTNER_PROPRIETOR-MOBILE_NUMBER",
        VALUE:
          location.state?.VENDOR_DATA?.CONTACT_PERSON
            .DIRECTOR_PARTNER_PROPRIETOR?.MOBILE_NUMBER,
      },
      {
        KEY: "DIRECTOR_PARTNER_PROPRIETOR-GENDER",
        VALUE:
          location.state?.VENDOR_DATA?.CONTACT_PERSON
            .DIRECTOR_PARTNER_PROPRIETOR?.GENDER,
      },
      {
        KEY: "DIRECTOR_PARTNER_PROPRIETOR-LANDLINE",
        VALUE:
          location.state?.VENDOR_DATA?.CONTACT_PERSON.DETAILS_OF_USER?.LANDLINE,
      },
      {
        KEY: "DIRECTOR_PARTNER_PROPRIETOR-DESIGNATION",
        VALUE:
          location.state?.VENDOR_DATA?.CONTACT_PERSON
            .DIRECTOR_PARTNER_PROPRIETOR?.DESIGNATION,
      },
      {
        KEY: "DIRECTOR_PARTNER_PROPRIETOR-PERSON_BIRTH_DATE",
        VALUE: {
          label:
            location.state?.VENDOR_DATA?.CONTACT_PERSON.DETAILS_OF_USER
              ?.PERSON_BIRTH_DATE,
          value:
            location.state?.VENDOR_DATA?.CONTACT_PERSON.DETAILS_OF_USER
              ?.PERSON_BIRTH_DATE,
        },
      },
      {
        KEY: "DIRECTOR_PARTNER_PROPRIETOR-PERSON_BIRTH_MONTH",
        VALUE: {
          label:
            location.state?.VENDOR_DATA?.CONTACT_PERSON
              .DIRECTOR_PARTNER_PROPRIETOR?.PERSON_BIRTH_MONTH,
          value:
            location.state?.VENDOR_DATA?.CONTACT_PERSON
              .DIRECTOR_PARTNER_PROPRIETOR?.PERSON_BIRTH_MONTH,
        },
      },
    ];

    props.setGeneralDataAction(tempGeneralData);
    props.setTaxDataAction(tempTaxData);
    props.setCompanyDataAction(tempCompanyData);
    props.setBankDetailsAction(tempBankDetails);
    props.setAdditionalInformationAction(tempAdditionalDetails);
    props.setContactPersonAction(tempContactPerson);
  };
  useEffect(() => {
    console.log("sendOTPTimer", sendOTPTimer);
    if (sendOTPTimer != null && sendOTPTimer >= 30) {
      console.log("inside if");

      let tempSendOTPTimer = 0;
      tempSendOTPTimer = sendOTPTimer;
      setSendOTPTimer(tempSendOTPTimer + 1);
    } else {
      console.log("inside else");
    }

    console.log("sendOTPTimer", sendOTPTimer);
  }, [sendOTPTimer]);

  const [showDrawer, setShowDrawer] = useState(false);
  const [VendorTab, setVendorTab] = useState(1);

  const [receiverVendorEmail, setReceiverVendorEmail] = useState({
    RECEIVER_EMAIL_ID: "",
    ERROR_FLAG: false,
  });

  const handleSelectedLoginTab = (event, newValue) => {
    setVendorTab(newValue);
  };

  const sendOTPtoReceiverMail = (Token) => {
    var url = window.location.href;
    // console.log("URL", url);
    url = url.split("=");
    var final_url = url[1];
    console.log("Latest url", final_url);
    if (final_url.length > 0) {
      axios
        .post(AXIOS.axiosUrl + AXIOS.vendor_create_otp_send, {
          VENDOR_CREATE_TOKEN: final_url,
        })
        .then((response) => {
          if (response.data.daysLimitError == true) {
            cogoToast.error("Application expired, Please contact buyer");
          } else {
            cogoToast.success("OTP sent to Email ID");
          }

          console.log("valid token", response.data);
        });
    } else {
      alert("No data");
    }
  };

  const getCountryData = () => {
    axios.get(AXIOS.axiosUrl + AXIOS.country_master).then((response) => {
      let tempCountryList = [];
      console.log(response.data.length);
      response.data.map((val) => {
        let stateArray = [];

        // console.log(StateArray);
        // val.STATE.map((innerVal) => {
        //   StateArray.push({ label: innerVal, value: innerVal })
        // });
        if (val.STATE.length > 0) {
          val.STATE.map((item) => {
            if (item != "") {
              stateArray.push({ label: item, value: item });
            }
            // console.log("item", { label: item, value: item });
          });
        }

        // console.log("stateArray", stateArray);

        tempCountryList.push({
          label: val.COUNTRY_NAME,
          value: val.COUNTRY_KEY,
          state_array: stateArray,
          timezone: val.TIME_ZONE,
          postal_code_length: val.POSTAL_CODE_LENGTH,
        });
      });

      console.log("tempCountryList", tempCountryList);
      setCountryList(tempCountryList);
    });
  };

  const VerifyOTP = (OTP) => {
    var url = window.location.href;
    // console.log("URL", url);
    url = url.split("=");

    var final_url = url[1];
    console.log("Latest url", final_url);

    console.log("vendorVerificationOTP", {
      VENDOR_CREATE_TOKEN: final_url,
      VENDOR_CREATE_INVITEE_OTP:
        OTP == undefined ? parseInt(vendorVerificationOTP) : parseInt(OTP),
    });
    if (OTP == undefined) {
      if (vendorVerificationOTP.length == 6) {
        axios
          .post(AXIOS.axiosUrl + AXIOS.vendor_create_otp_verification, {
            VENDOR_CREATE_TOKEN: final_url,
            VENDOR_CREATE_INVITEE_OTP:
              OTP == undefined
                ? parseInt(vendorVerificationOTP)
                : parseInt(OTP),
          })
          .then((response) => {
            console.log("sldfjhdsbfhjds", response.data);
            if (response.data.OTP_verified == true) {
              localStorage.setItem("MDM_MasterOTPToken", vendorVerificationOTP);
              // const countryIndex = CountryList.findIndex(
              //   (val) => val.value == response.data.vendor_data[0].COUNTRY
              // );

              // let tempGeneralData = {
              //   APPLICATION_ID: response.data.vendor_data[0]?.APPLICATION_ID,
              //   NAME: response.data.vendor_data[0]?.NAME,
              //   EMAIL: response.data.vendor_data[0]?.EMAIL,
              //   COUNTRY: CountryList[countryIndex],
              //   STATE: {
              //     label: response.data.vendor_data[0]?.STATE,
              //     value: response.data.vendor_data[0]?.STATE,
              //   },
              //   CITY:
              //     response.data.vendor_data[0]?.CITY != "undefined"
              //       ? response.data.vendor_data[0].CITY
              //       : "",
              //   ADDRESS_LINE_1: response.data.vendor_data[0]?.ADDRESS_LINE_1,
              //   ADDRESS_LINE_2: response.data.vendor_data[0]?.ADDRESS_LINE_2,
              //   ADDRESS_LINE_3: response.data.vendor_data[0]?.ADDRESS_LINE_3,
              //   PINCODE: response.data.vendor_data[0]?.PINCODE,
              //   FAX:
              //     response.data.vendor_data[0]?.FAX_DETAILS != "undefined"
              //       ? response.data.vendor_data[0]?.FAX_DETAILS
              //       : "",
              //   TIME_ZONE: response.data.vendor_data[0]?.TIME_ZONE_MOBILE,
              //   COMPANY_CODE:
              //     response.data.vendor_data[0]?.COMPANY_DATA.COMPANY_CODE,
              //   BUSINESS_ROLE: {
              //     label: response.data.vendor_data[0]?.BUSINESS_ROLE,
              //     value: response.data.vendor_data[0]?.BUSINESS_ROLE,
              //   },
              // };

              // //             GST: { GST_NUMBER: props.TAX_DATA.GST_NUMBER },
              // // PAN: { PAN_NUMBER: props.TAX_DATA.PAN_NUMBER },
              // // CIN: { CIN_NUMBER: props.TAX_DATA.CIN_NUMBER },
              // // MSME: { MSME_NUMBER: props.TAX_DATA.MSME_NUMBER },
              // // AADHAR: { AADHAR_NUMBER: props.TAX_DATA.AADHAR_NUMBER },
              // // let tempTaxData = {
              // //   GST_NUMBER: response.data.vendor_data[0].TAX_DATA.GST,
              // //   PAN_NUMBER: response.data.vendor_data[0].TAX_DATA.PAN,
              // //   CIN_NUMBER: response.data.vendor_data[0].TAX_DATA.CIN,
              // //   MSME_NUMBER: response.data.vendor_data[0].TAX_DATA.MSMSE,
              // //   AADHAR_NUMBER: response.data.vendor_data[0].TAX_DATA.AADHAR,
              // // };
              // let tempTaxData = {
              //   GST_NUMBER:
              //     response.data.vendor_data[0]?.TAX_DATA?.GST?.GST_NUMBER,
              //   PAN_NUMBER:
              //     response.data.vendor_data[0]?.TAX_DATA?.PAN?.PAN_NUMBER,
              //   CIN_NUMBER:
              //     response.data.vendor_data[0]?.TAX_DATA?.CIN?.CIN_NUMBER,
              //   MSME_NUMBER:
              //     response.data.vendor_data[0]?.TAX_DATA?.MSME?.MSME_NUMBER,
              //   AADHAR_NUMBER:
              //     response.data.vendor_data[0]?.TAX_DATA?.AADHAR?.AADHAR_NUMBER,
              //   MSME_DOC_URL:
              //     response.data.vendor_data[0]?.TAX_DATA?.GST?.MSME_DOC_URL,
              //   CIN_DOC_URL:
              //     response.data.vendor_data[0]?.TAX_DATA?.GST?.CIN_DOC_URL,
              //   PAN_DOC_URL:
              //     response.data.vendor_data[0]?.TAX_DATA?.GST?.PAN_DOC_URL,
              //   GST_DOC_URL:
              //     response.data.vendor_data[0]?.TAX_DATA?.GST?.GST_DOC_URL,
              //   AADHAR_DOC_URL:
              //     response.data.vendor_data[0]?.TAX_DATA?.AADHAR
              //       ?.AADHAR_DOC_URL,
              // };
              // let tempCompanyData = {
              //   CURRENCY: {
              //     label: response.data.vendor_data[0]?.COMPANY_DATA?.CURRENCY,
              //     value: response.data.vendor_data[0]?.COMPANY_DATA?.CURRENCY,
              //   },
              //   INCO_TERM_1: {
              //     label:
              //       response.data.vendor_data[0]?.COMPANY_DATA?.INCO_TERM_1,
              //     value:
              //       response.data.vendor_data[0]?.COMPANY_DATA?.INCO_TERM_1,
              //   },
              //   INCO_TERM_2: {
              //     label:
              //       response.data.vendor_data[0]?.COMPANY_DATA?.INCO_TERM_2,
              //     value:
              //       response.data.vendor_data[0]?.COMPANY_DATA?.INCO_TERM_2,
              //   },

              //   PAYMENT_TERM:
              //     response.data.vendor_data[0]?.COMPANY_DATA?.PAYMENT_TERM,
              //   PROCUREMENT_PLANT:
              //     response.data.vendor_data[0]?.COMPANY_DATA?.PROCUREMENT_PLANT,
              //   TURNOVER: response.data.vendor_data[0]?.COMPANY_DATA?.TURNOVER,
              // };

              // props.setGeneralDataAction(tempGeneralData);
              // props.setTaxDataAction(tempTaxData);
              // props.setCompanyDataAction(tempCompanyData);
              // props.setContactPersonAction(
              //   response.data.vendor_data[0].CONTACT_PERSON
              // );

              // props.setBankDetailsAction(
              //   response.data.vendor_data[0].BANK_DETAILS
              // );
              // props.setAdditionalInformationAction(
              //   response.data.vendor_data[0].ADDITIONAL_DETAILS
              // );
              console.log("CountryList", CountryList);
              const countryIndex = CountryList.findIndex(
                (val) => val.value == location.state?.VENDOR_DATA?.COUNTRY
              );

              console.log(
                "location.state?.VENDOR_DATA?.APPLICATION_ID",
                location.state?.VENDOR_DATA?.APPLICATION_ID
              );
              let tempGeneralData = [
                {
                  KEY: "NAME",
                  VALUE: response.data.vendor_data[0]?.NAME,
                },
                {
                  KEY: "EMAIL",
                  VALUE: response.data.vendor_data[0]?.EMAIL,
                },
                {
                  KEY: "ADDRESS_LINE_1",
                  VALUE: response.data.vendor_data[0]?.ADDRESS_LINE_1,
                },
                {
                  KEY: "COUNTRY",
                  VALUE: {
                    label: response.data.vendor_data[0]?.COUNTRY,
                    value: response.data.vendor_data[0]?.COUNTRY,
                  },
                },
                {
                  KEY: "ADDRESS_LINE_1",
                  VALUE: response.data.vendor_data[0]?.ADDRESS_LINE_1,
                },
                {
                  KEY: "ADDRESS_LINE_2",
                  VALUE: response.data.vendor_data[0]?.ADDRESS_LINE_2,
                },
                {
                  KEY: "STATE",
                  VALUE: {
                    label: response.data.vendor_data[0]?.STATE,
                    value: response.data.vendor_data[0]?.STATE,
                  },
                },
                {
                  KEY: "ADDRESS_LINE_3",
                  VALUE: response.data.vendor_data[0]?.ADDRESS_LINE_3,
                },
                {
                  KEY: "PINCODE",
                  VALUE: response.data.vendor_data[0]?.PINCODE,
                },
                {
                  KEY: "DISTRICT",
                  VALUE: response.data.vendor_data[0]?.DISTRICT,
                },
                {
                  KEY: "TIMEZONE",
                  VALUE: response.data.vendor_data[0]?.TIMEZONE,
                },
                {
                  KEY: "BUSINESS_ROLE",
                  VALUE: {
                    label: response.data.vendor_data[0]?.BUSINESS_ROLE,
                    value: response.data.vendor_data[0]?.BUSINESS_ROLE,
                  },
                },
                {
                  KEY: "VENDOR_GROUP",
                  VALUE: response.data.vendor_data[0]?.VENDOR_GROUP,
                },
                {
                  KEY: "FAX",
                  VALUE: response.data.vendor_data[0]?.FAX,
                },

                {
                  KEY: "SCH_GRP_VEND",
                  VALUE: response.data.vendor_data[0]?.SCH_GRP_VEND,
                },
                {
                  KEY: "APPLICATION_ID",
                  VALUE: response.data.vendor_data[0]?.APPLICATION_ID,
                },
              ];

              let tempTaxData = [
                {
                  KEY: "PAN_NUMBER",
                  VALUE: response.data.vendor_data[0]?.TAX_DATA.PAN?.PAN_NUMBER,
                  FILE_NAME:
                    response.data.vendor_data[0]?.TAX_DATA.PAN?.PAN_DOC_URL,
                },
                {
                  KEY: "GST_NUMBER",
                  VALUE: response.data.vendor_data[0]?.TAX_DATA.GST?.GST_NUMBER,
                  FILE_NAME:
                    response.data.vendor_data[0]?.TAX_DATA.GST?.GST_DOC_URL,
                },
                {
                  KEY: "CIN_NUMBER",
                  VALUE: response.data.vendor_data[0]?.TAX_DATA.CIN?.CIN_NUMBER,
                  FILE_NAME:
                    response.data.vendor_data[0]?.TAX_DATA.CIN?.PAN_DOC_URL,
                },
                {
                  KEY: "MSME_NUMBER",
                  VALUE:
                    response.data.vendor_data[0]?.TAX_DATA.MSME?.MSME_NUMBER,
                  FILE_NAME:
                    response.data.vendor_data[0]?.TAX_DATA.MSME?.MSME_DOC_URL,
                },
                {
                  KEY: "AADHAR_NUMBER",
                  VALUE:
                    response.data.vendor_data[0]?.TAX_DATA.AADHAR?.AADHAR_NUMBER,
                  FILE_NAME:
                    response.data.vendor_data[0]?.TAX_DATA.AADHAR
                      ?.AADHAR_DOC_URL,
                },
              ];

              console.log("response.data.vendor_data[0]?.COMPANY_DATA?",response.data.vendor_data[0]);

              let tempCompanyData = [
                {
                  KEY: "CURRENCY",
                  VALUE: {
                    label: response.data.vendor_data[0]?.COMPANY_DATA?.CURRENCY,
                    value: response.data.vendor_data[0]?.COMPANY_DATA?.CURRENCY,
                  },
                },
                {
                  KEY: "INCO_TERM_1",
                  VALUE: {
                    label:
                      response.data.vendor_data[0]?.COMPANY_DATA?.INCO_TERM_1,
                    value:
                      response.data.vendor_data[0]?.COMPANY_DATA?.INCO_TERM_1,
                  },
                },
                {
                  KEY: "INCO_TERM_2",
                  VALUE: {
                    label:
                      response.data.vendor_data[0]?.COMPANY_DATA?.INCO_TERM_2,
                    value:
                      response.data.vendor_data[0]?.COMPANY_DATA?.INCO_TERM_2,
                  },
                },
                {
                  KEY: "TURNOVER",
                  VALUE: response.data.vendor_data[0]?.COMPANY_DATA?.TURNOVER,
                },
                {
                  KEY: "PAYMENT_TERM",
                  VALUE:
                    response.data.vendor_data[0]?.COMPANY_DATA?.PAYMENT_TERM,
                },
                {
                  KEY: "PROCUREMENT_PLANT",
                  VALUE:
                    response.data.vendor_data[0]?.COMPANY_DATA
                      ?.PROCUREMENT_PLANT,
                },
              ];

              let tempBankDetails = [
                {
                  KEY: "ACCOUNT_TYPE",
                  VALUE:
                    response.data.vendor_data[0]?.BANK_DETAILS?.ACCOUNT_TYPE,
                },
                {
                  KEY: "BANK_ACCOUNT",
                  VALUE:
                    response.data.vendor_data[0]?.BANK_DETAILS?.BANK_ACCOUNT,
                },
                {
                  KEY: "BANK_COUNTRY",
                  VALUE:
                    response.data.vendor_data[0]?.BANK_DETAILS?.BANK_COUNTRY,
                },
                {
                  KEY: "ACCOUNT_HOLDER",
                  VALUE:
                    response.data.vendor_data[0]?.BANK_DETAILS?.ACCOUNT_HOLDER,
                },
                {
                  KEY: "BANK_KEY",
                  VALUE: response.data.vendor_data[0]?.BANK_DETAILS?.BANK_KEY,
                },
                {
                  KEY: "BANK_NAME",
                  VALUE: response.data.vendor_data[0]?.BANK_DETAILS?.BANK_NAME,
                },
                {
                  KEY: "SUPPORTING_DOCUMENT",
                  VALUE:
                    response.data.vendor_data[0]?.BANK_DETAILS
                      ?.SUPPORTING_DOCUMENT,
                },
                {
                  KEY: "BANK_CITY",
                  VALUE: response.data.vendor_data[0]?.BANK_DETAILS?.BANK_CITY,
                },
                {
                  KEY: "MODE_OF_PAYMENT",
                  VALUE:
                    response.data.vendor_data[0]?.BANK_DETAILS?.MODE_OF_PAYMENT,
                },
              ];

              let tempAdditionalDetails = [
                {
                  KEY: "RECONCILIATION_ACCOUNT",
                  VALUE:
                    response.data.vendor_data[0]?.ADDITIONAL_DETAILS
                      .RECONCILIATION_ACCOUNT,
                },
                {
                  KEY: "ACCOUNTING_CLERK_ABBREVIATION",
                  VALUE:
                    response.data.vendor_data[0]?.ADDITIONAL_DETAILS
                      .ACCOUNTING_CLERK_ABBREVIATION,
                },
                {
                  KEY: "TRADE_PARTNER_ID_1",
                  VALUE:
                    response.data.vendor_data[0]?.ADDITIONAL_DETAILS
                      .TRADE_PARTNER_ID_1,
                },
                {
                  KEY: "GROUP_FOR_CALCULATION_SCHEMA",
                  VALUE:
                    response.data.vendor_data[0]?.ADDITIONAL_DETAILS
                      .GROUP_FOR_CALCULATION_SCHEMA,
                },
                {
                  KEY: "TRAIN_STATION",
                  VALUE:
                    response.data.vendor_data[0]?.ADDITIONAL_DETAILS
                      .TRAIN_STATION,
                },
                {
                  KEY: "TRADE_PARTNER_ID_2",
                  VALUE:
                    response.data.vendor_data[0]?.ADDITIONAL_DETAILS
                      .TRADE_PARTNER_ID_2,
                },
                {
                  KEY: "TRADE_PARTNER_ID_3",
                  VALUE:
                    response.data.vendor_data[0]?.ADDITIONAL_DETAILS
                      .TRADE_PARTNER_ID_3,
                },
              ];

              let tempContactPerson = [
                {
                  KEY: "DETAILS_OF_USER-NAME",
                  VALUE:
                    response.data.vendor_data[0]?.CONTACT_PERSON.DETAILS_OF_USER
                      ?.NAME,
                },
                {
                  KEY: "DETAILS_OF_USER-EMAIL",
                  VALUE:
                    response.data.vendor_data[0]?.CONTACT_PERSON.DETAILS_OF_USER
                      ?.EMAIL,
                },
                {
                  KEY: "DETAILS_OF_USER-ADDRESS",
                  VALUE:
                    response.data.vendor_data[0]?.CONTACT_PERSON.DETAILS_OF_USER
                      ?.ADDRESS,
                },
                {
                  KEY: "DETAILS_OF_USER-MOBILE_NUMBER",
                  VALUE:
                    response.data.vendor_data[0]?.CONTACT_PERSON.DETAILS_OF_USER
                      ?.MOBILE_NUMBER,
                },
                {
                  KEY: "DETAILS_OF_USER-GENDER",
                  VALUE:
                    response.data.vendor_data[0]?.CONTACT_PERSON.DETAILS_OF_USER
                      ?.GENDER,
                },
                {
                  KEY: "DETAILS_OF_USER-LANDLINE",
                  VALUE:
                    response.data.vendor_data[0]?.CONTACT_PERSON.DETAILS_OF_USER
                      ?.LANDLINE,
                },
                {
                  KEY: "DETAILS_OF_USER-DESIGNATION",
                  VALUE:
                    response.data.vendor_data[0]?.CONTACT_PERSON.DETAILS_OF_USER
                      ?.DESIGNATION,
                },
                {
                  KEY: "DETAILS_OF_USER-PERSON_BIRTH_DATE",
                  VALUE: {
                    label:
                      response.data.vendor_data[0]?.CONTACT_PERSON
                        .DETAILS_OF_USER?.PERSON_BIRTH_DATE,
                    value:
                      response.data.vendor_data[0]?.CONTACT_PERSON
                        .DETAILS_OF_USER?.PERSON_BIRTH_DATE,
                  },
                },
                {
                  KEY: "DETAILS_OF_USER-PERSON_BIRTH_MONTH",
                  VALUE: {
                    label:
                      response.data.vendor_data[0]?.CONTACT_PERSON
                        .DETAILS_OF_USER?.PERSON_BIRTH_MONTH,
                    value:
                      response.data.vendor_data[0]?.CONTACT_PERSON
                        .DETAILS_OF_USER?.PERSON_BIRTH_MONTH,
                  },
                },
                {
                  KEY: "VENDOR-NAME",
                  VALUE:
                    response.data.vendor_data[0]?.CONTACT_PERSON.VENDOR?.NAME,
                },
                {
                  KEY: "VENDOR-EMAIL",
                  VALUE:
                    response.data.vendor_data[0]?.CONTACT_PERSON.VENDOR?.EMAIL,
                },
                {
                  KEY: "VENDOR-ADDRESS",
                  VALUE:
                    response.data.vendor_data[0]?.CONTACT_PERSON.VENDOR?.ADDRESS,
                },
                {
                  KEY: "VENDOR-MOBILE_NUMBER",
                  VALUE:
                    response.data.vendor_data[0]?.CONTACT_PERSON.VENDOR
                      ?.MOBILE_NUMBER,
                },
                {
                  KEY: "VENDOR-GENDER",
                  VALUE:
                    response.data.vendor_data[0]?.CONTACT_PERSON.VENDOR?.GENDER,
                },
                {
                  KEY: "VENDOR-LANDLINE",
                  VALUE:
                    response.data.vendor_data[0]?.CONTACT_PERSON.VENDOR
                      ?.LANDLINE,
                },
                {
                  KEY: "VENDOR-DESIGNATION",
                  VALUE:
                    response.data.vendor_data[0]?.CONTACT_PERSON.VENDOR
                      ?.DESIGNATION,
                },
                {
                  KEY: "VENDOR-PERSON_BIRTH_DATE",
                  VALUE: {
                    label:
                      response.data.vendor_data[0]?.CONTACT_PERSON.VENDOR
                        ?.PERSON_BIRTH_DATE,
                    value:
                      response.data.vendor_data[0]?.CONTACT_PERSON.VENDOR
                        ?.PERSON_BIRTH_DATE,
                  },
                },
                {
                  KEY: "VENDOR-PERSON_BIRTH_MONTH",
                  VALUE: {
                    label:
                      response.data.vendor_data[0]?.CONTACT_PERSON
                        .DETAILS_OF_USER?.PERSON_BIRTH_MONTH,
                    value:
                      response.data.vendor_data[0]?.CONTACT_PERSON
                        .DETAILS_OF_USER?.PERSON_BIRTH_MONTH,
                  },
                },
                {
                  KEY: "VENDOR_CONTACT_PERSON-NAME",
                  VALUE:
                    response.data.vendor_data[0]?.CONTACT_PERSON
                      .VENDOR_CONTACT_PERSON?.NAME,
                },
                {
                  KEY: "VENDOR_CONTACT_PERSON-EMAIL",
                  VALUE:
                    response.data.vendor_data[0]?.CONTACT_PERSON
                      .VENDOR_CONTACT_PERSON?.EMAIL,
                },
                {
                  KEY: "VENDOR_CONTACT_PERSON-ADDRESS",
                  VALUE:
                    response.data.vendor_data[0]?.CONTACT_PERSON
                      .VENDOR_CONTACT_PERSON?.ADDRESS,
                },
                {
                  KEY: "VENDOR_CONTACT_PERSON-MOBILE_NUMBER",
                  VALUE:
                    response.data.vendor_data[0]?.CONTACT_PERSON
                      .VENDOR_CONTACT_PERSON?.MOBILE_NUMBER,
                },
                {
                  KEY: "VENDOR_CONTACT_PERSON-GENDER",
                  VALUE:
                    response.data.vendor_data[0]?.CONTACT_PERSON
                      .VENDOR_CONTACT_PERSON?.GENDER,
                },
                {
                  KEY: "VENDOR_CONTACT_PERSON-LANDLINE",
                  VALUE:
                    response.data.vendor_data[0]?.CONTACT_PERSON
                      .VENDOR_CONTACT_PERSON?.LANDLINE,
                },
                {
                  KEY: "VENDOR_CONTACT_PERSON-DESIGNATION",
                  VALUE:
                    response.data.vendor_data[0]?.CONTACT_PERSON
                      .VENDOR_CONTACT_PERSON?.DESIGNATION,
                },
                {
                  KEY: "VENDOR_CONTACT_PERSON-PERSON_BIRTH_DATE",
                  VALUE: {
                    label:
                      response.data.vendor_data[0]?.CONTACT_PERSON
                        .VENDOR_CONTACT_PERSON?.PERSON_BIRTH_DATE,
                    value:
                      response.data.vendor_data[0]?.CONTACT_PERSON
                        .VENDOR_CONTACT_PERSON?.PERSON_BIRTH_DATE,
                  },
                },
                {
                  KEY: "VENDOR_CONTACT_PERSON-PERSON_BIRTH_MONTH",
                  VALUE: {
                    label:
                      response.data.vendor_data[0]?.CONTACT_PERSON
                        .VENDOR_CONTACT_PERSON?.PERSON_BIRTH_MONTH,
                    value:
                      response.data.vendor_data[0]?.CONTACT_PERSON
                        .VENDOR_CONTACT_PERSON?.PERSON_BIRTH_MONTH,
                  },
                },
                {
                  KEY: "PROMOTER-NAME",
                  VALUE:
                    response.data.vendor_data[0]?.CONTACT_PERSON.PROMOTER?.NAME,
                },
                {
                  KEY: "PROMOTER-EMAIL",
                  VALUE:
                    response.data.vendor_data[0]?.CONTACT_PERSON.PROMOTER?.EMAIL,
                },
                {
                  KEY: "PROMOTER-ADDRESS",
                  VALUE:
                    response.data.vendor_data[0]?.CONTACT_PERSON.PROMOTER
                      ?.ADDRESS,
                },
                {
                  KEY: "PROMOTER-MOBILE_NUMBER",
                  VALUE:
                    response.data.vendor_data[0]?.CONTACT_PERSON.PROMOTER
                      ?.MOBILE_NUMBER,
                },
                {
                  KEY: "PROMOTER-GENDER",
                  VALUE:
                    response.data.vendor_data[0]?.CONTACT_PERSON.PROMOTER
                      ?.GENDER,
                },
                {
                  KEY: "PROMOTER-LANDLINE",
                  VALUE:
                    response.data.vendor_data[0]?.CONTACT_PERSON.PROMOTER
                      ?.LANDLINE,
                },
                {
                  KEY: "PROMOTER-DESIGNATION",
                  VALUE:
                    response.data.vendor_data[0]?.CONTACT_PERSON.PROMOTER
                      ?.DESIGNATION,
                },
                {
                  KEY: "PROMOTER-PERSON_BIRTH_DATE",
                  VALUE: {
                    label:
                      response.data.vendor_data[0]?.CONTACT_PERSON.PROMOTER
                        ?.PERSON_BIRTH_DATE,
                    value:
                      response.data.vendor_data[0]?.CONTACT_PERSON.PROMOTER
                        ?.PERSON_BIRTH_DATE,
                  },
                },
                {
                  KEY: "PROMOTER-PERSON_BIRTH_MONTH",
                  VALUE: {
                    label:
                      response.data.vendor_data[0]?.CONTACT_PERSON.PROMOTER
                        ?.PERSON_BIRTH_MONTH,
                    value:
                      response.data.vendor_data[0]?.CONTACT_PERSON.PROMOTER
                        ?.PERSON_BIRTH_MONTH,
                  },
                },
                {
                  KEY: "DIRECTOR_PARTNER_PROPRIETOR-NAME",
                  VALUE:
                    response.data.vendor_data[0]?.CONTACT_PERSON
                      .DIRECTOR_PARTNER_PROPRIETOR?.NAME,
                },
                {
                  KEY: "DIRECTOR_PARTNER_PROPRIETOR-EMAIL",
                  VALUE:
                    response.data.vendor_data[0]?.CONTACT_PERSON
                      .DIRECTOR_PARTNER_PROPRIETOR?.EMAIL,
                },
                {
                  KEY: "DIRECTOR_PARTNER_PROPRIETOR-ADDRESS",
                  VALUE:
                    response.data.vendor_data[0]?.CONTACT_PERSON
                      .DIRECTOR_PARTNER_PROPRIETOR?.ADDRESS,
                },
                {
                  KEY: "DIRECTOR_PARTNER_PROPRIETOR-MOBILE_NUMBER",
                  VALUE:
                    response.data.vendor_data[0]?.CONTACT_PERSON
                      .DIRECTOR_PARTNER_PROPRIETOR?.MOBILE_NUMBER,
                },
                {
                  KEY: "DIRECTOR_PARTNER_PROPRIETOR-GENDER",
                  VALUE:
                    response.data.vendor_data[0]?.CONTACT_PERSON
                      .DIRECTOR_PARTNER_PROPRIETOR?.GENDER,
                },
                {
                  KEY: "DIRECTOR_PARTNER_PROPRIETOR-LANDLINE",
                  VALUE:
                    response.data.vendor_data[0]?.CONTACT_PERSON.DETAILS_OF_USER
                      ?.LANDLINE,
                },
                {
                  KEY: "DIRECTOR_PARTNER_PROPRIETOR-DESIGNATION",
                  VALUE:
                    response.data.vendor_data[0]?.CONTACT_PERSON
                      .DIRECTOR_PARTNER_PROPRIETOR?.DESIGNATION,
                },
                {
                  KEY: "DIRECTOR_PARTNER_PROPRIETOR-PERSON_BIRTH_DATE",
                  VALUE: {
                    label:
                      response.data.vendor_data[0]?.CONTACT_PERSON
                        .DETAILS_OF_USER?.PERSON_BIRTH_DATE,
                    value:
                      response.data.vendor_data[0]?.CONTACT_PERSON
                        .DETAILS_OF_USER?.PERSON_BIRTH_DATE,
                  },
                },
                {
                  KEY: "DIRECTOR_PARTNER_PROPRIETOR-PERSON_BIRTH_MONTH",
                  VALUE: {
                    label:
                      response.data.vendor_data[0]?.CONTACT_PERSON
                        .DIRECTOR_PARTNER_PROPRIETOR?.PERSON_BIRTH_MONTH,
                    value:
                      response.data.vendor_data[0]?.CONTACT_PERSON
                        .DIRECTOR_PARTNER_PROPRIETOR?.PERSON_BIRTH_MONTH,
                  },
                },
              ];

              props.setGeneralDataAction(tempGeneralData);
              props.setTaxDataAction(tempTaxData);
              props.setCompanyDataAction(tempCompanyData);
              props.setBankDetailsAction(tempBankDetails);
              props.setAdditionalInformationAction(tempAdditionalDetails);
              props.setContactPersonAction(tempContactPerson);
              setVendorOTPModalFlag(false);
            } else {
              cogoToast.error("OTP does not matched");
              setVendorOTPModalFlag(true);
              localStorage.removeItem(
                "MDM_MasterOTPToken",
                vendorVerificationOTP
              );
            }
          })
          .catch((err) => {
            console.log(err);
            console.log("kjsndhjdsbfhjdsbfhjdsb");
          });
      } else {
        cogoToast.error("Please enter OTP");
      }
    }
  };

  const sendURLtoVendor = () => {
    console.log(receiverVendorEmail?.RECEIVER_EMAIL_ID);
    let tempData = props.GENERAL_DATA.find((val) => val.KEY == "COMPANY_CODE");

    console.log("tempDataasdksdh", tempData);

    if (receiverVendorEmail?.RECEIVER_EMAIL_ID == "") {
      cogoToast.warn("Please enter email ID");
    } else if (tempData?.VALUE == "") {
      cogoToast.warn("Please enter Company code");
    } else {
      let VendorFormData = new FormData();
      // props.GENERAL_DATA.map((val) => {
      //   if (val.VALUE?.value != undefined) {
      //     VendorFormData.set([val?.KEY], val?.VALUE.value);
      //   } else {
      //     VendorFormData.set([val?.KEY], val?.VALUE);
      //   }

      //   // if (val?.FILE != undefined) {
      //   // }
      // });

            props.GENERAL_DATA.map((val) => {
          if (val.VALUE?.value != undefined) {

            console.log("ashbdsdbj",[val.KEY],val.VALUE);
            VendorFormData.set([val.KEY], val.VALUE.value);
          } else {
            VendorFormData.set([val.KEY], val.VALUE);
          }

          // if (val?.FILE != undefined) {
          // }
        });
      //  props.BANK_DETAILS_DATA.map((val) => {
      //    VendorFormData.set([val.KEY], val.VALUE);
      //  });
      //  props.COMPANY_DATA.map((val) => {
      //    VendorFormData.set([val.KEY], val.VALUE);
      //  });
      //  props.ADDITIONAL_DETAILS.map((val) => {
      //    VendorFormData.set([val.KEY], val.VALUE);
      //  });

      let tempGSTNumber = props.TAX_DATA.find((val) => val.KEY == "GST_NUMBER");
      let tempPANNumber = props.TAX_DATA.find((val) => val.KEY == "PAN_NUMBER");
      let tempCINNumber = props.TAX_DATA.find((val) => val.KEY == "CIN_NUMBER");
      let tempMSMENumber = props.TAX_DATA.find(
        (val) => val.KEY == "MSME_NUMBER"
      );
      let tempAADHARNumber = props.TAX_DATA.find(
        (val) => val.KEY == "AADHAR_NUMBER"
      );

      VendorFormData.set(
        "TAX_DATA",
        JSON.stringify({
          GST: {
            GST_NUMBER: tempGSTNumber?.VALUE,
          },
          PAN: {
            PAN_NUMBER: tempPANNumber?.VALUE,
          },
          CIN: {
            CIN_NUMBER: tempCINNumber?.VALUE,
          },
          MSME: {
            MSME_NUMBER: tempMSMENumber?.VALUE,
          },
          AADHAR: {
            AADHAR_NUMBER: tempAADHARNumber?.VALUE,
          },
        })
      );

      VendorFormData.append("GST_DOC", tempGSTNumber?.FILE);
      VendorFormData.append("PAN_DOC", tempPANNumber?.FILE);
      VendorFormData.append("CIN_DOC", tempCINNumber?.FILE);
      VendorFormData.append("MSME_DOC", tempMSMENumber?.FILE);
      VendorFormData.append("AADHAR_DOC", tempMSMENumber?.FILE);

      let tempBankDetailsData = {};
      props.BANK_DETAILS_DATA.map((val) => {
        if (val?.VALUE?.value != undefined) {
          tempBankDetailsData = {
            ...tempBankDetailsData,
            [val?.KEY]: val?.VALUE.value,
          };
        } else {
          tempBankDetailsData = {
            ...tempBankDetailsData,
            [val?.KEY]: val?.VALUE,
          };
        }
      });

      console.log(tempBankDetailsData);

      VendorFormData.set("BANK_DETAILS", JSON.stringify(tempBankDetailsData));
      let tempAdditionalDetails = {};
      props.ADDITIONAL_DETAILS.map((val) => {
        if (val?.VALUE?.value != undefined) {
          tempAdditionalDetails = {
            ...tempAdditionalDetails,
            [val?.KEY]: val?.VALUE.value,
          };
        } else {
          tempAdditionalDetails = {
            ...tempAdditionalDetails,
            [val?.KEY]: val?.VALUE,
          };
        }
      });

      console.log(tempAdditionalDetails);

      VendorFormData.set(
        "ADDITIONAL_DETAILS",
        JSON.stringify(tempAdditionalDetails)
      );
      let tempCompanyData = {};
      props.COMPANY_DATA.map((val) => {
        if (val?.VALUE?.value != undefined) {
          tempCompanyData = {
            ...tempCompanyData,
            [val?.KEY]: val?.VALUE?.value,
          };
        } else {
          tempCompanyData = {
            ...tempCompanyData,
            [val?.KEY]: val?.VALUE,
          };
        }
      });
      console.log(tempCompanyData);
      VendorFormData.set("COMPANY_DATA", JSON.stringify(tempCompanyData));
      let tempDetailOfUser = tempGeneralFields.find(
        (val) => val.HEADER_KEY == "DETAILS_OF_USER"
      );

      let tempVendor = tempGeneralFields.find(
        (val) => val.HEADER_KEY == "VENDOR"
      );
      let tempVendorContactPerson = tempGeneralFields.find(
        (val) => val.HEADER_KEY == "VENDOR_CONTACT_PERSON"
      );
      let tempPromoter = tempGeneralFields.find(
        (val) => val.HEADER_KEY == "PROMOTER"
      );
      let tempDirectorPartner = tempGeneralFields.find(
        (val) => val.HEADER_KEY == "DIRECTOR_PARTNER_PROPRIETOR"
      );

      let DetailOfUser = {};
      let vendor = {};
      let VendorContactPerson = {};
      let Promoter = {};
      let DirectorPartner = {};

      if(tempDetailOfUser){


      tempDetailOfUser.SUB_CAT.map((val) => {
        if (val.VALUE?.value != undefined) {
          DetailOfUser = {
            ...DetailOfUser,
            [val?.KEY]: val?.VALUE?.value,
          };
        } else {
          DetailOfUser = { ...DetailOfUser, [val?.KEY]: val?.VALUE };
        }
      });
    }
    if(tempVendor){


      tempVendor.SUB_CAT.map((val) => {
        if (val?.VALUE?.value != undefined) {
          vendor = {
            ...vendor,
            [val?.KEY]: val?.VALUE?.value,
          };
        } else {
          vendor = {
            ...vendor,
            [val?.KEY]: val?.VALUE,
          };
        }
      });
    }

if(tempVendorContactPerson){

      tempVendorContactPerson.SUB_CAT.map((val) => {
        if (val?.VALUE?.value != undefined) {
          VendorContactPerson = {
            ...VendorContactPerson,
            [val?.KEY]: val?.VALUE?.value,
          };
        } else {
          VendorContactPerson = {
            ...VendorContactPerson,
            [val?.KEY]: val?.VALUE,
          };
        }
      });
    }
    if(tempPromoter){


      tempPromoter.SUB_CAT.map((val) => {
        if (val?.VALUE?.value != undefined) {
          Promoter = {
            ...Promoter,
            [val?.KEY]: val?.VALUE,
          };
        } else {
          Promoter = {
            ...Promoter,
            [val?.KEY]: val?.VALUE,
          };
        }
      });
    }

if(tempDirectorPartner){

      tempDirectorPartner?.SUB_CAT.map((val) => {
        if (val?.VALUE?.value != undefined) {
          DirectorPartner = {
            ...DirectorPartner,
            [val?.KEY]: val?.VALUE?.value,
          };
        } else {
          DirectorPartner = {
            ...DirectorPartner,
            [val?.KEY]: val?.VALUE,
          };
        }
      });
    }

      VendorFormData.set(
        "CONTACT_PERSON",
        JSON.stringify({
          DETAILS_OF_USER: DetailOfUser,
          VENDOR: vendor,
          VENDOR_CONTACT_PERSON: VendorContactPerson,
          PROMOTER: Promoter,
          DIRECTOR_PARTNER_PROPRIETOR: DirectorPartner,
        })
      );
      VendorFormData.set(
        "APPROVAL_FLAG",
        props.showDrawerAppBar == true ? "3" : "2"
      );
      VendorFormData.set("SUBMITTED_FLAG", true);
      VendorFormData.set(
        "TIMELINE",
        JSON.stringify({
          ACTION_NAME:
            props.showDrawerAppBar == true
              ? "Request Generated by Buyer"
              : "Request Submitted by Vendor",
          ACTION_TIME: new Date(),
        })
      );

      for (var pair of VendorFormData.entries()) {
        console.log("VendorFormDataasdbhs", pair[0] + ", " + pair[1]);
      }

      console.log("VendorFormDataasdbhs", VendorFormData);

      console.log("Submitting");
      axios
        .post(AXIOS.axiosUrl + AXIOS.vendorCreate, VendorFormData)
        .then((response) => {
          console.log("response.dataasasddads", response.data);
          axios
            .post(AXIOS.axiosUrl + AXIOS.vendorFormCreationURLEmail, {
              APPLICATION_ID: response.data.APPLICATION_ID,
              EMAIL: receiverVendorEmail?.RECEIVER_EMAIL_ID,
              MAILING_TIME: new Date(),
            })
            .then((response) => {
              console.log(response);
              alert("URL sent");
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });

      //URL SENT TO EMAIL
    }
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
        APPLICATION_ID: location.state?.VENDOR_DATA?.APPLICATION_ID,
        APPROVAL_FLAG: ClickedFlag,
      },
    ];

    axios
      .post(AXIOS.axiosUrl + AXIOS.vendor_approve_reject, vendorPayload)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  window.onbeforeunload = function () {
    return "Data will be lost if you leave the page, are you sure?";
  };
  return (
    <Box sx={{ display: "flex" }} className="back-ground">
      <CssBaseline />
      {showDrawerAppBar && (
        <>
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
              ActiveKey={
                RoutedFromApprovalScreen ? VENDOR_APPROVAL : VENDOR_CREATION
              }
            />
          </Box>
        </>
      )}

      <MainScreen drawerWidth={showDrawerAppBar ? 280 : 0}>
        {/* <Box className="wave-background"/> */}
        {/* <Component {...props} /> */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
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
                : "Vendor Creation"}
            </h1>
          </Box>

          {/* <Box></Box> */}
          {showDrawerAppBar &&
            (RoutedFromApprovalScreen ? (
              <Box>
                <Button
                  color="success"
                  variant="outlined"
                  sx={{
                    m: 2,
                  }}
                  onClick={() => {
                    VendorApproveReject("3");
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
                    VendorApproveReject("6");
                  }}
                >
                  Reject
                </Button>
              </Box>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  alignContent: "center",
                }}
              >
                <TextField
                  placeholder="Email ID"
                  onBlur={(e) => {
                    console.log(e.target.value);
                    if (e.target.value != "") {
                      if (
                        e.target.value.includes("@") &&
                        e.target.value.includes(".com")
                      ) {
                        console.log("not incldeed");
                      } else {
                        setReceiverVendorEmail((prev) => ({
                          ...prev,
                          ERROR_FLAG: true,
                        }));
                        console.log("yes");
                      }
                    }
                  }}
                  helperText={
                    receiverVendorEmail?.ERROR_FLAG
                      ? "Please enter a valid email ID"
                      : ""
                  }
                  error={receiverVendorEmail?.ERROR_FLAG}
                  value={receiverVendorEmail?.RECEIVER_EMAIL_ID}
                  onFocus={() => {}}
                  onChange={(e) => {
                    setReceiverVendorEmail((prev) => ({
                      ...prev,
                      RECEIVER_EMAIL_ID: e.target.value.toLowerCase(),
                      ERROR_FLAG: false,
                    }));
                  }}
                  style={{
                    backgroundColor: "#fff",
                  }}
                />
                <Button
                  color="success"
                  variant="contained"
                  sx={{
                    ml: 2,
                  }}
                  onClick={() => {
                    sendURLtoVendor();
                  }}
                >
                  Send URL
                </Button>
              </Box>
            ))}
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
            label="Tax Data"
            sx={{
              fontSize: { xs: 14, md: 18 },
              fontWeight: 600,
              textTransform: "none",
            }}
          />
          <Tab
            value={3}
            label="Bank Details"
            sx={{
              fontSize: { xs: 14, md: 18 },
              fontWeight: 600,
              textTransform: "none",
            }}
          />
          <Tab
            value={4}
            label="Company Data"
            sx={{
              fontSize: { xs: 14, md: 18 },
              fontWeight: 600,
              textTransform: "none",
            }}
          />
          {showDrawerAppBar && (
            <Tab
              value={5}
              label="Additional information"
              sx={{
                fontSize: { xs: 14, md: 18 },
                fontWeight: 600,
                textTransform: "none",
              }}
            />
          )}

          <Tab
            value={6}
            label="Contact Person"
            sx={{
              fontSize: { xs: 14, md: 18 },
              fontWeight: 600,
              textTransform: "none",
            }}
          />
        </Tabs>
        {VendorTab == 1 && <General />}
        {VendorTab == 2 && <TaxData />}
        {VendorTab == 3 && <BankDetails />}
        {VendorTab == 4 && <CompanyData />}
        {showDrawerAppBar && VendorTab == 5 && (
          <AdditionalInformation showDrawerAppBar={showDrawerAppBar} />
        )}

        {VendorTab == 6 && (
          <ContactPerson showDrawerAppBar={showDrawerAppBar} />
        )}
        <Modal
          open={vendorOTPModalFlag}
          // onClose={()=>{
          //   setVendorOTPModalFlag(false)
          // }}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="design-container">
            <div className="design-wrapper">
              <div className="form-card">
                <p className="form-card-title">Please Enter OTP</p>
                <p className="form-card-prompt">
                  Please check your email ID if OTP not received click on Resend
                  Button
                </p>
                <div className="form-card-input-wrapper">
                  <input
                    type="tel"
                    maxLength={6}
                    placeholder="______"
                    className="form-card-input"
                    value={vendorVerificationOTP}
                    onChange={(e) => {
                      setVendorVerificationOTP(e.target.value);
                    }}
                  />
                  <div className="form-card-input-bg" />
                </div>
                <Typography
                  className="call-again"
                  onClick={() => {
                    sendOTPtoReceiverMail();
                    setSendOTPTimer(1);
                  }}
                >
                  Resend OTP
                </Typography>

                <button
                  className="form-card-submit"
                  onClick={() => {
                    VerifyOTP();
                  }}
                >
                  submit
                </button>
              </div>
            </div>
            <svg
              id="uuid-d8a0d861-3741-4013"
              xmlns="http://www.w3.org/2000/svg"
              width="186.5491027832"
              height="376.9284057617"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 186.5491027832 376.9284057617"
            ></svg>
          </div>

          {/* <Box sx={style}>

            
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                style={{
                  fontWeight: "bold",
                }}
              >
                OTP Verification
              </Typography>
            </div>
            <Divider />
            <Box
              sx={{
                // padding: 3,
                marginTop: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TextField
                placeholder="OTP"
                value={vendorVerificationOTP}
                onChange={(e) => {
                  setVendorVerificationOTP(e.target.value);
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  color: "blue",
                  cursor: "pointer",
                  margin: 1,
                }}
                onClick={() => {
                  sendOTPtoReceiverMail();
                }}
              >
                Resend
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 3,
              }}
            >
              <Button
                variant="contained"
                onClick={() => {
                  VerifyOTP();
                  // setVendorOTPModalFlag(false)
                }}
              >
                Verify
              </Button>
            </Box>
          </Box> */}
        </Modal>
      </MainScreen>
    </Box>
    // <AppDrawer/>
  );
}

const mapStateToProps = (state) => ({
  CONTACT_PERSON: state.vendor.contact_person,
  BANK_DETAILS_DATA: state.vendor.bank_details_data,
  COMPANY_DATA: state.vendor.company_data,
  TAX_DATA: state.vendor.tax_data,
  GENERAL_DATA: state.vendor.general_data,
  ADDITIONAL_DETAILS: state.vendor.additional_info,
});

export default connect(mapStateToProps, {
  setGeneralDataAction,
  setCompanyDataAction,
  setContactPersonAction,
  setBankDetailsAction,
  setTaxDataAction,
  setAdditionalInformationAction,
})(VendorCreation);
