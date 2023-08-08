export const setCustomerGeneralDataAction = (CustomerGeneralData) => (dispatch) => {
  dispatch({
    type: "SET_CUSTOMER_GENERAL_DATA",
    customer_general: CustomerGeneralData,
  });
};
export const setCustomerCompanyDataAction = (customerCompanyData) => (dispatch) => {
  dispatch({
    type: "SET_CUSTOMER_COMPANY_DATA",
    customer_company: customerCompanyData,
  });
};

export const setCustomerFinanceAction = (customerFinanceData) => (dispatch) => {
  dispatch({
    type: "SET_CUSTOMER_FINANCE_DATA",
    customer_finance: customerFinanceData,
  });
};

export const setCustomerSalesDistributionAction =
  (customerSalesDistributionData) => (dispatch) => {
    dispatch({
      type: "SET_CUSTOMER_SALE_DISTRIBUTION_DATA",
      customer_sales_distribution: customerSalesDistributionData,
    });
  };
export const setCreditSegmentAction =
  (creditSegmentData) => (dispatch) => {
    dispatch({
      type: "SET_CREDIT_SEGMENT_DATA",
      customer_credit_segment: creditSegmentData,
    });
  };
