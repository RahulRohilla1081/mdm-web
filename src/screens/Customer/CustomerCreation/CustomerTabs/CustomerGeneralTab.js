// import { Box, Typography } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import CustomInput from "../../../../components/CustomInput/CustomInput";
// import Label from "../../../../components/Label/Label";
// import CustomDropdown from "../../../../components/CustomDropdown/CustomDropdown";
// import cogoToast from "cogo-toast";
// import { COLORS } from "../../../../utils/Theme";
// import { setCustomerGeneralDataAction } from "../../../../redux/action/customerAction";
// import { connect } from "react-redux";

// function CustomerGeneralTab(props) {
//   const [customerGeneralData, setCustomerGeneralData] = useState([]);

//   const [customerGeneralFields, setCustomerGeneralFields] = useState([
//     {
//       TITLE: "Name*",
//       VALUE: "",
//       IS_DISABLED: false,
//       DROPDOWN: false,
//       KEY: "NAME",
//       REQUIRED: true,
//       ERROR_FLAG: false,
//       DROPDOWN_OPTIONS: [],
//     },
//     {
//       TITLE: "Sales Organization*",
//       IS_DISABLED: false,
//       DROPDOWN: false,
//       KEY: "SALES_ORGANIZATION",
//       REQUIRED: true,
//       ERROR_FLAG: false,
//       VALUE: "",
//       DROPDOWN_OPTIONS: [],
//     },
//     {
//       TITLE: "Search Term*",
//       IS_DISABLED: false,
//       DROPDOWN: false,
//       KEY: "SEARCH_TERM",
//       REQUIRED: true,
//       ERROR_FLAG: false,
//       VALUE: "",
//       DROPDOWN_OPTIONS: [],
//     },
//     {
//       TITLE: "Address*",
//       IS_DISABLED: false,
//       DROPDOWN: false,
//       KEY: "ADDRESS",
//       REQUIRED: true,
//       ERROR_FLAG: false,
//       VALUE: "",
//       DROPDOWN_OPTIONS: [],
//     },
//     {
//       TITLE: "District*",
//       VALUE: "",
//       IS_DISABLED: false,
//       DROPDOWN: false,
//       KEY: "DISTRICT",
//       REQUIRED: true,
//       ERROR_FLAG: false,
//       DROPDOWN_OPTIONS: [],
//     },
//     {
//       TITLE: "Country*",
//       IS_DISABLED: false,
//       DROPDOWN: false,
//       KEY: "COUNTRY",
//       REQUIRED: true,
//       ERROR_FLAG: false,
//       VALUE: "",
//       DROPDOWN_OPTIONS: [],
//     },
//     {
//       TITLE: "City*",
//       IS_DISABLED: false,
//       DROPDOWN: false,
//       KEY: "CITY",
//       REQUIRED: true,
//       ERROR_FLAG: false,
//       VALUE: "",
//       DROPDOWN_OPTIONS: [],
//     },
//     {
//       TITLE: "Postal Code*",
//       IS_DISABLED: false,
//       DROPDOWN: false,
//       KEY: "POSTAL_CODE",
//       REQUIRED: true,
//       ERROR_FLAG: false,
//       DROPDOWN_OPTIONS: [],
//     },
//     {
//       TITLE: "Customer Group 1",
//       IS_DISABLED: false,
//       DROPDOWN: false,
//       KEY: "CUSTOMER_GROUP_1",
//       REQUIRED: false,
//       ERROR_FLAG: false,
//       VALUE: "",
//       DROPDOWN_OPTIONS: [],
//     },
//     {
//       TITLE: "Customer Group 2",
//       IS_DISABLED: false,
//       DROPDOWN: false,
//       KEY: "CUSTOMER_GROUP_2",
//       REQUIRED: false,
//       ERROR_FLAG: false,
//       VALUE: "",
//       DROPDOWN_OPTIONS: [],
//     },
//     {
//       TITLE: "Customer Group 3",
//       IS_DISABLED: false,
//       DROPDOWN: false,
//       KEY: "CUSTOMER_GROUP_3",
//       REQUIRED: false,
//       VALUE: "",
//       ERROR_FLAG: false,
//       DROPDOWN_OPTIONS: [],
//     },
//     {
//       TITLE: "Mobile Number*",
//       VALUE: "",
//       IS_DISABLED: false,
//       DROPDOWN: false,
//       KEY: "MOBILE_NUMBER",
//       REQUIRED: true,
//       ERROR_FLAG: false,
//       DROPDOWN_OPTIONS: [],
//     },
//     {
//       TITLE: "Fax",
//       IS_DISABLED: false,
//       DROPDOWN: false,
//       KEY: "FAX",
//       REQUIRED: false,
//       ERROR_FLAG: false,
//       VALUE: "",
//       DROPDOWN_OPTIONS: [],
//     },
//   ]);

