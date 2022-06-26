import produce from "immer";
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
} from "../../constants/userConstants";

const initialState = {
  loading: false,
  listMenu: [],
  listProducts: [],
  listProducts: false,
  listProById: [],

  getLoadMenu: false,
  getMenuById: [],
};
export const productosReducers = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case PRODUCT_LIST_MENU_SHOW:
        draft.loading = true;
        break;
      case PRODUCT_LIST_MENU_SUCCESS:
        draft.listMenu = action.payload;
        break;
      case PRODUCT_LIST_MENU_HIDE:
        draft.loading = false;
        break;
      case PRODUCT_LIST_SHOW:
        draft.loadingList = true;
        break;
      case PRODUCT_LIST_SUCCESS:
        draft.listProducts = action.payload;
        break;
      case PRODUCT_LIST_HIDE:
        draft.c = false;
        break;

      case PRODUCTS_ID_SHOW:
        draft.loading = true;
        break;
      case PRODUCTS_ID_SUCCESS:
        draft.listProById = action.payload;
        break;
      case PRODUCTS_ID_HIDE:
        draft.loading = false;
        break;
      case GET_MENU_ID_SHOW:
        draft.getLoadMenu = true;
        break;
      case GET_MENU_ID_SUCCESS:
        draft.getMenuById = action.payload;
        break;
      case GET_MENU_ID_HIDE:
        draft.getLoadMenu = false;
        break;
      default:
        return state;
    }
  });
