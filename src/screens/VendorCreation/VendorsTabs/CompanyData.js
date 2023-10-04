// import { Box, Button, Grid } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import { connect } from "react-redux";
// import CustomDropdown from "../../../components/CustomDropdown/CustomDropdown";
// import CustomInput from "../../../components/CustomInput/CustomInput";
// import Label from "../../../components/Label/Label";
// import { setCompanyDataAction } from "../../../redux/action/vendorAction";
// import axios from "axios";
// import AXIOS from "../../../utils/AXIOS";

// function CompanyData(props) {

//   const [incoTermOption,setIncoTermOption]=useState([])
//   const [CountryCurrency,setCountryCurrency]=useState([{
//     label:"USD",
//     value:"USD",

//   },{
//     label:"INR",
//     value:"INR"
//   }])
//     const [Tbody, setTbody] = useState([]);

//     useEffect(() => {
//       console.log(props.COMPANY_DATA);
//       setTbody(props.COMPANY_DATA);
//     }, [props.COMPANY_DATA]);

//     const saveCompanyData = () => {
//       props.setCompanyDataAction(Tbody);
//     };

//     useEffect(()=>{
// getIncoTermData();
//     },[])

//     useEffect(()=>{
//       console.log("Tbskdfbjh",Tbody);
//     },[Tbody])

//     const getIncoTermData=()=>{
//       axios.get(AXIOS.axiosUrl + AXIOS.incoTermGet).then((response)=>{

//         console.log("response.dataadkhds", response.data);

//         let tempIncoTerm=[]
//         response.data.map((val)=>{
//           tempIncoTerm.push({
//             label: val.DESCRIPTION,
//             value: val.INCOTERMS,
//             LANGUAGE_KEY: val.LANGUAGE_KEY,
//           });
//         })
//         setIncoTermOption(tempIncoTerm);
//       })
//     }
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
//             saveCompanyData();
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
//           <Label LabelText="Currency*" />
//           <CustomDropdown
//             Options={CountryCurrency}
//             Label="Currency"
//             Value={Tbody?.CURRENCY}
//             OnChange={(e) => {
//               console.log(Tbody);
//               setTbody((prevState) => ({
//                 ...prevState,
//                 CURRENCY: e,
//               }));
//             }}
//           />
//           <Label LabelText="Turnover in Rupees*" />
//           <CustomInput
//             Placeholder="Turnover in Rupees"
//             Value={Tbody?.TURNOVER}
//             onChange={(e) => {
//               console.log(Tbody);
//               setTbody((prevState) => ({
//                 ...prevState,
//                 TURNOVER: e.target.value,
//               }));
//             }}
//           />
//           <Label LabelText="Payment term*" />
//           <CustomInput
//             Placeholder="Payment Term"
//             Value={Tbody?.PAYMENT_TERM}
//             onChange={(e) => {
//               setTbody((prevState) => ({
//                 ...prevState,
//                 PAYMENT_TERM: e.target.value,
//               }));
//             }}
//           />
//         </Grid>
//         <Grid xs={6} md={0} item>
//           <Label LabelText="Inco Term 1*" />

//           <CustomDropdown
//             Label="Inco Term 1"
//             Options={incoTermOption}
//             Value={Tbody?.INCO_TERM_1}
//             OnChange={(e) => {
//               setTbody((prevState) => ({
//                 ...prevState,
//                 INCO_TERM_1: e,
//               }));
//             }}
//           />
//           <Label LabelText="Inco Term 2*" />

//           <CustomDropdown
//             Label="Inco Term 2"
//             Options={incoTermOption}
//             Value={Tbody?.INCO_TERM_2}
//             OnChange={(e) => {
//               setTbody((prevState) => ({
//                 ...prevState,
//                 INCO_TERM_2: e,
//               }));
//             }}
//           />
//           <Label LabelText="Procurement Plant*" />
//           <CustomInput
//             Placeholder="Procurement Plant"
//             Value={Tbody?.PROCUREMENT_PLANT}
//             onChange={(e) => {
//               setTbody((prevState) => ({
//                 ...prevState,
//                 PROCUREMENT_PLANT: e.target.value,
//               }));
//             }}
//           />
//         </Grid>
//       </Grid>
//     </>
//   );
// }

