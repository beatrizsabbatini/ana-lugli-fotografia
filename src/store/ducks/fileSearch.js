// Action Types
export const Types = {
  GET_FILTERED_FILES_REQUEST: "files/get filtered files request",
  GET_FILTERED_FILES_SUCCESS: "files/get filtered files success",
  GET_FILTERED_FILES_ERRORS: "files/get filtered files errors",
};

//Initial state
const initialState = {
  files: undefined,
  loading: false,
  errors: undefined
};

//Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.GET_FILTERED_FILES_REQUEST:
      return {
        ...state,
        loading: true,
        errors: undefined,
      };
    case Types.GET_FILTERED_FILES_SUCCESS:
      return {
        ...state,
        errors: undefined,
        loading: false,
        files: action.payload
      };

    case Types.GET_FILTERED_FILES_ERRORS:
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
export function getFilteredFilesRequest(query) {
  return {
    type: Types.GET_FILTERED_FILES_REQUEST,
    payload: query
  };
}

export function getFilteredFilesSuccess(files) {
  return {
    type: Types.GET_FILTERED_FILES_SUCCESS,
    payload: files
  };
}

export function getFilteredFilesErrors(errors) {
  return {
    type: Types.GET_FILTERED_FILES_ERRORS,
    payload: errors
  };
}
