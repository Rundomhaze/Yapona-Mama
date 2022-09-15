import { actionType } from '../actionTypes/adminAT';

const actionCreator = {
  loadFoods: (data) => ({ type: actionType.FOOD_LOADED_ADMIN, payload: data }),
  addFood: (objFood) => ({ type: actionType.ADD_FOOD_ADMIN, payload: objFood }),
  editFood: (onefood) => ({ type: actionType.EDIT_FOOD_ADMIN, payload: onefood }),
  deleteFood: (id) => ({ type: actionType.DELETE_FOOD_ADMIN, payload: id })


  // filterTasks: (status) => ({ type: actionType.FILTER_FOODS, payload: status })
};

export default actionCreator;
