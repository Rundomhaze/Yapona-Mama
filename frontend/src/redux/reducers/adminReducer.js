import { actionType } from '../actionTypes/adminAT';

const initialState = {
  food: [],
  filterfood: []
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FOOD_LOADED:
      return {
        ...state, food: action.payload, filterfood: action.payload
      };
    case actionType.ADD_FOOD:
      return {
        ...state, food: [...state.food, action.payload], filterfood: [...state.filterfood, action.payload]
      };
    case actionType.DELETE_FOOD:
      const delElId = action.payload.id;
      const newArr = state.food.filter((el) => el.id !== delElId);
      return {
        ...state, food: newArr, filterfood: newArr
      };
    default:
      return state;
  }
};

export default adminReducer;
