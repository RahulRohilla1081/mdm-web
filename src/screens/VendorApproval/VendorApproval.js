

import {
  Box,
  Button,
  Chip,
  CssBaseline,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Tooltip,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import AppDrawer from "../../components/AppDrawer/AppDrawer";
import MainScreen from "../../components/AppDrawer/MainScreen";
import Header from "../../components/AppDrawer/Header";
import { VENDOR, VENDOR_APPROVAL, VENDOR_CREATION, VENDOR_DETAILS } from "../../utils/Routes";
import { useNavigate } from "react-router-dom";
import { COLORS } from "../../utils/Theme";
import { SlOptionsVertical } from "react-icons/sl";
import MenuDropdown from "../../components/MenuDropdown/MenuDropdown";
import axios from "axios";
import AXIOS from "../../utils/AXIOS";

const drawerWidth = 280;
function VendorApproval() {
  const navigate = useNavigate();
  const [Tbody, setTbody] = useState([
    // {
    //   VENDOR_ID: "V00001",
    //   VENDOR_NAME: "Test vendor",
    //   VENDOR_EMAIL: "vendor@gmail.com",
    //   VENDOR_CONTACT: "12344875438",
    // },
  ]);

  const [showBlockUnblockButton, setShowBlockUnblockButton] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);

  const TableHeader = [
    "Application ID",
    "Vendor Name",
    "Email",
    // "Contact",
    // "Submission Status",
    "Approval Status",
    "Action",
  ];

  useEffect(()=>{
    getVendorsData();
  },[])

  const getVendorsData=()=>{
    axios.get(AXIOS.axiosUrl + AXIOS.vendorGet).then((response)=>{
      console.log(response.data);

      setTbody(response.data);


    })
  }
  return (
    <>
      <Box sx={{ display: "flex", backgroundColor: "#fff", height: "100vh" }}>
        <CssBaseline />
        <Header
          drawerWidth={drawerWidth}
          toggleDrawer={setShowDrawer}
          showDrawer={showDrawer}
        />
        <Box component="nav">
          <AppDrawer
            drawerWidth={drawerWidth}
            toggleDrawer={setShowDrawer}
            showDrawer={showDrawer}
            ActiveKey={VENDOR_APPROVAL}
          />
        </Box>
        <MainScreen drawerWidth={drawerWidth}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <h1>Vendor</h1>
            <Box>
              <Button
                variant="outlined"
                component={"label"}
                sx={{
                  ml: 2,
                }}
              >
                Upload Excel
                <input
                  hidden
                  type="file"
                  accept="image/jpg , image/png"
                  // onChange={(e) => setStudentProfileImage(e.target.files[0])}
                />
              </Button>
            </Box>
          </Box>

          <TableContainer component={Paper}>
            {showBlockUnblockButton && (
              <>
                <Button
                  color="error"
                  variant="outlined"
                  sx={{
                    m: 2,
                  }}
                >
                  Block
                </Button>
                <Button color="success" variant="outlined">
                  UnBlock
                </Button>
              </>
            )}
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead sx={{ backgroundColor: COLORS.primary }}>
                <TableRow>
                  <TableCell
                    align="center"
                    // key={index}
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: 18,
                    }}
                  >
                    <input
                      type="checkbox"
                      onChange={() => {
                        setShowBlockUnblockButton(!showBlockUnblockButton);
                      }}
                    />
                  </TableCell>
                  {/* {showBlockUnblockButton && (
                    <TableCell
                      align="center"
                      // key={index}
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: 18,
                      }}
                    >
                     
                    </TableCell>
                  )} */}

                  {TableHeader.map((val, index) => {
                    return (
                      <TableCell
                        align="center"
                        key={index}
                        style={{
                          color: "white",
                          fontWeight: "bold",
                          fontSize: 18,
                        }}
                      >
                        {val}
                      </TableCell>
                    );
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {Tbody.map((val, index) => (
                  <TableRow
                    key={"R1" + index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      align="center"
                      // key={index}
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: 18,
                      }}
                    >
                      <input type="checkbox" />
                    </TableCell>
                    <TableCell align="center" key={"C1" + index}>
                      <Tooltip title="Vendor Details">
                        <h8
                          onClick={() => {
                            {
                              (val.APPROVAL_FLAG == "2" ||
                                val.APPROVAL_FLAG == "6") &&
                                navigate(VENDOR_CREATION, {
                                  state: {
                                    id: 1,
                                    name: val.USER_FULLNAME,
                                    VENDOR_DATA: val,
                                    SCREEN_NAME: "APPROVAL",
                                  },
                                });
                            }
                            {
                              val.APPROVAL_FLAG == "3" &&
                                navigate(VENDOR_DETAILS, {
                                  state: {
                                    id: 1,
                                    name: val.USER_FULLNAME,
                                    VENDOR_DATA: val,
                                    SCREEN_NAME: "APPROVAL",
                                    APPROVER_NO: "1",
                                  },
                                });
                            }
                            {
                              /* // vendor master // through email, pending for submition 1
                      // through email, pending for buyer approval 2 if approve
                      3 if reject 6 // 2 level flow if status == 3. //
                      approver_1 if approve 4 if rejected 7 // approver_2 if
                      approve 5 if rejected 8 // approval master // schema //
                      approver_1 approver_2 updated_on */
                            }
                            {
                              (val.APPROVAL_FLAG == "4" ||
                                val.APPROVAL_FLAG == "7") &&
                                navigate(VENDOR_DETAILS, {
                                  state: {
                                    id: 1,
                                    name: val.USER_FULLNAME,
                                    VENDOR_DATA: val,
                                    SCREEN_NAME: "APPROVAL",
                                    APPROVER_NO: "2",
                                  },
                                });
                            }
                            {
                              val.APPROVAL_FLAG == "8" &&
                                navigate(VENDOR_DETAILS, {
                                  state: {
                                    id: 1,
                                    name: val.USER_FULLNAME,
                                    VENDOR_DATA: val,
                                    SCREEN_NAME: "APPROVAL",
                                    APPROVER_NO: "1",
                                  },
                                });
                            }
                          }}
                          style={{
                            color:
                              val.APPROVAL_FLAG == "1" ? null : COLORS.primary,
                            fontSize: 16,
                            cursor: "pointer",
                          }}
                        >
                          {val.APPLICATION_ID}
                        </h8>
                      </Tooltip>
                    </TableCell>

                    <TableCell align="center" key={"C2" + index}>
                      {val.NAME}
                    </TableCell>
                    <TableCell align="center" key={"C3" + index}>
                      {val.EMAIL}
                    </TableCell>

                    {/* <TableCell align="center" key={"C3" + index}>
                      {val.SUBMITTED_FLAG == false ? (
                        <Chip
                          size="small"
                          label="Pending"
                          sx={{
                            backgroundColor: COLORS.orange,
                            color: COLORS.white,
                          }}
                        />
                      ) : (
                        <Chip
                          size="small"
                          label="Submitted"
                          sx={{
                            backgroundColor: COLORS.success,
                            color: COLORS.white,
                          }}
                        />
                      )}
                    </TableCell> */}
                    <TableCell align="center" key={"C3" + index}>
                      {val.APPROVAL_FLAG == "1" && (
                        <Chip
                          size="small"
                          label="Pending for submission"
                          sx={{
                            backgroundColor: COLORS.orange,
                            color: COLORS.white,
                          }}
                        />
                      )}
                      {val.APPROVAL_FLAG == "2" && (
                        <Chip
                          size="small"
                          label="Pending for Buyer Approval"
                          sx={{
                            backgroundColor: COLORS.orange,
                            color: COLORS.white,
                          }}
                        />
                      )}
                      {val.APPROVAL_FLAG == "3" && (
                        <Chip
                          size="small"
                          label="Approved By buyer"
                          sx={{
                            backgroundColor: COLORS.success,
                            color: COLORS.white,
                          }}
                        />
                      )}
                      {val.APPROVAL_FLAG == "6" && (
                        <Chip
                          size="small"
                          label="Rejected by buyer"
                          sx={{
                            backgroundColor: COLORS.danger,
                            color: COLORS.white,
                          }}
                        />
                      )}

                      {val.APPROVAL_FLAG == "4" && (
                        <Chip
                          size="small"
                          label="Approved by Approver 1"
                          sx={{
                            backgroundColor: COLORS.success,
                            color: COLORS.white,
                          }}
                        />
                      )}

                      {val.APPROVAL_FLAG == "7" && (
                        <Chip
                          size="small"
                          label="Rejected By Approver 1"
                          sx={{
                            backgroundColor: COLORS.danger,
                            color: COLORS.white,
                          }}
                        />
                      )}
                      {val.APPROVAL_FLAG == "5" && (
                        <Chip
                          size="small"
                          label="Approved by Approver 2"
                          sx={{
                            backgroundColor: COLORS.success,
                            color: COLORS.white,
                          }}
                        />
                      )}
                      {val.APPROVAL_FLAG == "8" && (
                        <Chip
                          size="small"
                          label="Rejected By Approver 2"
                          sx={{
                            backgroundColor: COLORS.danger,
                            color: COLORS.white,
                          }}
                        />
                      )}
                    </TableCell>
                    <TableCell align="center">
                      <div
                        style={{
                          cursor: "pointer",
                        }}
                      >
                        <MenuDropdown
                          Icon={SlOptionsVertical}
                          MenuLabel0="Approve"
                          MenuLabel1="Reject"
                          MenuOnCLick0={() => {
                            navigate(VENDOR_DETAILS, {
                              state: {
                                id: 1,
                                name: val.USER_FULLNAME,
                                value: val.USER_ID,
                                SCREEN_NAME: "APPROVAL",
                                // StudentData: val,
                              },
                            });
                          }}
                          MenuOnCLick1={() => {}}
                        />
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </MainScreen>
      </Box>
    </>
  );
}

export default VendorApproval;
