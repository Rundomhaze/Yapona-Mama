import { REG_USER } from '../actionTypes/userAT';
import { LOGOUT_USER } from '../actionTypes/logoutAT';

const userReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case REG_USER: 
      return {...state, user: action.payload};
    case LOGOUT_USER: 
      return {...state, user: action.payload};
    default:
      return state;
  }
}

export default userReducer;

