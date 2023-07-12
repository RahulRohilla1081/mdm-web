const initialState = {
  general_data: [],
  tax_data: [],
  bank_details_data: [],
  company_data: [],
  contact_person: [],
  final_details: [],
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case "SET_GENERAL_DATA":
      return {
        ...state,
        general_data: action.general_data,
      };
    case "SET_TAX_DATA":
      return {
        ...state,
        tax_data: action.tax_data,
      };
    case "SET_BANK_DETAILS_DATA":
      return {
        ...state,
        bank_details_data: action.bank_details_data,
      };
    case "SET_COMPANY_DATA":
      return {
        ...state,
        company_data: action.company_data,
      };
    case "SET_CONTACT_PERSON_DATA":
      return {
        ...state,
        contact_person: action.contact_person,
      };
    case "SET_ADDITIONAL_INFO_DATA":
      return {
        ...state,
        additional_info: action.additional_info,
      };
    default:
      return state;
  }
};

export default auth;
