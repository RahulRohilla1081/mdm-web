import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomInput from "../../../../components/CustomInput/CustomInput";
import Label from "../../../../components/Label/Label";
import CustomDropdown from "../../../../components/CustomDropdown/CustomDropdown";
import cogoToast from "cogo-toast";
import { COLORS } from "../../../../utils/Theme";
import { setCustomerGeneralDataAction } from "../../../../redux/action/customerAction";
import { connect } from "react-redux";

function CustomerCompanyTab(props) {
  const [customerCustomerData, setCustomerCustomerData] = useState([]);

  const [customerCompanyFields, setCustomerCompanyFields] = useState([
    {
      TITLE: "Company Data*",
      VALUE: "",
      IS_DISABLED: false,
      DROPDOWN: false,
      KEY: "COMPANY_DATA",
      REQUIRED: true,
      VALUE: "",
      ERROR_FLAG: false,
      DROPDOWN_OPTIONS: [],
    },
    {
      TITLE: "Reconciliation Account in General Ledger*",
      VALUE: "",
      IS_DISABLED: false,
      DROPDOWN: false,
      KEY: "RECONCILIATION_ACCOUNT",
      REQUIRED: true,
      ERROR_FLAG: false,
      VALUE: "",
      DROPDOWN_OPTIONS: [],
    },
  ]);

  const storeFieldsValuesInState = (InputValue, InputKey, index) => {
    let tempCustomerCompanyData = [...customerCustomerData];
    let tempCustomerCustomerFields = [...customerCompanyFields];
    tempCustomerCompanyData[InputKey] = InputValue;
    tempCustomerCustomerFields[index].VALUE = InputValue;
    console.log("tempCustomerGeneralData", tempCustomerCustomerFields);
    setCustomerCustomerData(tempCustomerCompanyData);
    setCustomerCompanyFields(tempCustomerCustomerFields);
  };

  const CustomerGeneralDataInRedux = () => {
    let ErrorFound = false;
    let tempCustomerGeneralField = [...customerCompanyFields];
    tempCustomerGeneralField.map((val) => {
      if (
        (val.VALUE == "" && val.REQUIRED == true) ||
        (val.DROPDOWN == true && val.VALUE.value == "")
      ) {
        val.ERROR_FLAG = true;
        ErrorFound = true;
      }
    });

    if (!ErrorFound) {
      let tempGeneralData = [];
      tempCustomerGeneralField.map((val) => {
        tempGeneralData.push({ VALUE: val.VALUE, KEY: val.KEY });
      });
      console.log("tempGeneralData", tempGeneralData);

      props.setCustomerGeneralDataAction(tempGeneralData);
    }
    setCustomerCompanyFields(tempCustomerGeneralField);
  };
  useEffect(() => {
    let tempCustomerGeneralFields = [...customerCompanyFields];

    props.CUSTOMER_COMPANY_DATA.map((val, index) => {
      console.log("index", val?.KEY == tempCustomerGeneralFields[index].KEY);
      if (val?.KEY == tempCustomerGeneralFields[index].KEY) {
        tempCustomerGeneralFields[index].VALUE = val.VALUE;
      }

      console.log("asdjvsad", tempCustomerGeneralFields);
      setCustomerCompanyFields(tempCustomerGeneralFields);
    });
  }, []);

  return (
    <>
      <Box
        sx={{
          justifyContent: "flex-end",
          display: "flex",
          m: 1,
        }}
      >
        <button
          className="save-button"
          onClick={() => {
            CustomerGeneralDataInRedux();
          }}
        >
          Save
        </button>
      </Box>
      <Box
        container
        // p={4}
        spacing={2}
        // my={4}
        sx={{
          boxShadow: "0 0 4px rgba(0,0,0,0.1)",
          borderRadius: 3,
          marginLeft: 0,
          width: "100%",
        }}
        className="card-background"
      >
        <Box className="grid-container">
          {customerCompanyFields.map((val, index) => {
            return (
              <Box className="grid-item">
                <Label LabelText={val.TITLE} />
                {val.DROPDOWN ? (
                  <>
                    <CustomDropdown
                      Options={val.DROPDOWN_OPTIONS}
                      Value={val.VALUE}
                      // Disabled={GeneralDataDisableFlags?.BUSINESS_ROLE_DISABLE_FLAG}
                      // error={GeneralDataErrorFlags?.BUSINESS_ROLE_ERROR}
                      Label={val.TITLE}
                      OnChange={(e) => {
                        storeFieldsValuesInState(e, val.KEY, index);
                      }}
                    />
                    {val.ERROR_FLAG && (
                      <Typography
                        sx={{
                          fontSize: 12,
                          // ml: 2,
                          padding: 0.6,
                          // m:1,
                          pl: 1,
                          color: COLORS.red,
                          backgroundColor: "white",
                        }}
                      >
                        Please select {val.TITLE}
                      </Typography>
                    )}
                  </>
                ) : (
                  <>
                    <CustomInput
                      Placeholder={val.TITLE}
                      onChange={(e) => {
                        // console.log(e.target.value);
                        storeFieldsValuesInState(
                          e.target.value,
                          val.KEY,
                          index
                        );
                      }}
                      error={val.ERROR_FLAG}
                      Value={val.VALUE}
                      //   onChange={(e) => {
                      //     setGeneralData((prevState) => ({
                      //       ...prevState,
                      //       NAME: e.target.value,
                      //     }));
                      //     setGeneralDataErrorFlags((prev) => ({
                      //       ...prev,
                      //       NAME_ERROR: false,
                      //     }));
                      //   }}
                      helperText={
                        val.ERROR_FLAG ? "Please enter " + val.TITLE : ""
                      }
                      Disabled={val.IS_DISABLED}
                    />
                    {/* {val.ERROR_FLAG && (
                      <Typography
                        sx={{
                          fontSize: 14,
                          // ml: 2,
                          m:1,
                          color: COLORS.red,
                        }}
                      >
                        Please select {val.TITLE}
                      </Typography>
                    )} */}
                  </>
                )}
              </Box>
            );
          })}
        </Box>
      </Box>
    </>
  );
}

const mapStateToProps = (state) => ({
  CUSTOMER_COMPANY_DATA: state.customer.customer_company,
});

export default connect(mapStateToProps, { setCustomerGeneralDataAction })(
  CustomerCompanyTab
);
