import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Badge,
  Backdrop,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AXIOS from "../../utils/AXIOS";
// import Login from "../../screens/Login/Login";
import { connect } from "react-redux";

// import AppAvatar from "./AppAvatar";
// import SearchWithBackdrop from "./SearchWithBackdrop";

function Header(props) {
  console.log("props", props.SESSION_ID);
    const navigate = useNavigate();
        const logoutSession = (SessionType) => {
          axios
            .post(AXIOS.axiosUrl + AXIOS.logoutSession, {
              SESSION_ID: props.SESSION_ID,
              SESSION_TYPE: SessionType,
              USER_ID: props.AUTH_ID,
            })
            .then((response) => {
              localStorage.removeItem("MDM_MasterToken");
              navigate("/");
            })
            .catch((err) => {
              console.log(err);
            });
        };
  const [showSearchBackdrop, setShowSearchBackdrop] = useState(false);
  return (
    // <AppBar
    //   position="fixed"
    //   color="inherit"
    //   elevation={0}
    //   sx={{
    //     width: { lg: `calc(100% - ${props.drawerWidth}px)` },
    //     backgroundColor: "rgb(243,250,255,0.7)",
    //     // rgb(243, 250, 255)
    //     backdropFilter: "blur(10px)",
        
    //   }}
      
    // >
    //   <Toolbar>
    //     <IconButton
    //       aria-label="open drawer"
    //       size="large"
    //       color="inherit"
    //       sx={{ display: { lg: "none", xl: "none" } }}
    //       onClick={() => props.toggleDrawer(!props.showDrawer)}
    //     >
    //       <MenuRoundedIcon />
    //     </IconButton>
    //     {/* <IconButton
    //       aria-label="search button"
    //       size="large"
    //       color="inherit"
    //       onClick={() => setShowSearchBackdrop(!showSearchBackdrop)}
    //     >
    //       <SearchRoundedIcon />
    //       <SearchWithBackdrop
    //         showDialog={showSearchBackdrop}
    //         setShowDialog={setShowSearchBackdrop}
    //       />
    //     </IconButton> */}
    //     <Box
    //       sx={{
    //         display: "flex",
    //         flexGrow: 1,
    //         justifyContent: "flex-end",
    //         alignItems: "center",
    //       }}
    //     >
    //       <IconButton
    //         aria-label="show notification"
    //         size="large"
    //         color="inherit"
    //         sx={{ mr: 2 }}
    //       >
    //         <Badge badgeContent={4} color="error">
    //           <NotificationsNoneRoundedIcon />
    //         </Badge>
    //       </IconButton>
    //       <IconButton
    //         aria-label="show notification"
    //         size="large"
    //         color="inherit"
    //         sx={{ mr: 2 }}
    //       >
    //         {/* <Badge badgeContent={4} color="error"> */}
    //         <LoginRoundedIcon onClick={() => logoutSession("SINGLE")} />
    //         {/* </Badge> */}
    //       </IconButton>
    //       {/* <AppAvatar /> */}
    //     </Box>
    //   </Toolbar>
    // </AppBar>
    <div>
      
    </div>
  );
}




const mapStateToProps = (state) => ({
  AUTH_ID: state.auth.auth_id,
  SESSION_ID: state.auth.session_token,
});

export default connect(mapStateToProps)(Header);