import * as actionTypes from "./actionTypes";

const initialState = {
  data: null,
  error: null,
  isFetching: false,
};

export const bannerReducer = (state = initialState, action) => {
  switch (action.type) {
    /* create */
    case actionTypes.BANNER_CREATE_REQUEST:
      return {
        ...state,
        error: null,
        isFetching: true,
      };
    case actionTypes.BANNER_CREATE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    case actionTypes.BANNER_CREATE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        data: [...state.data, action.data],
      };

    /* read */
    case actionTypes.BANNER_READ_REQUEST:
      return {
        ...state,
        error: null,
        data: state.data,
        isFetching: true,
      };
    case actionTypes.BANNER_READ_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    case actionTypes.BANNER_READ_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        data: action.data,
      };

    /* delete */
    case actionTypes.BANNER_DELETE_REQUEST:
      return {
        ...state,
        error: null,
        isFetching: true,
      };
    case actionTypes.BANNER_DELETE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    case actionTypes.BANNER_DELETE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        data: state.data.filter((item) => item.id !== action.id),
      };

    /* update */
    case actionTypes.BANNER_UPDATE_REQUEST:
      return {
        ...state,
        error: null,
        isFetching: true,
      };
    case actionTypes.BANNER_UPDATE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    case actionTypes.BANNER_UPDATE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        data: state.data.map((item) =>
          item.id === action.data.id
            ? {
                ...item,
                ...action.data,
              }
            : item
        ),
      };

    default:
      return state;
  }
};
