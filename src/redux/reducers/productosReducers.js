import produce from "immer";
import {
  PRODUCT_LIST_MENU_SUCCESS,
  PRODUCT_LIST_MENU_SHOW,
  PRODUCT_LIST_MENU_HIDE,
} from "../../constants/userConstants";

const initialState = {
  loading: false,
  listMenu: [],
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
      default:
        return state;
    }
  });
