import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { DASHBOARD } from '../../utils/Routes'

import "./style.css"
import { Backdrop } from '@mui/material';
import { useDispatch } from 'react-redux';
import platform from "platform";
import axios from 'axios';
import AXIOS from '../../utils/AXIOS';
import cogoToast from 'cogo-toast';
// import LoadingAnimation from "../../assets/lottie/loading.json";
import Lottie from "react-lottie-player";
function Login() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [ShowLoadingScreen, setShowLoadingScreen] = useState(true);

      const [IP_ADDRESS, setIP_ADDRESS] = useState("");
    
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  useEffect(() => {
    getUserIP();

    var sessionID = localStorage.getItem("MDM_MasterToken");
    console.log(sessionID);

    if (sessionID != null) {
      GetDataFromSessionID(sessionID);
    } else {
      setShowLoadingScreen(false);
    }
  }, []);

    const getUserIP = async () => {
      await axios.get("https://geolocation-db.com/json/").then((response) => {
        setIP_ADDRESS(response.data.IPv4);
      });
    };

     const GetDataFromSessionID = async (SESSION_ID) => {
       await axios
         .get(AXIOS.axiosUrl + AXIOS.verifySessionToken + SESSION_ID)
         .then((response) => {
           console.log("SESSION ID", response.data);
           setShowLoadingScreen(false);
           // .setItem("MDM_MasterToken", SESSION_ID);

           // var CURRENT_ACTIVITY = new Date();
           // var LAST_ACTIVITY = new Date(response.data.session_data[0].LAST_ACTIVITY);
           // var result = CURRENT_ACTIVITY.getMinutes() - LAST_ACTIVITY.getMinutes();
           dispatch({
             type: "AUTH_DATA_GET",
             auth_id: response.data[0]?.USER_ID,
             auth_name: response.data[0]?.USER_FULLNAME,
             auth_contact: response.data[0]?.CONTACT,
             auth_email: response.data[0]?.USER_EMAIL,
             auth_gender: response.data[0]?.GENDER,
             roles_access: response.data[0]?.ROLE_ID,
             session_token: response.data[0]?.SESSION_ID,
             ip_address: response.data[0]?.IP_ADDRESS,
             last_activity: response.data[0]?.LAST_ACTIVITY,
             user_device: response.data[0]?.USER_DEVICE,
             customer_id: response.data[0]?.CUSTOMER_ID,
           });

           navigate(DASHBOARD);

           // if (response.data.session_data[0].ROLE_ID.includes("ADMIN")) {
           //   console.log("ADMIN true");
           // } else if (response.data.session_data[0].ROLE_ID.includes("STUDENT")) {
           //   navigate(DASHBOARD);
           //   console.log("true");
           // } else {
           //   console.log("false");
           // }
         })
         .catch((err) => {
           cogoToast.error("Something went wrong");
           setShowLoadingScreen(false);
         });
     };

const handleSubmit = () => {

if(UserName==""){
  cogoToast.warn("Username is required")
}
if(Password==""){
  cogoToast.warn("password is required")
}
if(UserName!="" && Password!=""){

  // console.log({
  //   USER_ID: UserName,
  //   PASSWORD: Password,
  //   IP_ADDRESS: IP_ADDRESS,
  //   USER_DEVICE: platform.name,
  //   LAST_ACTIVITY: new Date(),
  // });
  axios
    .post(AXIOS.axiosUrl + AXIOS.loginSessionCreate, {
      USER_ID: UserName,
      PASSWORD: Password,
      IP_ADDRESS: IP_ADDRESS,
      USER_DEVICE: platform.name,
      LAST_ACTIVITY: new Date(),
    })
    .then((response) => {
      console.log("USER DATA", response.data);
      if (response.data.idError == 1) {
        cogoToast.error("Account does not exist");
      } else if (response.data.passwordError == 1) {
        cogoToast.error("Incorrect Email or password");
      } else if (response.data.isVerifiedError == 1) {
        cogoToast.error("Please verify your email address");
      } else if (response.data.isPasswordResetError == 1) {
        cogoToast.error("Please reset your password");
      } else {
        console.log("response.dataaskhdh", response.data);

        localStorage.setItem("MDM_MasterToken", response.data.SESSION_ID);

        dispatch({
          type: "AUTH_DATA_GET",
          is_auth: true,
          auth_id: response.data.data[0]?.USER_ID,
          auth_name: response.data.data[0]?.USER_FULLNAME,
          auth_contact: response.data.data[0]?.CONTACT,
          auth_email: response.data.data[0]?.USER_EMAIL,
          auth_gender: response.data.data[0]?.GENDER,
          roles_access: response.data.data[0]?.ROLE_ID,
          session_token: response.data.SESSION_ID,
          ip_address: response.data.data[0]?.IP_ADDRESS,
          last_activity: response.data.data[0]?.LAST_ACTIVITY,
          user_device: response.data.data[0]?.USER_DEVICE,
          customer_id: response.data.data[0]?.CUSTOMER_ID,
        
        });
        navigate(DASHBOARD);
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
};



  return (
    <div className="mainContainer">
      {/* <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={ShowLoadingScreen}
        // onClick={handleClose}
      >
        <Lottie
          loop
          animationData={LoadingAnimation}
          play
          style={{
            width: 200,
            height: 200,
          }}
        />
      </Backdrop> */}
      <div className="container">
        <div className="form_main" >
          <p className="heading">Login</p>
          <div className="inputContainer">
            <svg
              viewBox="0 0 16 16"
              fill="#2e2e2e"
              height={16}
              width={16}
              xmlns="http://www.w3.org/2000/svg"
              className="inputIcon"
            >
              <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z" />
            </svg>
            <input
              placeholder="Username"
              id="username"
              className="inputField"
              type="text"
              value={UserName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </div>
          <div className="inputContainer">
            <svg
              viewBox="0 0 16 16"
              fill="#2e2e2e"
              height={16}
              width={16}
              xmlns="http://www.w3.org/2000/svg"
              className="inputIcon"
            >
              <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
            </svg>
            <input
              placeholder="Password"
              id="password"
              className="inputField"
              type="password"
              value={Password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button id="button" onClick={()=>{
            handleSubmit();
          }}>Submit</button>
          <div className="signupContainer">
            <Link to="">Forgot Password?</Link>
            {/* <a href="#">Sign up</a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login