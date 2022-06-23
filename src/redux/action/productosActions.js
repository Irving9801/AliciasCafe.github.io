import axios from "axios";
import {
  PRODUCT_LIST_MENU_SUCCESS,
  PRODUCT_LIST_MENU_SHOW,
  PRODUCT_LIST_MENU_HIDE,
} from "../../constants/userConstants";
import { AC_MAIN } from "../../API";
export const listMenu = () => async (dispatch) => {
  dispatch({
    type: PRODUCT_LIST_MENU_SHOW,
  });
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(`${AC_MAIN}api/menu`, config);
    dispatch({
      type: PRODUCT_LIST_MENU_SUCCESS,
      payload: data,
    });

    localStorage.setItem("listMenu", JSON.stringify(data));
  } catch (error) {
    dispatch({
      // type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  } finally {
    dispatch({
      type: PRODUCT_LIST_MENU_HIDE,
    });
  }
};

export const createMenu = (payload) => async (dispatch) => {
  dispatch({
    type: PRODUCT_LIST_MENU_SHOW,
  });
  console.log(payload);
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTFiMDU4Mjg2MGU2NDk5ZWNiODFmNiIsImlhdCI6MTY1NTUyODc2MCwiZXhwIjoxNjU4MTIwNzYwfQ.v_ad0P6XT55g5466U08SLxFGcuPZ7RjipATcq1CGikg",
      },
    };

    const { data } = await axios.post(`${AC_MAIN}api/menu`, payload, config);
    dispatch({
      type: PRODUCT_LIST_MENU_SUCCESS,
      payload: data,
    });

    localStorage.setItem("listMenu", JSON.stringify(data));
  } catch (error) {
    dispatch({
      // type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  } finally {
    dispatch({
      type: PRODUCT_LIST_MENU_HIDE,
    });
  }
};
