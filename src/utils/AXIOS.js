const axiosUrl = "http://103.205.66.63:9005/";
// const axiosUrl = "http://localhost:9005/";
const vendorCreate = "api/vendor/vendor_create";
// http://20.235.65.74:9005/api/vendor/vendor_create
const vendorUpdate=""
const vendorGet = "api/vendor/vendor_get";
const incoTermGet = "api/incoterms/incoterms_get";
const VendorDataFromApplication =
  "api/vendor/vendor_get_by_application_id?APPLICATION_ID=";
  const vendorFormCreationURLEmail = "api/vendor/vendor_email_send";
  const vendor_create_otp_send = "api/vendor/vendor_create_OTP_send";
  const vendor_create_otp_verification = "api/vendor/OTP_verification";
  const country_master = "api/time_zone/country_master_get";
  const loginSessionCreate="api/login/login_validate_session_create";
  const verifySessionToken ="api/login/session_get?SESSION_ID=";
  const logoutSession ="api/login/logout_session_delete";
  const vendor_approve_reject = "api/vendor/vendor_approval_update";
  const createVendorSAP ="api/vendor/data_send_to_sap";
  const sap_created_vendor_get ="api/vendor/sap_created_vendor_get";
export default {
  axiosUrl,
  vendorCreate,
  vendorUpdate,
  VendorDataFromApplication,
  vendorFormCreationURLEmail,
  vendor_create_otp_send,
  vendor_create_otp_verification,
  country_master,
  vendorGet,
  incoTermGet,
  loginSessionCreate,
  verifySessionToken,
  logoutSession,
  vendor_approve_reject,
  createVendorSAP,
  sap_created_vendor_get,
};