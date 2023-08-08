import { Box, Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import CustomDropdown from "../../../components/CustomDropdown/CustomDropdown";
import CustomInput from "../../../components/CustomInput/CustomInput";
import Label from "../../../components/Label/Label";
import { setContactPersonAction } from "../../../redux/action/vendorAction";
import axios from "axios";
import AXIOS from "../../../utils/AXIOS";
import cogoToast from "cogo-toast";
import { COLORS } from "../../../utils/Theme";

function ContactPerson(props) {
  const GenderList = [
    {
      label: "Male",
      value: "Male",
    },
    {
      label: "Female",
      value: "Female",
    },
    {
      label: "Other",
      value: "Other",
    },
  ];
  let MonthArray = [
    {
      label: "1",
      value: "1",
    },
    {
      label: "2",
      value: "2",
    },
    {
      label: "3",
      value: "3",
    },
    {
      label: "4",
      value: "4",
    },
    {
      label: "5",
      value: "5",
    },
    {
      label: "6",
      value: "6",
    },
  ];
  let DayArray = Array.from(Array(32).keys());

  console.log("props.showDrawerAppBar", props.showDrawerAppBar);

  const [TbodyDETAILS_OF_USER, setTbodyDETAILS_OF_USER] = useState([]);
  const [TbodyVENDOR, setTbodyVENDOR] = useState([]);
  const [TbodyVENDOR_CONTACT_PERSON, setTbodyVENDOR_CONTACT_PERSON] = useState(
    []
  );
  const [TbodyPROMOTER, setTbodyPROMOTER] = useState([]);
  const [
    TbodyDIRECTOR_PARTNER_PROPRIETOR,
    setTbodyDIRECTOR_PARTNER_PROPRIETOR,
  ] = useState([]);
  const [Tbody, setTbody] = useState([
    //     {
    //   DETAILS_OF_USER: [{
    //     NAME:"",
    //     EMAIL:"",
    //     ADDRESS:"",
    //     MOBILE:"",
    //     GENDER:"",
    //     LANDING:"",
    //     BIRTH_DATE:"",
    //     BIRTH_MONTH:"",
    //     DESIGNATION:"",
    //   }],
    //   VENDOR: [{
    //     NAME:"",
    //     EMAIL:"",
    //     ADDRESS:"",
    //     MOBILE:"",
    //     GENDER:"",
    //     LANDING:"",
    //     BIRTH_DATE:"",
    //     BIRTH_MONTH:"",
    //     DESIGNATION:"",
    //   }],
    //   VENDOR_CONTACT_PERSON: [{
    //     NAME:"",
    //     EMAIL:"",
    //     ADDRESS:"",
    //     MOBILE:"",
    //     GENDER:"",
    //     LANDING:"",
    //     BIRTH_DATE:"",
    //     BIRTH_MONTH:"",
    //     DESIGNATION:"",
    //   }],
    //   PROMOTER:[{
    //     NAME:"",
    //     EMAIL:"",
    //     ADDRESS:"",
    //     MOBILE:"",
    //     GENDER:"",
    //     LANDING:"",
    //     BIRTH_DATE:"",
    //     BIRTH_MONTH:"",
    //     DESIGNATION:"",
    //   }],
    //   DIRECTOR_PARTNER_PROPRIETOR:[{
    //     NAME:"",
    //     EMAIL:"",
    //     ADDRESS:"",
    //     MOBILE:"",
    //     GENDER:"",
    //     LANDING:"",
    //     BIRTH_DATE:"",
    //     BIRTH_MONTH:"",
    //     DESIGNATION:"",
    //   }]
    // }
  ]);

  useEffect(() => {
    console.log("props.GENERAL_DATA.NAME", props.GENERAL_DATA.NAME);
    setTbody(props.CONTACT_PERSON);
    setTbodyDETAILS_OF_USER(props.CONTACT_PERSON?.DETAILS_OF_USER);
    setTbodyVENDOR(props.CONTACT_PERSON?.VENDOR);
    setTbodyVENDOR_CONTACT_PERSON(props.CONTACT_PERSON?.VENDOR_CONTACT_PERSON);
    setTbodyPROMOTER(props.CONTACT_PERSON?.PROMOTER);
    setTbodyDIRECTOR_PARTNER_PROPRIETOR(
      props.CONTACT_PERSON?.DIRECTOR_PARTNER_PROPRIETOR
    );
  }, [props.CONTACT_PERSON]);

  const saveContactPersonData = () => {
    props.setContactPersonAction({
      DETAILS_OF_USER: TbodyDETAILS_OF_USER,
      VENDOR: TbodyVENDOR,
      VENDOR_CONTACT_PERSON: TbodyVENDOR_CONTACT_PERSON,
      PROMOTER: TbodyPROMOTER,
      DIRECTOR_PARTNER_PROPRIETOR: TbodyDIRECTOR_PARTNER_PROPRIETOR,
    });
  };

  const [Vendors_array, setVendors_array] = useState([
    {
      HEADING: "Details Of The User/Concern Person",
      KEY: "DETAILS_OF_USER",
    },
    {
      HEADING: "Vendor",
      KEY: "VENDOR",
    },
    {
      HEADING: "Vendor Contact Person",
      KEY: "VENDOR_CONTACT_PERSON",
    },
    {
      HEADING: "Promoter",
      KEY: "PROMOTER",
    },
    {
      HEADING: "Director/Partenr/Proprietor'S Name",
      KEY: "DIRECTOR_PARTNER_PROPRIETOR",
    },
  ]);
  const SubmitVendorForm = () => {

    console.log("props.GENERALa,dnaishdbhsajbd _DATA", props.GENERAL_DATA);
    // console.log(props.);
    // console.log(props.GENERAL_DATA);
    // console.log(props.GENERAL_DATA);


    // if(props.GENERAL_DATA?.EMAIL==undefined || props.GENERAL_DATA?.EMAIL==""){
    //   cogoToast.warning("Email ID is required")
    // }
    // else if(props.GENERAL_DATA?.COUNTRY?.value==undefined || props.GENERAL_DATA?.COUNTRY?.value==""){
    //   cogoToast.warning("Country is required")
      
    // }
    // else if(props.GENERAL_DATA.CITY==undefined  ||props.GENERAL_DATA.CITY== "" ){
    //   cogoToast.warning("City is required")
    // }
    // else if(props.GENERAL_DATA.STATE?.value==undefined || props.GENERAL_DATA.STATE?.value==""){
    //   cogoToast.warning("State is required")
      
    // }
    // else if(props.GENERAL_DATA?.ADDRESS_LINE_1==undefined || props.GENERAL_DATA?.ADDRESS_LINE_1==""){
    //   cogoToast.warning("Address is required")
    // }
    // else if(props.GENERAL_DATA?.PINCODE==undefined || props.GENERAL_DATA?.PINCODE==""){
    //   cogoToast.warning("Pin code is required")
      
    // }
    // else if(props.GENERAL_DATA?.BUSINESS_ROLE?.value==undefined || props.GENERAL_DATA?.BUSINESS_ROLE?.value==""){
    //   cogoToast.warning("Business role is required")
      
    // }
    // else if (
    //   (props.TAX_DATA?.GST_NUMBER == undefined ||
    //     props.TAX_DATA?.GST_NUMBER == "") &&
    //   props.TAX_DATA?.IS_GST_APPLICABLE!="NA"
    // ) {
    //   cogoToast.warning("GST Number is required");
    // }
  


    let VendorFormData = new FormData();

    if (
      props.GENERAL_DATA.length == 0 &&
      props.TAX_DATA.length == 0 &&
      props.BANK_DETAILS_DATA.length == 0 &&
      props.COMPANY_DATA.length == 0 && 
      TbodyDETAILS_OF_USER.length == 0 
    ){

    }
      console.log(
        "props.GENERAL_DATA?.APPLICATION_ID",
        props.GENERAL_DATA?.APPLICATION_ID
      );

    // VendorFormData.append("NAME", props.GENERAL_DATA.NAME);
    VendorFormData.set("APPLICATION_ID", props.GENERAL_DATA?.APPLICATION_ID);
    VendorFormData.set("NAME", props.GENERAL_DATA?.NAME!=undefined? props.GENERAL_DATA?.NAME :"");
          VendorFormData.set("APPROVAL_FLAG", props.showDrawerAppBar==true? "3":"2");
    VendorFormData.set("EMAIL", props.GENERAL_DATA?.EMAIL!=undefined ?props.GENERAL_DATA?.EMAIL :"");
    VendorFormData.set("VENDOR_GROUP", props.GENERAL_DATA?.VENDOR_GROUP!=undefined ?props.GENERAL_DATA?.VENDOR_GROUP :"");
    VendorFormData.set("COUNTRY", props.GENERAL_DATA?.COUNTRY?.value!=undefined?props.GENERAL_DATA?.COUNTRY?.value :"");
    VendorFormData.set("CITY", props.GENERAL_DATA.CITY!=undefined?props.GENERAL_DATA.CITY:"");
    VendorFormData.set("STATE", props.GENERAL_DATA.STATE?.value!=undefined?props.GENERAL_DATA.STATE?.value:"");
    VendorFormData.set("ADDRESS_LINE_1", props.GENERAL_DATA?.ADDRESS_LINE_1!=undefined?props.GENERAL_DATA?.ADDRESS_LINE_1 :"");
    VendorFormData.set("ADDRESS_LINE_2", props.GENERAL_DATA?.ADDRESS_LINE_2!=undefined?props.GENERAL_DATA?.ADDRESS_LINE_2 :"");
    VendorFormData.set("ADDRESS_LINE_3", props.GENERAL_DATA?.ADDRESS_LINE_3!=undefined? props.GENERAL_DATA?.ADDRESS_LINE_3:"");
    VendorFormData.set("PINCODE", props.GENERAL_DATA?.PINCODE!=undefined?props.GENERAL_DATA?.PINCODE:"");
    VendorFormData.set("DISTRICT", props.GENERAL_DATA?.DISTRICT!=undefined? props.GENERAL_DATA?.DISTRICT:"");
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
    // VendorFormData.set("DMS", props.GENERAL_DATA?.PINCODE!=undefined?props.GENERAL_DATA?.PINCODE:"");
    VendorFormData.set("TIME_ZONE_MOBILE", props.GENERAL_DATA?.TIME_ZONE!=undefined ?props.GENERAL_DATA?.TIME_ZONE:"");
    VendorFormData.set("FAX_DETAILS", props.GENERAL_DATA?.FAX!=undefined ? props.GENERAL_DATA?.FAX:"");

    VendorFormData.set(
      "BUSINESS_ROLE",
      props.GENERAL_DATA?.BUSINESS_ROLE?.value!=undefined? props.GENERAL_DATA?.BUSINESS_ROLE?.value:""
    );
    VendorFormData.set(
      "TAX_DATA",
      JSON.stringify({
        GST: { GST_NUMBER: props.TAX_DATA?.GST_NUMBER!=undefined ? props.TAX_DATA?.GST_NUMBER :"" },
        PAN: { PAN_NUMBER: props.TAX_DATA?.PAN_NUMBER !=undefined ?props.TAX_DATA?.PAN_NUMBER  :""},
        CIN: { CIN_NUMBER: props.TAX_DATA?.CIN_NUMBER!=undefined ?props.TAX_DATA?.CIN_NUMBER :"" },
        MSME: { MSME_NUMBER: props.TAX_DATA?.MSME_NUMBER!=undefined? props.TAX_DATA?.MSME_NUMBER :"" },
        AADHAR: { AADHAR_NUMBER: props.TAX_DATA?.AADHAR_NUMBER!=undefined ? props.TAX_DATA?.AADHAR_NUMBER:"" },
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
        ACCOUNT_TYPE: props.BANK_DETAILS_DATA?.ACCOUNT_TYPE!=undefined ? props.BANK_DETAILS_DATA?.ACCOUNT_TYPE:"",
        BANK_ACCOUNT: props.BANK_DETAILS_DATA?.BANK_ACCOUNT!=undefined ?props.BANK_DETAILS_DATA?.BANK_ACCOUNT :"",
        ACCOUNT_HOLDER: props.BANK_DETAILS_DATA?.ACCOUNT_HOLDER!=undefined ?props.BANK_DETAILS_DATA?.ACCOUNT_HOLDER:"",
        BANK_COUNTRY: props.BANK_DETAILS_DATA?.BANK_COUNTRY!=undefined ?props.BANK_DETAILS_DATA?.BANK_COUNTRY :"",
        BANK_NAME: props.BANK_DETAILS_DATA?.BANK_NAME!=undefined?props.BANK_DETAILS_DATA?.BANK_NAME :"",
        BANK_KEY: props.BANK_DETAILS_DATA?.BANK_KEY!=undefined ?props.BANK_DETAILS_DATA?.BANK_KEY :"",
        BANK_CITY: props.BANK_DETAILS_DATA?.BANK_CITY!=undefined? props.BANK_DETAILS_DATA?.BANK_CITY: "",
        MODE_OF_PAYMENT: props.BANK_DETAILS_DATA?.MODE_OF_PAYMENT?.value!=undefined ? props.BANK_DETAILS_DATA?.MODE_OF_PAYMENT?.value :"",
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
      "COMPANY_DATA",
      JSON.stringify({
        CURRENCY: props.COMPANY_DATA?.CURRENCY?.value!=undefined ? props.COMPANY_DATA?.CURRENCY?.value :"",
        TURNOVER: props.COMPANY_DATA?.TURNOVER!=undefined?props.COMPANY_DATA?.TURNOVER :"",
        COMPANY_CODE: props.GENERAL_DATA?.COMPANY_CODE!=undefined ?props.GENERAL_DATA?.COMPANY_CODE :"",
        PAYMENT_TERM: props.COMPANY_DATA?.PAYMENT_TERM!=undefined ? props.COMPANY_DATA?.PAYMENT_TERM :"",
        INCO_TERM_1: props.COMPANY_DATA?.INCO_TERM_1?.value!=undefined? props.COMPANY_DATA?.INCO_TERM_1?.value: "",
        INCO_TERM_2: props.COMPANY_DATA?.INCO_TERM_2?.value!=undefined? props.COMPANY_DATA?.INCO_TERM_2?.value:"",
        PROCUREMENT_PLANT: props.COMPANY_DATA?.PROCUREMENT_PLANT!=undefined?props.COMPANY_DATA?.PROCUREMENT_PLANT :"",
      })
    );
    VendorFormData.set(
      "CONTACT_PERSON",
      JSON.stringify({
        DETAILS_OF_USER: {
          NAME: TbodyDETAILS_OF_USER?.NAME,
          ADDRESS: TbodyDETAILS_OF_USER?.ADDRESS,
          GENDER: TbodyDETAILS_OF_USER?.GENDER,
          BIRTH_DATE: TbodyDETAILS_OF_USER?.BIRTH_DATE,
          BIRTH_MONTH: TbodyDETAILS_OF_USER?.BIRTH_MONTH,
          EMAIL: TbodyDETAILS_OF_USER?.EMAIL,
          MOBILE: TbodyDETAILS_OF_USER?.MOBILE,
          LANDLINE: TbodyDETAILS_OF_USER?.LANDLINE,
          DESIGNATION: TbodyDETAILS_OF_USER?.DESIGNATION,
        },
        VENDOR: {
          NAME: TbodyVENDOR?.NAME,
          ADDRESS: TbodyVENDOR?.ADDRESS,
          GENDER: TbodyVENDOR?.GENDER,
          BIRTH_DATE: TbodyVENDOR?.BIRTH_DATE,
          BIRTH_MONTH: TbodyVENDOR?.BIRTH_MONTH,
          EMAIL: TbodyVENDOR?.EMAIL,
          MOBILE: TbodyVENDOR?.MOBILE,
          LANDLINE: TbodyVENDOR?.LANDLINE,
          DESIGNATION: TbodyVENDOR?.DESIGNATION,
        },
        VENDOR_CONTACT_PERSON: {
          NAME: TbodyVENDOR_CONTACT_PERSON?.NAME,
          ADDRESS: TbodyVENDOR_CONTACT_PERSON?.ADDRESS,
          GENDER: TbodyVENDOR_CONTACT_PERSON?.GENDER,
          BIRTH_DATE: TbodyVENDOR_CONTACT_PERSON?.BIRTH_DATE,
          BIRTH_MONTH: TbodyVENDOR_CONTACT_PERSON?.BIRTH_MONTH,
          EMAIL: TbodyVENDOR_CONTACT_PERSON?.EMAIL,
          MOBILE: TbodyVENDOR_CONTACT_PERSON?.MOBILE,
          LANDLINE: TbodyVENDOR_CONTACT_PERSON?.LANDLINE,
          DESIGNATION: TbodyVENDOR_CONTACT_PERSON?.DESIGNATION,
        },
        PROMOTER: {
          NAME: TbodyPROMOTER?.NAME,
          ADDRESS: TbodyPROMOTER?.ADDRESS,
          GENDER: TbodyPROMOTER?.GENDER,
          BIRTH_DATE: TbodyPROMOTER?.BIRTH_DATE,
          BIRTH_MONTH: TbodyPROMOTER?.BIRTH_MONTH,
          EMAIL: TbodyPROMOTER?.EMAIL,
          MOBILE: TbodyPROMOTER?.MOBILE,
          LANDLINE: TbodyPROMOTER?.LANDLINE,
          DESIGNATION: TbodyPROMOTER?.DESIGNATION,
        },
        DIRECTOR_PARTNER_PROPRIETOR: {
          NAME: TbodyDIRECTOR_PARTNER_PROPRIETOR?.NAME,
          ADDRESS: TbodyDIRECTOR_PARTNER_PROPRIETOR?.ADDRESS,
          GENDER: TbodyDIRECTOR_PARTNER_PROPRIETOR?.GENDER,
          BIRTH_DATE: TbodyDIRECTOR_PARTNER_PROPRIETOR?.BIRTH_DATE,
          BIRTH_MONTH: TbodyDIRECTOR_PARTNER_PROPRIETOR?.BIRTH_MONTH,
          EMAIL: TbodyDIRECTOR_PARTNER_PROPRIETOR?.EMAIL,
          MOBILE: TbodyDIRECTOR_PARTNER_PROPRIETOR?.MOBILE,
          LANDLINE: TbodyDIRECTOR_PARTNER_PROPRIETOR?.LANDLINE,
          DESIGNATION: TbodyDIRECTOR_PARTNER_PROPRIETOR?.DESIGNATION,
        },
      })
    );
    VendorFormData.set("SUBMITTED_FLAG", true);

    console.log("Submitting");
    axios
      .post(AXIOS.axiosUrl + AXIOS.vendorCreate, VendorFormData)
      .then((response) => {
        console.log(response.data);
        cogoToast.success("Application Submitted successfully")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleVendorInput = (text, index, key) => {
    let TempTBody = [...Tbody];

    // console.log("TempTBody", TempTBody[Vendors_array[index].KEY][index].key);
    TempTBody["VENDOR"][key] = text;
    setTbody(TempTBody);
  };

  useEffect(() => {
    console.log("Tbody", Tbody);
  }, [Tbody]);

  return (
    <>
      <Box
        sx={{
          display: "flex",

          justifyContent: "flex-end",
        }}
      >
        <Button variant="text" color="primary" sx={{ marginRight: 5 }}>
          Clear Draft
        </Button>
        <Button
          variant="outlined"
          color="primary"
          sx={{ marginRight: 5 }}
          onClick={() => {
            saveContactPersonData();
          }}
        >
          Save
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            SubmitVendorForm();
          }}
        >
          Submit
        </Button>
      </Box>
      {/* {Vendors_array.map((val,index)=> */}
      <Box
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
        className="card-background"
      >
        <h3
          style={{
            color: COLORS.white,
          }}
        >
          {" "}
          Details Of The User/Concern Person
        </h3>
        <Grid container p={4} spacing={2} my={1}>
          <Grid xs={6} md={0} item>
            <Label LabelText="Name*" />
            <CustomInput
              Placeholder="Name"
              Value={TbodyDETAILS_OF_USER?.NAME}
              onChange={(e) => {
                setTbodyDETAILS_OF_USER((prevState) => ({
                  ...prevState,
                  NAME: e.target.value,
                }));
              }}
            />

            <Label LabelText="Address" />
            <CustomInput
              Placeholder="Address"
              Value={TbodyDETAILS_OF_USER?.ADDRESS}
              onChange={(e) => {
                setTbodyDETAILS_OF_USER((prevState) => ({
                  ...prevState,
                  ADDRESS: e.target.value,
                }));
                // setTbody((prev) => ({
                //   ...prev,
                //   DETAILS_OF_USER: TbodyDETAILS_OF_USER,
                // }));
              }}
            />

            <Label LabelText="Gender*" />
            <CustomDropdown
              Label="Gender"
              Options={GenderList}
              Value={TbodyDETAILS_OF_USER?.GENDER}
              OnChange={(e) => {
                setTbodyDETAILS_OF_USER((prevState) => ({
                  ...prevState,
                  GENDER: e,
                }));
                // setTbody((prev) => ({
                //   ...prev,
                //   DETAILS_OF_USER: TbodyDETAILS_OF_USER,
                // }));
              }}
            />

            <Label LabelText="DOB*" />
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Box
                sx={{
                  // display: "flex",
                  width: "100%",
                  mr: 1,
                }}
              >
                <CustomDropdown
                  Label="Date"
                  Options={MonthArray}
                  Value={TbodyDETAILS_OF_USER?.BIRTH_DATE}
                  OnChange={(e) => {
                    setTbodyDETAILS_OF_USER((prevState) => ({
                      ...prevState,
                      BIRTH_DATE: e,
                    }));
                    // setTbody((prev) => ({
                    //   ...prev,
                    //   DETAILS_OF_USER: TbodyDETAILS_OF_USER,
                    // }));
                  }}
                />
              </Box>
              <Box
                sx={{
                  // display: "flex",
                  width: "100%",
                  ml: 1,
                }}
              >
                <CustomDropdown
                  Label="Month"
                  Options={MonthArray}
                  Value={TbodyDETAILS_OF_USER?.BIRTH_MONTH}
                  OnChange={(e) => {
                    setTbodyDETAILS_OF_USER((prevState) => ({
                      ...prevState,
                      BIRTH_MONTH: e,
                    }));
                    // setTbody((prev) => ({
                    //   ...prev,
                    //   DETAILS_OF_USER: TbodyDETAILS_OF_USER,
                    // }));
                  }}
                />
              </Box>
            </Box>
          </Grid>
          <Grid xs={6} md={0} item>
            <Label LabelText="Email*" />
            <CustomInput
              Placeholder="Email"
              Type={"email"}
              Value={TbodyDETAILS_OF_USER?.EMAIL}
              onChange={(e) => {
                setTbodyDETAILS_OF_USER((prevState) => ({
                  ...prevState,
                  EMAIL: e.target.value,
                }));
                // setTbody((prev) => ({
                //   ...prev,
                //   DETAILS_OF_USER: TbodyDETAILS_OF_USER,
                // }));
              }}
            />
            <Label LabelText="Mobile*" />
            <CustomInput
              Placeholder="Mobile"
              Value={TbodyDETAILS_OF_USER?.MOBILE}
              onChange={(e) => {
                setTbodyDETAILS_OF_USER((prevState) => ({
                  ...prevState,
                  MOBILE: e.target.value,
                }));
                // setTbody((prev) => ({
                //   ...prev,
                //   DETAILS_OF_USER: TbodyDETAILS_OF_USER,
                // }));
              }}
            />
            <Label LabelText="Landline" />
            <CustomInput
              Placeholder="Landline"
              Value={TbodyDETAILS_OF_USER?.LANDLINE}
              onChange={(e) => {
                setTbodyDETAILS_OF_USER((prevState) => ({
                  ...prevState,
                  LANDLINE: e.target.value,
                }));
                // setTbody((prev) => ({
                //   ...prev,
                //   DETAILS_OF_USER: TbodyDETAILS_OF_USER,
                // }));
              }}
            />

            <Label LabelText="Designation" />
            <CustomInput
              Placeholder="Designation"
              Value={TbodyDETAILS_OF_USER?.DESIGNATION}
              onChange={(e) => {
                setTbodyDETAILS_OF_USER((prevState) => ({
                  ...prevState,
                  DESIGNATION: e.target.value,
                }));
                // setTbody((prev) => ({
                //   ...prev,
                //   DETAILS_OF_USER: TbodyDETAILS_OF_USER,
                // }));
              }}
            />
          </Grid>
        </Grid>
      </Box>
      {/* )} */}

      <Box
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
        className="card-background"
      >
        <h3
          style={{
            color: COLORS.white,
          }}
        >
          Vendor
        </h3>
        <Grid container p={4} spacing={2} my={1}>
          <Grid xs={6} md={0} item>
            <Label LabelText="Name*" />
            <CustomInput
              Placeholder="Name"
              Value={TbodyVENDOR?.NAME}
              onChange={(e) => {
                setTbodyVENDOR((prevState) => ({
                  ...prevState,
                  NAME: e.target.value,
                }));
                // setTbody((prev) => ({
                //   ...prev,
                //   VENDOR: TbodyVENDOR,
                // }));
              }}
            />

            <Label LabelText="Address" />
            <CustomInput
              Placeholder="Address"
              Value={TbodyVENDOR?.ADDRESS}
              onChange={(e) => {
                setTbodyVENDOR((prevState) => ({
                  ...prevState,
                  ADDRESS: e.target.value,
                }));
                // setTbody((prev) => ({
                //   ...prev,
                //   VENDOR: TbodyVENDOR,
                // }));
              }}
            />

            <Label LabelText="Gender*" />
            <CustomDropdown
              Label="Gender"
              Options={GenderList}
              Value={TbodyVENDOR?.GENDER}
              OnChange={(e) => {
                setTbodyVENDOR((prevState) => ({
                  ...prevState,
                  GENDER: e,
                }));
                // setTbody((prev) => ({
                //   ...prev,
                //   VENDOR: TbodyVENDOR,
                // }));
              }}
            />

            <Label LabelText="DOB*" />
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Box
                sx={{
                  // display: "flex",
                  width: "100%",
                  mr: 1,
                }}
              >
                <CustomDropdown
                  Label="Date"
                  Options={MonthArray}
                  Value={TbodyVENDOR?.BIRTH_DATE}
                  OnChange={(e) => {
                    setTbodyVENDOR((prevState) => ({
                      ...prevState,
                      BIRTH_DATE: e,
                    }));
                    // setTbody((prev) => ({
                    //   ...prev,
                    //   VENDOR: TbodyVENDOR,
                    // }));
                  }}
                />
              </Box>
              <Box
                sx={{
                  // display: "flex",
                  width: "100%",
                  ml: 1,
                }}
              >
                <CustomDropdown
                  Label="Month"
                  Options={MonthArray}
                  Value={TbodyVENDOR?.BIRTH_MONTH}
                  OnChange={(e) => {
                    setTbodyVENDOR((prevState) => ({
                      ...prevState,
                      BIRTH_MONTH: e,
                    }));
                    // setTbody((prev) => ({
                    //   ...prev,
                    //   VENDOR: TbodyVENDOR,
                    // }));
                  }}
                />
              </Box>
            </Box>
          </Grid>
          <Grid xs={6} md={0} item>
            <Label LabelText="Email*" />
            <CustomInput
              Placeholder="Email"
              Value={TbodyVENDOR?.EMAIL}
              onChange={(e) => {
                setTbodyVENDOR((prevState) => ({
                  ...prevState,
                  EMAIL: e.target.value,
                }));
                // setTbody((prev) => ({
                //   ...prev,
                //   VENDOR: TbodyVENDOR,
                // }));
              }}
            />
            <Label LabelText="Mobile*" />
            <CustomInput
              Placeholder="Mobile"
              Value={TbodyVENDOR?.MOBILE}
              onChange={(e) => {
                setTbodyVENDOR((prevState) => ({
                  ...prevState,
                  MOBILE: e.target.value,
                }));
                // setTbody((prev) => ({
                //   ...prev,
                //   VENDOR: TbodyVENDOR,
                // }));
              }}
            />
            <Label LabelText="Landline" />
            <CustomInput
              Placeholder="Landline"
              Value={TbodyVENDOR?.LANDLINE}
              onChange={(e) => {
                setTbodyVENDOR((prevState) => ({
                  ...prevState,
                  LANDLINE: e.target.value,
                }));
                // setTbody((prev) => ({
                //   ...prev,
                //   VENDOR: TbodyVENDOR,
                // }));
              }}
            />

            <Label LabelText="Designation" />
            <CustomInput
              Placeholder="Designation"
              Value={TbodyVENDOR?.DESIGNATION}
              onChange={(e) => {
                setTbodyVENDOR((prevState) => ({
                  ...prevState,
                  DESIGNATION: e.target.value,
                }));
                // setTbody((prev) => ({
                //   ...prev,
                //   VENDOR: TbodyVENDOR,
                // }));
              }}
            />
          </Grid>
        </Grid>
      </Box>
      <Box
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
        className="card-background"
      >
        <h3
          style={{
            color: COLORS.white,
          }}
        >
          Vendor Contact Person
        </h3>
        <Grid container p={4} spacing={2} my={1}>
          <Grid xs={6} md={0} item>
            <Label LabelText="Name*" />
            <CustomInput
              Placeholder="Name"
              Value={TbodyVENDOR_CONTACT_PERSON?.NAME}
              onChange={(e) => {
                setTbodyVENDOR_CONTACT_PERSON((prevState) => ({
                  ...prevState,
                  NAME: e.target.value,
                }));
                // setTbody((prev) => ({
                //   ...prev,
                //   VENDOR_CONTACT_PERSON: TbodyVENDOR_CONTACT_PERSON,
                // }));
              }}
            />

            <Label LabelText="Address" />
            <CustomInput
              Placeholder="Address"
              Value={TbodyVENDOR_CONTACT_PERSON?.ADDRESS}
              onChange={(e) => {
                setTbodyVENDOR_CONTACT_PERSON((prevState) => ({
                  ...prevState,
                  ADDRESS: e.target.value,
                }));
                // setTbody((prev) => ({
                //   ...prev,
                //   VENDOR_CONTACT_PERSON: TbodyVENDOR_CONTACT_PERSON,
                // }));
              }}
            />

            <Label LabelText="Gender*" />
            <CustomDropdown
              Label="Gender"
              Options={GenderList}
              Value={TbodyVENDOR_CONTACT_PERSON?.GENDER}
              OnChange={(e) => {
                setTbodyVENDOR_CONTACT_PERSON((prevState) => ({
                  ...prevState,
                  GENDER: e,
                }));
                // setTbody((prev) => ({
                //   ...prev,
                //   VENDOR_CONTACT_PERSON: TbodyVENDOR_CONTACT_PERSON,
                // }));
              }}
            />

            <Label LabelText="DOB*" />
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Box
                sx={{
                  // display: "flex",
                  width: "100%",
                  mr: 1,
                }}
              >
                <CustomDropdown
                  Label="Date"
                  Options={MonthArray}
                  Value={TbodyVENDOR_CONTACT_PERSON?.BIRTH_DATE}
                  OnChange={(e) => {
                    setTbodyVENDOR_CONTACT_PERSON((prevState) => ({
                      ...prevState,
                      BIRTH_DATE: e,
                    }));
                    // setTbody((prev) => ({
                    //   ...prev,
                    //   VENDOR_CONTACT_PERSON: TbodyVENDOR_CONTACT_PERSON,
                    // }));
                  }}
                />
              </Box>
              <Box
                sx={{
                  // display: "flex",
                  width: "100%",
                  ml: 1,
                }}
              >
                <CustomDropdown
                  Label="Month"
                  Options={MonthArray}
                  Value={TbodyVENDOR_CONTACT_PERSON?.BIRTH_MONTH}
                  OnChange={(e) => {
                    setTbodyVENDOR_CONTACT_PERSON((prevState) => ({
                      ...prevState,
                      BIRTH_MONTH: e,
                    }));
                    // setTbody((prev) => ({
                    //   ...prev,
                    //   VENDOR_CONTACT_PERSON: TbodyVENDOR_CONTACT_PERSON,
                    // }));
                  }}
                />
              </Box>
            </Box>
          </Grid>
          <Grid xs={6} md={0} item>
            <Label LabelText="Email*" />
            <CustomInput
              Placeholder="Email"
              Value={TbodyVENDOR_CONTACT_PERSON?.EMAIL}
              onChange={(e) => {
                setTbodyVENDOR_CONTACT_PERSON((prevState) => ({
                  ...prevState,
                  EMAIL: e.target.value,
                }));
                // setTbody((prev) => ({
                //   ...prev,
                //   VENDOR: TbodyVENDOR,
                // }));
              }}
            />
            <Label LabelText="Mobile*" />
            <CustomInput
              Placeholder="Mobile"
              Value={TbodyVENDOR_CONTACT_PERSON?.MOBILE}
              onChange={(e) => {
                setTbodyVENDOR_CONTACT_PERSON((prevState) => ({
                  ...prevState,
                  MOBILE: e.target.value,
                }));
                // setTbody((prev) => ({
                //   ...prev,
                //   VENDOR_CONTACT_PERSON: TbodyVENDOR_CONTACT_PERSON,
                // }));
              }}
            />
            <Label LabelText="Landline" />
            <CustomInput
              Placeholder="Landline"
              Value={TbodyVENDOR_CONTACT_PERSON?.LANDLINE}
              onChange={(e) => {
                setTbodyVENDOR_CONTACT_PERSON((prevState) => ({
                  ...prevState,
                  LANDLINE: e.target.value,
                }));
                // setTbody((prev) => ({
                //   ...prev,
                //   VENDOR_CONTACT_PERSON: TbodyVENDOR_CONTACT_PERSON,
                // }));
              }}
            />

            <Label LabelText="Designation" />
            <CustomInput
              Placeholder="Designation"
              Value={TbodyVENDOR_CONTACT_PERSON?.DESIGNATION}
              onChange={(e) => {
                setTbodyVENDOR_CONTACT_PERSON((prevState) => ({
                  ...prevState,
                  DESIGNATION: e.target.value,
                }));
                // setTbody((prev) => ({
                //   ...prev,
                //   VENDOR_CONTACT_PERSON: TbodyVENDOR_CONTACT_PERSON,
                // }));
              }}
            />
          </Grid>
        </Grid>
      </Box>
      <Box
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
        className="card-background"
      >
        <h3
          style={{
            color: COLORS.white,
          }}
        >
          Promoter
        </h3>
        <Grid container p={4} spacing={2} my={1}>
          <Grid xs={6} md={0} item>
            <Label LabelText="Name*" />
            <CustomInput
              Placeholder="Name"
              Value={TbodyPROMOTER?.NAME}
              onChange={(e) => {
                setTbodyPROMOTER((prevState) => ({
                  ...prevState,
                  NAME: e.target.value,
                }));
                // setTbody((prev) => ({
                //   ...prev,
                //   PROMOTER: TbodyPROMOTER,
                // }));
              }}
            />

            <Label LabelText="Address" />
            <CustomInput
              Placeholder="Address"
              Value={TbodyPROMOTER?.ADDRESS}
              onChange={(e) => {
                setTbodyPROMOTER((prevState) => ({
                  ...prevState,
                  ADDRESS: e.target.value,
                }));
                // setTbody((prev) => ({
                //   ...prev,
                //   PROMOTER: TbodyPROMOTER,
                // }));
              }}
            />

            <Label LabelText="Gender*" />
            <CustomDropdown
              Label="Gender"
              Options={GenderList}
              Value={TbodyPROMOTER?.GENDER}
              OnChange={(e) => {
                setTbodyPROMOTER((prevState) => ({
                  ...prevState,
                  GENDER: e,
                }));
                // setTbody((prev) => ({
                //   ...prev,
                //   PROMOTER: TbodyPROMOTER,
                // }));
              }}
            />

            <Label LabelText="DOB*" />
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Box
                sx={{
                  // display: "flex",
                  width: "100%",
                  mr: 1,
                }}
              >
                <CustomDropdown
                  Label="Date"
                  Options={MonthArray}
                  Value={TbodyPROMOTER?.BIRTH_DATE}
                  OnChange={(e) => {
                    setTbodyPROMOTER((prevState) => ({
                      ...prevState,
                      BIRTH_DATE: e,
                    }));
                    // setTbody((prev) => ({
                    //   ...prev,
                    //   PROMOTER: TbodyPROMOTER,
                    // }));
                  }}
                />
              </Box>
              <Box
                sx={{
                  // display: "flex",
                  width: "100%",
                  ml: 1,
                }}
              >
                <CustomDropdown
                  Label="Month"
                  Options={MonthArray}
                  Value={TbodyPROMOTER?.BIRTH_MONTH}
                  OnChange={(e) => {
                    setTbodyPROMOTER((prevState) => ({
                      ...prevState,
                      BIRTH_MONTH: e,
                    }));
                    // setTbody((prev) => ({
                    //   ...prev,
                    //   PROMOTER: TbodyPROMOTER,
                    // }));
                  }}
                />
              </Box>
            </Box>
          </Grid>
          <Grid xs={6} md={0} item>
            <Label LabelText="Email*" />
            <CustomInput
              Placeholder="Email"
              Value={TbodyPROMOTER?.EMAIL}
              onChange={(e) => {
                setTbodyPROMOTER((prevState) => ({
                  ...prevState,
                  EMAIL: e.target.value,
                }));
                // setTbody((prev) => ({
                //   ...prev,
                //   PROMOTER: TbodyPROMOTER,
                // }));
              }}
            />
            <Label LabelText="Mobile*" />
            <CustomInput
              Placeholder="Mobile"
              Value={TbodyPROMOTER?.MOBILE}
              onChange={(e) => {
                setTbodyPROMOTER((prevState) => ({
                  ...prevState,
                  MOBILE: e.target.value,
                }));
                // setTbody((prev) => ({
                //   ...prev,
                //   PROMOTER: TbodyPROMOTER,
                // }));
              }}
            />
            <Label LabelText="Landline" />
            <CustomInput
              Placeholder="Landline"
              Value={TbodyPROMOTER?.LANDLINE}
              onChange={(e) => {
                setTbodyPROMOTER((prevState) => ({
                  ...prevState,
                  LANDLINE: e.target.value,
                }));
                // setTbody((prev) => ({
                //   ...prev,
                //   PROMOTER: TbodyPROMOTER,
                // }));
              }}
            />

            <Label LabelText="Designation" />
            <CustomInput
              Placeholder="Designation"
              Value={TbodyPROMOTER?.DESIGNATION}
              onChange={(e) => {
                setTbodyPROMOTER((prevState) => ({
                  ...prevState,
                  DESIGNATION: e.target.value,
                }));
                // setTbody((prev) => ({
                //   ...prev,
                //   PROMOTER: TbodyPROMOTER,
                // }));
              }}
            />
          </Grid>
        </Grid>
      </Box>
      <Box
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
        className="card-background"
      >
        <h3
          style={{
            color: COLORS.white,
          }}
        >
          Director/Partenr/Proprietor'S Name
        </h3>
        <Grid container p={4} spacing={2} my={1}>
          <Grid xs={6} md={0} item>
            <Label LabelText="Name*" />
            <CustomInput
              Placeholder="Name"
              Value={TbodyDIRECTOR_PARTNER_PROPRIETOR?.NAME}
              onChange={(e) => {
                setTbodyDIRECTOR_PARTNER_PROPRIETOR((prevState) => ({
                  ...prevState,
                  NAME: e.target.value,
                }));
                // setTbody((prev) => ({
                //   ...prev,
                //   DIRECTOR_PARTNER_PROPRIETOR: TbodyDIRECTOR_PARTNER_PROPRIETOR,
                // }));
              }}
            />

            <Label LabelText="Address" />
            <CustomInput
              Placeholder="Address"
              Value={TbodyDIRECTOR_PARTNER_PROPRIETOR?.ADDRESS}
              onChange={(e) => {
                setTbodyDIRECTOR_PARTNER_PROPRIETOR((prevState) => ({
                  ...prevState,
                  ADDRESS: e.target.value,
                }));
                // setTbody((prev) => ({
                //   ...prev,
                //   DIRECTOR_PARTNER_PROPRIETOR: TbodyDIRECTOR_PARTNER_PROPRIETOR,
                // }));
              }}
            />

            <Label LabelText="Gender*" />
            <CustomDropdown
              Label="Gender"
              Options={GenderList}
              Value={TbodyDIRECTOR_PARTNER_PROPRIETOR?.GENDER}
              OnChange={(e) => {
                setTbodyDIRECTOR_PARTNER_PROPRIETOR((prevState) => ({
                  ...prevState,
                  GENDER: e,
                }));
                // setTbody((prev) => ({
                //   ...prev,
                //   DIRECTOR_PARTNER_PROPRIETOR: TbodyDIRECTOR_PARTNER_PROPRIETOR,
                // }));
              }}
            />

            <Label LabelText="DOB*" />
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Box
                sx={{
                  // display: "flex",
                  width: "100%",
                  mr: 1,
                }}
              >
                <CustomDropdown
                  Label="Date"
                  Options={MonthArray}
                  Value={TbodyDIRECTOR_PARTNER_PROPRIETOR?.BIRTH_DATE}
                  OnChange={(e) => {
                    setTbodyDIRECTOR_PARTNER_PROPRIETOR((prevState) => ({
                      ...prevState,
                      BIRTH_DATE: e,
                    }));
                    setTbody((prev) => ({
                      ...prev,
                      DIRECTOR_PARTNER_PROPRIETOR:
                        TbodyDIRECTOR_PARTNER_PROPRIETOR,
                    }));
                  }}
                />
              </Box>
              <Box
                sx={{
                  // display: "flex",
                  width: "100%",
                  ml: 1,
                }}
              >
                <CustomDropdown
                  Label="Month"
                  Options={MonthArray}
                  Value={TbodyDIRECTOR_PARTNER_PROPRIETOR?.BIRTH_MONTH}
                  OnChange={(e) => {
                    setTbodyDIRECTOR_PARTNER_PROPRIETOR((prevState) => ({
                      ...prevState,
                      BIRTH_MONTH: e,
                    }));
                    // setTbody((prev) => ({
                    //   ...prev,
                    //   DIRECTOR_PARTNER_PROPRIETOR:
                    //     TbodyDIRECTOR_PARTNER_PROPRIETOR,
                    // }));
                  }}
                />
              </Box>
            </Box>
          </Grid>
          <Grid xs={6} md={0} item>
            <Label LabelText="Email*" />
            <CustomInput
              Placeholder="Email"
              Value={TbodyDIRECTOR_PARTNER_PROPRIETOR?.EMAIL}
              onChange={(e) => {
                setTbodyDIRECTOR_PARTNER_PROPRIETOR((prevState) => ({
                  ...prevState,
                  EMAIL: e.target.value,
                }));
                // setTbody((prev) => ({
                //   ...prev,
                //   DIRECTOR_PARTNER_PROPRIETOR: TbodyDIRECTOR_PARTNER_PROPRIETOR,
                // }));
              }}
            />
            <Label LabelText="Mobile*" />
            <CustomInput
              Placeholder="Mobile"
              Value={TbodyDIRECTOR_PARTNER_PROPRIETOR?.MOBILE}
              onChange={(e) => {
                setTbodyDIRECTOR_PARTNER_PROPRIETOR((prevState) => ({
                  ...prevState,
                  MOBILE: e.target.value,
                }));
                // setTbody((prev) => ({
                //   ...prev,
                //   DIRECTOR_PARTNER_PROPRIETOR: TbodyDIRECTOR_PARTNER_PROPRIETOR,
                // }));
              }}
            />
            <Label LabelText="Landline" />
            <CustomInput
              Placeholder="Landline"
              Value={TbodyDIRECTOR_PARTNER_PROPRIETOR?.LANDLINE}
              onChange={(e) => {
                setTbodyDIRECTOR_PARTNER_PROPRIETOR((prevState) => ({
                  ...prevState,
                  LANDLINE: e.target.value,
                }));
                // setTbody((prev) => ({
                //   ...prev,
                //   DIRECTOR_PARTNER_PROPRIETOR: TbodyDIRECTOR_PARTNER_PROPRIETOR,
                // }));
              }}
            />

            <Label LabelText="Designation" />
            <CustomInput
              Placeholder="Designation"
              Value={TbodyDIRECTOR_PARTNER_PROPRIETOR?.DESIGNATION}
              onChange={(e) => {
                setTbodyDIRECTOR_PARTNER_PROPRIETOR((prevState) => ({
                  ...prevState,
                  DESIGNATION: e.target.value,
                }));
                // setTbody((prev) => ({
                //   ...prev,
                //   DIRECTOR_PARTNER_PROPRIETOR: TbodyDIRECTOR_PARTNER_PROPRIETOR,
                // }));
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </>
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
  setContactPersonAction,
})(ContactPerson);
