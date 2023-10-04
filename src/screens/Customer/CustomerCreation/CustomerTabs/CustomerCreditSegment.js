import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomInput from "../../../../components/CustomInput/CustomInput";
import Label from "../../../../components/Label/Label";
import CustomDropdown from "../../../../components/CustomDropdown/CustomDropdown";
import cogoToast from "cogo-toast";
import { COLORS } from "../../../../utils/Theme";
import { setCreditSegmentAction } from "../../../../redux/action/customerAction";
import { connect } from "react-redux";
import axios from "axios";
import AXIOS from "../../../../utils/AXIOS";

function CustomerCreditSegment(props) {
  const [customerGeneralData, setCustomerGeneralData] = useState([]);

  const [customerGeneralFields, setCustomerGeneralFields] = useState([
    {
      TITLE: "Customer's credit limit",
      VALUE: "",
      IS_DISABLED: false,
      DROPDOWN: false,
      KEY: "CUSTOMER_CREDIT_LIMIT",
      REQUIRED: true,
      ERROR_FLAG: false,
      DROPDOWN_OPTIONS: [],
    },
    {
      TITLE: "Risk Class Credit*",
      VALUE: "",
      IS_DISABLED: false,
      DROPDOWN: true,
      KEY: "RISK_CLASS_CREDIT",
      REQUIRED: true,
      ERROR_FLAG: false,
      DROPDOWN_OPTIONS: [
        {
          label: "Risk Class Credit",
          value: "Risk Class Credit",
        },
      ],
    },
    {
      TITLE: "Credit Rules*",
      VALUE: "",
      IS_DISABLED: false,
      DROPDOWN: true,
      KEY: "CREDIT_RULE",
      REQUIRED: true,
      ERROR_FLAG: false,
      DROPDOWN_OPTIONS: [
        {
          label: "Credit Rules",
          value: "Credit Rules",
        },
      ],
    },
    {
      TITLE: "Credit control area*",
      VALUE: "",
      IS_DISABLED: false,
      DROPDOWN: true,
      KEY: "CREDIT_CONTROL_AREA",
      REQUIRED: true,
      ERROR_FLAG: false,
      DROPDOWN_OPTIONS: [
        {
          label: "Credit control area",
          value: "Credit control area",
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

      props.setCreditSegmentAction(tempGeneralData);
    }
    setCustomerGeneralFields(tempCustomerGeneralField);
  };
  useEffect(() => {


    let tempCustomerGeneralFields = [...customerGeneralFields];

    props.CUSTOMER_CREDIT_SEGMENT_DATA.map((val, index) => {
      console.log("index", val?.KEY == tempCustomerGeneralFields[index].KEY);
      if (val?.KEY == tempCustomerGeneralFields[index].KEY) {
        tempCustomerGeneralFields[index].VALUE = val.VALUE;
      }

      console.log("asdjvsad", tempCustomerGeneralFields);
      setCustomerGeneralFields(tempCustomerGeneralFields);
    });
  }, [props.CUSTOMER_CREDIT_SEGMENT_DATA]);

  const submitCustomerForm = () => {
        console.log(
          "aksjbdasdsa",
          props.CUSTOMER_GENERAL_DATA,
          props.CUSTOMER_FINANCE_DATA,
          props.CUSTOMER_COMPANY_DATA,
          props.CUSTOMER_SALES_DISTRIBUTION_DATA,
          props.CUSTOMER_CREDIT_SEGMENT_DATA
        );
    if (props.CUSTOMER_GENERAL_DATA?.length == 0) {
      cogoToast.error("Please fill data in General Tab");
    }
    if (props.CUSTOMER_COMPANY_DATA?.length == 0) {
      cogoToast.error("Please fill data in Company Data Tab");
    }
    if (props.CUSTOMER_FINANCE_DATA?.length == 0) {
      cogoToast.error("Please fill data in Finance Tab");
    }
    if (props.CUSTOMER_SALES_DISTRIBUTION_DATA?.length == 0) {
      cogoToast.error("Please fill data in Sale and Distribution Tab");
    }
    if (props.CUSTOMER_CREDIT_SEGMENT_DATA?.length == 0) {
      cogoToast.error("Please fill data in Sale and Distribution Tab");
    }

    if (
      props.CUSTOMER_GENERAL_DATA?.length != 0 &&
   
      props.CUSTOMER_FINANCE_DATA?.length != 0 &&
      props.CUSTOMER_SALES_DISTRIBUTION_DATA?.length != 0 &&
      props.CUSTOMER_CREDIT_SEGMENT_DATA?.length != 0
    ) {
      // let CustomerFormData = new FormData();

      // props.CUSTOMER_GENERAL_DATA.map((val) => {
      //   if (val.VALUE?.value != undefined) {
      //     CustomerFormData.set([val.KEY], val.VALUE.value);
      //   } else {
      //     CustomerFormData.set([val.KEY], val.VALUE);
      //   }
      // });
      //      let sales_distributionDetail = {};
      //      props.CUSTOMER_SALES_DISTRIBUTION_DATA.map((val) => {
      //        if (val.VALUE?.value != undefined) {
      //          sales_distributionDetail = {
      //            ...sales_distributionDetail,
      //            [val.KEY]: val.VALUE.value,
      //          };
      //        } else {
      //          sales_distributionDetail = {
      //            ...sales_distributionDetail,
      //            [val.KEY]: val.VALUE,
      //          };
      //        }
      //      });
      //           CustomerFormData.set(
      //             "SALES_DISTRIBUTION",
      //             JSON.stringify(sales_distributionDetail)
      //           );
      //      let CompanyDataDetail = {};
      //      props.CUSTOMER_COMPANY_DATA.map((val) => {
      //        if (val.VALUE?.value != undefined) {
      //          CompanyDataDetail = {
      //            ...CompanyDataDetail,
      //            [val.KEY]: val.VALUE.value,
      //          };
      //        } else {
      //          CompanyDataDetail = {
      //            ...CompanyDataDetail,
      //            [val.KEY]: val.VALUE,
      //          };
      //        }
      //      });
      //           CustomerFormData.set(
      //             "COMPANY_DATA",
      //             JSON.stringify(sales_distributionDetail)
      //           );
      //      let FinancialDetail = {};
      //      props.CUSTOMER_FINANCE_DATA.map((val) => {
      //        if (val.VALUE?.value != undefined) {
      //          FinancialDetail = {
      //            ...CompanyDataDetail,
      //            [val.KEY]: val.VALUE.value,
      //          };
      //        } else {
      //          FinancialDetail = {
      //            ...FinancialDetail,
      //            [val.KEY]: val.VALUE,
      //          };
      //        }
      //      });
      //           CustomerFormData.set(
      //             "FINANCE",
      //             JSON.stringify(FinancialDetail)
      //           );
      //                 let creditSegmentDetail = {};
      //                 props.CUSTOMER_SALES_DISTRIBUTION_DATA.map((val) => {
      //                   if (val.VALUE?.value != undefined) {
      //                     creditSegmentDetail = {
      //                       ...creditSegmentDetail,
      //                       [val.KEY]: val.VALUE.value,
      //                     };
      //                   } else {
      //                     creditSegmentDetail = {
      //                       ...creditSegmentDetail,
      //                       [val.KEY]: val.VALUE,
      //                     };
      //                   }
      //                 });
      //                    CustomerFormData.set(
      //                      "CREDIT_SEGMENT",
      //                      JSON.stringify(creditSegmentDetail)
      //                    );

      //   for (var pair of CustomerFormData.entries()) {
      //     console.log("VendorFormDataasdbhs", pair[0] + ", " + pair[1]);
      //   }

      let finalCustomerObject = {};
      let finalCustomerFromData=new FormData()

      props.CUSTOMER_GENERAL_DATA.map((val) => {
      // console.log("asdhbasjd",val.VALUE.value!=undefined);
        if(val?.FILE_NAME!=""){
          console.log("FIle FOund",val.KEY);
          //    console.log("asdhbasjdasdhjasd", val.KEY);
          finalCustomerFromData.append([val.KEY],val.FILE);
        }else{
        if (val.VALUE?.value != undefined) {
           finalCustomerFromData.set([val.KEY], val.VALUE.value);
            //  console.log("asdasdsdasdasdas", val.VALUE.value);
           // finalCustomerObject = {
             //   ...finalCustomerObject,
             //   [val.KEY]: val.VALUE.value,
             // };
             // finalCustomerObject=([val.KEY]: val.VALUE.value);
            } else {
                console.log("ajsdjasbdja", val.VALUE);
          finalCustomerFromData.set([val.KEY], val.VALUE);
          
          // finalCustomerObject = {
          //   ...finalCustomerObject,
          //   [val.KEY]: val.VALUE,
          // };
        }
      }
      });
      let CompanyDataDetail = {};
      props.CUSTOMER_COMPANY_DATA.map((val) => {
        if (val.VALUE?.value != undefined) {
          CompanyDataDetail = {
            ...CompanyDataDetail,
            [val.KEY]: val.VALUE.value,
          };
          // finalCustomerObject=([val.KEY]: val.VALUE.value);
        } else {
          CompanyDataDetail = {
            ...CompanyDataDetail,
            [val.KEY]: val.VALUE,
          };
        }
      });

      let sales_distributionDetail = {};
      props.CUSTOMER_SALES_DISTRIBUTION_DATA.map((val) => {
        if (val.VALUE?.value != undefined) {
          sales_distributionDetail = {
            ...sales_distributionDetail,
            [val.KEY]: val.VALUE.value,
          };
          // finalCustomerObject=([val.KEY]: val.VALUE.value);
        } else {
          sales_distributionDetail = {
            ...sales_distributionDetail,
            [val.KEY]: val.VALUE,
          };
        }
      });

      let FinancialDetail = {};
      props.CUSTOMER_FINANCE_DATA.map((val) => {
        if (val.KEY != "APPLICABLE") {
          if (val.VALUE?.value != undefined) {
            FinancialDetail = {
              ...FinancialDetail,
              [val.KEY]: val.VALUE.value,
            };
            // finalCustomerObject=([val.KEY]: val.VALUE.value);
          } else {
            FinancialDetail = {
              ...FinancialDetail,
              [val.KEY]: val.VALUE,
            };
          }
        }
      });
      let creditSegmentDataDetail = {};
      props.CUSTOMER_CREDIT_SEGMENT_DATA.map((val) => {
        if (val.VALUE?.value != undefined) {
          creditSegmentDataDetail = {
            ...creditSegmentDataDetail,
            [val.KEY]: val.VALUE.value,
          };
          // finalCustomerObject=([val.KEY]: val.VALUE.value);
        } else {
          creditSegmentDataDetail = {
            ...creditSegmentDataDetail,
            [val.KEY]: val.VALUE,
          };
        }
      });
      let contactPersonDetail = {};
      props.CUSTOMER_CONTACT_PERSON.map((val) => {
        if (val.VALUE?.value != undefined) {
          contactPersonDetail = {
            ...contactPersonDetail,
            [val.KEY]: val.VALUE.value,
          };
          // finalCustomerObject=([val.KEY]: val.VALUE.value);
        } else {
          contactPersonDetail = {
            ...contactPersonDetail,
            [val.KEY]: val.VALUE,
          };
        }
      });

      let timeLine = {
        ACTION_NAME:"Request to create customer",         
        ACTION_TIME: new Date(),
      };

      // finalCustomerObject = {
      //   ...finalCustomerFromData,
      //   FINANCE: JSON.stringify(FinancialDetail),
      //   SALES_DISTRIBUTION: JSON.stringify(sales_distributionDetail),
      //   COMPANY_DATA: JSON.stringify(CompanyDataDetail),
      //   TIMELINE: JSON.stringify(timeLine),
      //   CREDIT_SEGMENT: JSON.stringify(creditSegmentDataDetail),
      //   CONTACT_PERSON: JSON.stringify(contactPersonDetail),
      // };

      finalCustomerFromData.set("FINANCE", JSON.stringify(FinancialDetail));
      finalCustomerFromData.set(
        "SALES_DISTRIBUTION",
        JSON.stringify(sales_distributionDetail)
      );
      finalCustomerFromData.set(
        "COMPANY_DATA",
        JSON.stringify(CompanyDataDetail)
      );
      finalCustomerFromData.set("TIMELINE", JSON.stringify(timeLine));
      finalCustomerFromData.set(
        "CREDIT_SEGMENT",
        JSON.stringify(creditSegmentDataDetail)
      );
      finalCustomerFromData.set(
        "CONTACT_PERSON",
        JSON.stringify(contactPersonDetail)
      );
      finalCustomerFromData.set(
        "APPROVAL_FLAG",
        "1"
      );


      // let tempCustomerGeneralFields = [...customerGeneralFields];


      console.log("finalCustomerObject", finalCustomerObject);

      axios
        .post(AXIOS.axiosUrl + AXIOS.customer_create, finalCustomerFromData)
        .then((response) => {
          console.log(response.data);
          cogoToast.success("Application Submitted successfully");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      cogoToast.warn("Please fill all Mandatory fields");
    }
  };

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
          style={{
            marginRight: 10,
          }}
        >
          Save
        </button>
        <button
          className="save-button"
          onClick={() => {
            CustomerGeneralDataInRedux();
            submitCustomerForm();
          }}
        >
          Submit
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

// export default CustomerGeneralTab;

const mapStateToProps = (state) => ({
  CUSTOMER_GENERAL_DATA: state.customer.customer_general,
  CUSTOMER_COMPANY_DATA: state.customer.customer_company,
  CUSTOMER_FINANCE_DATA: state.customer.customer_finance,
  CUSTOMER_SALES_DISTRIBUTION_DATA: state.customer.customer_sales_distribution,
  CUSTOMER_CREDIT_SEGMENT_DATA: state.customer.customer_credit_segment,
  CUSTOMER_CONTACT_PERSON: state.customer.customer_contact_person,
});

export default connect(mapStateToProps, { setCreditSegmentAction })(
  CustomerCreditSegment
);
