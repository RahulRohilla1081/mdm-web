const initialState = {
  customer_general: [],
  customer_company: [],
  customer_finance: [],
  customer_sales_distribution: [],
  customer_credit_segment: [],
};

const auth = (state = initialState, action) => {
  switch (action.type) {
   
    case "SET_CUSTOMER_GENERAL_DATA":
      return {
        ...state,
        customer_general: action.customer_general,
      };
    case "SET_CUSTOMER_COMPANY_DATA":
      return {
        ...state,
        customer_company: action.customer_company,
      };
    case "SET_CUSTOMER_FINANCE_DATA":
      return {
        ...state,
        customer_finance: action.customer_finance,
      };
    case "SET_CUSTOMER_SALE_DISTRIBUTION_DATA":
      return {
        ...state,
        customer_sales_distribution: action.customer_sales_distribution,
      };
    case "SET_CREDIT_SEGMENT_DATA":
      return {
        ...state,
        customer_credit_segment: action.customer_credit_segment,
      };
    default:
      return state;
  }
};

export default auth;
