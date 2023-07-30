import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomDropdown from "../../../components/CustomDropdown/CustomDropdown";
import CustomInput from "../../../components/CustomInput/CustomInput";
import Label from "../../../components/Label/Label";
import axios from "axios";
import AXIOS from "../../../utils/AXIOS";
import { connect, useDispatch } from "react-redux";
import { setGeneralDataAction } from "../../../redux/action/vendorAction";
import { COLORS } from "../../../utils/Theme";
import cogoToast from "cogo-toast";
import "../style.css"

function General(props) {
  const dispatch = useDispatch();
  const [CountryList, setCountryList] = useState([]);
  const [GeneralData, setGeneralData] = useState([]);
  // const [countryDataList,setCountryDataList]=useState([])
  const [GeneralDataErrorFlags, setGeneralDataErrorFlags] = useState({
    NAME_ERROR: false,
    EMAIl_ERROR: false,
    COUNTRY_ERROR: false,
    CITY_ERROR: false,
    STATE_ERROR: false,
    ADDRESS_LINE_1_ERROR: false,
    ADDRESS_LINE_2_ERROR: false,
    ADDRESS_LINE_3_ERROR: false,
    PIN_CODE_ERROR: false,
    BUSINESS_ROLE_ERROR: false,
  });

  useEffect(() => {
    console.log("Props general data", props.GENERAL_DATA);
    setGeneralData(props.GENERAL_DATA);
    getCountryData();
  }, [props.GENERAL_DATA]);

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
        if(val.STATE.length>0){

          val.STATE.map((item) => {
            if(item!=""){
              stateArray.push({ label: item, value: item });

            }
            // console.log("item", { label: item, value: item });
          })
        }

        // console.log("stateArray", stateArray);

        tempCountryList.push({
          label: val.COUNTRY_NAME,
          value: val.COUNTRY_KEY,
          state_array:stateArray,
          timezone: val.TIME_ZONE,
          postal_code_length: val.POSTAL_CODE_LENGTH,
        });
      });

      console.log("tempCountryList", tempCountryList);
      setCountryList(tempCountryList);
    });
  };
  const SaveGeneralData = () => {
    console.log("General Data", GeneralData);
    if (GeneralData?.NAME == undefined || GeneralData?.NAME == "") {
      console.log("No data");
      setGeneralDataErrorFlags((prev) => ({
        ...prev,
        NAME_ERROR: true,
      }));
    } else {
      setGeneralDataErrorFlags((prev) => ({
        ...prev,
        NAME_ERROR: false,
      }));
    }
    if (GeneralData?.EMAIL == undefined || GeneralData?.EMAIL == "") {
      console.log("No data");
      setGeneralDataErrorFlags((prev) => ({
        ...prev,
        EMAIl_ERROR: true,
      }));
    } else {
      setGeneralDataErrorFlags((prev) => ({
        ...prev,
        EMAIl_ERROR: false,
      }));
    }
    if (GeneralData?.COUNTRY == undefined || GeneralData?.COUNTRY == "") {
      console.log("No data");
      setGeneralDataErrorFlags((prev) => ({
        ...prev,
        COUNTRY_ERROR: true,
      }));
    } else {
      setGeneralDataErrorFlags((prev) => ({
        ...prev,
        COUNTRY_ERROR: false,
      }));
    }
    if (GeneralData?.CITY == undefined || GeneralData?.CITY == "") {
      console.log("No data");
      setGeneralDataErrorFlags((prev) => ({
        ...prev,
        CITY_ERROR: true,
      }));
    } else {
      setGeneralDataErrorFlags((prev) => ({
        ...prev,
        CITY_ERROR: false,
      }));
    }
    if (
      GeneralData?.ADDRESS_LINE_1 == undefined ||
      GeneralData?.ADDRESS_LINE_1 == ""
    ) {
      console.log("No data");
      setGeneralDataErrorFlags((prev) => ({
        ...prev,
        ADDRESS_LINE_1_ERROR: true,
      }));
    } else {
      setGeneralDataErrorFlags((prev) => ({
        ...prev,
        ADDRESS_LINE_1_ERROR: false,
      }));
    }
    if (GeneralData?.STATE == undefined || GeneralData?.STATE == "") {
      console.log("No data");
      setGeneralDataErrorFlags((prev) => ({
        ...prev,
        STATE_ERROR: true,
      }));
    } else {
      setGeneralDataErrorFlags((prev) => ({
        ...prev,
        STATE_ERROR: false,
      }));
    }
    if (GeneralData?.PINCODE == undefined || GeneralData?.PINCODE == "") {
      console.log("No data");
      setGeneralDataErrorFlags((prev) => ({
        ...prev,
        PIN_CODE_ERROR: true,
      }));
    } else {
      setGeneralDataErrorFlags((prev) => ({
        ...prev,
        PIN_CODE_ERROR: false,
      }));
    }
    if (
      GeneralData?.BUSINESS_ROLE == undefined ||
      GeneralData?.BUSINESS_ROLE == ""
    ) {
      console.log("No data");
      setGeneralDataErrorFlags((prev) => ({
        ...prev,
        BUSINESS_ROLE_ERROR: true,
      }));
    } else {
      setGeneralDataErrorFlags((prev) => ({
        ...prev,
        BUSINESS_ROLE_ERROR: false,
      }));
    }

    props.setGeneralDataAction(GeneralData);
    // dispatch({ type: "SET_GENERAL_DATA",general_data:GeneralData });
    // console.log("Calling function");
    // axios
    //   .post(AXIOS.axiosUrl + AXIOS.vendorCreate, {\
    //     NAME: GeneralData.NAME,
    //     EMAIL: GeneralData.EMAIL,
    //     COUNTRY: GeneralData.COUNTRY.value,
    //     CITY: GeneralData.CITY.value,
    //     STATE: GeneralData.STATE.value,
    //     ADDRESS:
    //       GeneralData.ADDRESS_LINE_1 +
    //       " " +
    //       GeneralData.ADDRESS_LINE_2 +
    //       "" +
    //       GeneralData.ADDRESS_LINE_3,
    //     PINCODE: GeneralData.PINCODE,
    //     TIME_ZONE_MOBILE: "Time zone",
    //     FAX_DETAILS: GeneralData.FAX,
    //     BUSINESS_ROLE: GeneralData.BUSINESS_ROLE,
    //   })
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}

      >
        <Button
          variant="outlined"
          color="primary"
          sx={{ marginRight: 5 }}
          onClick={() => {
            SaveGeneralData();
          }}
        >
          Save
        </Button>
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
          <Label LabelText="Name*" />
          <CustomInput
            Placeholder="Name"
            error={GeneralDataErrorFlags.NAME_ERROR}
            Value={GeneralData?.NAME}
            onChange={(e) => {
              setGeneralData((prevState) => ({
                ...prevState,
                NAME: e.target.value,
              }));
              setGeneralDataErrorFlags((prev) => ({
                ...prev,
                NAME_ERROR: false,
              }));
            }}
            helperText={
              GeneralDataErrorFlags?.NAME_ERROR ? "Please enter Name" : ""
            }
          />

          <Label LabelText="Address*" />
          <Stack spacing={2}>
            <CustomInput
              Placeholder="Address line 1"
              Value={GeneralData.ADDRESS_LINE_1}
              error={GeneralDataErrorFlags?.ADDRESS_LINE_1_ERROR}
              onChange={(e) => {
                setGeneralData((prevState) => ({
                  ...prevState,
                  ADDRESS_LINE_1: e.target.value,
                }));
                setGeneralDataErrorFlags((prev) => ({
                  ...prev,
                  ADDRESS_LINE_1_ERROR: false,
                }));
              }}
              helperText={
                GeneralDataErrorFlags?.ADDRESS_LINE_1_ERROR
                  ? "Please enter address line 1"
                  : ""
              }
            />
            <CustomInput
              Placeholder="Address line 2"
              Value={GeneralData.ADDRESS_LINE_2}
              onChange={(e) => {
                if (e.target.value.length < 40) {
                  setGeneralData((prevState) => ({
                    ...prevState,
                    ADDRESS_LINE_2: e.target.value,
                  }));
                } else {
                  cogoToast.warn("Maximum length 40 only");
                }
              }}
            />
            <CustomInput
              Placeholder="Address line 3"
              Value={GeneralData.ADDRESS_LINE_3}
              onChange={(e) => {
                if (e.target.value.length < 40) {
                  setGeneralData((prevState) => ({
                    ...prevState,
                    ADDRESS_LINE_3: e.target.value,
                  }));
                } else {
                  cogoToast.warn("Maximum length 40 only");
                }
              }}
            />
          </Stack>
          <Label LabelText="City*" />
          <CustomInput
            Placeholder="City"
            error={GeneralDataErrorFlags?.CITY_ERROR}
            Value={GeneralData.CITY}
            onChange={(e) => {
              setGeneralData((prevState) => ({
                ...prevState,
                CITY: e.target.value,
              }));
              setGeneralDataErrorFlags((prev) => ({
                ...prev,
                CITY_ERROR: false,
              }));
            }}
            helperText={
              GeneralDataErrorFlags?.CITY_ERROR
                ? "Please enter a valid City"
                : ""
            }
          />

          {/* <CustomDropdown
            Options={CountryList}
            Label="City"
            error={GeneralDataErrorFlags?.CITY_ERROR}
            Value={GeneralData.CITY}
            OnChange={(e) => {
              setGeneralData((prevState) => ({
                ...prevState,
                CITY: e,
              }));
              setGeneralDataErrorFlags((prev) => ({
                ...prev,
                CITY_ERROR: false,
              }));
            }}
          /> */}
          {/* {GeneralDataErrorFlags?.CITY_ERROR && (
            <Typography
              sx={{
                fontSize: 12,
                ml: 2,
                color: COLORS.red,
              }}
            >
              Please select city
            </Typography>
          )} */}
          <Label LabelText="District*" />
          <CustomInput
            Placeholder="District"
            error={GeneralDataErrorFlags?.DISTRICT_ERROR}
            Value={GeneralData.DISTRICT}
            onChange={(e) => {
              setGeneralData((prevState) => ({
                ...prevState,
                DISTRICT: e.target.value,
              }));
              setGeneralDataErrorFlags((prev) => ({
                ...prev,
                DISTRICT_ERROR: false,
              }));
            }}
            helperText={
              GeneralDataErrorFlags?.DISTRICT_ERROR
                ? "Please enter a valid pin code"
                : ""
            }
          />

          {/* <CustomDropdown
            Options={CountryList}
            Label="City"
            error={GeneralDataErrorFlags?.CITY_ERROR}
            Value={GeneralData.CITY}
            OnChange={(e) => {
              setGeneralData((prevState) => ({
                ...prevState,
                CITY: e,
              }));
              setGeneralDataErrorFlags((prev) => ({
                ...prev,
                CITY_ERROR: false,
              }));
            }}
          /> */}
          {GeneralDataErrorFlags?.DISTRICT_ERROR && (
            <Typography
              sx={{
                fontSize: 12,
                ml: 2,
                color: COLORS.red,
              }}
            >
              Please select District
            </Typography>
          )}

          <Label LabelText="Business role*" />
          <CustomDropdown
            Options={CountryList}
            Value={GeneralData.BUSINESS_ROLE}
            error={GeneralDataErrorFlags?.BUSINESS_ROLE_ERROR}
            Label="Business role"
            OnChange={(e) => {
              setGeneralData((prevState) => ({
                ...prevState,
                BUSINESS_ROLE: e,
              }));
              setGeneralDataErrorFlags((prev) => ({
                ...prev,
                BUSINESS_ROLE_ERROR: false,
              }));
            }}
          />
          <Label LabelText="Vendor Group*" />
          <CustomInput
            Placeholder="Vendor Group"
            error={GeneralDataErrorFlags?.VENDOR_GROUP}
            Value={GeneralData.VENDOR_GROUP}
            onChange={(e) => {
              setGeneralData((prevState) => ({
                ...prevState,
                VENDOR_GROUP: e.target.value,
              }));
              setGeneralDataErrorFlags((prev) => ({
                ...prev,
                CITY_ERROR: false,
              }));
            }}
            // helperText={
            //   GeneralDataErrorFlags?.CITY_ERROR
            //     ? "Please enter a valid City"
            //     : ""
            // }
          />
          {/* {GeneralDataErrorFlags?.BUSINESS_ROLE_ERROR && (
            <Typography
              sx={{
                fontSize: 12,
                ml: 2,
                color: COLORS.red,
              }}
            >
              Please select Business role
            </Typography>
          )} */}
        </Grid>
        <Grid xs={6} md={0} item>
          <Label LabelText="Email*" />
          <CustomInput
            Placeholder="Email"
            onBlur={(e) => {
              console.log(e.target.value);
              if (e.target.value != "") {
                if (
                  e.target.value.includes("@") &&
                  e.target.value.includes(".com")
                ) {
                  console.log("not incldeed");
                  setGeneralDataErrorFlags((prev) => ({
                    ...prev,
                    EMAIl_ERROR: false,
                  }));
                } else {
                  setGeneralDataErrorFlags((prev) => ({
                    ...prev,
                    EMAIl_ERROR: true,
                  }));
                  console.log("yes");
                }
              }
            }}
            Value={GeneralData.EMAIL}
            error={GeneralDataErrorFlags?.EMAIl_ERROR}
            onChange={(e) => {
              setGeneralData((prevState) => ({
                ...prevState,
                EMAIL: e.target.value,
              }));
              setGeneralDataErrorFlags((prev) => ({
                ...prev,
                EMAIl_ERROR: false,
              }));
            }}
            helperText={
              GeneralDataErrorFlags?.EMAIl_ERROR
                ? "Please enter a valid email ID"
                : ""
            }
          />
          <Label LabelText="Country*" />
          <CustomDropdown
            Options={CountryList}
            Value={GeneralData?.COUNTRY}
            Label="Country"
            error={GeneralDataErrorFlags?.COUNTRY_ERROR}
            OnChange={(e) => {
              console.log(e);
              setGeneralData((prevState) => ({
                ...prevState,
                COUNTRY: e,
              }));
              setGeneralDataErrorFlags((prev) => ({
                ...prev,
                COUNTRY_ERROR: false,
              }));
            }}
          />
          {GeneralDataErrorFlags?.COUNTRY_ERROR && (
            <Typography
              sx={{
                fontSize: 12,
                ml: 2,
                color: COLORS.red,
              }}
            >
              Please select country
            </Typography>
          )}

          <Label LabelText="State*" />
          <CustomDropdown
            Options={GeneralData?.COUNTRY?.state_array}
            Label="State"
            error={GeneralDataErrorFlags?.STATE_ERROR}
            Value={GeneralData.STATE}
            OnChange={(e) => {
              console.log(e);
              setGeneralData((prevState) => ({
                ...prevState,
                STATE: e,
              }));
              setGeneralDataErrorFlags((prev) => ({
                ...prev,
                STATE_ERROR: false,
              }));
            }}
          />
          {GeneralDataErrorFlags?.STATE_ERROR && (
            <Typography
              sx={{
                fontSize: 12,
                ml: 2,
                color: COLORS.red,
              }}
            >
              Please select state
            </Typography>
          )}

          <Label LabelText="Pincode*" />
          <CustomInput
            Placeholder="Pincode"
            error={GeneralDataErrorFlags?.PIN_CODE_ERROR}
            Value={GeneralData.PINCODE}
            onChange={(e) => {
              if (
                e.target.value.length <=
                GeneralData?.COUNTRY?.postal_code_length
              ) {
                setGeneralData((prevState) => ({
                  ...prevState,
                  PINCODE: e.target.value,
                }));
                setGeneralDataErrorFlags((prev) => ({
                  ...prev,
                  PIN_CODE_ERROR: false,
                }));
              } else {
                cogoToast.warn(
                  "Maximum " +
                    GeneralData?.COUNTRY?.postal_code_length +
                    " latter allowed"
                );
              }
            }}
            helperText={
              GeneralDataErrorFlags?.PIN_CODE_ERROR
                ? "Please enter a valid pin code"
                : ""
            }
          />
          <Label LabelText="Time Zone" />
          <CustomInput
            Placeholder="Time Zone"
            Value={GeneralData?.COUNTRY?.timezone}
            Disabled={true}
            onChange={(e) => {
              // console.log(GeneralData?.COUNTRY);
              setGeneralData((prevState) => ({
                ...prevState,
                TIME_ZONE: e.target.value,
              }));
            }}
          />
          <Label LabelText="Fax Details" />
          <CustomInput
            Placeholder="Fax Details"
            Value={GeneralData.FAX}
            onChange={(e) => {
              setGeneralData((prevState) => ({
                ...prevState,
                FAX: e.target.value,
              }));
            }}
          />
          <Label LabelText="Company Code*" />
          <CustomInput
            Placeholder="Company Code"
            Value={GeneralData?.COMPANY_CODE}
            onChange={(e) => {
              setGeneralData((prevState) => ({
                ...prevState,
                COMPANY_CODE: e.target.value,
              }));
            }}
            onBlur={() => {
              props.setGeneralDataAction(GeneralData);
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}

// export default General;

const mapStateToProps = (state) => ({
  GENERAL_DATA: state.vendor.general_data,
});

export default connect(mapStateToProps, { setGeneralDataAction })(General);

