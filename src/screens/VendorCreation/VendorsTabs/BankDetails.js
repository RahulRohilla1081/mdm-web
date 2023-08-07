import { Box, Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomDropdown from "../../../components/CustomDropdown/CustomDropdown";
import CustomInput from "../../../components/CustomInput/CustomInput";
import Label from "../../../components/Label/Label";

// import { setBankDetailsAction } from "../../../redux/action/vendorAction";

import { setBankDetailsAction } from "../../../redux/action/vendorAction";
import { connect } from "react-redux";

function BankDetails(props) {
  const [Tbody, setTbody] = useState([]);

  const ModeOfPaymentList = [
    {
      label: "Bank to Bank transfer",
      value: "Bank to Bank transfer",
    },
    {
      label: "Cheque",
      value: "Cheque",
    },
    {
      value: "Demand draft",
      label: "Demand draft",
    },
    {
      label: "Cash Payment",
      value: "Cash Payment",
    },
    {
      label: "Salary Hold",
      value: "Salary Hold",
    },
    {
      label: "NEFT Transfer",
      value: "NEFT Transfer",
    },
    {
      label: "RTGS Transfer",
      value: "RTGS Transfer",
    },
    {
      label: "Bank Transfer(FC)",
      value: "Bank Transfer(FC)",
    },
    {
      label: "TT PAYMENt/ LC Payment",
      value: "TT PAYMENt/ LC Payment",
    },
  ];


  const [dummyState,setDummyState]=useState([])

  useEffect(() => {
    setTbody(props.BANK_DETAILS_DATA);

    setDummyState(props.BANK_DETAILS_DATA)


    console.log("props.BANK_DETAILS_DATA", props.BANK_DETAILS_DATA);
  }, [props.BANK_DETAILS_DATA]);

  useEffect(() => {
    console.log("Tbodyad", Tbody.ACCOUNT_HOLDER);
  }, [Tbody]);

  const saveBankDetailsData = () => {
    // console.log(Tbody);
    props.setBankDetailsAction(Tbody);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        {/* <Button variant="text" color="primary" sx={{ marginRight: 5 }}>
          Clear Draft
        </Button> */}
        <Button
          variant="outlined"
          color="primary"
          sx={{ marginRight: 5 }}
          onClick={() => {
            saveBankDetailsData();
          }}
        >
          Save
        </Button>
        {/* <Button variant="contained" color="primary">
          Submit
        </Button> */}
      </Box>
      <Grid
        container
        p={4}
        spacing={2}
        my={4}
        sx={{
          boxShadow: "0 0 4px rgba(0,0,0,0.1)",
          borderRadius: 3,
          marginLeft: 0,
          width: "100%",
        }}
        className="card-background"
      >
        <Grid xs={6} md={0} item>
          {/* <Label LabelText="Bank Serial Number" />
          <CustomInput
            Placeholder="Bank Serial Number"
            value={Tbody?.BANK_SERIAL_NUMBER}
            onChange={(e) => {
              
              setTbody((prevState) => ({
                ...prevState,
                BANK_SERIAL_NUMBER: e.target.value,
              }));
            }}
          /> */}
          <Label LabelText="Account Type" />
          <CustomInput
            Placeholder="Account Type"
            Value={Tbody?.ACCOUNT_TYPE}
            onChange={(e) => {
              setTbody((prevState) => ({
                ...prevState,
                ACCOUNT_TYPE: e.target.value,
              }));
            }}
          />
          <Label LabelText="Bank Country" />
          <CustomInput
            Placeholder="Bank Country"
            Value={Tbody?.BANK_COUNTRY}
            onChange={(e) => {
              setTbody((prevState) => ({
                ...prevState,
                BANK_COUNTRY: e.target.value,
              }));
            }}
          />
          <Label LabelText="Bank Key(IFSC)" />
          <CustomInput
            Placeholder="Bank Key(IFSC)"
            Value={Tbody?.BANK_KEY}
            onChange={(e) => {
              setTbody((prevState) => ({
                ...prevState,
                BANK_KEY: e.target.value,
              }));
            }}
          />
          <Label LabelText="Supporting Documents" />
          <CustomInput
            Placeholder="Supporting Documents"
            Type="file"
            Value={Tbody?.DMS}
            onChange={(e) => {
              setTbody((prevState) => ({
                ...prevState,
                DMS: e.target.files[0],
              }));
            }}
          />
        </Grid>
        <Grid xs={6} md={0} item>
          <Label LabelText="Bank Account" />
          <CustomInput
            Placeholder="Bank Account"
            Value={Tbody?.BANK_ACCOUNT}
            onChange={(e) => {
              setTbody((prevState) => ({
                ...prevState,
                BANK_ACCOUNT: e.target.value,
              }));
            }}
          />
          <Label LabelText="Account Holder" />
          <CustomInput
            Placeholder="Account Holder"
            Value={Tbody?.ACCOUNT_HOLDER}
            onChange={(e) => {
              setTbody((prevState) => ({
                ...prevState,
                ACCOUNT_HOLDER: e.target.value,
              }));
            }}
          />
          <Label LabelText="Bank Name" />
          <CustomInput
            Placeholder="Bank Name"
            Value={Tbody?.BANK_NAME}
            onChange={(e) => {
              setTbody((prevState) => ({
                ...prevState,
                BANK_NAME: e.target.value,
              }));
            }}
          />
          <Label LabelText="Bank City" />
          <CustomInput
            Placeholder="Bank City"
            Value={Tbody?.BANK_CITY}
            onChange={(e) => {
              setTbody((prevState) => ({
                ...prevState,
                BANK_CITY: e.target.value,
              }));
            }}
          />
          <Label LabelText="Mode Of Payment" />
          <CustomDropdown
            Options={ModeOfPaymentList}
            Value={Tbody?.MODE_OF_PAYMENT}
            Label="Mode Of Payment"
            OnChange={(e) => {
              setTbody((prevState) => ({
                ...prevState,
                MODE_OF_PAYMENT: e,
              }));
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}

const mapStateToProps = (state) => ({
  BANK_DETAILS_DATA: state.vendor.bank_details_data,
});

export default connect(mapStateToProps, {
  setBankDetailsAction,
})(BankDetails);
