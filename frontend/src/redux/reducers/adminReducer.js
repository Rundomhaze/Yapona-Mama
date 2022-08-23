import { FOOD_LOADED, ADD_FOOD, EDIT_FOOD, FILTER_FOODS } from '../actionTypes/adminAT';

const initialState = {
  []
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOOD_LOADED:
      if (action.payload.auth) {
        return {
          ...state,
          user: action.payload.user,
          message: action.payload.message
        };
      } else {
        return { ...state, message: action.payload.message };1
      }
    case LOGOUT_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}

export default userReducer;