//   const storeFieldsValuesInState = (InputValue, InputKey,index) => {
//     let tempCustomerGeneralData = [...customerGeneralData];
//     let tempCustomerGeneralFields = [...customerGeneralFields];
//     tempCustomerGeneralData[InputKey] = InputValue;
//     tempCustomerGeneralFields[index].VALUE = InputValue;
//     console.log("tempCustomerGeneralData", tempCustomerGeneralFields);
//     setCustomerGeneralData(tempCustomerGeneralData);
//     setCustomerGeneralFields(tempCustomerGeneralFields);
//   };

//   const CustomerGeneralDataInRedux = () => {
//       let ErrorFound = false;
//     let tempCustomerGeneralField = [...customerGeneralFields];
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

//        if (!ErrorFound) {
        
// let tempGeneralData=[]
//         tempCustomerGeneralField.map((val)=>{
//           tempGeneralData.push({ VALUE: val.VALUE, KEY: val.KEY });

//         })
//         console.log("tempGeneralData", tempGeneralData);
        
//          props.setCustomerGeneralDataAction(tempGeneralData);
//        }
//     setCustomerGeneralFields(tempCustomerGeneralField);

//   };
//   useEffect(()=>{

//    let tempCustomerGeneralFields=[...customerGeneralFields]
   
//    props.CUSTOMER_GENERAL_DATA.map((val,index)=>{
//     console.log("index",val?.KEY == tempCustomerGeneralFields[index].KEY);
//      if(val?.KEY==tempCustomerGeneralFields[index].KEY)
//      {
//        tempCustomerGeneralFields[index].VALUE=val.VALUE;
//       }
      
//       console.log("asdjvsad", tempCustomerGeneralFields);
//   setCustomerGeneralFields(tempCustomerGeneralFields);

// })
//   },[])

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
//           {customerGeneralFields.map((val,index) => {
//             return (
//               <Box className="grid-item">
//                 <Label LabelText={val.TITLE} />
//                 {val.DROPDOWN ? (
//                   <>
//                     <CustomDropdown

//                     Options={val.DROPDOWN_OPTIONS}
//                     Value={val.VALUE}
//                     // Disabled={GeneralDataDisableFlags?.BUSINESS_ROLE_DISABLE_FLAG}
//                     // error={GeneralDataErrorFlags?.BUSINESS_ROLE_ERROR}
//                     Label={val.TITLE}
//                     OnChange={(e) => {
//                     storeFieldsValuesInState(e, val.KEY, index);
//                     }}
//                     />
//                     {val.ERROR_FLAG && (
//                       <Typography
//                         sx={{
//                           fontSize: 12,
//                           // ml: 2,
//                           padding:0.6,
//                           // m:1,
//                           pl:1,
//                           color: COLORS.red,
//                           backgroundColor:"white"
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
//                         storeFieldsValuesInState(e.target.value, val.KEY,index);
//                       }}
//                         error={val.ERROR_FLAG}
//                         Value={val.VALUE}
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
//                         val.ERROR_FLAG ? "Please enter "+ val.TITLE : ""
//                       }
//                         Disabled={val.IS_DISABLED}
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
//   CUSTOMER_GENERAL_DATA: state.customer.customer_general,
// });

