
import { Box, Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import CustomDropdown from "../../../components/CustomDropdown/CustomDropdown";
import CustomInput from "../../../components/CustomInput/CustomInput";
import Label from "../../../components/Label/Label";
import { setCompanyDataAction } from "../../../redux/action/vendorAction";
import axios from "axios";
import AXIOS from "../../../utils/AXIOS";

function CompanyData(props) {

  const [incoTermOption,setIncoTermOption]=useState([])
  const [CountryCurrency,setCountryCurrency]=useState([{
    label:"USD",
    value:"USD",

  },{
    label:"INR",
    value:"INR"
  }])
    const [Tbody, setTbody] = useState([]);

    useEffect(() => {
      console.log(props.COMPANY_DATA);
      setTbody(props.COMPANY_DATA);
    }, [props.COMPANY_DATA]);

    const saveCompanyData = () => {
      props.setCompanyDataAction(Tbody);
    };

    useEffect(()=>{
getIncoTermData();
    },[])

    useEffect(()=>{
      console.log("Tbskdfbjh",Tbody);
    },[Tbody])

    const getIncoTermData=()=>{
      axios.get(AXIOS.axiosUrl + AXIOS.incoTermGet).then((response)=>{
        
        console.log("response.dataadkhds", response.data);

        let tempIncoTerm=[]
        response.data.map((val)=>{
          tempIncoTerm.push({
            label: val.DESCRIPTION,
            value: val.INCOTERMS,
            LANGUAGE_KEY: val.LANGUAGE_KEY,
          });
        })
        setIncoTermOption(tempIncoTerm);
      })
    }
  return (
    <>
      <Box
        sx={{
          display: "flex",

          justifyContent: "flex-end",
        }}
      >
        {/* <Button variant="text" color="primary" sx={{ marginRight: 5 }}>
          Clear Draft
        </Button> */}
        <Button
          variant="outlined"
          color="primary"
          sx={{ marginRight: 5 }}
          onClick={() => {
            saveCompanyData();
          }}
        >
          Save
        </Button>
        {/* <Button variant="contained" color="primary">
          Submit
        </Button> */}
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
      >
        <Grid xs={6} md={0} item>
          <Label LabelText="Currency*" />
          <CustomDropdown
            Options={CountryCurrency}
            Label="Currency"
            Value={Tbody?.CURRENCY}
            OnChange={(e) => {
              console.log(Tbody);
              setTbody((prevState) => ({
                ...prevState,
                CURRENCY: e,
              }));
            }}
          />
          <Label LabelText="Turnover*" />
          <CustomInput
            Placeholder="Turnover"
            Value={Tbody?.TURNOVER}
            onChange={(e) => {
              console.log(Tbody);
              setTbody((prevState) => ({
                ...prevState,
                TURNOVER: e.target.value,
              }));
            }}
          />
          <Label LabelText="Payment term*" />
          <CustomInput
            Placeholder="Payment Term"
            Value={Tbody?.PAYMENT_TERM}
            onChange={(e) => {
              setTbody((prevState) => ({
                ...prevState,
                PAYMENT_TERM: e.target.value,
              }));
            }}
          />
        </Grid>
        <Grid xs={6} md={0} item>
          <Label LabelText="Inco Term 1*" />

          <CustomDropdown
            Label="Inco Term 1"
            Options={incoTermOption}
            Value={Tbody?.INCO_TERM_1}
            OnChange={(e) => {
              setTbody((prevState) => ({
                ...prevState,
                INCO_TERM_1: e,
              }));
            }}
          />
          <Label LabelText="Inco Term 2*" />

          <CustomDropdown
            Label="Inco Term 2"
            Options={incoTermOption}
            Value={Tbody?.INCO_TERM_2}
            OnChange={(e) => {
              setTbody((prevState) => ({
                ...prevState,
                INCO_TERM_2: e,
              }));
            }}
          />
          <Label LabelText="Procurement Plant*" />
          <CustomInput
            Placeholder="Procurement Plant"
            Value={Tbody?.PROCUREMENT_PLANT}
            onChange={(e) => {
              setTbody((prevState) => ({
                ...prevState,
                PROCUREMENT_PLANT: e.target.value,
              }));
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}

// export default CompanyData;
const mapStateToProps = (state) => ({
  COMPANY_DATA: state.vendor.company_data,
});

export default connect(mapStateToProps, {
  setCompanyDataAction,
})(CompanyData);
