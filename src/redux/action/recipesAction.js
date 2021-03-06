import axios from "axios";
import {
  RECIPES_LIST_MENU_SUCCESS,
  RECIPES_LIST_MENU_SHOW,
  RECIPES_LIST_MENU_HIDE,
  RECIPES_ID_MENU_SUCCESS,
  RECIPES_ID_MENU_SHOW,
  RECIPES_ID_MENU_HIDE,
} from "../../constants/userConstants";
import { AC_MAIN } from "../../API";
import { toast } from "react-toastify";

export const listRecipes = () => async (dispatch) => {
  dispatch({
    type: RECIPES_LIST_MENU_SHOW,
  });
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(`${AC_MAIN}api/recipes`, config);

    dispatch({
      type: RECIPES_LIST_MENU_SUCCESS,
      payload: data,
    });

    localStorage.setItem("listRecipes", JSON.stringify(data));
  } catch (error) {
    console.error(error);
    // dispatch({
    //   // type: USER_REGISTER_FAIL,
    //   payload:
    //     error.response && error.response.data.message
    //       ? error.response.data.message
    //       : error.message,
    // });
    toast.warn("Warning Notification !", {
      position: toast.POSITION.BOTTOM_LEFT,
    });
  } finally {
    dispatch({
      type: RECIPES_LIST_MENU_HIDE,
    });
  }
};

export const getRecipesById = (id) => async (dispatch) => {
  dispatch({
    type: RECIPES_ID_MENU_SHOW,
  });
  try {
    const config = {
      headers: {
        // "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(`${AC_MAIN}api/recipes/${id}`, config);
    dispatch({
      type: RECIPES_ID_MENU_SUCCESS,
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
      type: RECIPES_ID_MENU_HIDE,
    });
  }
};

export const deleteRecipes = (id) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTFiMDU4Mjg2MGU2NDk5ZWNiODFmNiIsImlhdCI6MTY1NTUyODc2MCwiZXhwIjoxNjU4MTIwNzYwfQ.v_ad0P6XT55g5466U08SLxFGcuPZ7RjipATcq1CGikg",
      },
    };
    const { data, status } = await axios.delete(
      `${AC_MAIN}api/recipes/${id}`,
      config
    );
    if (status === 200) {
      toast.success(data.message || "Receta eliminado correctamente");
    }
  } catch (error) {
    toast.error(
      error.response.data.message || "Ha ocurrido un error al eliminar receta"
    );
  }
};
export const deleteMenu = (id) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTFiMDU4Mjg2MGU2NDk5ZWNiODFmNiIsImlhdCI6MTY1NTUyODc2MCwiZXhwIjoxNjU4MTIwNzYwfQ.v_ad0P6XT55g5466U08SLxFGcuPZ7RjipATcq1CGikg",
      },
    };
    const { data, status } = await axios.delete(
      `${AC_MAIN}api/menu/${id}`,
      config
    );
    if (status === 200) {
      toast.success(data.message || "Menu eliminado correctamente");
    }
  } catch (error) {
    toast.error(
      error.response.data.message || "Ha ocurrido un error al eliminar menu"
    );
  }
};
export const createRecipe = (payload) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTFiMDU4Mjg2MGU2NDk5ZWNiODFmNiIsImlhdCI6MTY1NTUyODc2MCwiZXhwIjoxNjU4MTIwNzYwfQ.v_ad0P6XT55g5466U08SLxFGcuPZ7RjipATcq1CGikg",
      },
    };

    const { data } = await axios.post(`${AC_MAIN}api/recipes`, payload, config);

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
  }
};

export const updateMenu = (payload, id) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTFiMDU4Mjg2MGU2NDk5ZWNiODFmNiIsImlhdCI6MTY1NTUyODc2MCwiZXhwIjoxNjU4MTIwNzYwfQ.v_ad0P6XT55g5466U08SLxFGcuPZ7RjipATcq1CGikg",
      },
    };

    const { data, status } = await axios.put(
      `${AC_MAIN}api/menu/${id}`,
      payload,
      config
    );

    if (status === 200) {
      toast.success(data.message || "Menu actualizado correctamente!");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  } catch (error) {
    dispatch({
      // type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
