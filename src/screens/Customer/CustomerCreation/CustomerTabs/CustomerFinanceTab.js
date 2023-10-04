// import { Box, Typography } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import CustomInput from "../../../../components/CustomInput/CustomInput";
// import Label from "../../../../components/Label/Label";
// import CustomDropdown from "../../../../components/CustomDropdown/CustomDropdown";
// import cogoToast from "cogo-toast";
// import { COLORS } from "../../../../utils/Theme";
// import { setCustomerFinanceAction } from "../../../../redux/action/customerAction";
// import { connect } from "react-redux";

// function CustomerFinanceTab(props) {
//   const [customerFinancesData, setCustomerFinancesData] = useState([]);

//   const [customerFinancesFields, setCustomerFinancesFields] = useState([
//     {
//       TITLE: "PAN Number*",
//       IS_DISABLED: false,
//       DROPDOWN: false,
//       KEY: "PAN_CARD",
//       REQUIRED: true,
//       ERROR_FLAG: false,
//       VALUE: "",
//       DROPDOWN_OPTIONS: [],
//     },
//     {
//       TITLE: "GST Number",
//       IS_DISABLED: false,
//       DROPDOWN: false,
//       KEY: "GST_NUMBER",
//       REQUIRED: false,
//       ERROR_FLAG: false,
//       VALUE: "",
//       DROPDOWN_OPTIONS: [],
//     },
//     {
//       TITLE: "Customer classification for GST*",
//       IS_DISABLED: false,
//       DROPDOWN: true,
//       KEY: "CUSTOMER_CLASSIFICATION_FOR_GST",
//       REQUIRED: true,
//       VALUE: "",
//       ERROR_FLAG: false,
//       DROPDOWN_OPTIONS: [
//         {
//           label: "Customer",
//           value: "CUstomer",
//         },
//       ],
//     },
//     {
//       TITLE: "VAT Number",
//       IS_DISABLED: false,
//       DROPDOWN: false,
//       KEY: "VAT_NUMBER",
//       REQUIRED: false,
//       ERROR_FLAG: false,
//       VALUE: "",
//       DROPDOWN_OPTIONS: [],
//     },
//     {
//       TITLE: "ECC Number",
//       IS_DISABLED: false,
//       DROPDOWN: true,
//       KEY: "ECC_NUMBER",
//       REQUIRED: false,
//       VALUE: "",
//       ERROR_FLAG: false,
//       DROPDOWN_OPTIONS: [{ label: "ECC", value: "ECC" }],
//     },
//     {
//       TITLE: "Excise Registration Number",
//       IS_DISABLED: false,
//       DROPDOWN: false,
//       KEY: "EXCISE_REGISTRATION_NUMBER",
//       REQUIRED: false,
//       ERROR_FLAG: false,
//       VALUE: "",
//       DROPDOWN_OPTIONS: [],
//     },
//     {
//       TITLE: "Excise Range",
//       IS_DISABLED: false,
//       DROPDOWN: false,
//       KEY: "EXCISE_RANGE",
//       REQUIRED: false,
//       ERROR_FLAG: false,
//       VALUE: "",
//       DROPDOWN_OPTIONS: [],
//     },
//     {
//       TITLE: "Excise Division",
//       IS_DISABLED: false,
//       DROPDOWN: false,
//       KEY: "EXCISE_DIVISION",
//       REQUIRED: false,
//       ERROR_FLAG: false,
//       VALUE: "",
//       DROPDOWN_OPTIONS: [],
//     },
//     {
//       TITLE: "Excise Commission rate",
//       IS_DISABLED: false,
//       DROPDOWN: false,
//       KEY: "EXCISE_COMMISSION_RATE",
//       REQUIRED: false,
//       ERROR_FLAG: false,
//       VALUE: "",
//       DROPDOWN_OPTIONS: [],
//     },
//     {
//       TITLE: "Central Sales Tax Number",
//       IS_DISABLED: false,
//       DROPDOWN: false,
//       KEY: "CENTRAL_SALES_TAX_NUMBER",
//       REQUIRED: false,
//       ERROR_FLAG: false,
//       VALUE: "",
//       DROPDOWN_OPTIONS: [],
//     },
//     {
//       TITLE: "Local Sales Tax Number",
//       IS_DISABLED: false,
//       DROPDOWN: false,
//       KEY: "LOCAL_SALES_TAX_NUMBER",
//       REQUIRED: true,
//       ERROR_FLAG: false,
//       VALUE: "",
//       DROPDOWN_OPTIONS: [],
//     },
//     {
//       TITLE: "Service Tax Registration Number",
//       IS_DISABLED: false,
//       DROPDOWN: false,
//       KEY: "SERVICE_TAX_REGISTRATION_NUMBER",
//       REQUIRED: true,
//       ERROR_FLAG: false,
//       VALUE: "",
//       DROPDOWN_OPTIONS: [],
//     },
//   ]);

