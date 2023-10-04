// import { Box, Button, Grid } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import CustomDropdown from "../../../components/CustomDropdown/CustomDropdown";
// import CustomInput from "../../../components/CustomInput/CustomInput";
// import Label from "../../../components/Label/Label";

// // import { setBankDetailsAction } from "../../../redux/action/vendorAction";

// import { setBankDetailsAction } from "../../../redux/action/vendorAction";
// import { connect } from "react-redux";

// function BankDetails(props) {
//   const [Tbody, setTbody] = useState([]);

//   const ModeOfPaymentList = [
//     {
//       label: "Bank to Bank transfer",
//       value: "Bank to Bank transfer",
//     },
//     {
//       label: "Cheque",
//       value: "Cheque",
//     },
//     {
//       value: "Demand draft",
//       label: "Demand draft",
//     },
//     {
//       label: "Cash Payment",
//       value: "Cash Payment",
//     },
//     {
//       label: "Salary Hold",
//       value: "Salary Hold",
//     },
//     {
//       label: "NEFT Transfer",
//       value: "NEFT Transfer",
//     },
//     {
//       label: "RTGS Transfer",
//       value: "RTGS Transfer",
//     },
//     {
//       label: "Bank Transfer(FC)",
//       value: "Bank Transfer(FC)",
//     },
//     {
//       label: "TT PAYMENt/ LC Payment",
//       value: "TT PAYMENt/ LC Payment",
//     },
//   ];


//   const [dummyState,setDummyState]=useState([])

//   useEffect(() => {
//     setTbody(props.BANK_DETAILS_DATA);

//     setDummyState(props.BANK_DETAILS_DATA)


//     console.log("props.BANK_DETAILS_DATA", props.BANK_DETAILS_DATA);
//   }, [props.BANK_DETAILS_DATA]);

//   useEffect(() => {
//     console.log("Tbodyad", Tbody.ACCOUNT_HOLDER);
//   }, [Tbody]);

//   const saveBankDetailsData = () => {
//     // console.log(Tbody);
//     props.setBankDetailsAction(Tbody);
//   };
//   return (
//     <>
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "flex-end",
//         }}
//       >
//         {/* <Button variant="text" color="primary" sx={{ marginRight: 5 }}>
//           Clear Draft
//         </Button> */}
//         <Button
//           variant="outlined"
//           color="primary"
//           sx={{ marginRight: 5 }}
//           onClick={() => {
//             saveBankDetailsData();
//           }}
//         >
//           Save
//         </Button>
//         {/* <Button variant="contained" color="primary">
//           Submit
//         </Button> */}
//       </Box>
//       <Grid
//         container
//         p={4}
//         spacing={2}
//         my={4}
//         sx={{
//           boxShadow: "0 0 4px rgba(0,0,0,0.1)",
//           borderRadius: 3,
//           marginLeft: 0,
//           width: "100%",
//         }}
//         className="card-background"
//       >
//         <Grid xs={6} md={0} item>
//           {/* <Label LabelText="Bank Serial Number" />
//           <CustomInput
//             Placeholder="Bank Serial Number"
//             value={Tbody?.BANK_SERIAL_NUMBER}
//             onChange={(e) => {
              
