import { actionType } from '../actionTypes/adminAT';

const actionCreator = {
  loadFoods: (data) => ({ type: actionType.FOOD_LOADED, payload: data }),
  addFood: (objFood) => ({ type: actionType.ADD_FOOD, payload: objFood }),
  editFood: (onefood) => ({ type: actionType.EDIT_FOOD, payload: onefood }),
  // filterTasks: (status) => ({ type: actionType.FILTER_FOODS, payload: status })
};

export default actionCreator;
