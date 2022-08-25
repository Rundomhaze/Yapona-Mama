import { actionType } from '../actionTypes/adminAT';

const initialState = {
  food: [],
  filterfood: [],
  types: null
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FOOD_LOADED_ADMIN:
      return {
        ...state, food: action.payload, filterfood: action.payload.allCards, types: action.payload.types
      };
    case actionType.ADD_FOOD_ADMIN:
      return {
        ...state, food: [...state.food, action.payload], filterfood: [...state.filterfood, action.payload]
      };
    case actionType.DELETE_FOOD_ADMIN:
      const delElId = action.payload.id;
      const newArr = state.filterfood.filter((el) => el.id !== Number(delElId));
      return {
        ...state, food: newArr, filterfood: newArr
      };
    default:
      return state;
  }
};

export default adminReducer;
