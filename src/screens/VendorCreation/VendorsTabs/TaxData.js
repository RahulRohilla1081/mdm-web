// import { Avatar, Box, Button, ButtonGroup, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, Tooltip } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import CustomInput from "../../../components/CustomInput/CustomInput";
// import IconButton from "../../../components/IconButton/IconButton";
// import Label from "../../../components/Label/Label";
// import { SlOptionsVertical } from "react-icons/sl";
// import ICONS from "../../../utils/ICONS";
// import { setTaxDataAction } from "../../../redux/action/vendorAction";
// import { connect } from "react-redux";
// import cogoToast from "cogo-toast";

// function TaxData(props) {
//   const [TaxData, setTaxData] = useState([]);
//   const [TaxDataErrorFlag, setTaxDataErrorFlag] = useState([]);

//   useEffect(() => {

//     setTaxData(props.TAX_DATA);

//   }, [props.TAX_DATA]);

//   const saveTaxData = () => {
//     if (TaxData.IS_GST_APPLICABLE=="YES" ) {
//       if(TaxData.GST_NUMBER=="" || TaxData.GST_NUMBER==undefined ){
//         setTaxDataErrorFlag((prev)=>({
//           ...prev,
//           GST_NUMBER_ERROR_FLAG:true
//         }));
//       }
//     }else {

//       setTaxData((prev)=>({
//         ...prev,
//         GST_NUMBER:""
//       }))

//     }

//      props.setTaxDataAction(TaxData);
//   };

//   return (
//     <>
//       <Box
//         sx={{
//           display: "flex",

//           justifyContent: "flex-end",
//         }}
//       >
//         <Button
//           variant="outlined"
//           color="primary"
//           sx={{ marginRight: 5 }}
//           onClick={() => {
//             saveTaxData();
//           }}
//         >
//           Save
//         </Button>
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
//           <Label LabelText="GST Number" />
//           <FormControl>
//             {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
//             <RadioGroup
//               aria-labelledby="demo-radio-buttons-group-label"
//               defaultValue="female"
//               name="radio-buttons-group"
//             >
//               <FormControlLabel
//                 checked={TaxData?.IS_GST_APPLICABLE == "YES" ? true : false}
//                 control={<Radio />}
//                 label="Applicable"
//                 onChange={(e) => {
//                   console.log(e.target.value);
//                   setTaxData((prevState) => ({
//                     ...prevState,
//                     IS_GST_APPLICABLE: "YES",
//                   }));
//                 }}
//               />
//               <FormControlLabel
//                 checked={
//                   TaxData?.IS_GST_APPLICABLE == "NA" ||
//                   TaxData?.IS_GST_APPLICABLE == undefined
//                     ? true
//                     : false
//                 }
//                 control={<Radio />}
//                 label="Not Applicable"
//                 onChange={(e) => {
//                   console.log(e.target.value);
//                   setTaxData((prevState) => ({
//                     ...prevState,
//                     IS_GST_APPLICABLE: "NA",
//                   }));
//                 }}
//               />
//             </RadioGroup>
//           </FormControl>

