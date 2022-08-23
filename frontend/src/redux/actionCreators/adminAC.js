import actionType from '../actionTypes/adminAT';

const action = {
  loadFoods: (data) => ({ type: actionType.FOOD_LOADED, payload: data }),
  addFood: (task) => ({ type: actionType.ADD_FOOD, payload: task }),
  editFood: (onefood) => ({ type: actionType.EDIT_FOOD, payload: onefood }),
  // filterTasks: (status) => ({ type: actionType.FILTER_FOODS, payload: status })
};

export default action;
