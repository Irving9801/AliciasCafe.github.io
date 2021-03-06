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
  DELETE_PRODUCT_SHOW,
  DELETE_PRODUCT_HIDE,
} from "../../constants/userConstants";

const initialState = {
  loadMenuList: false,
  listMenu: [],
  listProducts: [],
  listProById: {},

  getLoadMenu: false,
  getMenuById: [],

  deleteLoadProd: false,
};
export const productosReducers = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case PRODUCT_LIST_MENU_SHOW:
        draft.loadMenuList = true;
        break;
      case PRODUCT_LIST_MENU_SUCCESS:
        draft.listMenu = action.payload;
        break;
      case PRODUCT_LIST_MENU_HIDE:
        draft.loadMenuList = false;
        break;
      case PRODUCT_LIST_SHOW:
        draft.loadingList = true;
        break;
      case PRODUCT_LIST_SUCCESS:
        draft.listProducts = action.payload;
        break;
      case PRODUCT_LIST_HIDE:
        draft.loadingList = false;
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

      case DELETE_PRODUCT_SHOW:
        draft.deleteLoadProd = true;
        break;
      case DELETE_PRODUCT_HIDE:
        draft.deleteLoadProd = false;
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
