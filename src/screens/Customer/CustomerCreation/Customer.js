import {
  Box,
  Button,
  Chip,
  CssBaseline,
  Divider,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import AppDrawer from "../../../components/AppDrawer/AppDrawer";
import MainScreen from "../../../components/AppDrawer/MainScreen";
import Header from "../../../components/AppDrawer/Header";
import {
    CUSTOMER,
  CUSTOMER_DETAILS,
  VENDOR,
  VENDOR_APPROVAL,
  VENDOR_CREATION,
  VENDOR_DETAILS,
} from "../../../utils/Routes";
import { useNavigate } from "react-router-dom";
import { COLORS } from "../../../utils/Theme";
import { SlOptionsVertical } from "react-icons/sl";
import MenuDropdown from "../../../components/MenuDropdown/MenuDropdown";
import axios from "axios";
import AXIOS from "../../../utils/AXIOS";
import { RxCross1 } from "react-icons/rx";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
// import "./styles.css";   

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

  function timeSince(date) {
    console.log("datasdade", date);
    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = seconds / 31536000;

    if (interval > 1) {
      return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  }

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 1000,
    bgcolor: "background.paper",
    border: "1px solid gray",
    boxShadow: 24,
    backgroundImage: "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)",
    p: 4,
  };

  const [showBlockUnblockButton, setShowBlockUnblockButton] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  const [TimelineModalFLag, SetTimelineModalFLag] = useState(false);
  const [TimelineData, setTimelineData] = useState([]);

  const TableHeader = [
    "Application ID",
    "Customer Name",
    "Email",
    // "Contact",
    // "Submission Status",
    "Approval Name",
    "Approval Status",
    "Action",
  ];

  useEffect(() => {
    getVendorsData();
  }, []);

  const getVendorsData = () => {
    axios.get(AXIOS.axiosUrl + AXIOS.customer_get).then((response) => {
      console.log(response.data);

      setTbody(response.data);
    });
  };
  const convertDateIntoYYYMMDD = (date) => {
    let convertDate = JSON.stringify(date);
    return convertDate.slice(1, 11);
  };

  const convertIndianStandardIntoYMD = (date) => {
    var date = new Date(date),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  };

  function calculate_age(dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }

  return (
    <>
      <Box sx={{ display: "flex" }} className="card-background">
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
            ActiveKey={CUSTOMER}
          />
        </Box>
        <MainScreen drawerWidth={drawerWidth}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <h1
              style={{
                color: "white",
              }}
            >
              Customer
            </h1>
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
              <TableHead
                // sx={{ backgroundColor: "#8000ff" }}
                className="card-background"
              >
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
              <TableBody
                sx={{
                  backgroundColor: "#3a315d",
                }}
              >
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
                    <TableCell
                      align="center"
                      key={"C1" + index}
                      style={{
                        color: "white",
                      }}
                    >
                      <Tooltip title="Customer Details">
                        <h8
                          onClick={() => {
                            navigate(CUSTOMER_DETAILS, {
                              state: {
                                id: 1,
                                name: val.USER_FULLNAME,
                                CUSTOMER_DATA: val,
                                SCREEN_NAME: "APPROVAL",
                                APPROVER_NO: "1",
                              },
                            });
                            // {
                            //   (val?.APPROVAL_FLAG == "2" ||
                            //     val?.APPROVAL_FLAG == "6") &&
                            //     navigate(CUSTOMER_DETAILS, {
                            //       state: {
                            //         id: 1,
                            //         name: val.USER_FULLNAME,
                            //         CUSTOMER_DATA: val,
                            //         SCREEN_NAME: "APPROVAL",
                            //       },
                            //     });
                            // }
                            // {
                            //   val?.APPROVAL_FLAG == "3" &&
                            //     navigate(CUSTOMER_DETAILS, {
                            //       state: {
                            //         id: 1,
                            //         name: val.USER_FULLNAME,
                            //         CUSTOMER_DATA: val,
                            //         SCREEN_NAME: "APPROVAL",
                            //         APPROVER_NO: "1",
                            //       },
                            //     });
                            // }
                            {
                              /* // vendor master // through email, pending for submition 1
                      // through email, pending for buyer approval 2 if approve
                      3 if reject 6 // 2 level flow if status == 3. //
                      approver_1 if approve 4 if rejected 7 // approver_2 if
                      approve 5 if rejected 8 // approval master // schema //
                      approver_1 approver_2 updated_on */
                            }
                            // {
                            //   (val?.APPROVAL_FLAG == "4" ||
                            //     val?.APPROVAL_FLAG == "7") &&
                            //     navigate(VENDOR_DETAILS, {
                            //       state: {
                            //         id: 1,
                            //         name: val.USER_FULLNAME,
                            //         VENDOR_DATA: val,
                            //         SCREEN_NAME: "APPROVAL",
                            //         APPROVER_NO: "2",
                            //       },
                            //     });
                            // }
                            // {
                            //   val?.APPROVAL_FLAG == "8" &&
                            //     navigate(VENDOR_DETAILS, {
                            //       state: {
                            //         id: 1,
                            //         name: val.USER_FULLNAME,
                            //         VENDOR_DATA: val,
                            //         SCREEN_NAME: "APPROVAL",
                            //         APPROVER_NO: "1",
                            //       },
                            //     });
                            // }
                          }}
                          style={{
                            color:
                              val?.APPROVAL_FLAG == "1" ? null : COLORS.white,
                            fontSize: 16,
                            fontWeight: "bold",
                            cursor: "pointer",
                          }}
                        >
                          {val.CUSTOMER_ID}
                        </h8>
                      </Tooltip>
                    </TableCell>

                    <TableCell
                      align="center"
                      key={"C2" + index}
                      style={{
                        color: "white",
                      }}
                    >
                      {val.TITLE+val.NAME_1 +val.NAME_2}
                    </TableCell>
                    <TableCell
                      align="center"
                      key={"C3" + index}
                      style={{
                        color: "white",
                      }}
                    >
                      {val.EMAIL}
                    </TableCell>
                    <TableCell
                      align="center"
                      key={"C3" + index}
                      style={{
                        color: "white",
                      }}
                    >
                      Approver name
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
                    <TableCell
                      align="center"
                      key={"C3" + index}
                      style={{
                        color: "white",
                      }}
                    >
                      {val?.APPROVAL_FLAG == "1" && (
                        <Chip
                          size="big"
                          label="Pending"
                          sx={{
                            backgroundColor: COLORS.orange,
                            color: COLORS.white,
                          }}
                        />
                      )}
                      {val?.APPROVAL_FLAG == "2" && (
                        <Chip
                          size="small"
                          label="Approved"
                          sx={{
                            backgroundColor: COLORS.success,
                            color: COLORS.white,
                          }}
                        />
                      )}
                      {val?.APPROVAL_FLAG == "3" && (
                        <Chip
                          size="small"
                          label="Reject"
                          sx={{
                            backgroundColor: COLORS.red,
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
                          MenuLabel1="Timeline"
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
                          MenuOnCLick1={() => {
                            setTimelineData(val.TIMELINE);
                            SetTimelineModalFLag(true);
                          }}
                        />
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Modal
            open={TimelineModalFLag}
            onClose={() => {
              SetTimelineModalFLag(false);
            }}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  id="modal-modal-title"
                  variant="h6"
                  component="h2"
                  style={{
                    fontWeight: "bold",
                  }}
                >
                  Timeline
                </Typography>
                <Box
                  onClick={() => {
                    SetTimelineModalFLag(false);
                  }}
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <RxCross1 />
                </Box>
              </Box>
              <Divider />
              <Box
                className="ModalScroll"
                style={{
                  padding: 5,
                }}
              >
                <VerticalTimeline>
                  {TimelineData.map((val, index) => (
                    <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      contentStyle={{
                        background:
                          index % 2 == 0
                            ? "rgb(33, 150, 243)"
                            : "rgb(233, 30, 99)",
                        color: "#000",
                      }}
                      contentArrowStyle={{
                        borderRight: "7px solid  #000",
                      }}
                      date={
                        index == TimelineData.length - 1
                          ? timeSince(new Date(val.ACTION_TIME))
                          : convertIndianStandardIntoYMD(val.ACTION_TIME)
                      }
                      iconStyle={{
                        background:
                          index % 2 == 0
                            ? "rgb(33, 150, 243)"
                            : "rgb(233, 30, 99)",
                        color: "#fff",
                      }}
                      // icon={<WorkIcon />}
                    >
                      <h3 className="vertical-timeline-element-title">
                        {val.ACTION_NAME}
                      </h3>
                    </VerticalTimelineElement>
                  ))}

                  {/* <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2002 - 2006"
                    contentStyle={{
                      background: "rgb(233, 30, 99)",
                      color: "#000",
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid  rgb(233, 30, 99)",
                    }}
                    iconStyle={{
                      background: "rgb(233, 30, 99)",
                      color: "#fff",
                    }}

                    // icon={<SchoolIcon />}
                  >
                    <h3 className="vertical-timeline-element-title">
                      Bachelor of Science in Interactive Digital Media Visual
                      Imaging
                    </h3>
                  </VerticalTimelineElement> */}
                </VerticalTimeline>
              </Box>
            </Box>
          </Modal>
        </MainScreen>
      </Box>
    </>
  );
}

export default VendorApproval;