// // export default CompanyData;
// const mapStateToProps = (state) => ({
//   COMPANY_DATA: state.vendor.company_data,
// });

// export default connect(mapStateToProps, {
//   setCompanyDataAction,
// })(CompanyData);

import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
// import CustomInput from "../../../../components/CustomInput/CustomInput";
// import Label from "../../../../components/Label/Label";
// import CustomDropdown from "../../../../components/CustomDropdown/CustomDropdown";
import cogoToast from "cogo-toast";
import { COLORS } from "../../../utils/Theme";
import { setCompanyDataAction } from "../../../redux/action/vendorAction";
import { connect } from "react-redux";
import CustomInput from "../../../components/CustomInput/CustomInput";
import Label from "../../../components/Label/Label";
import CustomDropdown from "../../../components/CustomDropdown/CustomDropdown";
import axios from "axios";
import AXIOS from "../../../utils/AXIOS";

function CompanyData(props) {
  const [customerGeneralData, setCustomerGeneralData] = useState([]);
  const [CountryList, setCountryList] = useState([]);

  let tempGeneralFields = [
    {
      TITLE: "Currency*",
      VALUE: "",
      IS_DISABLED: false,
      DROPDOWN: true,
      KEY: "CURRENCY",
      REQUIRED: true,
      ERROR_FLAG: false,
      DROPDOWN_OPTIONS: [
        {
          label: "USD",
          value: "USD",
        },
        {
          label: "INR",
          value: "INR",
        },
      ],
    },
    {
      TITLE: "Inco term 1*",
      IS_DISABLED: false,
      DROPDOWN: true,
      KEY: "INCO_TERM_1",
      REQUIRED: true,
      ERROR_FLAG: false,
      VALUE: "",
      DROPDOWN_OPTIONS: [],
    },
    {
      TITLE: "Turnover in rupees*",
      IS_DISABLED: false,
      DROPDOWN: false,
      KEY: "TURNOVER",
      REQUIRED: true,
      ERROR_FLAG: false,
      VALUE: "",
      DROPDOWN_OPTIONS: [],
    },
    {
      TITLE: "Inco term 2*",
      IS_DISABLED: false,
      DROPDOWN: true,
      KEY: "INCO_TERM_2",
      REQUIRED: true,
      MAX_WORDS_LIMIT: 40,
      ERROR_FLAG: false,
      VALUE: "",
      DROPDOWN_OPTIONS: [],
    },

    {
      TITLE: "Payment term*",
      VALUE: "",
      IS_DISABLED: false,
      DROPDOWN: false,
      KEY: "PAYMENT_TERM",
      REQUIRED: true,
      ERROR_FLAG: false,
      DROPDOWN_OPTIONS: [],
    },
    {
      TITLE: "Procurement Plant*",
      IS_DISABLED: false,
      DROPDOWN: false,
      KEY: "PROCUREMENT_PLANT",
      REQUIRED: true,
      ERROR_FLAG: false,
      VALUE: "",
      DROPDOWN_OPTIONS: [],
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

      let tempGeneralFields=[...GeneralFields];
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
        tempGeneralData.push({ VALUE: val.VALUE, KEY: val.KEY });
      });

      console.log("tempGeneralData", tempGeneralData);

      props.setCompanyDataAction(tempGeneralData);
    }
    setGeneralFields(tempCustomerGeneralField);
  };
  useEffect(() => {
    let tempCustomerGeneralFields = [...GeneralFields];

    props.COMPANY_DATA.map((val,) => {
         const index = tempCustomerGeneralFields.findIndex(
           (data) => data.KEY == val.KEY
         );
         if (index != -1) {
           tempCustomerGeneralFields[index].VALUE = val.VALUE;
         }
        });
        setGeneralFields(tempCustomerGeneralFields);
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
  COMPANY_DATA: state.vendor.company_data,
});

export default connect(mapStateToProps, { setCompanyDataAction })(CompanyData);