//               setTbody((prevState) => ({
//                 ...prevState,
//                 BANK_SERIAL_NUMBER: e.target.value,
//               }));
//             }}
//           /> */}
//           <Label LabelText="Account Type" />
//           <CustomInput
//             Placeholder="Account Type"
//             Value={Tbody?.ACCOUNT_TYPE}
//             onChange={(e) => {
//               setTbody((prevState) => ({
//                 ...prevState,
//                 ACCOUNT_TYPE: e.target.value,
//               }));
//             }}
//           />
//           <Label LabelText="Bank Country" />
//           <CustomInput
//             Placeholder="Bank Country"
//             Value={Tbody?.BANK_COUNTRY}
//             onChange={(e) => {
//               setTbody((prevState) => ({
//                 ...prevState,
//                 BANK_COUNTRY: e.target.value,
//               }));
//             }}
//           />
//           <Label LabelText="Bank Key(IFSC)" />
//           <CustomInput
//             Placeholder="Bank Key(IFSC)"
//             Value={Tbody?.BANK_KEY}
//             onChange={(e) => {
//               setTbody((prevState) => ({
//                 ...prevState,
//                 BANK_KEY: e.target.value,
//               }));
//             }}
//           />
//           <Label LabelText="Supporting Documents" />
//           <CustomInput
//             Placeholder="Supporting Documents"
//             Type="file"
//             Value={Tbody?.DMS}
//             onChange={(e) => {
//               setTbody((prevState) => ({
//                 ...prevState,
//                 DMS: e.target.files[0],
//               }));
//             }}
//           />
//         </Grid>
//         <Grid xs={6} md={0} item>
//           <Label LabelText="Bank Account" />
//           <CustomInput
//             Placeholder="Bank Account"
//             Value={Tbody?.BANK_ACCOUNT}
//             onChange={(e) => {
//               setTbody((prevState) => ({
//                 ...prevState,
//                 BANK_ACCOUNT: e.target.value,
//               }));
//             }}
//           />
//           <Label LabelText="Account Holder" />
//           <CustomInput
//             Placeholder="Account Holder"
//             Value={Tbody?.ACCOUNT_HOLDER}
//             onChange={(e) => {
//               setTbody((prevState) => ({
//                 ...prevState,
//                 ACCOUNT_HOLDER: e.target.value,
//               }));
//             }}
//           />
//           <Label LabelText="Bank Name" />
//           <CustomInput
//             Placeholder="Bank Name"
//             Value={Tbody?.BANK_NAME}
//             onChange={(e) => {
//               setTbody((prevState) => ({
//                 ...prevState,
//                 BANK_NAME: e.target.value,
//               }));
//             }}
//           />
//           <Label LabelText="Bank City" />
//           <CustomInput
//             Placeholder="Bank City"
//             Value={Tbody?.BANK_CITY}
//             onChange={(e) => {
//               setTbody((prevState) => ({
//                 ...prevState,
//                 BANK_CITY: e.target.value,
//               }));
//             }}
//           />
//           <Label LabelText="Mode Of Payment" />
//           <CustomDropdown
//             Options={ModeOfPaymentList}
//             Value={Tbody?.MODE_OF_PAYMENT}
//             Label="Mode Of Payment"
//             OnChange={(e) => {
//               setTbody((prevState) => ({
//                 ...prevState,
//                 MODE_OF_PAYMENT: e,
//               }));
//             }}
//           />
//         </Grid>
//       </Grid>
//     </>
//   );
// }

// const mapStateToProps = (state) => ({
//   BANK_DETAILS_DATA: state.vendor.bank_details_data,
// });

// export default connect(mapStateToProps, {
//   setBankDetailsAction,
// })(BankDetails);


