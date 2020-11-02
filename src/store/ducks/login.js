// Action Types
export const Types = {
  LOGIN_REQUEST: "login/login request",
  LOGIN_SUCCESS: "login/login success",
  LOGIN_ERRORS: "login/login errors",
  LOGIN_CLEAR: "login/login clear",
};

//Initial state
const initialState = {
  loginSuccess: undefined,
  userData: undefined,
  loading: false,
  errors: undefined
};

//Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        errors: undefined,
        userData: action.payload
      };
    case Types.LOGIN_SUCCESS:
      return {
        ...state,
        errors: undefined,
        loading: false,
        loginSuccess: true,
      };

    case Types.LOGIN_ERRORS:
      return {
        ...state,
        loading: false,
        errors: action.payload
      };

    case Types.LOGIN_CLEAR:
      return {
        ...state,
        loading: false,
        errors: undefined,
        userData: undefined,
        loginSuccess: undefined
      };


    default:
      return state;
  }
}

// Action Creators
export function loginRequest(userData) {
  return {
    type: Types.LOGIN_REQUEST,
    payload: userData
  };
}

export function loginSuccess(loginSuccess) {
  return {
    type: Types.LOGIN_SUCCESS,
    payload: loginSuccess
  };
}

export function loginErrors(errors) {
  return {
    type: Types.LOGIN_ERRORS,
    payload: errors
  };
}

export function loginClear() {
  return {
    type: Types.LOGIN_CLEAR,
  };
}
