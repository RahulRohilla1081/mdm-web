import { Avatar, Box, Button, ButtonGroup, Grid, Tooltip } from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomInput from "../../../components/CustomInput/CustomInput";
import IconButton from "../../../components/IconButton/IconButton";
import Label from "../../../components/Label/Label";
import { SlOptionsVertical } from "react-icons/sl";
import ICONS from "../../../utils/ICONS";
import { setTaxDataAction } from "../../../redux/action/vendorAction";
import { connect } from "react-redux";
import cogoToast from "cogo-toast";

function TaxData(props) {
  const [TaxData, setTaxData] = useState([]);

  useEffect(() => {
    
    setTaxData(props.TAX_DATA);
    
  }, [props.TAX_DATA]);

  const saveTaxData = () => {
    props.setTaxDataAction(TaxData);
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
            saveTaxData();
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
      >
        <Grid xs={6} md={0} item>
          <Label LabelText="GST Number" />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <CustomInput
              Placeholder="GST Number"
              Value={TaxData?.GST_NUMBER}
              onChange={(e) => {
                if (e.target.value.length <= 15) {
                  setTaxData((prevState) => ({
                    ...prevState,
                    GST_NUMBER: e.target.value,
                  }));
                } else {
                  cogoToast.warn("Maximum length 15 only");
                }
              }}
              Style={{
                width: "100%",
              }}
            />
            <Tooltip title={"Upload Image"}>
              <Button variant="text" component={"label"}>
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
                    console.log(e.target.files[0].name);
                    setTaxData((prevState) => ({
                      ...prevState,
                      GST_NUMBER_FILE: e.target.files[0],
                      GST__NUMBER_FILE_NAME: e.target.files[0].name,
                    }));
                  }}
                />
              </Button>
            </Tooltip>
          </Box>
          <Label LabelText="Pan Number" />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <CustomInput
              Placeholder="Pan Number"
              Value={TaxData?.PAN_NUMBER}
              onChange={(e) => {
                if (e.target.value.length <= 10) {
                  setTaxData((prevState) => ({
                    ...prevState,
                    PAN_NUMBER: e.target.value,
                  }));
                } else {
                  cogoToast.warn("Maximum length 10 only");
                }
              }}
              Style={{
                width: "100%",
              }}
            />
            <Tooltip title={"Upload Image"}>
              <Button variant="text" component={"label"}>
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
                    setTaxData((prevState) => ({
                      ...prevState,
                      PAN_NUMBER_FILE: e.target.files[0],
                    }));
                  }}
                />
              </Button>
            </Tooltip>
          </Box>
          <Label LabelText="CIN Number" />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <CustomInput
              Placeholder="CIN Number"
              Value={TaxData?.CIN_NUMBER}
              onChange={(e) => {
                if (e.target.value.length <= 21) {
                  setTaxData((prevState) => ({
                    ...prevState,
                    CIN_NUMBER: e.target.value,
                  }));
                } else {
                  cogoToast.warn("Maximum length 21 only");
                }
              }}
              Style={{
                width: "100%",
              }}
            />
            <Tooltip title={"Upload Image"}>
              <Button variant="text" component={"label"}>
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
                    setTaxData((prevState) => ({
                      ...prevState,
                      CIN_NUMBER_FILE: e.target.files[0],
                    }));
                  }}
                />
              </Button>
            </Tooltip>
          </Box>
        </Grid>
        <Grid xs={6} md={0} item>
          <Label LabelText="MSME Number" />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <CustomInput
              Placeholder="MSME Number"
              Value={TaxData?.MSME_NUMBER}
              onChange={(e) => {
                if (e.target.value.length <= 12) {
                  setTaxData((prevState) => ({
                    ...prevState,
                    MSME_NUMBER: e.target.value,
                  }));
                } else {
                  cogoToast.warn("Maximum length 12 only");
                }
              }}
              Style={{
                width: "100%",
              }}
            />
            <Tooltip title={"Upload Image"}>
              <Button variant="text" component={"label"}>
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
                    setTaxData((prevState) => ({
                      ...prevState,
                      MSME_NUMBER_FILE: e.target.files[0],
                    }));
                  }}
                />
              </Button>
            </Tooltip>
          </Box>
          <Label LabelText="Aadhar Number" />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <CustomInput
              Placeholder="Aadhar Number"
              Value={TaxData?.AADHAR_NUMBER}
              onChange={(e) => {
                if (e.target.value.length <= 16) {
                  setTaxData((prevState) => ({
                    ...prevState,
                    AADHAR_NUMBER: e.target.value,
                  }));
                } else {
                  cogoToast.warn("Maximum length 40 only");
                }
              }}
              Style={{
                width: "100%",
              }}
            />
            <Tooltip title={"Upload Image"}>
              <Button variant="text" component={"label"}>
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
                    setTaxData((prevState) => ({
                      ...prevState,
                      AADHAR_NUMBER_FILE: e.target.files[0],
                    }));
                  }}
                />
              </Button>
            </Tooltip>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

const mapStateToProps = (state) => ({
  TAX_DATA: state.vendor.tax_data,
});

export default connect(mapStateToProps, { setTaxDataAction })(TaxData);
