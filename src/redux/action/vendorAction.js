export const setGeneralDataAction = (General_data) => (dispatch) => {
    dispatch({
      type: "SET_GENERAL_DATA",
      general_data: General_data,
    });
}
export const setTaxDataAction = (TaxData) => (dispatch) => {
    dispatch({
      type: "SET_TAX_DATA",
      tax_data: TaxData,
    });
}
export const setBankDetailsAction = (BankDetails) => (dispatch) => {
    dispatch({
      type: "SET_BANK_DETAILS_DATA",
      bank_details_data: BankDetails,
    });
}
export const setCompanyDataAction = (CompanyData) => (dispatch) => {
    dispatch({
      type: "SET_COMPANY_DATA",
      company_data: CompanyData,
    });
}
export const setContactPersonAction = (ContactPerson) => (dispatch) => {
    dispatch({
      type: "SET_CONTACT_PERSON_DATA",
      contact_person: ContactPerson,
    });
}
export const setAdditionalInformationAction = (Additional_info) => (dispatch) => {
  dispatch({
    type: "SET_ADDITIONAL_INFO_DATA",
    additional_info: Additional_info,
  });
};
