import { Box, Checkbox, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomInput from "../../../../components/CustomInput/CustomInput";
import Label from "../../../../components/Label/Label";
import CustomDropdown from "../../../../components/CustomDropdown/CustomDropdown";
import cogoToast from "cogo-toast";
import { COLORS } from "../../../../utils/Theme";
import { setCustomerSalesDistributionAction } from "../../../../redux/action/customerAction";
import { connect } from "react-redux";

function CustomerSalesDistributionTab(props) {
  const [customerGeneralData, setCustomerGeneralData] = useState([]);

  const [customerGeneralFields, setCustomerGeneralFields] = useState([
    {
      TITLE: "Distribution Channel*",
      IS_DISABLED: false,
      DROPDOWN: true,
      KEY: "DISTRIBUTION_CHANNEL",
      REQUIRED: true,
      ERROR_FLAG: false,
      VALUE: "",
      CHECK_BOX: false,
      DROPDOWN_OPTIONS: [
        {
          label: "Customer",
          value: "Customer",
        },
      ],
    },
    {
      TITLE: "Division*",
      IS_DISABLED: false,
      DROPDOWN: true,
      KEY: "DIVISION",
      REQUIRED: true,
      ERROR_FLAG: false,
      VALUE: "",
      CHECK_BOX: false,
      DROPDOWN_OPTIONS: [
        {
          label: "Customer",
          value: "Customer",
        },
      ],
    },
    {
      TITLE: "Customer Classification for PPD*",
      IS_DISABLED: false,
      DROPDOWN: false,
      KEY: "CUSTOMER_CLASSIFICATION_FOR_PPD",
      REQUIRED: true,
      VALUE: "",
      ERROR_FLAG: false,
      DROPDOWN_OPTIONS: [],
      CHECK_BOX: false,
    },
    {
      TITLE: "Order Combination Indicator*",
      IS_DISABLED: false,
      DROPDOWN: false,
      KEY: "ORDER_COMBINATION_INDICATOR",
      REQUIRED: true,
      CHECK_BOX: true,
      VALUE: false,
      ERROR_FLAG: false,
      DROPDOWN_OPTIONS: [],
    },
    {
      TITLE: "Shipping Conditions*",
      IS_DISABLED: false,
      DROPDOWN: true,
      KEY: "SHIPPING_CONDITION",
      REQUIRED: true,
      VALUE: "",
      ERROR_FLAG: false,
      CHECK_BOX: false,
      DROPDOWN_OPTIONS: [
        {
          label: "Customer",
          value: "Customer",
        },
      ],
    },

    {
      TITLE: "Inco Term 1*",
      IS_DISABLED: false,
      DROPDOWN: true,
      KEY: "INCO_TERM_1",
      REQUIRED: true,
      ERROR_FLAG: false,
      CHECK_BOX: false,
      VALUE: "",
      DROPDOWN_OPTIONS: [
        {
          label: "Customer",
          value: "Customer",
        },
      ],
    },
    {
      TITLE: "Inco Term 2*",
      IS_DISABLED: false,
      DROPDOWN: true,
      KEY: "INCO_TERM_2",
      REQUIRED: false,
      ERROR_FLAG: false,
      CHECK_BOX: false,
      VALUE: "",
      DROPDOWN_OPTIONS: [
        {
          label: "Customer",
          value: "Customer",
        },
      ],
    },
    {
      TITLE: "Currency*",
      IS_DISABLED: false,
      DROPDOWN: true,
      KEY: "CURRENCY",
      REQUIRED: true,
      ERROR_FLAG: false,
      VALUE: "",
      CHECK_BOX: false,
      DROPDOWN_OPTIONS: [
        {
          label: "INR",
          value: "INR",
        },
        {
          label: "USD",
          value: "USD",
        },
      ],
    },

    {
      TITLE: "Sales Office",
      IS_DISABLED: false,
      DROPDOWN: true,
      KEY: "SALES_OFFICE",
      REQUIRED: true,
      ERROR_FLAG: false,
      CHECK_BOX: false,
      VALUE: "",
      DROPDOWN_OPTIONS: [
        {
          label: "Customer",
          value: "Customer",
        },
      ],
    },
    {
      TITLE: "Customer Group",
      IS_DISABLED: false,
      DROPDOWN: true,
      KEY: "CUSTOMER_GROUP",
      REQUIRED: false,
      VALUE: "",
      ERROR_FLAG: false,
      CHECK_BOX: false,
      DROPDOWN_OPTIONS: [
        {
          label: "Customer",
          value: "Customer",
        },
      ],
    },
    {
      TITLE: "Sales Group*",
      IS_DISABLED: false,
      DROPDOWN: true,
      KEY: "SALES_GROUP",
      REQUIRED: false,
      ERROR_FLAG: false,
      CHECK_BOX: false,
      VALUE: "",
      DROPDOWN_OPTIONS: [
        {
          label: "Customer",
          value: "Customer",
        },
      ],
    },
    {
      TITLE: "Delivery Plant*",
      IS_DISABLED: false,
      DROPDOWN: true,
      CHECK_BOX: false,
      KEY: "DELIVERY_PLANT",
      REQUIRED: true,
      ERROR_FLAG: false,
      VALUE: "",
      DROPDOWN_OPTIONS: [
        {
          label: "Customer",
          value: "Customer",
        },
      ],
    },
    {
      TITLE: "Price Group*",
      IS_DISABLED: false,
      CHECK_BOX: false,
      DROPDOWN: true,
      KEY: "PRICE_GROUP",
      REQUIRED: true,
      ERROR_FLAG: false,
      VALUE: "",
      DROPDOWN_OPTIONS: [
        {
          label: "Customer",
          value: "Customer",
        },
      ],
    },
  ]);

  const storeFieldsValuesInState = (InputValue, InputKey, index) => {
    let tempCustomerGeneralData = [...customerGeneralData];
    let tempCustomerGeneralFields = [...customerGeneralFields];
    tempCustomerGeneralData[InputKey] = InputValue;
    tempCustomerGeneralFields[index].VALUE = InputValue;
    console.log("tempCustomerGeneralData", tempCustomerGeneralFields);
    setCustomerGeneralData(tempCustomerGeneralData);
    setCustomerGeneralFields(tempCustomerGeneralFields);
  };

  const CustomerGeneralDataInRedux = () => {
    let ErrorFound = false;
    let tempCustomerGeneralField = [...customerGeneralFields];
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

      props.setCustomerSalesDistributionAction(tempGeneralData);
    }
    setCustomerGeneralFields(tempCustomerGeneralField);
  };
  useEffect(() => {
    let tempCustomerGeneralFields = [...customerGeneralFields];

    props.CUSTOMER_SALES_DISTRIBUTION_DATA.map((val, index) => {
      console.log("index", val?.KEY == tempCustomerGeneralFields[index].KEY);
      if (val?.KEY == tempCustomerGeneralFields[index].KEY) {
        tempCustomerGeneralFields[index].VALUE = val.VALUE;
      }

      console.log("asdjvsad", tempCustomerGeneralFields);
      setCustomerGeneralFields(tempCustomerGeneralFields);
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
          {customerGeneralFields.map((val, index) => {
            return (
              <Box className="grid-item">
                <Label LabelText={val.TITLE} />
                {val.CHECK_BOX && (
                  <>
                    <Checkbox
                      checked={val.VALUE}
                      onClick={(e) => {
                        // console.log("askdjbasbdasd", e.target.value);
                        // if()
                        storeFieldsValuesInState(!val.VALUE, val.KEY, index);
                      }}
                    />
                  </>
                )}

                {val.DROPDOWN && (
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
                )}

                {!val.DROPDOWN && !val.CHECK_BOX && (
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

// export default CustomerGeneralTab;

const mapStateToProps = (state) => ({

  CUSTOMER_SALES_DISTRIBUTION_DATA: state.customer.customer_sales_distribution,
});

export default connect(mapStateToProps, { setCustomerSalesDistributionAction })(
  CustomerSalesDistributionTab
);