// export default connect(mapStateToProps, { setCustomerGeneralDataAction })(CustomerGeneralTab);




import { Box, Button, Tooltip, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
// import CustomInput from "../../../../components/CustomInput/CustomInput";
// import Label from "../../../../components/Label/Label";
// import CustomDropdown from "../../../../components/CustomDropdown/CustomDropdown";
import cogoToast from "cogo-toast";
import { COLORS } from "../../../../utils/Theme";
import { setGeneralDataAction } from "../../../../redux/action/vendorAction";
import { connect } from "react-redux";
import CustomInput from "../../../../components/CustomInput/CustomInput";
import Label from "../../../../components/Label/Label";
import CustomDropdown from "../../../../components/CustomDropdown/CustomDropdown";
import axios from "axios";
import AXIOS from "../../../../utils/AXIOS";
import { setCustomerGeneralDataAction } from "../../../../redux/action/customerAction";
import ICONS from "../../../../utils/ICONS";

function CustomerGeneralTab(props) {
  const [customerGeneralData, setCustomerGeneralData] = useState([]);
  const [CountryList, setCountryList] = useState([]);

  let tempGeneralFields = [
    {
      TITLE: "Title*",
      VALUE: "",
      IS_DISABLED: false,
      DROPDOWN: true,
      KEY: "TITLE",
      REQUIRED: true,
      ERROR_FLAG: false,
      FILE: [],
      FILE_NAME: "",
      DROPDOWN_OPTIONS: [
        {
          label: "MR.",
          value: "MR.",
        },
        {
          label: "MRS.",
          value: "MRS.",
        },
        {
          label: "MISS.",
          value: "MISS.",
        },
      ],
    },
    {
      TITLE: "Name 1*",
      VALUE: "",
      IS_DISABLED: false,
      DROPDOWN: false,
      MAX_WORDS_LIMIT: 35,
      KEY: "NAME_1",
      REQUIRED: true,
      ERROR_FLAG: false,
      DROPDOWN_OPTIONS: [],
      FILE: [],
      FILE_NAME: "",
      TYPE: "text",
    },
    {
      TITLE: "Name 2",
      VALUE: "",
      IS_DISABLED: false,
      DROPDOWN: false,
      MAX_WORDS_LIMIT: 35,
      KEY: "NAME_2",
      REQUIRED: false,
      ERROR_FLAG: false,
      DROPDOWN_OPTIONS: [],
      FILE: [],
      FILE_NAME: "",
      TYPE: "text",
    },
    {
      TITLE: "Email*",
      IS_DISABLED: false,
      DROPDOWN: false,
      KEY: "EMAIL",
      REQUIRED: true,
      ERROR_FLAG: false,
      VALUE: "",
      DROPDOWN_OPTIONS: [],
      FILE: [],
      FILE_NAME: "",
      TYPE: "text",
    },
    {
      TITLE: "Sales Organization*",
      IS_DISABLED: false,
      DROPDOWN: false,
      KEY: "SALES_ORGANIZATION",
      REQUIRED: true,
      MAX_WORDS_LIMIT: 40,
      ERROR_FLAG: false,
      VALUE: "",
      DROPDOWN_OPTIONS: [],
      FILE: [],
      FILE_NAME: "",
      TYPE: "text",
    },
    {
      TITLE: "Account Group*",
      IS_DISABLED: false,
      DROPDOWN: false,
      KEY: "ACCOUNT_GROUP",
      REQUIRED: true,
      MAX_WORDS_LIMIT: 40,
      ERROR_FLAG: false,
      VALUE: "",
      DROPDOWN_OPTIONS: [],
      FILE: [],
      FILE_NAME: "",
      TYPE: "text",
    },
    {
      TITLE: "Search Term*",
      IS_DISABLED: false,
      DROPDOWN: false,
      KEY: "SEARCH_TERM",
      REQUIRED: true,
      MAX_WORDS_LIMIT: 40,
      ERROR_FLAG: false,
      VALUE: "",
      DROPDOWN_OPTIONS: [],
      FILE: [],
      FILE_NAME: "",
      TYPE: "text",
    },
    {
      TITLE: "Country*",
      IS_DISABLED: false,
      DROPDOWN: true,
      KEY: "COUNTRY",
      REQUIRED: true,
      ERROR_FLAG: false,
      VALUE: "",
      DROPDOWN_OPTIONS: CountryList,
      FILE: [],
      FILE_NAME: "",
      TYPE: "text",
    },
    {
      TITLE: "State*",
      IS_DISABLED: false,
      DROPDOWN: true,
      KEY: "STATE",
      REQUIRED: true,
      ERROR_FLAG: false,
      VALUE: "",
      DROPDOWN_OPTIONS: [],
      FILE: [],
      FILE_NAME: "",
      TYPE: "text",
    },
    {
      TITLE: "Address Line 1*",
      VALUE: "",
      IS_DISABLED: false,
      DROPDOWN: false,
      KEY: "ADDRESS_LINE_1",
      MAX_WORDS_LIMIT: 60,
      REQUIRED: true,
      ERROR_FLAG: false,
      DROPDOWN_OPTIONS: [],
      FILE: [],
      FILE_NAME: "",
      TYPE: "text",
    },
    {
      TITLE: "Address Line 2",
      VALUE: "",
      IS_DISABLED: false,
      DROPDOWN: false,
      KEY: "ADDRESS_LINE_2",
      MAX_WORDS_LIMIT: 40,
      REQUIRED: false,
      ERROR_FLAG: false,
      DROPDOWN_OPTIONS: [],
      FILE: [],
      FILE_NAME: "",
      TYPE: "text",
    },

    {
      TITLE: "Postal Code*",
      IS_DISABLED: false,
      DROPDOWN: false,
      KEY: "PINCODE",
      MAX_WORDS_LIMIT: 10,
      REQUIRED: true,
      VALUE: "",
      ERROR_FLAG: false,
      DROPDOWN_OPTIONS: [],
      FILE: [],
      FILE_NAME: "",
      TYPE: "text",
    },
    {
      TITLE: "City*",
      IS_DISABLED: false,
      DROPDOWN: false,
      KEY: "CITY",
      MAX_WORDS_LIMIT: 10,
      REQUIRED: true,
      VALUE: "",
      ERROR_FLAG: false,
      DROPDOWN_OPTIONS: [],
      FILE: [],
      FILE_NAME: "",
      TYPE: "text",
    },
    {
      TITLE: "District",
      IS_DISABLED: false,
      DROPDOWN: false,
      KEY: "DISTRICT",
      REQUIRED: false,
      ERROR_FLAG: false,
      VALUE: "",
      FILE: [],
      FILE_NAME: "",
      DROPDOWN_OPTIONS: [],
      TYPE: "text",
    },
    {
      TITLE: "Timezone",
      IS_DISABLED: true,
      DROPDOWN: false,
      KEY: "TIMEZONE",
      REQUIRED: false,
      ERROR_FLAG: false,
      VALUE: "",
      FILE: [],
      FILE_NAME: "",
      DROPDOWN_OPTIONS: [],
      TYPE: "text",
    },
    {
      TITLE: "Customer Group 1",
      IS_DISABLED: false,
      DROPDOWN: false,
      KEY: "CUSTOMER_GROUP_1",
      REQUIRED: false,
      VALUE: "",
      ERROR_FLAG: false,
      FILE: [],
      FILE_NAME: "",
      DROPDOWN_OPTIONS: [],
      TYPE: "text",
    },
    {
      TITLE: "Customer Group 2",
      VALUE: "",
      IS_DISABLED: false,
      DROPDOWN: false,
      KEY: "CUSTOMER_GROUP_2",
      REQUIRED: false,
      ERROR_FLAG: false,
      FILE: [],
      FILE_NAME: "",
      DROPDOWN_OPTIONS: [],
      TYPE: "text",
    },
    {
      TITLE: "Customer Group",
      IS_DISABLED: false,
      DROPDOWN: false,
      KEY: "CUSTOMER_GROUP_3",
      REQUIRED: false,
      ERROR_FLAG: false,
      VALUE: "",
      FILE: [],
      FILE_NAME: "",
      DROPDOWN_OPTIONS: [],
      TYPE: "text",
    },
    {
      TITLE: "Fax",
      IS_DISABLED: false,
      DROPDOWN: false,
      KEY: "FAX",
      REQUIRED: false,
      ERROR_FLAG: false,
      VALUE: "",
      FILE: [],
      FILE_NAME: "",
      DROPDOWN_OPTIONS: [],
      TYPE: "text",
    },
    {
      TITLE: "Mobile",
      IS_DISABLED: false,
      DROPDOWN: false,
      KEY: "MOBILE_NUMBER",
      REQUIRED: true,
      ERROR_FLAG: false,
      VALUE: "",
      FILE: [],
      FILE_NAME: "",
      DROPDOWN_OPTIONS: [],
      TYPE: "text",
    },
    {
      TITLE: "Landline",
      IS_DISABLED: false,
      DROPDOWN: false,
      KEY: "LANDLINE",
      REQUIRED: false,
      ERROR_FLAG: false,
      VALUE: "",
      FILE: [],
      FILE_NAME: "",
      DROPDOWN_OPTIONS: [],
      TYPE: "text",
    },
    {
      TITLE: "Supporting Document",
      IS_DISABLED: true,
      DROPDOWN: false,
      KEY: "SUPPORTING_DOC",
      REQUIRED: false,
      ERROR_FLAG: false,
      VALUE: "",
      FILE: [],
      FILE_NAME: "",
      DROPDOWN_OPTIONS: [],
      TYPE: "file",
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
        if (val.KEY == "BUSINESS_ROLE") {
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
        if (val.KEY == "PINCODE") {
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
      } else {
        val.ERROR_FLAG = false;
      }
    });

    if (!ErrorFound) {
      let tempGeneralData = [];
      tempCustomerGeneralField.map((val) => {
        tempGeneralData.push({ VALUE: val.VALUE, KEY: val.KEY, FILE:val.FILE,FILE_NAME:val.FILE_NAME });
      });

      console.log("tempGeneralData", tempGeneralData);

      props.setCustomerGeneralDataAction(tempGeneralData);
    }
    setGeneralFields(tempCustomerGeneralField);
  };
  useEffect(() => {
    let tempCustomerGeneralFields = [...GeneralFields];

    props.CUSTOMER_GENERAL_DATA.map((val, index) => {
      console.log("index", val?.KEY == tempCustomerGeneralFields[index].KEY);
      if (val?.KEY == tempCustomerGeneralFields[index].KEY) {
        tempCustomerGeneralFields[index].VALUE = val.VALUE;
        tempCustomerGeneralFields[index].FILE = val?.FILE;
        tempCustomerGeneralFields[index].FILE_NAME = val?.FILE_NAME;
      }

      console.log("asdjvsad", tempCustomerGeneralFields);
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
                    <Box
                      style={{
                        display: "flex",
                      }}
                    >
                      <CustomInput
                        Disabled={val.IS_DISABLED}
                        Placeholder={val.TITLE}
                        onChange={(e) => {
                          storeFieldsValuesInState(
                            e.target.value,
                            val.KEY,
                            index
                          );
                        }}
                        error={val.ERROR_FLAG}
                        Value={val.TYPE == "file" ? val.FILE_NAME : val.VALUE}
                        helperText={
                          val.ERROR_FLAG ? "Please enter " + val.TITLE : ""
                        }
                        // Disabled={val.IS_DISABLED}
                      />
                      {val.TYPE == "file" && (
                        <Tooltip title={"Upload Image"}>
                          <Button
                            variant="text"
                            component={"label"}
                            // disabled={
                            //   // GeneralFields[0]?.VALUE == "NA" ? true : false
                            // }
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
                      )}
                    </Box>
                    {/* <CustomInput
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
                    /> */}
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
});

export default connect(mapStateToProps, { setCustomerGeneralDataAction })(
  CustomerGeneralTab
);