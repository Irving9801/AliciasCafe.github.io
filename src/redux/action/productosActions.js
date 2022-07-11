import axios from "axios";
import {
  PRODUCT_LIST_MENU_SUCCESS,
  PRODUCT_LIST_MENU_SHOW,
  PRODUCT_LIST_MENU_HIDE,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_SHOW,
  PRODUCT_LIST_HIDE,
  PRODUCTS_ID_SUCCESS,
  PRODUCTS_ID_SHOW,
  PRODUCTS_ID_HIDE,
  GET_MENU_ID_SUCCESS,
  GET_MENU_ID_SHOW,
  GET_MENU_ID_HIDE,
  DELETE_PRODUCT_SHOW,
  DELETE_PRODUCT_HIDE,
} from "../../constants/userConstants";
import { AC_MAIN } from "../../API";
import { toast } from "react-toastify";
import { message } from "antd";
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

export const createMenu = (payload) => async (dispatch,getState) => {
  dispatch({
    type: PRODUCT_LIST_MENU_SHOW,
  });

  try {
    const { login } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${login.userInfo.token}`,
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

export const listProducts = () => async (dispatch) => {
  dispatch({
    type: PRODUCT_LIST_SHOW,
  });
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(`${AC_MAIN}api/produts`, config);
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });

    localStorage.setItem("listMenu", JSON.stringify(data));
  } catch (error) {
    dispatch({
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  } finally {
    dispatch({
      type: PRODUCT_LIST_HIDE,
    });
  }
};

export const getProductsById = (id) => async (dispatch) => {
  dispatch({
    type: PRODUCTS_ID_SHOW,
  });
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(`${AC_MAIN}api/produts/${id}`, config);
    dispatch({
      type: PRODUCTS_ID_SUCCESS,
      payload: data,
    });

    localStorage.setItem("listById", JSON.stringify(data));
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
      type: PRODUCTS_ID_HIDE,
    });
  }
};

export const getMenuById = (id) => async (dispatch) => {
  dispatch({
    type: GET_MENU_ID_SHOW,
  });
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(`${AC_MAIN}api/menu/${id}`, config);
    dispatch({
      type: GET_MENU_ID_SUCCESS,
      payload: data,
    });

    localStorage.setItem("listById", JSON.stringify(data));
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
      type: GET_MENU_ID_HIDE,
    });
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  dispatch({ type: DELETE_PRODUCT_SHOW });
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTFiMDU4Mjg2MGU2NDk5ZWNiODFmNiIsImlhdCI6MTY1NTUyODc2MCwiZXhwIjoxNjU4MTIwNzYwfQ.v_ad0P6XT55g5466U08SLxFGcuPZ7RjipATcq1CGikg",
      },
    };
    const { data, status } = await axios.delete(
      `${AC_MAIN}api/produts/${id}`,
      config
    );
    if (status === 200) {
      toast.success(data.message || "Producto eliminado correctamente");
    }
  } catch (error) {
    toast.error(
      error.response.data.message || "Ha ocurrido un error al eliminar producto"
    );
  } finally {
    dispatch({ type: DELETE_PRODUCT_HIDE });
  }
};

export const createProduct = (payload) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTFiMDU4Mjg2MGU2NDk5ZWNiODFmNiIsImlhdCI6MTY1NTUyODc2MCwiZXhwIjoxNjU4MTIwNzYwfQ.v_ad0P6XT55g5466U08SLxFGcuPZ7RjipATcq1CGikg",
      },
    };

    const { data, status } = await axios.post(
      `${AC_MAIN}api/produts`,
      payload,
      config
    );

    if (status === 200) {
      toast.success(data.message || "Producto creado correctamente");
    }
  } catch (error) {
    toast.error(error.message || "El producto no se ha creado correctamente");
  }
};

export const updateProducto = (payload, id) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTFiMDU4Mjg2MGU2NDk5ZWNiODFmNiIsImlhdCI6MTY1NTUyODc2MCwiZXhwIjoxNjU4MTIwNzYwfQ.v_ad0P6XT55g5466U08SLxFGcuPZ7RjipATcq1CGikg",
      },
    };
    console.log(payload, ":OAOA");
    const { data, status } = await axios.put(
      `${AC_MAIN}api/produts/${id}`,
      payload,
      config
    );

    if (status === 200) {
      toast.success(data.message || "Producto actualizado correctamente");
    }
  } catch (error) {
    toast.error(
      error.message || "El producto no se ha podido actualizar correctamente"
    );
  }
};
