// Action Types
export const Types = {
  GET_BANNER_ITEMS_REQUEST: "banner/get banner items request",
  GET_BANNER_ITEMS_SUCCESS: "banner/get banner items success",
  GET_BANNER_ITEMS_ERRORS: "banner/get banner items errors",
};

//Initial state
const initialState = {
  items: undefined,
  loading: false,
  errors: undefined
};

//Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.GET_BANNER_ITEMS_REQUEST:
      return {
        ...state,
        loading: true,
        errors: undefined,
      };
    case Types.GET_BANNER_ITEMS_SUCCESS:
      return {
        ...state,
        errors: undefined,
        loading: false,
        items: action.payload
      };

    case Types.GET_BANNER_ITEMS_ERRORS:
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
export function getBannerItemsRequest() {
  return {
    type: Types.GET_BANNER_ITEMS_REQUEST,
  };
}

export function getBannerItemsSuccess(items) {
  return {
    type: Types.GET_BANNER_ITEMS_SUCCESS,
    payload: items
  };
}

export function getBannerItemsErrors(errors) {
  return {
    type: Types.GET_BANNER_ITEMS_ERRORS,
    payload: errors
  };
}
