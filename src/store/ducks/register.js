// Action Types
export const Types = {
  REGISTER_USER_REQUEST: "register/register user request",
  REGISTER_USER_SUCCESS: "register/register user success",
  REGISTER_USER_ERRORS: "register/register user errors",
};

//Initial state
const initialState = {
  registeredWithSuccess: undefined,
  userData: undefined,
  loading: false,
  errors: undefined
};

//Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.REGISTER_USER_REQUEST:
      return {
        ...state,
        loading: true,
        errors: undefined,
        userData: action.payload
      };
    case Types.REGISTER_USER_SUCCESS:
      return {
        ...state,
        errors: undefined,
        loading: false,
        registeredWithSuccess: true,
      };

    case Types.REGISTER_USER_ERRORS:
      return {
        ...state,
        loading: false,
        errors: action.payload
      };


    default:
      return state;
  }
}

// Action Creators
export function registerUserRequest(userData) {
  console.log('userData na request:', userData)
  return {
    type: Types.REGISTER_USER_REQUEST,
    payload: userData
  };
}

export function registerUserSuccess(registeredWithSuccess) {
  return {
    type: Types.REGISTER_USER_SUCCESS,
    payload: registeredWithSuccess
  };
}

export function registerUserErrors(errors) {
  return {
    type: Types.REGISTER_USER_ERRORS,
    payload: errors
  };
}
