import produce from "immer";
import {
  RECIPES_LIST_MENU_SUCCESS,
  RECIPES_LIST_MENU_SHOW,
  RECIPES_LIST_MENU_HIDE,
  RECIPES_ID_MENU_SUCCESS,
  RECIPES_ID_MENU_SHOW,
  RECIPES_ID_MENU_HIDE,
} from "../../constants/userConstants";

const initialState = {
  loading: false,
  listRecipes: [],
  listById:[]
};
export const recipesReducers = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case RECIPES_LIST_MENU_SHOW:
        draft.loading = true;
        break;
      case RECIPES_LIST_MENU_SUCCESS:
        draft.listRecipes = action.payload;
        break;
      case RECIPES_LIST_MENU_HIDE:
        draft.loading = false;
        break;

      case RECIPES_ID_MENU_SHOW:
        draft.loading = true;
        break;
      case RECIPES_ID_MENU_SUCCESS:
        draft.listById = action.payload;
        break;
      case RECIPES_ID_MENU_HIDE:
        draft.loading = false;
        break;
      default:
        return state;
    }
  });
