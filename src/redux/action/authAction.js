import axios from "axios";
import AXIOS from "../../utils/AXIOS";
import cogoToast from "cogo-toast";

export const setAuthDataOnRender = () => (dispatch) => {
  var sessionID = localStorage.getItem("MDM_MasterToken");
  console.log("s", AXIOS.axiosUrl + AXIOS.verifySessionToken + sessionID);

  if (sessionID != null) {
    axios
      .get(AXIOS.axiosUrl + AXIOS.verifySessionToken + sessionID)
      .then((response) => {
        console.log("SESSION DATA AUTH:->", response.data);
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
      })
      .catch((err) => {
        cogoToast.error("Something went  wrong");
      });
  }
  // dispatch({
  //   type: "AUTH_DATA_GET",
  //   is_auth: IS_AUTH,
  //   auth_id: AUTH_ID,
  //   auth_name: AUTH_NAME,
  //   auth_contact: AUTH_CONTACT,
  //   auth_email: AUTH_EMAIL,
  //   auth_gender: AUTH_GENDER,
  //   // screen_access: SCREEN_ACCESS,
  //   // components_access: COMPONENT_ACCESS,
  //   // roles_access: ROLES_ACCESS,
  //   session_token: SESSION_TOKEN,
  // });
};

export const logoutSession = () => (dispatch) => {
  dispatch({
    type: "AUTH_SESSION_LOGOUT",
    is_auth: false,
    auth_id: null,
    auth_name: null,
    auth_contact: null,
    auth_email: null,
    auth_gender: null,
    screen_access: [],
    components_access: [],
    session_token: null,
    roles_access: [],
  });
};
