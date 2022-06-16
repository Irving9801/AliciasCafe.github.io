import axios from "axios";
import {
  PRODUCT_LIST_MENU_SUCCESS,
  PRODUCT_LIST_MENU_SHOW,
  PRODUCT_LIST_MENU_HIDE,
} from "../../constants/userConstants";
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

    const { data } = await axios.get(
      "https://alicias-cafe.herokuapp.com/api/menu",
      config
    );
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
