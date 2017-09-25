//INITIAL STATE
let initialState = {
  loanType: 'Home Purchase',
  propertyType: 'Single Family Home',
  city: '',
  propToBeUsedOn: '',
  found: false,
  realEstateAgent: "false",
  cost: 0,
  downPayment: 0,
  credit: '',
  history: '',
  addressOne: '',
  addressTwo: '',
  addressThree: '',
  firstName: '',
  lastName: '',
  email: ''
};

//CONSTANTS
const UPDATE_LOAN_TYPE = "UPDATE_LOAN_TYPE";
const UPDATE_PROPERTY_TYPE = "UPDATE_PROPERTY_TYPE";

//ACTION CREATORS
export function updateLoanType(loanType){
  return {
    type: UPDATE_LOAN_TYPE,
    payload: loanType
  };
};

export function updatePropertyType(propertyType){
  return {
    type: UPDATE_PROPERTY_TYPE,
    payload: propertyType
  };
};

//REDUCER
function reducer(state = initialState, action){
  switch (action.type) {
    case UPDATE_LOAN_TYPE:
      return Object.assign({},state,{loanType: action.payload});
    case UPDATE_PROPERTY_TYPE:
      return Object.assign({},state,{propertyType: action.payload});
    default:
      return state;
  }
};

export default reducer;
