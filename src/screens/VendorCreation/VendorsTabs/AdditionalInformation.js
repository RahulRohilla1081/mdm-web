




import { Box, Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import CustomDropdown from "../../../components/CustomDropdown/CustomDropdown";
import CustomInput from "../../../components/CustomInput/CustomInput";
import Label from "../../../components/Label/Label";
import { setAdditionalInformationAction } from "../../../redux/action/vendorAction";
import axios from "axios";
import AXIOS from "../../../utils/AXIOS";

function AdditionalInformation(props) {
  const [Tbody, setTbody] = useState([]);

  useEffect(() => {
    console.log(props.ADDITIONAL_INFO);
    setTbody(props.ADDITIONAL_INFO);
  }, [props.ADDITIONAL_INFO]);

  const saveCompanyData = () => {
    props.setAdditionalInformationAction(Tbody);
  };

  useEffect(() => {
    // getIncoTermData();
  }, []);

  useEffect(() => {
    console.log("Tbskdfbjh", Tbody);
  }, [Tbody]);

  // const getIncoTermData = () => {
  //   axios.get(AXIOS.axiosUrl + AXIOS.incoTermGet).then((response) => {
  //     console.log("response.dataadkhds", response.data);

  //     let tempIncoTerm = [];
  //     response.data.map((val) => {
  //       tempIncoTerm.push({
  //         label: val.DESCRIPTION,
  //         value: val.INCOTERMS,
  //         LANGUAGE_KEY: val.LANGUAGE_KEY,
  //       });
  //     });
  //     setIncoTermOption(tempIncoTerm);
  //   });
  // };
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
            saveCompanyData();
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
          <Label LabelText="Reconciliation Account in General Ledger*" />
          <CustomInput
            Placeholder="Reconciliation Account in General Ledger"
            Value={Tbody?.RECONCILIATION_ACCOUNT}
            onChange={(e) => {
              console.log(Tbody);
              setTbody((prevState) => ({
                ...prevState,
                RECONCILIATION_ACCOUNT: e.target.value,
              }));
            }}
          />
          <Label LabelText="Group for Calculation Schema (Supplier)*" />
          <CustomInput
            Placeholder="Group for Calculation Schema (Supplier)"
            Value={Tbody?.GROUP_FOR_CALCULATION_SCHEMA}
            onChange={(e) => {
              console.log(Tbody);
              setTbody((prevState) => ({
                ...prevState,
                GROUP_FOR_CALCULATION_SCHEMA: e.target.value,
              }));
            }}
          />
          <Label LabelText="Train Station*" />
          <CustomInput
            Placeholder="Train Station"
            Value={Tbody?.TRAIN_STATION}
            onChange={(e) => {
              setTbody((prevState) => ({
                ...prevState,
                TRAIN_STATION: e.target.value,
              }));
            }}
          />
        </Grid>
        <Grid xs={6} md={0} item>
          <Label LabelText="Accounting Clerk Abbreviation*" />

          <CustomInput
            Placeholder="Accounting Clerk Abbreviation"
            Value={Tbody?.ACCOUNTING_CLERK_ABBREVIATION}
            onChange={(e) => {
              console.log(Tbody);
              setTbody((prevState) => ({
                ...prevState,
                ACCOUNTING_CLERK_ABBREVIATION: e.target.value,
              }));
            }}
          />
          <Label LabelText="Trade Partner ID 1*" />
          <CustomInput
            Placeholder="Trade Partner ID 1"
            Value={Tbody?.TRADE_PARTNER_ID_1}
            onChange={(e) => {
              setTbody((prevState) => ({
                ...prevState,
                TRADE_PARTNER_ID_1: e.target.value,
              }));
            }}
          />
          <Label LabelText="Trade Partner ID 2*" />
          <CustomInput
            Placeholder="Trade Partner ID 2"
            Value={Tbody?.TRADE_PARTNER_ID_2}
            onChange={(e) => {
              setTbody((prevState) => ({
                ...prevState,
                TRADE_PARTNER_ID_2: e.target.value,
              }));
            }}
          />
          <Label LabelText="Trade Partner ID 3*" />
          <CustomInput
            Placeholder="Trade Partner ID 3"
            Value={Tbody?.TRADE_PARTNER_ID_3}
            onChange={(e) => {
              setTbody((prevState) => ({
                ...prevState,
                TRADE_PARTNER_ID_3: e.target.value,
              }));
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}

// export default CompanyData;
const mapStateToProps = (state) => ({
  ADDITIONAL_INFO: state.vendor.additional_info,
});

export default connect(mapStateToProps, {
  setAdditionalInformationAction,
})(AdditionalInformation);
