import * as actionTypes from "./actionTypes";
import * as service from "./services";

export const create = (history, datap) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.BANNER_CREATE_REQUEST });
    try {
      const data = await service.create(datap);      
      dispatch({
        type: actionTypes.BANNER_CREATE_SUCCESS,
        data,
      });
      history.push({ pathname: "/banners" });
    } catch (e) {
      dispatch({
        type: actionTypes.BANNER_CREATE_FAILURE,
        error: e.message,
      });
    }
  };
};

export const read = (id = null) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.BANNER_READ_REQUEST });
    try {
      const data = await service.read(id);
      dispatch({
        type: actionTypes.BANNER_READ_SUCCESS,
        data,
      });
    } catch (e) {
      dispatch({
        type: actionTypes.BANNER_READ_FAILURE,
        error: e.message,
      });
    }
  };
};

export const update = (history, id, datap) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.BANNER_UPDATE_REQUEST });
    try {
      const data = await service.update(id, datap);
      dispatch({
        type: actionTypes.BANNER_UPDATE_SUCCESS,
        data,
      });
      history.push({ pathname: "/banners" });
    } catch (e) {
      dispatch({
        type: actionTypes.BANNER_UPDATE_FAILURE,
        error: e.message,
      });
    }
  };
}

export const remove = (id) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.BANNER_DELETE_REQUEST });
    try {
      await service.remove(id);
      dispatch({
        type: actionTypes.BANNER_DELETE_SUCCESS,
        id,
      });
    } catch (e) {
      dispatch({
        type: actionTypes.BANNER_DELETE_FAILURE,
        error: e.message,
      });
    }
  };
};