//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "center",
//             }}
//           >
//             <CustomInput
//               Placeholder="GST Number"
//               Value={TaxData?.GST_NUMBER}
//               error={TaxDataErrorFlag?.GST_NUMBER_ERROR_FLAG}
//               Disabled={
//                 TaxData?.IS_GST_APPLICABLE == "NA" ||
//                 TaxData?.IS_GST_APPLICABLE == undefined
//                   ? true
//                   : false
//               }
//               onChange={(e) => {
//                 if (e.target.value.length <= 15) {
//                   setTaxData((prevState) => ({
//                     ...prevState,
//                     GST_NUMBER: e.target.value,
//                   }));
//                   setTaxDataErrorFlag((prevState) => ({
//                     ...prevState,
//                     GST_NUMBER_ERROR_FLAG: false,
//                   }));
//                 } else {
//                   cogoToast.warn("Maximum length 15 only");
//                 }
//               }}
//               Style={{
//                 width: "100%",
//               }}
//               helperText={
//                 TaxDataErrorFlag?.GST_NUMBER_ERROR_FLAG
//                   ? "Please enter a valid GST Number"
//                   : ""
//               }
//             />
//             <Tooltip title={"Upload Image"}>
//               <Button
//                 variant="text"
//                 component={"label"}
//                 disabled={
//                   TaxData?.IS_GST_APPLICABLE == "NA" ||
//                   TaxData?.IS_GST_APPLICABLE == undefined
//                     ? true
//                     : false
//                 }
//               >
//                 <img
//                   src={ICONS.folder}
//                   style={{
//                     height: 30,
//                     width: 30,
//                   }}
//                 />
//                 <input
//                   hidden
//                   type="file"
//                   accept="image/jpg , image/png"
//                   onChange={(e) => {
//                     console.log(e.target.files[0].name);
//                     setTaxData((prevState) => ({
//                       ...prevState,
//                       GST_NUMBER_FILE: e.target.files[0],
//                       GST__NUMBER_FILE_NAME: e.target.files[0].name,
//                     }));
//                   }}
//                 />
//               </Button>
//             </Tooltip>
//           </Box>
//           <Label LabelText="Pan Number" />
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "center",
//             }}
//           >
//             <CustomInput
//               Placeholder="Pan Number"
//               Value={TaxData?.PAN_NUMBER}
//               onChange={(e) => {
//                 if (e.target.value.length <= 10) {
//                   setTaxData((prevState) => ({
//                     ...prevState,
//                     PAN_NUMBER: e.target.value,
//                   }));
//                 } else {
//                   cogoToast.warn("Maximum length 10 only");
//                 }
//               }}
//               Style={{
//                 width: "100%",
//               }}
//             />
//             <Tooltip title={"Upload Image"}>
//               <Button variant="text" component={"label"}>
//                 <img
//                   src={ICONS.folder}
//                   style={{
//                     height: 30,
//                     width: 30,
//                   }}
//                 />
//                 <input
//                   hidden
//                   type="file"
//                   accept="image/jpg , image/png"
//                   onChange={(e) => {
//                     setTaxData((prevState) => ({
//                       ...prevState,
//                       PAN_NUMBER_FILE: e.target.files[0],
//                     }));
//                   }}
//                 />
//               </Button>
//             </Tooltip>
//           </Box>
//           <Label LabelText="CIN Number" />
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "center",
//             }}
//           >
//             <CustomInput
//               Placeholder="CIN Number"
//               Value={TaxData?.CIN_NUMBER}
//               onChange={(e) => {
//                 if (e.target.value.length <= 21) {
//                   setTaxData((prevState) => ({
//                     ...prevState,
//                     CIN_NUMBER: e.target.value,
//                   }));
//                 } else {
//                   cogoToast.warn("Maximum length 21 only");
//                 }
//               }}
//               Style={{
//                 width: "100%",
//               }}
//             />
//             <Tooltip title={"Upload Image"}>
//               <Button variant="text" component={"label"}>
//                 <img
//                   src={ICONS.folder}
//                   style={{
//                     height: 30,
//                     width: 30,
//                   }}
//                 />
//                 <input
//                   hidden
//                   type="file"
//                   accept="image/jpg , image/png"
//                   onChange={(e) => {
//                     setTaxData((prevState) => ({
//                       ...prevState,
//                       CIN_NUMBER_FILE: e.target.files[0],
//                     }));
//                   }}
//                 />
//               </Button>
//             </Tooltip>
//           </Box>
//         </Grid>
//         <Grid xs={6} md={0} item>
//           <Label LabelText="MSME Number" />
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "center",
//             }}
//           >
//             <CustomInput
//               Placeholder="MSME Number"
//               Value={TaxData?.MSME_NUMBER}
//               onChange={(e) => {
//                 if (e.target.value.length <= 12) {
//                   setTaxData((prevState) => ({
//                     ...prevState,
//                     MSME_NUMBER: e.target.value,
//                   }));
//                 } else {
//                   cogoToast.warn("Maximum length 12 only");
//                 }
//               }}
//               Style={{
//                 width: "100%",
//               }}
//             />
//             <Tooltip title={"Upload Image"}>
//               <Button variant="text" component={"label"}>
//                 <img
//                   src={ICONS.folder}
//                   style={{
//                     height: 30,
//                     width: 30,
//                   }}
//                 />
//                 <input
//                   hidden
//                   type="file"
//                   accept="image/jpg , image/png"
//                   onChange={(e) => {
//                     setTaxData((prevState) => ({
//                       ...prevState,
//                       MSME_NUMBER_FILE: e.target.files[0],
//                     }));
//                   }}
//                 />
//               </Button>
//             </Tooltip>
//           </Box>
//           <Label LabelText="Aadhar Number" />
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "center",
//             }}
//           >
//             <CustomInput
//               Placeholder="Aadhar Number"
//               Value={TaxData?.AADHAR_NUMBER}
//               onChange={(e) => {
//                 if (e.target.value.length <= 16) {
//                   setTaxData((prevState) => ({
//                     ...prevState,
//                     AADHAR_NUMBER: e.target.value,
//                   }));
//                 } else {
//                   cogoToast.warn("Maximum length 40 only");
//                 }
//               }}
//               Style={{
//                 width: "100%",
//               }}
//             />
//             <Tooltip title={"Upload Image"}>
//               <Button variant="text" component={"label"}>
//                 <img
//                   src={ICONS.folder}
//                   style={{
//                     height: 30,
//                     width: 30,
//                   }}
//                 />
//                 <input
//                   hidden
//                   type="file"
//                   accept="image/jpg , image/png"
//                   onChange={(e) => {
//                     setTaxData((prevState) => ({
//                       ...prevState,
//                       AADHAR_NUMBER_FILE: e.target.files[0],
//                     }));
//                   }}
//                 />
//               </Button>
//             </Tooltip>
//           </Box>
//         </Grid>
//       </Grid>
//     </>
//   );
// }