import { Box, Button, Tooltip, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
// import CustomInput from "../../../../components/CustomInput/CustomInput";
// import Label from "../../../../components/Label/Label";
// import CustomDropdown from "../../../../components/CustomDropdown/CustomDropdown";
import cogoToast from "cogo-toast";
import { COLORS } from "../../../utils/Theme";
import { setBankDetailsAction } from "../../../redux/action/vendorAction";
import { connect } from "react-redux";
import CustomInput from "../../../components/CustomInput/CustomInput";
import Label from "../../../components/Label/Label";
import CustomDropdown from "../../../components/CustomDropdown/CustomDropdown";
import axios from "axios";
import AXIOS from "../../../utils/AXIOS";
import ICONS from "../../../utils/ICONS";

function BankDetails(props) {
  const [customerGeneralData, setCustomerGeneralData] = useState([]);
  const [CountryList, setCountryList] = useState([]);

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

  let tempGeneralFields = [
    {
      TITLE: "Account Type*",
      VALUE: "",
      IS_DISABLED: false,
      DROPDOWN: false,
      KEY: "ACCOUNT_TYPE",
      REQUIRED: true,
      ERROR_FLAG: false,
      TYPE: "text",
      FILE_NAME: "",
      FILE: [],
      DROPDOWN_OPTIONS: [
        {
          label: "Saving Account",
          value: "Saving Account",
        },
        {
          label: "Current Account",
          value: "Current Account",
        },
      ],
    },
    {
      TITLE: "Bank Account*",
      IS_DISABLED: false,
      DROPDOWN: false,
      KEY: "BANK_ACCOUNT",
      REQUIRED: true,
      ERROR_FLAG: false,
      VALUE: "",
      DROPDOWN_OPTIONS: [],
      TYPE: "text",
      FILE_NAME: "",
      FILE: [],
    },
    {
      TITLE: "Bank Country*",
      IS_DISABLED: false,
      DROPDOWN: false,
      KEY: "BANK_COUNTRY",
      REQUIRED: true,
      ERROR_FLAG: false,
      VALUE: "",
      DROPDOWN_OPTIONS: [],
      TYPE: "text",
      FILE_NAME: "",
      FILE: [],
    },
    {
      TITLE: "Account holder*",
      IS_DISABLED: false,
      DROPDOWN: false,
      KEY: "ACCOUNT_HOLDER",
      REQUIRED: true,
      MAX_WORDS_LIMIT: 40,
      ERROR_FLAG: false,
      VALUE: "",
      DROPDOWN_OPTIONS: [],
      TYPE: "text",
      FILE_NAME: "",
      FILE: [],
    },

    {
      TITLE: "Bank key(IFSC)*",
      VALUE: "",
      IS_DISABLED: false,
      DROPDOWN: false,
      KEY: "BANK_KEY",
      REQUIRED: true,
      ERROR_FLAG: false,
      DROPDOWN_OPTIONS: [],
      TYPE: "text",
      FILE_NAME: "",
      FILE: [],
    },
    {
      TITLE: "Bank name*",
      IS_DISABLED: false,
      DROPDOWN: false,
      KEY: "BANK_NAME",
      REQUIRED: true,
      ERROR_FLAG: false,
      VALUE: "",
      TYPE: "text",
      DROPDOWN_OPTIONS: [],
      FILE_NAME: "",
      FILE: [],
    },
    {
      TITLE: "supporting document*",
      IS_DISABLED: false,
      DROPDOWN: false,
      KEY: "SUPPORTING_DOCUMENT",
      REQUIRED: false,
      ERROR_FLAG: false,
      VALUE: "",
      TYPE: "file",
      DROPDOWN_OPTIONS: [],
      FILE_NAME: "",
      FILE: [],
    },
    {
      TITLE: "Bank City",
      IS_DISABLED: false,
      DROPDOWN: false,
      KEY: "BANK_CITY",
      REQUIRED: true,
      ERROR_FLAG: false,
      VALUE: "",
      TYPE: "text",

      DROPDOWN_OPTIONS: [],
      FILE_NAME: "",
      FILE: [],
    },
    {
      TITLE: "Mode of payment",
      IS_DISABLED: false,
      DROPDOWN: true,
      TYPE: "text",
      KEY: "MODE_OF_PAYMENT",
      REQUIRED: true,
      ERROR_FLAG: false,
      VALUE: "",
      DROPDOWN_OPTIONS: ModeOfPaymentList,
      FILE_NAME: "",
      FILE: [],
    },
  ];

  const [GeneralFields, setGeneralFields] = useState(tempGeneralFields);

  useEffect(() => {
    getCountryData();
    getIncoTermData();
  }, []);

  const getIncoTermData = async () => {
    await axios.get(AXIOS.axiosUrl + AXIOS.incoTermGet).then((response) => {
      console.log("response.dataadkhds", response.data);

      let tempIncoTerm = [];
      response.data.map((val) => {
        tempIncoTerm.push({
          label: val.DESCRIPTION,
          value: val.INCOTERMS,
          LANGUAGE_KEY: val.LANGUAGE_KEY,
        });
      });

      let tempGeneralFields = [...GeneralFields];
      tempGeneralFields.map((val) => {
        if (val.KEY == "INCO_TERM_1") {
          val.DROPDOWN_OPTIONS = tempIncoTerm;
        }
        if (val.KEY == "INCO_TERM_2") {
          val.DROPDOWN_OPTIONS = tempIncoTerm;
        }
      });

      setGeneralFields(tempGeneralFields);

      // setIncoTermOption(tempIncoTerm);
    });
  };

  const getCountryData = async () => {
    await axios.get(AXIOS.axiosUrl + AXIOS.country_master).then((response) => {
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

    // if (tempCustomerGeneralFields[index]?.MAX_WORDS_LIMIT != undefined) {
    //   if (
    //     InputValue.length <= tempCustomerGeneralFields[index].MAX_WORDS_LIMIT
    //   ) {
    //     tempCustomerGeneralData[InputKey] = InputValue;
    //     tempCustomerGeneralFields[index].VALUE = InputValue;
    //     tempCustomerGeneralFields[index].ERROR_FLAG = false;
    //   } else {
    //     cogoToast.warn("Maximum word limit exceeded");
    //   }
    // } else {
    tempCustomerGeneralData[InputKey] = InputValue;
    tempCustomerGeneralFields[index].VALUE = InputValue;
    tempCustomerGeneralFields[index].ERROR_FLAG = false;
    // }

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
    tempCustomerGeneralField.map((val) => {
      if (val.KEY == "EMAIL") {
        if (!(val.VALUE.includes("@") && val.VALUE.includes(".com"))) {
          val.ERROR_FLAG = true;
          ErrorFound = true;
          console.log("Something went wrong", val.KEY);
        }
      }
      if (
        (val.VALUE == "" && val.REQUIRED == true) ||
        (val.DROPDOWN == true && val.VALUE?.value == "") ||
        (val.KEY == "EMAIL" &&
          !(val.VALUE.includes("@") && val.VALUE.includes(".com")))
      ) {
        val.ERROR_FLAG = true;
        ErrorFound = true;
        console.log("Something went wrong", val.KEY);
      } else {
        val.ERROR_FLAG = false;
      }
    });

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

      props.setBankDetailsAction(tempGeneralData);
    } else {
      cogoToast.warn("Something went wrong");
    }
    setGeneralFields(tempCustomerGeneralField);
  };
  useEffect(() => {
    let tempCustomerGeneralFields = [...GeneralFields];

    props.BANK_DETAILS_DATA.map((val,) => {
      // console.log("index", val?.KEY == tempCustomerGeneralFields[index].KEY);

         const index = tempCustomerGeneralFields.findIndex(
           (data) => data.KEY == val.KEY
         
         );
         if (index != -1) {
           tempCustomerGeneralFields[index].VALUE = val.VALUE;
           tempCustomerGeneralFields[index].FILE_NAME = val.FILE_NAME;
         }
      // if (val?.KEY == tempCustomerGeneralFields[index].KEY) {
      //   tempCustomerGeneralFields[index].VALUE = val.VALUE;
      //   tempCustomerGeneralFields[index].FILE = val.FILE;
      //   tempCustomerGeneralFields[index].FILE_NAME = val.FILE_NAME;
      // }

      // console.log("asdjvsad", tempCustomerGeneralFields);
      setGeneralFields(tempCustomerGeneralFields);
    });
  }, []);

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
                  {val.TYPE=="text" ? <CustomInput
                      Placeholder={val.TITLE}
                      onChange={(e) => {

                        if(val.TYPE=="file"){
                        
                              SaveFileInState(
                                e.target.files[0],
                                val.KEY,
                                index
                              );
                        }
                        else{
                          storeFieldsValuesInState(
                            e.target.value,
                            val.KEY,
                            index
                          );

                        }
                        // console.log(e.target.value);
                      }}
                      Type={val.TYPE}
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
                    /> : <>
                    <Box
                      style={{
                        display: "flex",
                      }}
                    >
                      <CustomInput
                      Disabled={true}
                        Placeholder={val.TITLE}
                        onChange={(e) => {
                          storeFieldsValuesInState(
                            e.target.value,
                            val.KEY,
                            index
                          );
                        }}
                        error={val.ERROR_FLAG}
                        Value={val.FILE_NAME}
                        helperText={
                          val.ERROR_FLAG ? "Please enter " + val.TITLE : ""
                        }
                        // Disabled={val.IS_DISABLED}
                      />

                      <Tooltip title={"Upload Image"}>
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
                      </Tooltip>
                    </Box>
                 
                  </>
                
            
          
            }
                    
                 
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
  // ADDITIONAL_INFO: state.vendor.additional_info,
    BANK_DETAILS_DATA: state.vendor.bank_details_data,
});

export default connect(mapStateToProps, { setBankDetailsAction })(BankDetails);