//   const storeFieldsValuesInState = (InputValue, InputKey, index) => {
//     let tempCustomerGeneralData = [...customerFinancesData];
//     let tempCustomerGeneralFields = [...customerFinancesFields];
//     tempCustomerGeneralData[InputKey] = InputValue;
//     tempCustomerGeneralFields[index].VALUE = InputValue;
//     console.log("tempCustomerGeneralData", tempCustomerGeneralFields);
//     setCustomerFinancesData(tempCustomerGeneralData);
//     setCustomerFinancesFields(tempCustomerGeneralFields);
//   };

//   const CustomerGeneralDataInRedux = () => {
//     let ErrorFound = false;
//     let tempCustomerGeneralField = [...customerFinancesFields];
//     tempCustomerGeneralField.map((val) => {
//       if (
//         (val.VALUE == "" && val.REQUIRED == true) ||
//         (val.DROPDOWN == true && val.VALUE.value == "")
//       ) {
//         val.ERROR_FLAG = true;
//         ErrorFound = true;
//       } else {
//         val.ERROR_FLAG = false;
//       }
//     });

//     if (!ErrorFound) {
//       let tempGeneralData = [];
//       tempCustomerGeneralField.map((val) => {
//         tempGeneralData.push({ VALUE: val.VALUE, KEY: val.KEY });
//       });
//       console.log("tempGeneralData", tempGeneralData);

//       props.setCustomerFinanceAction(tempGeneralData);
//     }
//     setCustomerFinancesFields(tempCustomerGeneralField);
//   };
//   useEffect(() => {
//     let tempCustomerGeneralFields = [...customerFinancesFields];
//     props.CUSTOMER_FINANCE_DATA.map((val, index) => {
//       console.log("index", val?.KEY == tempCustomerGeneralFields[index].KEY);
//       if (val?.KEY == tempCustomerGeneralFields[index].KEY) {
//         tempCustomerGeneralFields[index].VALUE = val.VALUE;
//       }

//       console.log("asdjvsad", tempCustomerGeneralFields);
//       setCustomerFinancesFields(tempCustomerGeneralFields);
//     });
//   }, []);
//   return (
//     <>
//       <Box
//         sx={{
//           justifyContent: "flex-end",
//           display: "flex",
//           m: 1,
//         }}
//       >
//         <button
//           className="save-button"
//           onClick={() => {
//             CustomerGeneralDataInRedux();
//           }}
//         >
//           Save
//         </button>
//       </Box>
//       <Box
//         container
//         // p={4}
//         spacing={2}
//         // my={4}
//         sx={{
//           boxShadow: "0 0 4px rgba(0,0,0,0.1)",
//           borderRadius: 3,
//           marginLeft: 0,
//           width: "100%",
//         }}
//         className="card-background"
//       >
//         <Box className="grid-container">
//           {customerFinancesFields.map((val, index) => {
//             return (
//               <Box className="grid-item">
//                 <Label LabelText={val.TITLE} />
//                 {val.DROPDOWN ? (
//                   <>
//                     <CustomDropdown
//                       Options={val.DROPDOWN_OPTIONS}
//                       Value={val.VALUE}
//                       // Disabled={GeneralDataDisableFlags?.BUSINESS_ROLE_DISABLE_FLAG}
//                       // error={GeneralDataErrorFlags?.BUSINESS_ROLE_ERROR}
//                       Label={val.TITLE}
//                       OnChange={(e) => {
//                         storeFieldsValuesInState(e, val.KEY, index);
//                       }}
//                     />
//                     {val.ERROR_FLAG && (
//                       <Typography
//                         sx={{
//                           fontSize: 12,
//                           // ml: 2,
//                           padding: 0.6,
//                           // m:1,
//                           pl: 1,
//                           color: COLORS.red,
//                           backgroundColor: "white",
//                         }}
//                       >
//                         Please select {val.TITLE}
//                       </Typography>
//                     )}
//                   </>
//                 ) : (
//                   <>
//                     <CustomInput
//                       Placeholder={val.TITLE}
//                       onChange={(e) => {
//                         // console.log(e.target.value);
//                         storeFieldsValuesInState(
//                           e.target.value,
//                           val.KEY,
//                           index
//                         );
//                       }}
//                       error={val.ERROR_FLAG}
//                       Value={val.VALUE}
//                       //   onChange={(e) => {
//                       //     setGeneralData((prevState) => ({
//                       //       ...prevState,
//                       //       NAME: e.target.value,
//                       //     }));
//                       //     setGeneralDataErrorFlags((prev) => ({
//                       //       ...prev,
//                       //       NAME_ERROR: false,
//                       //     }));
//                       //   }}
//                       helperText={
//                         val.ERROR_FLAG ? "Please enter " + val.TITLE : ""
//                       }
//                       Disabled={val.IS_DISABLED}
//                     />
//                     {/* {val.ERROR_FLAG && (
//                       <Typography
//                         sx={{
//                           fontSize: 14,
//                           // ml: 2,
//                           m:1,
//                           color: COLORS.red,
//                         }}
//                       >
//                         Please select {val.TITLE}
//                       </Typography>
//                     )} */}
//                   </>
//                 )}
//               </Box>
//             );
//           })}
//         </Box>
//       </Box>
//     </>
//   );
// }