// const mapStateToProps = (state) => ({
//   TAX_DATA: state.vendor.tax_data,
// });

// export default connect(mapStateToProps, { setTaxDataAction })(TaxData);

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
import { COLORS } from "../../../utils/Theme";
import {

  setTaxDataAction,
} from "../../../redux/action/vendorAction";
import { connect } from "react-redux";
import CustomInput from "../../../components/CustomInput/CustomInput";
import Label from "../../../components/Label/Label";
import CustomDropdown from "../../../components/CustomDropdown/CustomDropdown";
import axios from "axios";
import AXIOS from "../../../utils/AXIOS";
import ICONS from "../../../utils/ICONS";

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
      TITLE: "CIN Number*",
      VALUE: "",
      FILE: [],
      FILE_NAME: "",
      IS_DISABLED: false,
      CHECKBOX: false,
      KEY: "CIN_NUMBER",
      REQUIRED: true,
      ERROR_FLAG: false,
      DROPDOWN_OPTIONS: [],
    },

    {
      TITLE: "MSME Number*",
      VALUE: "",
      FILE: [],
      FILE_NAME: "",
      IS_DISABLED: false,
      CHECKBOX: false,
      KEY: "MSME_NUMBER",
      REQUIRED: true,
      ERROR_FLAG: false,
      DROPDOWN_OPTIONS: [],
    },
    {
      TITLE: "Aadhar Number*",
      VALUE: "",
      FILE: [],
      FILE_NAME: "",
      IS_DISABLED: false,
      CHECKBOX: false,
      KEY: "AADHAR_NUMBER",
      REQUIRED: true,
      ERROR_FLAG: false,
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
      InputValue.length, tempCustomerGeneralFields[index].MAX_WORDS_LIMIT,index
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


  const ApplicableData=tempCustomerGeneralField.find((val)=>val.KEY=="APPLICABLE");
 const GSTIndex=tempCustomerGeneralField.findIndex((val)=>val.KEY=="GST_NUMBER")

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
      tempCustomerGeneralField[GSTIndex].ERROR_FLAG=true;
         ErrorFound = true;
    }
    else{
      
      console.log("inside else asdasd");
      tempCustomerGeneralField[GSTIndex].ERROR_FLAG=false;
    }

  }
  else{
        tempCustomerGeneralField[GSTIndex].ERROR_FLAG = false;  
  }

      tempCustomerGeneralField.map((val) => {
        if(val.KEY!="GST_NUMBER"){

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
         (val?.MAX_WORDS_LIMIT!=undefined &&  val?.MAX_WORDS_LIMIT != val.VALUE.length)
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
        tempGeneralData.push({ VALUE: val.VALUE, KEY: val.KEY , FILE:val.FILE, FILE_NAME:val.FILE_NAME});
      });

      console.log("tempGeneralData", tempGeneralData);

      props.setTaxDataAction(tempGeneralData);
    }
    setGeneralFields(tempCustomerGeneralField);
  };
  useEffect(() => {
    let tempCustomerGeneralFields = [...GeneralFields];

    props.TAX_DATA.map((val) => {
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

      console.log("mhsdbjasdbjas",val.KEY, tempCustomerGeneralFields[index].KEY,val);
      if (index != -1) {
        tempCustomerGeneralFields[index].VALUE = val.VALUE;
        tempCustomerGeneralFields[index].FILE_NAME = val.FILE_NAME;
      }
    });
    setGeneralFields(tempCustomerGeneralFields);
  }, [props.TAX_DATA]);

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
                          val.ERROR_FLAG ? "Please enter valid " + val.TITLE : ""
                          
                        }
                        Disabled={val.IS_DISABLED}
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
  TAX_DATA: state.vendor.tax_data,
});

export default connect(mapStateToProps, { setTaxDataAction })(TaxData);
