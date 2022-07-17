import axios from "axios";
import {
  USER_LOGIN_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_ADMIN,
  USER_LOGOUT,
  USER_DETAILS_RESET,
  ORDER_LIST_MY_RESET,
  USER_LIST_RESET,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  USER_LIST_REQUEST,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAIL,
  USER_DELETE_REQUEST,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
  USER_UPDATE_REQUEST,
} from "../../constants/userConstants";
import { AC_MAIN } from "../../API";
export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  localStorage.removeItem("cartItems");
  localStorage.removeItem("shippingAddress");
  localStorage.removeItem("paymentMethod");
  dispatch({ type: USER_LOGOUT });
  dispatch({ type: USER_DETAILS_RESET });
  dispatch({ type: ORDER_LIST_MY_RESET });
  dispatch({ type: USER_LIST_RESET });
  document.location.href = "/";
};
export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      `${AC_MAIN}api/users`,
      { name, email, password },
      config
    );

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: USER_LOGIN_REQUEST,
      });
      const { data } = await axios.post(`${AC_MAIN}api/users/login`, {
        email,
        password,
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      if (data.isAdmin) {
        dispatch({ type: USER_LOGIN_ADMIN, payload: true });
        dispatch({
          type: USER_LOGIN_SUCCESS,
          payload: data,
        });
      } else {
        dispatch({
          type: USER_LOGIN_SUCCESS,
          payload: data,
        });
      }
    } catch (error) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};
export const listUsers = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_LIST_REQUEST,
    });

    const { login } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${login.userInfo.token}`,
      },
    };

    const { data } = await axios.get(`${AC_MAIN}api/users`, config);

    dispatch({
      type: USER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: USER_LIST_FAIL,
      payload: message,
    });
  }
};
export const deleteUser = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_DELETE_REQUEST,
    });

    const { login } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${login.userInfo.token}`,
      },
    };
    await axios.delete(`${AC_MAIN}api/users/${id}`, config);

    dispatch({ type: USER_DELETE_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: USER_DELETE_FAIL,
      payload: message,
    });
  }
};

export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_DETAILS_REQUEST,
    });

    const { login } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${login.userInfo.token}`,
      },
    };

    const { data } = await axios.get(`${AC_MAIN}api/users/${id}`, config);

    dispatch({
      type: USER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: USER_DETAILS_FAIL,
      payload: message,
    });
  }
};
export const updateUser = (user) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_UPDATE_REQUEST,
    });

    const { login } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${login.userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `${AC_MAIN}api/users/${user._id}`,
      user,
      config
    );

    dispatch({ type: USER_UPDATE_SUCCESS });

    dispatch({ type: USER_DETAILS_SUCCESS, payload: data });

    dispatch({ type: USER_DETAILS_RESET });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: USER_UPDATE_FAIL,
      payload: message,
    });
  }
};