// // export default CustomerGeneralTab;

// const mapStateToProps = (state) => ({
//   CUSTOMER_FINANCE_DATA: state.customer.customer_finance,
// });

// export default connect(mapStateToProps, { setCustomerFinanceAction })(
//   CustomerFinanceTab
// );


import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
// import CustomInput from "../../../../components/CustomInput/CustomInput";
// import Label from "../../../../components/Label/Label";
// import CustomDropdown from "../../../../components/CustomDropdown/CustomDropdown";
import cogoToast from "cogo-toast";
import { COLORS } from "../../../../utils/Theme";
import { setCustomerFinanceAction } from "../../../../redux/action/customerAction";
import { connect } from "react-redux";
import CustomInput from "../../../../components/CustomInput/CustomInput";
import Label from "../../../../components/Label/Label";
import CustomDropdown from "../../../../components/CustomDropdown/CustomDropdown";
import axios from "axios";
import AXIOS from "../../../../utils/AXIOS";
import ICONS from "../../../../utils/ICONS";

function TaxData(props) {
  const [customerGeneralData, setCustomerGeneralData] = useState([]);
  const [CountryList, setCountryList] = useState([]);

  let tempGeneralFields = [
    {
      TITLE: "Applicable*",
      VALUE: "NA",
      FILE: [],
      IS_DISABLED: false,
      CHECKBOX: true,
      KEY: "APPLICABLE",

      REQUIRED: true,
      ERROR_FLAG: false,
      DROPDOWN_OPTIONS: [],
    },
    {
      TITLE: "PAN Number*",
      VALUE: "",
      FILE: [],
      FILE_NAME: "",
      IS_DISABLED: false,
      MAX_WORDS_LIMIT: 10,
      CHECKBOX: false,
      KEY: "PAN_NUMBER",
      REQUIRED: true,

      ERROR_FLAG: false,
      DROPDOWN_OPTIONS: [],
    },

    {
      TITLE: "GST Number*",
      VALUE: "",
      FILE: [],
      FILE_NAME: "",
      IS_DISABLED: true,
      CHECKBOX: false,
      KEY: "GST_NUMBER",
      MAX_WORDS_LIMIT: 15,
      REQUIRED: true,
      ERROR_FLAG: false,
      DROPDOWN_OPTIONS: [],
    },



    {
      TITLE: "Customer classification for GST*",
      IS_DISABLED: false,
      DROPDOWN: true,
      KEY: "CUSTOMER_CLASSIFICATION_FOR_GST",
      REQUIRED: true,
      VALUE: "",
      ERROR_FLAG: false,
      DROPDOWN_OPTIONS: [
        {
          label: "Customer",
          value: "CUstomer",
        },
      ],
    },
    {
      TITLE: "VAT Number",
      IS_DISABLED: false,
      DROPDOWN: false,
      KEY: "VAT_NUMBER",
      REQUIRED: false,
      ERROR_FLAG: false,
      VALUE: "",
      DROPDOWN_OPTIONS: [],
    },
    {
      TITLE: "ECC Number",
      IS_DISABLED: false,
      DROPDOWN: true,
      KEY: "ECC_NUMBER",
      REQUIRED: false,
      VALUE: "",
      ERROR_FLAG: false,
      DROPDOWN_OPTIONS: [{ label: "ECC", value: "ECC" }],
    },
    {
      TITLE: "Excise Registration Number",
      IS_DISABLED: false,
      DROPDOWN: false,
      KEY: "EXCISE_REGISTRATION_NUMBER",
      REQUIRED: false,
      ERROR_FLAG: false,
      VALUE: "",
      DROPDOWN_OPTIONS: [],
    },
    {
      TITLE: "Excise Range",
      IS_DISABLED: false,
      DROPDOWN: false,
      KEY: "EXCISE_RANGE",
      REQUIRED: false,
      ERROR_FLAG: false,
      VALUE: "",
      DROPDOWN_OPTIONS: [],
    },
    {
      TITLE: "Excise Division",
      IS_DISABLED: false,
      DROPDOWN: false,
      KEY: "EXCISE_DIVISION",
      REQUIRED: false,
      ERROR_FLAG: false,
      VALUE: "",
      DROPDOWN_OPTIONS: [],
    },
    {
      TITLE: "Excise Commission rate",
      IS_DISABLED: false,
      DROPDOWN: false,
      KEY: "EXCISE_COMMISSION_RATE",
      REQUIRED: false,
      ERROR_FLAG: false,
      VALUE: "",
      DROPDOWN_OPTIONS: [],
    },
    {
      TITLE: "Central Sales Tax Number",
      IS_DISABLED: false,
      DROPDOWN: false,
      KEY: "CENTRAL_SALES_TAX_NUMBER",
      REQUIRED: false,
      ERROR_FLAG: false,
      VALUE: "",
      DROPDOWN_OPTIONS: [],
    },
    {
      TITLE: "Local Sales Tax Number",
      IS_DISABLED: false,
      DROPDOWN: false,
      KEY: "LOCAL_SALES_TAX_NUMBER",
      REQUIRED: true,
      ERROR_FLAG: false,
      VALUE: "",
      DROPDOWN_OPTIONS: [],
    },
    {
      TITLE: "Service Tax Registration Number",
      IS_DISABLED: false,
      DROPDOWN: false,
      KEY: "SERVICE_TAX_REGISTRATION_NUMBER",
      REQUIRED: true,
      ERROR_FLAG: false,
      VALUE: "",
      DROPDOWN_OPTIONS: [],
    },
  ];

  const [GeneralFields, setGeneralFields] = useState(tempGeneralFields);

  useEffect(() => {
    getCountryData();
  }, []);

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

      tempGeneralFields.map((val) => {
        if (val.KEY == "COUNTRY") {
          val.DROPDOWN_OPTIONS = tempCountryList;
        }
      });

      setGeneralFields(tempGeneralFields);

      console.log("tempCountryList", tempCountryList);
      setCountryList(tempCountryList);
    });
  };

  const storeFieldsValuesInState = (InputValue, InputKey, index) => {
    let tempCustomerGeneralData = [...customerGeneralData];
    let tempCustomerGeneralFields = [...GeneralFields];

    console.log(
      "askhdbjsd",
      InputValue.length,
      tempCustomerGeneralFields[index].MAX_WORDS_LIMIT,
      index
    );

    if (tempCustomerGeneralFields[index]?.MAX_WORDS_LIMIT != undefined) {
      if (
        InputValue.length <= tempCustomerGeneralFields[index].MAX_WORDS_LIMIT
      ) {
        tempCustomerGeneralData[InputKey] = InputValue;
        tempCustomerGeneralFields[index].VALUE = InputValue;
        tempCustomerGeneralFields[index].ERROR_FLAG = false;
      } else {
        cogoToast.warn("Maximum word limit exceeded");
      }
    } else {
      tempCustomerGeneralData[InputKey] = InputValue;
      tempCustomerGeneralFields[index].VALUE = InputValue;
      tempCustomerGeneralFields[index].ERROR_FLAG = false;
    }

    if (InputKey == "COUNTRY") {
      tempCustomerGeneralFields.map((val) => {
        if (val.KEY == "STATE") {
          val.DROPDOWN_OPTIONS = InputValue.state_array;
        }
        if (val.KEY == "POSTAL_CODE") {
          val.MAX_WORDS_LIMIT = Number(InputValue.postal_code_length);
        }
        if (val.KEY == "TIMEZONE") {
          val.VALUE = InputValue.timezone;
        }
      });
    }
    console.log("tempCustomerGeneralData", tempCustomerGeneralFields);
    setCustomerGeneralData(tempCustomerGeneralData);
    setGeneralFields(tempCustomerGeneralFields);
  };

  const CustomerGeneralDataInRedux = () => {
    let ErrorFound = false;
    let tempCustomerGeneralField = [...GeneralFields];

    const ApplicableData = tempCustomerGeneralField.find(
      (val) => val.KEY == "APPLICABLE"
    );
    const GSTIndex = tempCustomerGeneralField.findIndex(
      (val) => val.KEY == "GST_NUMBER"
    );

    console.log(
      "GSTIndex",
      ApplicableData,
      GSTIndex,
      tempCustomerGeneralField[GSTIndex].VALUE
    );

    if (ApplicableData.VALUE == "YES") {
      if (
        (tempCustomerGeneralField[GSTIndex].REQUIRED == true &&
          tempCustomerGeneralField[GSTIndex].VALUE == "") ||
        tempCustomerGeneralField[GSTIndex]?.MAX_WORDS_LIMIT !=
          tempCustomerGeneralField[GSTIndex]?.VALUE.length
      ) {
        console.log("inside if ");
        tempCustomerGeneralField[GSTIndex].ERROR_FLAG = true;
        ErrorFound = true;
      } else {
        console.log("inside else asdasd");
        tempCustomerGeneralField[GSTIndex].ERROR_FLAG = false;
      }
    } else {
      tempCustomerGeneralField[GSTIndex].ERROR_FLAG = false;
    }

    tempCustomerGeneralField.map((val) => {
      if (val.KEY != "GST_NUMBER") {
        if (val.KEY == "EMAIL") {
          if (!(val.VALUE.includes("@") && val.VALUE.includes(".com"))) {
            val.ERROR_FLAG = true;
            ErrorFound = true;
          }
        }
        if (
          (val.VALUE == "" && val.REQUIRED == true) ||
          (val.DROPDOWN == true && val.VALUE?.value == "") ||
          // (val.KEY == "EMAIL" &&
          //   !(val.VALUE.includes("@") && val.VALUE.includes(".com"))) ||
          (val?.MAX_WORDS_LIMIT != undefined &&
            val?.MAX_WORDS_LIMIT != val.VALUE.length)
        ) {
          val.ERROR_FLAG = true;
          ErrorFound = true;
        } else {
          val.ERROR_FLAG = false;
        }
      }
    });

    console.log("tempCustomerGeneralField", tempCustomerGeneralField);

    if (!ErrorFound) {
      let tempGeneralData = [];
      tempCustomerGeneralField.map((val) => {
        tempGeneralData.push({
          VALUE: val.VALUE,
          KEY: val.KEY,
          FILE: val?.FILE,
          FILE_NAME: val?.FILE_NAME,
        });
      });

      console.log("tempGeneralData", tempGeneralData);

      props.setCustomerFinanceAction(tempGeneralData);
    }
    setGeneralFields(tempCustomerGeneralField);
  };
  useEffect(() => {
    let tempCustomerGeneralFields = [...GeneralFields];

    props.CUSTOMER_FINANCE_DATA.map((val) => {
      // console.log("index", val?.KEY == tempCustomerGeneralFields[index].KEY);
      // if (val?.KEY == tempCustomerGeneralFields[index].KEY) {
      //   tempCustomerGeneralFields[index].VALUE = val.VALUE;
      //   tempCustomerGeneralFields[index].FILE = val.FILE;
      //   tempCustomerGeneralFields[index].FILE_NAME = val.FILE_NAME;
      // }

      // console.log("asdjvsad", tempCustomerGeneralFields);
      const index = tempCustomerGeneralFields.findIndex(
        (data) => data.KEY == val.KEY
      );

      console.log(
        "mhsdbjasdbjas",
        val.KEY,
        tempCustomerGeneralFields[index].KEY,
        val
      );
      if (index != -1) {
        tempCustomerGeneralFields[index].VALUE = val.VALUE;
        tempCustomerGeneralFields[index].FILE_NAME = val?.FILE_NAME;
        tempCustomerGeneralFields[index].FILE = val?.FILE;
      }
    });
    setGeneralFields(tempCustomerGeneralFields);
  }, [props.CUSTOMER_FINANCE_DATA]);

  useEffect(() => {
    console.log("asjdg", GeneralFields);
  }, [GeneralFields]);

  const handelCheckBox = (index, CheckedValue) => {
    let tempGeneralFields = [...GeneralFields];
    console.log("tempGeneralFields", tempGeneralFields);
    if (CheckedValue == "YES") {
      tempGeneralFields[index].VALUE = "YES";
      tempGeneralFields[2].IS_DISABLED = false;
    } else if (CheckedValue == "NA") {
      tempGeneralFields[index].VALUE = "NA";
      tempGeneralFields[2].IS_DISABLED = true;
    }

    setGeneralFields(tempGeneralFields);
    //  console.log(e.target.value);
  };

  const SaveFileInState = (InputValue, InputKey, index) => {
    let tempCustomerGeneralData = [...customerGeneralData];
    let tempCustomerGeneralFields = [...GeneralFields];
    tempCustomerGeneralData[InputKey] = InputValue;
    tempCustomerGeneralFields[index].FILE = InputValue;
    tempCustomerGeneralFields[index].FILE_NAME = InputValue.name;
    // tempCustomerGeneralFields[index].ERROR_FLAG = false;
    setCustomerGeneralData(tempCustomerGeneralData);
    setGeneralFields(tempCustomerGeneralFields);
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
          {GeneralFields.map((val, index) => {
            return (
              <Box className="grid-item">
                <Label LabelText={val.TITLE} />
                {val.CHECKBOX ? (
                  <>
                    <FormControl>
                      {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                      >
                        <FormControlLabel
                          checked={val?.VALUE == "YES" ? true : false}
                          control={<Radio />}
                          label="Applicable"
                          onChange={(e) => {
                            handelCheckBox(index, "YES");
                          }}
                        />
                        <FormControlLabel
                          checked={val?.VALUE == "NA" ? true : false}
                          control={<Radio />}
                          label="Not Applicable"
                          onChange={(e) => {
                            handelCheckBox(index, "NA");
                          }}
                        />
                      </RadioGroup>
                    </FormControl>
                  </>
                ) : (
                  <>
                    <Box
                      style={{
                        display: "flex",
                      }}
                    >
                      <CustomInput
                        Placeholder={val.TITLE}
                        onChange={(e) => {
                          storeFieldsValuesInState(
                            e.target.value,
                            val.KEY,
                            index
                          );
                        }}
                        error={val.ERROR_FLAG}
                        Value={val.VALUE}
                        helperText={
                          val.ERROR_FLAG
                            ? "Please enter valid " + val.TITLE
                            : ""
                        }
                        Disabled={val.IS_DISABLED}
                      />

                      {/* <Tooltip title={"Upload Image"}>
                        <Button
                          variant="text"
                          component={"label"}
                          disabled={
                            GeneralFields[0]?.VALUE == "NA" ? true : false
                          }
                        >
                          <img
                            src={ICONS.folder}
                            style={{
                              height: 30,
                              width: 30,
                            }}
                          />
                          <input
                            hidden
                            type="file"
                            accept="image/jpg , image/png"
                            onChange={(e) => {
                              SaveFileInState(
                                e.target.files[0],
                                val.KEY,
                                index
                              );
                              // console.log(e.target.files[0].name);
                              // setTaxData((prevState) => ({
                              //   ...prevState,
                              //   GST_NUMBER_FILE: e.target.files[0],
                              //   GST__NUMBER_FILE_NAME: e.target.files[0].name,
                              // }));
                            }}
                          />
                        </Button>
                      </Tooltip> */}
                    </Box>
                    <Typography
                      sx={{
                        color: "white",
                        cursor: "pointer",
                      }}
                    >
                      {val?.FILE_NAME}
                    </Typography>
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

    CUSTOMER_FINANCE_DATA: state.customer.customer_finance,
});

export default connect(mapStateToProps, { setCustomerFinanceAction })(TaxData);
