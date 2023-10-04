

import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomInput from "../../../../components/CustomInput/CustomInput";
import Label from "../../../../components/Label/Label";
import CustomDropdown from "../../../../components/CustomDropdown/CustomDropdown";
import cogoToast from "cogo-toast";
import { COLORS } from "../../../../utils/Theme";
import { setContactPersonAction } from "../../../../redux/action/customerAction";
import { connect } from "react-redux";
import axios from "axios";
import AXIOS from "../../../../utils/AXIOS";

function CustomerContactPersonTab(props) {
  const [customerCustomerData, setCustomerCustomerData] = useState([]);

  const [customerCompanyFields, setCustomerCompanyFields] = useState([
    
    {
      TITLE: "Name",
      VALUE: "",
      TYPE: "text",
      IS_DISABLED: false,
      DROPDOWN: false,
      KEY: "NAME",
      REQUIRED: false,
      ERROR_FLAG: false,
      DROPDOWN_OPTIONS: [],
    },
    {
      TITLE: "Email",
      VALUE: "",
      IS_DISABLED: false,
      DROPDOWN: false,
      TYPE: "text",
      KEY: "EMAIL",
      REQUIRED: false,
      ERROR_FLAG: false,
      DROPDOWN_OPTIONS: [],
    },
    {
      TITLE: "Address",
      VALUE: "",
      IS_DISABLED: false,
      DROPDOWN: false,
      TYPE: "text",
      KEY: "ADDRESS",
      REQUIRED: false,
      ERROR_FLAG: false,
      DROPDOWN_OPTIONS: [],
    },
    {
      TITLE: "Mobile",
      VALUE: "",
      IS_DISABLED: false,
      TYPE: "text",
      DROPDOWN: false,
      KEY: "MOBILE_NUMBER",
      REQUIRED: false,
      ERROR_FLAG: false,
      DROPDOWN_OPTIONS: [],
    },
    {
      TITLE: "Gender",
      VALUE: "",
      IS_DISABLED: false,
      TYPE: "text",
      DROPDOWN: false,
      KEY: "GENDER",
      REQUIRED: false,
      ERROR_FLAG: false,
      DROPDOWN_OPTIONS: [],
    },
    {
      TITLE: "Landline",
      VALUE: "",
      IS_DISABLED: false,
      TYPE: "text",
      DROPDOWN: false,
      KEY: "LANDLINE",
      REQUIRED: false,
      ERROR_FLAG: false,
      DROPDOWN_OPTIONS: [],
    },
    {
      TITLE: "Birth Date",
      VALUE: "",
      IS_DISABLED: false,
      TYPE: "text",
      DROPDOWN: true,
      KEY: "PERSON_BIRTH_DATE",
      REQUIRED: false,
      ERROR_FLAG: false,
      DROPDOWN_OPTIONS: [],
    },
    {
      TITLE: "Birth Month",
      VALUE: "",
      IS_DISABLED: false,
      TYPE: "text",
      DROPDOWN: true,
      KEY: "PERSON_BIRTH_MONTH",
      REQUIRED: false,
      ERROR_FLAG: false,
      DROPDOWN_OPTIONS: [],
    },
    {
      TITLE: "Designation",
      VALUE: "",
      IS_DISABLED: false,
      TYPE: "text",
      DROPDOWN: false,
      KEY: "DESIGNATION",
      REQUIRED: false,
      ERROR_FLAG: false,
      DROPDOWN_OPTIONS: [],
    },
  ]);

  useEffect(() => {
    getCountryData();
  }, []);

  const getCountryData = () => {
    axios.get(AXIOS.axiosUrl + AXIOS.country_master).then((response) => {
      let tempCountryList = [];
      console.log(response.data.length);

      let tempGeneralFields = [...customerCompanyFields];
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

      tempGeneralFields.map((val) => {
        if (val.KEY == "RECONCILIATION_ACCOUNT") {
          val.DROPDOWN_OPTIONS = tempCountryList;
        }
      });

      setCustomerCustomerData(tempGeneralFields);

      console.log("tempCountryList", tempCountryList);
      // setCountryList(tempCountryList);
    });
  };

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
      } else {
        val.ERROR_FLAG = false;
      }
    });

    if (!ErrorFound) {
      let tempGeneralData = [];
      tempCustomerGeneralField.map((val) => {
        tempGeneralData.push({ VALUE: val.VALUE, KEY: val.KEY });
      });
      console.log("tempGeneralData", tempGeneralData);

      props.setContactPersonAction(tempGeneralData);
    }
    setCustomerCompanyFields(tempCustomerGeneralField);
  };
  useEffect(() => {
    let tempCustomerGeneralFields = [...customerCompanyFields];

    props.CUSTOMER_CONTACT_PERSON.map((val, index) => {
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
  CUSTOMER_CONTACT_PERSON: state.customer.customer_contact_person,
});

export default connect(mapStateToProps, { setContactPersonAction })(
  CustomerContactPersonTab
);
