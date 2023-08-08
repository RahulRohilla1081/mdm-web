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
import FinalVendorDetails from "./VendorsTabs/AdditionalInformation";

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

  const navigate=useNavigate();

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

  useEffect(() => {
    console.log(props.GENERAL_DATA);
    if (location.state == null) {
      setShowDrawerAppBar(false);
      setVendorOTPModalFlag(true);

      // sendOTPtoReceiverMail();
    } else {
      if (location?.state?.SCREEN_NAME == "APPROVAL") {
        setRoutedFromApprovalScreen(true);
      } else {
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
      location.state?.VENDOR_DATA?.APPLICATION_ID
    );
    let tempGeneralData = {
      APPLICATION_ID: location.state?.VENDOR_DATA?.APPLICATION_ID,
      NAME: location.state?.VENDOR_DATA?.NAME,
      EMAIL: location.state?.VENDOR_DATA?.EMAIL,
      COUNTRY: CountryList[countryIndex],
      STATE: {
        label: location.state?.VENDOR_DATA?.STATE,
        value: location.state?.VENDOR_DATA?.STATE,
      },
      CITY:
        location.state?.VENDOR_DATA?.CITY != "undefined"
          ? location.state?.VENDOR_DATA?.CITY
          : "",
      ADDRESS_LINE_1: location.state?.VENDOR_DATA?.ADDRESS_LINE_1,
      ADDRESS_LINE_2: location.state?.VENDOR_DATA?.ADDRESS_LINE_2,
      ADDRESS_LINE_3: location.state?.VENDOR_DATA?.ADDRESS_LINE_3,
      PINCODE: location.state?.VENDOR_DATA?.PINCODE,
      FAX:
        location.state?.VENDOR_DATA?.FAX_DETAILS != "undefined"
          ? location.state?.VENDOR_DATA?.FAX_DETAILS
          : "",
      TIME_ZONE: location.state?.VENDOR_DATA?.TIME_ZONE_MOBILE,
      COMPANY_CODE: location.state?.VENDOR_DATA?.COMPANY_DATA.COMPANY_CODE,
      BUSINESS_ROLE: {
        label: location.state?.VENDOR_DATA?.BUSINESS_ROLE,
        value: location.state?.VENDOR_DATA?.BUSINESS_ROLE,
      },
    };

    //             GST: { GST_NUMBER: props.TAX_DATA.GST_NUMBER },
    // PAN: { PAN_NUMBER: props.TAX_DATA.PAN_NUMBER },
    // CIN: { CIN_NUMBER: props.TAX_DATA.CIN_NUMBER },
    // MSME: { MSME_NUMBER: props.TAX_DATA.MSME_NUMBER },
    // AADHAR: { AADHAR_NUMBER: props.TAX_DATA.AADHAR_NUMBER },
    let tempTaxData = {
      GST_NUMBER: location.state?.VENDOR_DATA?.TAX_DATA.GST?.GST_NUMBER,
      PAN_NUMBER: location.state?.VENDOR_DATA?.TAX_DATA.PAN?.PAN_NUMBER,
      CIN_NUMBER: location.state?.VENDOR_DATA?.TAX_DATA.CIN?.CIN_NUMBER,
      MSME_NUMBER: location.state?.VENDOR_DATA?.TAX_DATA.MSME?.MSME_NUMBER,
      AADHAR_NUMBER:location.state?.VENDOR_DATA?.TAX_DATA.AADHAR?.AADHAR_NUMBER,
      MSME_DOC_URL: location.state?.VENDOR_DATA?.TAX_DATA.GST?.MSME_DOC_URL,
      CIN_DOC_URL: location.state?.VENDOR_DATA?.TAX_DATA.GST?.CIN_DOC_URL,
      PAN_DOC_URL: location.state?.VENDOR_DATA?.TAX_DATA.GST?.PAN_DOC_URL,
      GST_DOC_URL: location.state?.VENDOR_DATA?.TAX_DATA.GST?.GST_DOC_URL,
      AADHAR_DOC_URL:location.state?.VENDOR_DATA?.TAX_DATA.AADHAR?.AADHAR_DOC_URL,
    };

    let tempCompanyData = {
      CURRENCY: {
        label: location.state?.VENDOR_DATA?.COMPANY_DATA?.CURRENCY,
        value: location.state?.VENDOR_DATA?.COMPANY_DATA?.CURRENCY,
      },
      INCO_TERM_1: {
        label: location.state?.VENDOR_DATA?.COMPANY_DATA?.INCO_TERM_1,
        value: location.state?.VENDOR_DATA?.COMPANY_DATA?.INCO_TERM_1,
      },
      INCO_TERM_2: {
        label: location.state?.VENDOR_DATA?.COMPANY_DATA?.INCO_TERM_2,
        value: location.state?.VENDOR_DATA?.COMPANY_DATA?.INCO_TERM_2,
      },

      PAYMENT_TERM: location.state?.VENDOR_DATA?.COMPANY_DATA?.PAYMENT_TERM,
      PROCUREMENT_PLANT:
        location.state?.VENDOR_DATA?.COMPANY_DATA?.PROCUREMENT_PLANT,
      TURNOVER: location.state?.VENDOR_DATA?.COMPANY_DATA?.TURNOVER,
    };

    props.setGeneralDataAction(tempGeneralData);
    props.setTaxDataAction(tempTaxData);
    props.setCompanyDataAction(tempCompanyData);
    props.setCompanyDataAction(location.state?.VENDOR_DATA?.ADDITIONAL_DETAILS);
    props.setContactPersonAction(location.state?.VENDOR_DATA?.CONTACT_PERSON);

    props.setBankDetailsAction(location.state?.VENDOR_DATA?.BANK_DETAILS);
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
          }
          else{
            cogoToast.success("OTP sent to Email ID")
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
            console.log("sldfjhdsbfhjds",response.data);
            if (response.data.OTP_verified == true) {
              localStorage.setItem("MDM_MasterOTPToken", vendorVerificationOTP);
              const countryIndex = CountryList.findIndex(
                (val) => val.value == response.data.vendor_data[0].COUNTRY
              );

              let tempGeneralData = {
                APPLICATION_ID: response.data.vendor_data[0]?.APPLICATION_ID,
                NAME: response.data.vendor_data[0]?.NAME,
                EMAIL: response.data.vendor_data[0]?.EMAIL,
                COUNTRY: CountryList[countryIndex],
                STATE: {
                  label: response.data.vendor_data[0]?.STATE,
                  value: response.data.vendor_data[0]?.STATE,
                },
                CITY:
                  response.data.vendor_data[0]?.CITY != "undefined"
                    ? response.data.vendor_data[0].CITY
                    : "",
                ADDRESS_LINE_1: response.data.vendor_data[0]?.ADDRESS_LINE_1,
                ADDRESS_LINE_2: response.data.vendor_data[0]?.ADDRESS_LINE_2,
                ADDRESS_LINE_3: response.data.vendor_data[0]?.ADDRESS_LINE_3,
                PINCODE: response.data.vendor_data[0]?.PINCODE,
                FAX:
                  response.data.vendor_data[0]?.FAX_DETAILS != "undefined"
                    ? response.data.vendor_data[0]?.FAX_DETAILS
                    : "",
                TIME_ZONE: response.data.vendor_data[0]?.TIME_ZONE_MOBILE,
                COMPANY_CODE:
                  response.data.vendor_data[0]?.COMPANY_DATA.COMPANY_CODE,
                BUSINESS_ROLE: {
                  label: response.data.vendor_data[0]?.BUSINESS_ROLE,
                  value: response.data.vendor_data[0]?.BUSINESS_ROLE,
                },
              };

              //             GST: { GST_NUMBER: props.TAX_DATA.GST_NUMBER },
              // PAN: { PAN_NUMBER: props.TAX_DATA.PAN_NUMBER },
              // CIN: { CIN_NUMBER: props.TAX_DATA.CIN_NUMBER },
              // MSME: { MSME_NUMBER: props.TAX_DATA.MSME_NUMBER },
              // AADHAR: { AADHAR_NUMBER: props.TAX_DATA.AADHAR_NUMBER },
              // let tempTaxData = {
              //   GST_NUMBER: response.data.vendor_data[0].TAX_DATA.GST,
              //   PAN_NUMBER: response.data.vendor_data[0].TAX_DATA.PAN,
              //   CIN_NUMBER: response.data.vendor_data[0].TAX_DATA.CIN,
              //   MSME_NUMBER: response.data.vendor_data[0].TAX_DATA.MSMSE,
              //   AADHAR_NUMBER: response.data.vendor_data[0].TAX_DATA.AADHAR,
              // };
              let tempTaxData = {
                GST_NUMBER:
                  response.data.vendor_data[0]?.TAX_DATA?.GST?.GST_NUMBER,
                PAN_NUMBER:
                  response.data.vendor_data[0]?.TAX_DATA?.PAN?.PAN_NUMBER,
                CIN_NUMBER:
                  response.data.vendor_data[0]?.TAX_DATA?.CIN?.CIN_NUMBER,
                MSME_NUMBER:
                  response.data.vendor_data[0]?.TAX_DATA?.MSME?.MSME_NUMBER,
                AADHAR_NUMBER:
                  response.data.vendor_data[0]?.TAX_DATA?.AADHAR?.AADHAR_NUMBER,
                MSME_DOC_URL:
                  response.data.vendor_data[0]?.TAX_DATA?.GST?.MSME_DOC_URL,
                CIN_DOC_URL:
                  response.data.vendor_data[0]?.TAX_DATA?.GST?.CIN_DOC_URL,
                PAN_DOC_URL:
                  response.data.vendor_data[0]?.TAX_DATA?.GST?.PAN_DOC_URL,
                GST_DOC_URL:
                  response.data.vendor_data[0]?.TAX_DATA?.GST?.GST_DOC_URL,
                AADHAR_DOC_URL:
                  response.data.vendor_data[0]?.TAX_DATA?.AADHAR
                    ?.AADHAR_DOC_URL,
              };
              let tempCompanyData = {
                CURRENCY: {
                  label: response.data.vendor_data[0]?.COMPANY_DATA?.CURRENCY,
                  value: response.data.vendor_data[0]?.COMPANY_DATA?.CURRENCY,
                },
                INCO_TERM_1: {
                  label:
                    response.data.vendor_data[0]?.COMPANY_DATA?.INCO_TERM_1,
                  value:
                    response.data.vendor_data[0]?.COMPANY_DATA?.INCO_TERM_1,
                },
                INCO_TERM_2: {
                  label:
                    response.data.vendor_data[0]?.COMPANY_DATA?.INCO_TERM_2,
                  value:
                    response.data.vendor_data[0]?.COMPANY_DATA?.INCO_TERM_2,
                },

                PAYMENT_TERM:
                  response.data.vendor_data[0]?.COMPANY_DATA?.PAYMENT_TERM,
                PROCUREMENT_PLANT:
                  response.data.vendor_data[0]?.COMPANY_DATA?.PROCUREMENT_PLANT,
                TURNOVER: response.data.vendor_data[0]?.COMPANY_DATA?.TURNOVER,
              };

              props.setGeneralDataAction(tempGeneralData);
              props.setTaxDataAction(tempTaxData);
              props.setCompanyDataAction(tempCompanyData);
              props.setContactPersonAction(
                response.data.vendor_data[0].CONTACT_PERSON
              );

              props.setBankDetailsAction(
                response.data.vendor_data[0].BANK_DETAILS
              );
              props.setAdditionalInformationAction(
                response.data.vendor_data[0].ADDITIONAL_DETAILS
              );
              setVendorOTPModalFlag(false);
            } else {
              cogoToast.error("OTP does not matched")
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
    if (receiverVendorEmail?.RECEIVER_EMAIL_ID == "") {
      cogoToast.warn("Please enter email ID");
    } else if (
      props.GENERAL_DATA?.COMPANY_CODE == "" ||
      props.GENERAL_DATA?.COMPANY_CODE == undefined
    ) {
      cogoToast.warn("Please enter Company code");
    } else {
      let VendorFormData = new FormData();

      // VendorFormData.append("NAME", props.GENERAL_DATA.NAME);
      VendorFormData.set("NAME", props.GENERAL_DATA?.NAME!=undefined ? props.GENERAL_DATA?.NAME :"");
      VendorFormData.set("APPROVAL_FLAG", "1");
      VendorFormData.set("EMAIL", props.GENERAL_DATA?.EMAIL!=undefined ?props.GENERAL_DATA?.EMAIL:"");
      VendorFormData.set(
        "VENDOR_GROUP",
        props.GENERAL_DATA?.VENDOR_GROUP != undefined
          ? props.GENERAL_DATA?.VENDOR_GROUP
          : ""
      );
      VendorFormData.set("COUNTRY", props.GENERAL_DATA?.COUNTRY?.value!=undefined?props.GENERAL_DATA?.COUNTRY?.value:"");
      VendorFormData.set("CITY", props.GENERAL_DATA?.CITY!=undefined ? props.GENERAL_DATA?.CITY:"");
      VendorFormData.set("STATE", props.GENERAL_DATA?.STATE?.value!=undefined ? props.GENERAL_DATA?.STATE?.value :"");
      VendorFormData.set("ADDRESS_LINE_1", props.GENERAL_DATA?.ADDRESS_LINE_1!=undefined ? props.GENERAL_DATA?.ADDRESS_LINE_1 :"");
      VendorFormData.set("ADDRESS_LINE_2", props.GENERAL_DATA?.ADDRESS_LINE_2!=undefined ?props.GENERAL_DATA?.ADDRESS_LINE_2 :"");
      VendorFormData.set("ADDRESS_LINE_3", props.GENERAL_DATA?.ADDRESS_LINE_3!=undefined ?props.GENERAL_DATA?.ADDRESS_LINE_3 :"");
      VendorFormData.set("PINCODE", props.GENERAL_DATA?.PINCODE!=undefined ? props.GENERAL_DATA?.PINCODE :"");
      VendorFormData.set("DISTRICT", props.GENERAL_DATA?.DISTRICT!=undefined ?props.GENERAL_DATA?.DISTRICT :"");
          VendorFormData.set(
            "SCH_GRP_VEND",
            props.GENERAL_DATA?.SCH_GRP_VEND?.value != undefined
              ? props.GENERAL_DATA?.SCH_GRP_VEND?.value
              : ""
          );
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

      VendorFormData.set(
        "TIME_ZONE_MOBILE",
        props.GENERAL_DATA.COUNTRY?.timezone!=undefined ?  props.GENERAL_DATA.COUNTRY?.timezone :""
      );
      VendorFormData.set("FAX_DETAILS", props.GENERAL_DATA?.FAX!=undefined ?props.GENERAL_DATA?.FAX :"");

      VendorFormData.set(
        "BUSINESS_ROLE",
        props.GENERAL_DATA?.BUSINESS_ROLE?.value!=undefined?   props.GENERAL_DATA?.BUSINESS_ROLE?.value:""
      );
      VendorFormData.set(
        "TAX_DATA",
        JSON.stringify({
          GST: { GST_NUMBER: props.TAX_DATA?.GST_NUMBER },
          PAN: { PAN_NUMBER: props.TAX_DATA?.PAN_NUMBER },
          CIN: { CIN_NUMBER: props.TAX_DATA?.CIN_NUMBER },
          MSME: { MSME_NUMBER: props.TAX_DATA?.MSME_NUMBER },
          AADHAR: { AADHAR_NUMBER: props.TAX_DATA?.AADHAR_NUMBER },
        })
      );
      VendorFormData.append("GST_DOC", props.TAX_DATA?.GST_NUMBER_FILE);
      VendorFormData.append("PAN_DOC", props.TAX_DATA?.PAN_NUMBER_FILE);
      VendorFormData.append("CIN_DOC", props.TAX_DATA?.CIN_NUMBER_FILE);
      VendorFormData.append("MSME_DOC", props.TAX_DATA?.MSME_NUMBER_FILE);
      VendorFormData.append("AADHAR_DOC", props.TAX_DATA?.AADHAR_NUMBER_FILE);
      VendorFormData.set(
        "BANK_DETAILS",
        JSON.stringify({
          ACCOUNT_TYPE:
            props.BANK_DETAILS_DATA?.ACCOUNT_TYPE != undefined
              ? props.BANK_DETAILS_DATA?.ACCOUNT_TYPE
              : "",
          BANK_ACCOUNT:
            props.BANK_DETAILS_DATA?.BANK_ACCOUNT != undefined
              ? props.BANK_DETAILS_DATA?.BANK_ACCOUNT
              : "",
          ACCOUNT_HOLDER:
            props.BANK_DETAILS_DATA?.ACCOUNT_HOLDER != undefined
              ? props.BANK_DETAILS_DATA?.ACCOUNT_HOLDER
              : "",
          BANK_COUNTRY:
            props.BANK_DETAILS_DATA?.BANK_COUNTRY != undefined
              ? props.BANK_DETAILS_DATA?.BANK_COUNTRY
              : "",
          BANK_NAME:
            props.BANK_DETAILS_DATA?.BANK_NAME != undefined
              ? props.BANK_DETAILS_DATA?.BANK_NAME
              : "",
          BANK_KEY:
            props.BANK_DETAILS_DATA?.BANK_KEY != undefined
              ? props.BANK_DETAILS_DATA?.BANK_KEY
              : "",
          BANK_CITY:
            props.BANK_DETAILS_DATA?.BANK_CITY != undefined
              ? props.BANK_DETAILS_DATA?.BANK_CITY
              : "",
          MODE_OF_PAYMENT:
            props.BANK_DETAILS_DATA?.MODE_OF_PAYMENT?.value != undefined
              ? props.BANK_DETAILS_DATA?.MODE_OF_PAYMENT?.value
              : "",
        })
      );
      VendorFormData.set(
        "COMPANY_DATA",
        JSON.stringify({
          CURRENCY:
            props.COMPANY_DATA?.CURRENCY?.value != undefined
              ? props.COMPANY_DATA?.CURRENCY?.value
              : "",
          TURNOVER:
            props.COMPANY_DATA?.TURNOVER != undefined
              ? props.COMPANY_DATA?.TURNOVER
              : "",
          COMPANY_CODE:
            props.GENERAL_DATA?.COMPANY_CODE != undefined
              ? props.GENERAL_DATA?.COMPANY_CODE
              : "",
          PAYMENT_TERM:
            props.COMPANY_DATA?.PAYMENT_TERM != undefined
              ? props.COMPANY_DATA?.PAYMENT_TERM
              : "",
          INCO_TERM_1:
            props.COMPANY_DATA?.INCO_TERM_1?.value != undefined
              ? props.COMPANY_DATA?.INCO_TERM_1?.value
              : "",
          INCO_TERM_2:
            props.COMPANY_DATA?.INCO_TERM_2?.value != undefined
              ? props.COMPANY_DATA?.INCO_TERM_2?.value
              : "",
          PROCUREMENT_PLANT:
            props.COMPANY_DATA?.PROCUREMENT_PLANT != undefined
              ? props.COMPANY_DATA?.PROCUREMENT_PLANT
              : "",
        })
      );



      VendorFormData.set(
        "ADDITIONAL_DETAILS",
        JSON.stringify({
          ACCOUNTING_CLERK_ABBREVIATION:
            props.ADDITIONAL_DETAILS?.ACCOUNTING_CLERK_ABBREVIATION != undefined
              ? props.ADDITIONAL_DETAILS?.ACCOUNTING_CLERK_ABBREVIATION
              : "",
          RECONCILIATION_ACCOUNT:
            props.ADDITIONAL_DETAILS?.RECONCILIATION_ACCOUNT != undefined
              ? props.ADDITIONAL_DETAILS?.RECONCILIATION_ACCOUNT
              : "",
          GROUP_FOR_CALCULATION_SCHEMA:
            props.ADDITIONAL_DETAILS?.GROUP_FOR_CALCULATION_SCHEMA != undefined
              ? props.ADDITIONAL_DETAILS?.GROUP_FOR_CALCULATION_SCHEMA
              : "",
          TRAIN_STATION:
            props.ADDITIONAL_DETAILS?.TRAIN_STATION != undefined
              ? props.ADDITIONAL_DETAILS?.TRAIN_STATION
              : "",
          TRADE_PARTNER_ID_1:
            props.ADDITIONAL_DETAILS?.TRADE_PARTNER_ID_1 != undefined
              ? props.ADDITIONAL_DETAILS?.TRADE_PARTNER_ID_1
              : "",
          TRADE_PARTNER_ID_2:
            props.ADDITIONAL_DETAILS?.TRADE_PARTNER_ID_2 != undefined
              ? props.ADDITIONAL_DETAILS?.TRADE_PARTNER_ID_2
              : "",
          TRADE_PARTNER_ID_3:
            props.ADDITIONAL_DETAILS?.TRADE_PARTNER_ID_3 != undefined
              ? props.ADDITIONAL_DETAILS?.TRADE_PARTNER_ID_3
              : "",
        })
      );
      VendorFormData.set(
        "CONTACT_PERSON",
        JSON.stringify({
          DETAILS_OF_USER: {
            NAME: props.CONTACT_PERSON?.NAME,
            ADDRESS: props.CONTACT_PERSON?.ADDRESS,
            GENDER: props.CONTACT_PERSON?.GENDER,
            BIRTH_DATE: props.CONTACT_PERSON?.BIRTH_DATE,
            BIRTH_MONTH: props.CONTACT_PERSON?.BIRTH_MONTH,
            EMAIL: props.CONTACT_PERSON?.EMAIL,
            MOBILE: props.CONTACT_PERSON?.MOBILE,
            LANDLINE: props.CONTACT_PERSON?.LANDLINE,
            DESIGNATION: props.CONTACT_PERSON?.DESIGNATION,
          },
          VENDOR: {
            NAME: props.CONTACT_PERSON?.NAME,
            ADDRESS: props.CONTACT_PERSON?.ADDRESS,
            GENDER: props.CONTACT_PERSON?.GENDER,
            BIRTH_DATE: props.CONTACT_PERSON?.BIRTH_DATE,
            BIRTH_MONTH: props.CONTACT_PERSON?.BIRTH_MONTH,
            EMAIL: props.CONTACT_PERSON?.EMAIL,
            MOBILE: props.CONTACT_PERSON?.MOBILE,
            LANDLINE: props.CONTACT_PERSON?.LANDLINE,
            DESIGNATION: props.CONTACT_PERSON?.DESIGNATION,
          },
          VENDOR_CONTACT_PERSON: {
            NAME: props.CONTACT_PERSON?.NAME,
            ADDRESS: props.CONTACT_PERSON?.ADDRESS,
            GENDER: props.CONTACT_PERSON?.GENDER,
            BIRTH_DATE: props.CONTACT_PERSON?.BIRTH_DATE,
            BIRTH_MONTH: props.CONTACT_PERSON?.BIRTH_MONTH,
            EMAIL: props.CONTACT_PERSON?.EMAIL,
            MOBILE: props.CONTACT_PERSON?.MOBILE,
            LANDLINE: props.CONTACT_PERSON?.LANDLINE,
            DESIGNATION: props.CONTACT_PERSON?.DESIGNATION,
          },
          PROMOTER: {
            NAME: props.CONTACT_PERSON?.NAME,
            ADDRESS: props.CONTACT_PERSON?.ADDRESS,
            GENDER: props.CONTACT_PERSON?.GENDER,
            BIRTH_DATE: props.CONTACT_PERSON?.BIRTH_DATE,
            BIRTH_MONTH: props.CONTACT_PERSON?.BIRTH_MONTH,
            EMAIL: props.CONTACT_PERSON?.EMAIL,
            MOBILE: props.CONTACT_PERSON?.MOBILE,
            LANDLINE: props.CONTACT_PERSON?.LANDLINE,
            DESIGNATION: props.CONTACT_PERSON?.DESIGNATION,
          },
          DIRECTOR_PARTNER_PROPRIETOR: {
            NAME: props.CONTACT_PERSON?.NAME,
            ADDRESS: props.CONTACT_PERSON?.ADDRESS,
            GENDER: props.CONTACT_PERSON?.GENDER,
            BIRTH_DATE: props.CONTACT_PERSON?.BIRTH_DATE,
            BIRTH_MONTH: props.CONTACT_PERSON?.BIRTH_MONTH,
            EMAIL: props.CONTACT_PERSON?.EMAIL,
            MOBILE: props.CONTACT_PERSON?.MOBILE,
            LANDLINE: props.CONTACT_PERSON?.LANDLINE,
            DESIGNATION: props.CONTACT_PERSON?.DESIGNATION,
          },
        })
      );
      VendorFormData.set("SUBMITTED_FLAG", false);

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
          <FinalVendorDetails showDrawerAppBar={showDrawerAppBar} />
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
